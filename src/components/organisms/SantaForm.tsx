'use client';

import { Calendar, DollarSign, Mail, Plus, Send, Users } from 'lucide-react';
import ConfirmationModal from './ConfirmationModal';
import { SuccessModal } from './SuccessModal';
import ParticipantRow from '../molecules/ParticipantRow';
import { useSantaForm, SantaFormData } from '../../hooks/useSantaForm';
import { useRouter } from 'next/navigation';
import { useTranslation } from '../../i18n/client';

interface SantaFormProps {
    onSubmit: (data: SantaFormData) => Promise<void>;
}

const SantaForm = ({ onSubmit }: SantaFormProps) => {
    const router = useRouter();
    const { t } = useTranslation();
    const { formData, uiState, actions } = useSantaForm({ onSubmit });

    const {
        eventName,
        eventDate,
        budget,
        participants,
        organizerEmail,
    } = formData;

    const {
        isModalOpen,
        isLoading,
        showSuccessModal,
    } = uiState;

    const {
        setEventName,
        setEventDate,
        setBudget,
        setOrganizerEmail,
        setIsModalOpen,
        setShowSuccessModal,
        addParticipant,
        removeParticipant,
        updateParticipant,
        handleSubmit,
        handleConfirm,
        handleCreateAnother,
    } = actions;

    return (
        <section className="relative min-h-screen px-6 py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="mb-4 text-4xl md:text-5xl font-bold font-serif text-[#2F4F4F]">{t('form_title')}</h1>
                    <p className="text-lg text-[#333333]/70">
                        {t('form_subtitle')}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(47,79,79,0.12)] p-8 md:p-12">
                    {/* Event Details */}
                    <div className="mb-10">
                        <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-[#2F4F4F]">
                            <Calendar className="w-6 h-6 text-[#D24545]" />
                            {t('form_section_event_details')}
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <label htmlFor="eventName" className="block mb-2 text-[#2F4F4F] font-medium">
                                    {t('form_label_event_name')}
                                </label>
                                <input
                                    id="eventName"
                                    type="text"
                                    value={eventName}
                                    onChange={(e) => setEventName(e.target.value)}
                                    placeholder={t('form_placeholder_event_name')}
                                    className="w-full px-4 py-3 border-2 border-[#2F4F4F]/20 rounded-xl focus:border-[#D24545] focus:outline-none focus:ring-2 focus:ring-[#D24545]/20 transition-all"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="eventDate" className="block mb-2 text-[#2F4F4F] font-medium">
                                        {t('form_label_event_date')}
                                    </label>
                                    <input
                                        id="eventDate"
                                        type="date"
                                        value={eventDate}
                                        onChange={(e) => setEventDate(e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-[#2F4F4F]/20 rounded-xl focus:border-[#D24545] focus:outline-none focus:ring-2 focus:ring-[#D24545]/20 transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="budget" className="block mb-2 flex items-center gap-2 text-[#2F4F4F] font-medium">
                                        <DollarSign className="w-4 h-4" />
                                        {t('form_label_budget')}
                                    </label>
                                    <input
                                        id="budget"
                                        type="text"
                                        value={budget}
                                        onChange={(e) => setBudget(e.target.value)}
                                        placeholder={t('form_placeholder_budget')}
                                        className="w-full px-4 py-3 border-2 border-[#2F4F4F]/20 rounded-xl focus:border-[#D24545] focus:outline-none focus:ring-2 focus:ring-[#D24545]/20 transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Organizer Email */}
                    <div className="mb-10">
                        <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-[#2F4F4F]">
                            <Mail className="w-6 h-6 text-[#D24545]" />
                            {t('form_section_organizer')}
                        </h3>

                        <div>
                            <label htmlFor="organizerEmail" className="block mb-2 text-[#2F4F4F] font-medium">
                                {t('form_label_organizer_email')}
                            </label>
                            <input
                                id="organizerEmail"
                                type="email"
                                value={organizerEmail}
                                onChange={(e) => setOrganizerEmail(e.target.value)}
                                placeholder={t('form_placeholder_organizer_email')}
                                className="w-full px-4 py-3 border-2 border-[#2F4F4F]/20 rounded-xl focus:border-[#D24545] focus:outline-none focus:ring-2 focus:ring-[#D24545]/20 transition-all"
                                required
                            />
                            <p className="mt-2 text-sm text-[#333333]/60">
                                {t('form_helper_organizer_email')}
                            </p>
                        </div>
                    </div>

                    {/* Participants */}
                    <div className="mb-10">
                        <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-[#2F4F4F]">
                            <Users className="w-6 h-6 text-[#D24545]" />
                            {t('form_section_participants')}
                        </h3>

                        <div className="space-y-4">
                            {participants.map((participant, index) => (
                                <ParticipantRow
                                    key={participant.id}
                                    participant={participant}
                                    index={index}
                                    onUpdate={updateParticipant}
                                    onRemove={removeParticipant}
                                    canRemove={participants.length > 3}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={addParticipant}
                            className="mt-6 px-6 py-3 border-2 border-dashed border-[#2F4F4F]/30 rounded-xl text-[#2F4F4F] hover:border-[#D24545] hover:text-[#D24545] hover:bg-[#D24545]/5 transition-all flex items-center gap-2 w-full justify-center font-medium"
                        >
                            <Plus className="w-5 h-5" />
                            {t('form_button_add_participant')}
                        </button>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6 border-t border-[#2F4F4F]/10">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full px-8 py-4 bg-[#D24545] text-white rounded-xl hover:bg-[#D24545]/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                t('form_button_submit_processing')
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    {t('form_button_submit')}
                                </>
                            )}
                        </button>

                        <p className="mt-4 text-center text-sm text-[#333333]/60">
                            {t('form_disclaimer')}
                        </p>
                    </div>
                </form>

                <ConfirmationModal
                    isOpen={isModalOpen}
                    onConfirm={handleConfirm}
                    onCancel={() => setIsModalOpen(false)}
                />

                <SuccessModal
                    isOpen={showSuccessModal}
                    onClose={() => router.push('/')}
                    onCreateAnother={handleCreateAnother}
                />
            </div>
        </section>
    );
};

export default SantaForm;
