import { render, screen, fireEvent } from '@testing-library/react';
import SecretSantaPage from './page';
import { useSecretSantaSubmission } from '../../hooks/useSecretSantaSubmission';

// Mock hook
jest.mock('../../hooks/useSecretSantaSubmission');

// Mock SantaForm
jest.mock('../../components/organisms/SantaForm', () => {
    return function MockSantaForm({ onSubmit }: any) {
        return (
            <button onClick={() => onSubmit({ eventName: 'Test' })}>
                Submit Form
            </button>
        );
    };
});

describe('SecretSantaPage', () => {
    const mockHandleSubmit = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        (useSecretSantaSubmission as jest.Mock).mockReturnValue({
            handleSubmit: mockHandleSubmit,
        });
    });

    it('renders SantaForm and passes handleSubmit', () => {
        render(<SecretSantaPage />);
        const button = screen.getByText('Submit Form');
        fireEvent.click(button);
        expect(mockHandleSubmit).toHaveBeenCalledWith({ eventName: 'Test' });
    });
});
