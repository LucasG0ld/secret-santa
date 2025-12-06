import { useState } from 'react';
import { toast } from 'sonner';

export interface Participant {
    id: string;
    name: string;
    email: string;
}

export interface SantaFormData {
    eventName: string;
    eventDate: string;
    budget: string;
    participants: Participant[];
    organizerEmail: string;
}

interface UseSantaFormProps {
    onSubmit: (data: SantaFormData) => Promise<void>;
}

export const useSantaForm = ({ onSubmit }: UseSantaFormProps) => {
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [budget, setBudget] = useState("");
    const [participants, setParticipants] = useState<Participant[]>([
        { id: '1', name: '', email: '' },
        { id: '2', name: '', email: '' },
        { id: '3', name: '', email: '' },
    ]);
    const [organizerEmail, setOrganizerEmail] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const addParticipant = () => {
        const newId = Math.random().toString(36).substr(2, 9);
        setParticipants([...participants, { id: newId, name: '', email: '' }]);
    };

    const removeParticipant = (id: string) => {
        if (participants.length > 3) {
            setParticipants(participants.filter((p) => p.id !== id));
        }
    };

    const updateParticipant = (id: string, field: 'name' | 'email', value: string) => {
        setParticipants(
            participants.map((p) => (p.id === id ? { ...p, [field]: value } : p))
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleConfirm = async () => {
        setIsLoading(true);
        try {
            await onSubmit({
                eventName,
                eventDate,
                budget,
                participants,
                organizerEmail
            });
            setShowSuccessModal(true);
        } catch (error) {
            console.error('Error:', error);
            toast.error('Une erreur est survenue lors du tirage au sort.');
        } finally {
            setIsLoading(false);
            setIsModalOpen(false);
        }
    };

    const handleCreateAnother = () => {
        setShowSuccessModal(false);
        setParticipants([
            { id: '1', name: '', email: '' },
            { id: '2', name: '', email: '' },
            { id: '3', name: '', email: '' },
        ]);
        setOrganizerEmail('');
        setEventName('');
        setEventDate('');
        setBudget('');
    };

    return {
        formData: {
            eventName,
            eventDate,
            budget,
            participants,
            organizerEmail,
        },
        uiState: {
            isModalOpen,
            isLoading,
            showSuccessModal,
        },
        actions: {
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
        }
    };
};
