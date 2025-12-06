import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { useTranslation } from '../../../i18n/server';
import { renderSecretSantaEmail } from './renderEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

interface Participant {
    id: string;
    name: string;
    email: string;
}

const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Fisher-Yates shuffle algorithm
const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export async function POST(request: Request) {
    try {
        // Initialize i18n (defaulting to French as requested)
        const { t } = await useTranslation('fr');

        const body = await request.json();
        const { participants, organizerEmail, eventName, eventDate, budget } = body;

        const errors: string[] = [];

        if (!eventName || eventName.trim() === '') {
            errors.push(t('api_error_event_name_required', { defaultValue: 'Event Name is required' }));
        }

        if (!eventDate || eventDate.trim() === '') {
            errors.push(t('api_error_event_date_required', { defaultValue: 'Exchange Date is required' }));
        }

        if (!participants || !Array.isArray(participants)) {
            errors.push(t('api_error_participants_required', { defaultValue: 'Participants list is required' }));
        } else if (participants.length < 3) {
            errors.push(t('api_error_min_participants', { defaultValue: 'Minimum 3 participants required' }));
        } else {
            participants.forEach((p: Participant, index: number) => {
                if (!p.name || p.name.trim() === '') {
                    errors.push(t('api_error_participant_name_missing', { count: index + 1, defaultValue: `Participant ${index + 1} name is required` }));
                }
                if (!p.email || !isValidEmail(p.email)) {
                    errors.push(t('api_error_participant_email_invalid', { count: index + 1, defaultValue: `Participant ${index + 1} email is invalid` }));
                }
            });
        }

        if (organizerEmail && !isValidEmail(organizerEmail)) {
            errors.push(t('api_error_organizer_email_invalid', { defaultValue: 'Organizer email is invalid' }));
        }

        if (errors.length > 0) {
            return NextResponse.json(
                { message: t('api_error_invalid_data', { defaultValue: 'Invalid data' }), errors },
                { status: 400 }
            );
        }

        // Shuffle participants
        const shuffled = shuffleArray(participants as Participant[]);
        const pairs = shuffled.map((giver, index) => {
            const receiver = shuffled[(index + 1) % shuffled.length];
            return {
                giver,
                receiver,
            };
        });

        // Participants list for the email
        const participantsList = participants.map((p: Participant) => p.name);

        // Render emails in parallel
        const batchEmails = await Promise.all(pairs.map(async (pair) => {
            const emailHtml = await renderSecretSantaEmail(
                pair.giver.name,
                pair.receiver.name,
                eventName,
                eventDate,
                budget,
                participantsList,
                t
            );

            return {
                from: 'Secret Santa <no-reply@secret-santa.lucasgolder.fr>',
                to: pair.giver.email,
                subject: t('email_subject_participant', { eventName }),
                html: emailHtml,
            };
        }));

        let emailResults: any[] = [];
        try {
            const { data, error } = await resend.batch.send(batchEmails);

            if (error) {
                console.error('Batch email error:', error);
                // If batch fails entirely, we consider all failed
                emailResults = batchEmails.map(e => ({ email: e.to, status: 'failed', error }));
            } else if (data && data.data) {
                // Map results back to emails (assuming order is preserved)
                emailResults = data.data.map((result: any, index: number) => ({
                    email: batchEmails[index].to,
                    status: result.id ? 'sent' : 'failed',
                    id: result.id,
                    error: result.error
                }));
            }
        } catch (err) {
            console.error('Exception sending batch emails:', err);
            emailResults = batchEmails.map(e => ({ email: e.to, status: 'failed', error: err }));
        }

        // Send summary to organizer
        if (organizerEmail) {
            const successCount = emailResults.filter(r => r.status === 'sent').length;
            const failCount = emailResults.filter(r => r.status === 'failed').length;

            await resend.emails.send({
                from: 'Secret Santa <no-reply@secret-santa.lucasgolder.fr>',
                to: organizerEmail,
                subject: t('email_subject_organizer', { eventName }),
                html: `
                <h1>${t('email_organizer_title', { eventName })}</h1>
                <p>${t('email_organizer_sent', { count: successCount })}</p>
                <p>${t('email_organizer_failed', { count: failCount })}</p>
                ${failCount > 0 ? `<p>${t('email_organizer_failed_msg')}</p>` : `<p>${t('email_organizer_success_msg')}</p>`}
            `
            });
        }

        return NextResponse.json(
            { message: t('api_success_message', { defaultValue: 'Tirage effectué avec succès' }), success: true, results: emailResults },
            { status: 200 }
        );
    } catch (error) {
        console.error('Internal Server Error:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
