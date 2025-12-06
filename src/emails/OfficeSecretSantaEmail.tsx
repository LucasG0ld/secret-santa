import * as React from 'react';
import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Heading,
    Preview,
    Row,
    Column,
} from '@react-email/components';
import { TFunction } from 'i18next';

interface OfficeSecretSantaEmailProps {
    recipientName: string;
    assignedPersonName: string;
    eventName: string;
    exchangeDate: string;
    budget: string;
    participantsList: string[];
    t: TFunction;
}

export default function OfficeSecretSantaEmail({
    recipientName,
    assignedPersonName,
    eventName,
    exchangeDate,
    budget,
    participantsList,
    t,
}: OfficeSecretSantaEmailProps) {
    const previewText = t('email_preview_text', { eventName });

    // Garland lights data
    const lights = [
        { color: '#D24545', size: 10 },
        { color: '#FFD700', size: 8 },
        { color: '#2F4F4F', size: 11 },
        { color: '#D24545', size: 9 },
        { color: '#FFD700', size: 10 },
        { color: '#2F4F4F', size: 8 },
        { color: '#D24545', size: 11 },
        { color: '#FFD700', size: 9 },
        { color: '#2F4F4F', size: 10 },
        { color: '#D24545', size: 8 },
        { color: '#FFD700', size: 11 },
        { color: '#2F4F4F', size: 9 },
        { color: '#D24545', size: 10 },
        { color: '#FFD700', size: 8 },
        { color: '#2F4F4F', size: 11 },
    ];

    const Garland = () => (
        <Section style={garlandContainer}>
            <div style={garlandLine} />
            <div style={garlandLightsContainer}>
                {lights.map((light, index) => (
                    <div
                        key={index}
                        style={{
                            width: light.size,
                            height: light.size,
                            borderRadius: '50%',
                            backgroundColor: light.color,
                            boxShadow: `0 2px 4px rgba(0, 0, 0, 0.15), 0 0 8px ${light.color}66, 0 0 12px ${light.color}33`,
                            flexShrink: 0,
                        }}
                    />
                ))}
            </div>
        </Section>
    );

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* HEADER SECTION */}
                    <Section style={header}>
                        <Garland />
                        <Heading style={mainTitle}>{t('email_title')}</Heading>
                    </Section>

                    {/* MAIN BODY SECTION */}
                    <Section style={bodySection}>
                        <Text style={greeting}>
                            {t('email_greeting_hello')} <strong>{recipientName}</strong>,
                        </Text>

                        {/* The Big Reveal Section */}
                        <Section style={revealSection}>
                            <Text style={missionText}>
                                {t('email_mission_intro')}
                            </Text>

                            <Text style={assignedName}>
                                {assignedPersonName}
                            </Text>

                            <Text style={stars}>
                                ★ ★ ★
                            </Text>
                        </Section>

                        {/* Event Details Section */}
                        <Heading as="h2" style={sectionTitle}>
                            {t('email_section_event_details')}
                        </Heading>

                        <Section style={detailsTable}>
                            <Row>
                                <Column style={detailLabel}>{t('email_label_event')}</Column>
                                <Column style={detailValue}>{eventName}</Column>
                            </Row>
                            <Row>
                                <Column style={detailLabel}>{t('email_label_date')}</Column>
                                <Column style={detailValue}>{exchangeDate}</Column>
                            </Row>
                            <Row>
                                <Column style={detailLabel}>{t('email_label_budget')}</Column>
                                <Column style={detailValue}>{budget}</Column>
                            </Row>
                        </Section>

                        {/* Participants List Section */}
                        <Section style={participantsSection}>
                            <Heading as="h2" style={{ ...sectionTitle, fontSize: '18px', marginBottom: '10px' }}>
                                {t('email_section_participants')}
                            </Heading>
                            <Text style={participantsText}>
                                {participantsList.join(', ')}
                            </Text>
                        </Section>

                        {/* Important Reminder */}
                        <Section style={reminderSection}>
                            <Text style={reminderText}>
                                <strong style={{ color: '#2F4F4F' }}>{t('email_reminder_label')}</strong> {t('email_reminder_text')}
                            </Text>
                        </Section>
                    </Section>

                    {/* FOOTER SECTION */}
                    <Section style={footer}>
                        <Text style={closingMessage}>{t('email_footer_happy_gifting')}</Text>
                        <Garland />
                        <Text style={branding}>{t('email_footer_branding')}</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

// Styles
const main: React.CSSProperties = {
    backgroundColor: '#F9F6F0',
    fontFamily: 'Inter, Helvetica, Arial, sans-serif',
    padding: '40px 0',
};

const container: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 16px rgba(47, 79, 79, 0.1)',
    maxWidth: '600px',
    margin: '0 auto',
};

const header: React.CSSProperties = {
    backgroundColor: '#F9F6F0',
    paddingTop: '30px',
    paddingBottom: '20px',
};

const mainTitle: React.CSSProperties = {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '42px',
    fontWeight: 700,
    lineHeight: '1.2',
    color: '#2F4F4F',
    textAlign: 'center' as const,
    margin: '30px 20px 0 20px',
    padding: 0,
};

const bodySection: React.CSSProperties = {
    padding: '40px 30px',
};

const greeting: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '1.6',
    color: '#333333',
    margin: '0 0 30px 0',
};

const revealSection: React.CSSProperties = {
    backgroundColor: '#F9F6F0',
    borderRadius: '8px',
    padding: '30px',
    marginBottom: '30px',
    textAlign: 'center' as const,
    border: '2px solid #2F4F4F',
};

const missionText: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '1.6',
    color: '#2F4F4F',
    margin: '0 0 15px 0',
};

const assignedName: React.CSSProperties = {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: '1.3',
    color: '#D24545',
    margin: '0',
    padding: '15px 0',
};

const stars: React.CSSProperties = {
    fontSize: '24px',
    color: '#FFD700',
    margin: '10px 0 0 0',
};

const sectionTitle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '1.4',
    color: '#2F4F4F',
    margin: '0 0 15px 0',
};

const detailsTable: React.CSSProperties = {
    marginBottom: '30px',
    width: '100%',
};

const detailLabel: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '1.6',
    color: '#2F4F4F',
    padding: '8px 0',
    width: '40%',
};

const detailValue: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '1.6',
    color: '#333333',
    padding: '8px 0',
};

const participantsSection: React.CSSProperties = {
    backgroundColor: '#F9F6F0',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
};

const participantsText: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '1.6',
    color: '#333333',
    margin: '0',
};

const reminderSection: React.CSSProperties = {
    backgroundColor: '#FFF8E1',
    borderLeft: '4px solid #FFD700',
    padding: '15px 20px',
    marginBottom: '20px',
};

const reminderText: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '1.6',
    color: '#333333',
    margin: '0',
};

const footer: React.CSSProperties = {
    backgroundColor: '#F9F6F0',
    paddingTop: '20px',
    paddingBottom: '30px',
};

const closingMessage: React.CSSProperties = {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '1.3',
    color: '#D24545',
    textAlign: 'center' as const,
    margin: '0 20px 20px 20px',
};

const branding: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '1.5',
    color: '#666666',
    textAlign: 'center' as const,
    margin: '20px 20px 0 20px',
};

// Garland Styles
const garlandContainer: React.CSSProperties = {
    width: '100%',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative' as const, // Type assertion for stricter CSS types
    margin: '0 auto',
    padding: '0 20px',
};

const garlandLine: React.CSSProperties = {
    position: 'absolute' as const,
    left: '20px',
    right: '20px',
    height: '1px',
    backgroundColor: '#333333',
    top: '50%',
    transform: 'translateY(-50%)',
};

const garlandLightsContainer: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    position: 'relative' as const,
    zIndex: 1,
};
