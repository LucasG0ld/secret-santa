'use client';

import React from 'react';
import { X } from 'lucide-react';
import { useTranslation } from '../../i18n/client';

interface Participant {
    id: string;
    name: string;
    email: string;
}

interface ParticipantRowProps {
    participant: Participant;
    index: number;
    onUpdate: (id: string, field: 'name' | 'email', value: string) => void;
    onRemove: (id: string) => void;
    canRemove: boolean;
}

const ParticipantRow = ({
    participant,
    index,
    onUpdate,
    onRemove,
    canRemove,
}: ParticipantRowProps) => {
    const { t } = useTranslation();

    return (
        <div className="flex gap-4 items-start group">
            <div className="flex-shrink-0 w-8 h-12 flex items-center justify-center text-[#2F4F4F]/50 font-medium">
                {index + 1}
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    value={participant.name}
                    onChange={(e) => onUpdate(participant.id, 'name', e.target.value)}
                    placeholder={t('form_placeholder_participant_name')}
                    className="px-4 py-3 border-2 border-[#2F4F4F]/20 rounded-xl focus:border-[#D24545] focus:outline-none focus:ring-2 focus:ring-[#D24545]/20 transition-all w-full"
                    required
                    aria-label={`Participant ${index + 1} name`}
                />
                <input
                    type="email"
                    value={participant.email}
                    onChange={(e) => onUpdate(participant.id, 'email', e.target.value)}
                    placeholder={t('form_placeholder_participant_email')}
                    className="px-4 py-3 border-2 border-[#2F4F4F]/20 rounded-xl focus:border-[#D24545] focus:outline-none focus:ring-2 focus:ring-[#D24545]/20 transition-all w-full"
                    required
                    aria-label={`Participant ${index + 1} email`}
                />
            </div>

            <div className="w-10 h-12 flex items-center justify-center">
                {canRemove && (
                    <button
                        type="button"
                        onClick={() => onRemove(participant.id)}
                        className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#D24545] hover:bg-[#D24545]/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                        aria-label={`Remove participant ${index + 1}`}
                    >
                        <X className="w-5 h-5" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default ParticipantRow;
