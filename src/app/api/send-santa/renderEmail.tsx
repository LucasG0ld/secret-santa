import { render } from '@react-email/render';
import OfficeSecretSantaEmail from '../../../emails/OfficeSecretSantaEmail';

export async function renderSecretSantaEmail(
    giverName: string,
    receiverName: string,
    eventName: string,
    eventDate: string,
    budget: string,
    participantsList: string[],
    t: any
) {
    return await render(
        <OfficeSecretSantaEmail
            recipientName={giverName}
            assignedPersonName={receiverName}
            eventName={eventName}
            exchangeDate={eventDate}
            budget={budget || 'Non spécifié'}
            participantsList={participantsList}
            t={t}
        />
    );
}
