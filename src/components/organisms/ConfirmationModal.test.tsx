import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmationModal from './ConfirmationModal';

describe('ConfirmationModal', () => {
    it('does not render when isOpen is false', () => {
        render(
            <ConfirmationModal
                isOpen={false}
                onConfirm={() => { }}
                onCancel={() => { }}
            />
        );
        expect(screen.queryByText('Confirmer le tirage ?')).not.toBeInTheDocument();
    });

    it('renders when isOpen is true', () => {
        render(
            <ConfirmationModal
                isOpen={true}
                onConfirm={() => { }}
                onCancel={() => { }}
            />
        );
        expect(screen.getByText('Confirmer le tirage ?')).toBeInTheDocument();
        expect(screen.getByText(/Vous êtes sur le point de lancer le tirage/)).toBeInTheDocument();
    });

    it('calls onConfirm when confirm button is clicked', () => {
        const handleConfirm = jest.fn();
        render(
            <ConfirmationModal
                isOpen={true}
                onConfirm={handleConfirm}
                onCancel={() => { }}
            />
        );
        fireEvent.click(screen.getByRole('button', { name: /Confirmer et envoyer/i }));
        expect(handleConfirm).toHaveBeenCalledTimes(1);
    });

    it('calls onCancel when cancel button is clicked', () => {
        const handleCancel = jest.fn();
        render(
            <ConfirmationModal
                isOpen={true}
                onConfirm={() => { }}
                onCancel={handleCancel}
            />
        );
        fireEvent.click(screen.getByRole('button', { name: /Annuler/i }));
        expect(handleCancel).toHaveBeenCalledTimes(1);
    });
});
