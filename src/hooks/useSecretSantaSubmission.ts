import { SantaFormData } from './useSantaForm';

export function useSecretSantaSubmission() {
    const handleSubmit = async (data: SantaFormData) => {
        const response = await fetch('/api/send-santa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || 'Une erreur est survenue');
        }
    };

    return { handleSubmit };
}
