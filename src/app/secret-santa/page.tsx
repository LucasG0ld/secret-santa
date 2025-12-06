'use client';

import SantaForm from '../../components/organisms/SantaForm';
import { useSecretSantaSubmission } from '../../hooks/useSecretSantaSubmission';

export default function SecretSantaPage() {
    const { handleSubmit } = useSecretSantaSubmission();

    return <SantaForm onSubmit={handleSubmit} />;
}
