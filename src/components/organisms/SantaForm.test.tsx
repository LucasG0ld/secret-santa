import { render, screen, fireEvent } from '@testing-library/react';
import SantaForm from './SantaForm';
import { useSantaForm } from '../../hooks/useSantaForm';

// Mock useRouter
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

// Mock useSantaForm
jest.mock('../../hooks/useSantaForm');

describe('SantaForm', () => {
    const mockOnSubmit = jest.fn();
    const mockActions = {
        setEventName: jest.fn(),
        setEventDate: jest.fn(),
        setBudget: jest.fn(),
        setOrganizerEmail: jest.fn(),
        setIsModalOpen: jest.fn(),
        setShowSuccessModal: jest.fn(),
        addParticipant: jest.fn(),
        removeParticipant: jest.fn(),
        updateParticipant: jest.fn(),
        handleSubmit: jest.fn((e) => e.preventDefault()),
        handleConfirm: jest.fn(),
        handleCreateAnother: jest.fn(),
    };

    const defaultHookValues = {
        formData: {
            eventName: '',
            eventDate: '',
            budget: '',
            participants: [
                { id: '1', name: '', email: '' },
                { id: '2', name: '', email: '' },
                { id: '3', name: '', email: '' },
            ],
            organizerEmail: '',
        },
        uiState: {
            isModalOpen: false,
            isLoading: false,
            showSuccessModal: false,
        },
        actions: mockActions,
    };

    beforeEach(() => {
        jest.clearAllMocks();
        (useSantaForm as jest.Mock).mockReturnValue(defaultHookValues);
    });

    it('renders form fields correctly', () => {
        render(<SantaForm onSubmit={mockOnSubmit} />);

        expect(screen.getByLabelText(/Event Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Exchange Date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Budget/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Your Email Address/i)).toBeInTheDocument();
        expect(screen.getAllByPlaceholderText('Name')).toHaveLength(3);
    });

    it('calls setEventName on input change', () => {
        render(<SantaForm onSubmit={mockOnSubmit} />);
        const input = screen.getByLabelText(/Event Name/i);
        fireEvent.change(input, { target: { value: 'New Event' } });
        expect(mockActions.setEventName).toHaveBeenCalledWith('New Event');
    });

    it('calls addParticipant on button click', () => {
        render(<SantaForm onSubmit={mockOnSubmit} />);
        const button = screen.getByRole('button', { name: /Add Another Participant/i });
        fireEvent.click(button);
        expect(mockActions.addParticipant).toHaveBeenCalled();
    });

    it('calls handleSubmit on form submission', () => {
        render(<SantaForm onSubmit={mockOnSubmit} />);
        const submitButton = screen.getByRole('button', { name: /Create Event & Send Invitations/i });
        fireEvent.click(submitButton);
        expect(mockActions.handleSubmit).toHaveBeenCalled();
    });

    it('renders ConfirmationModal when isModalOpen is true', () => {
        (useSantaForm as jest.Mock).mockReturnValue({
            ...defaultHookValues,
            uiState: { ...defaultHookValues.uiState, isModalOpen: true },
        });

        render(<SantaForm onSubmit={mockOnSubmit} />);
        expect(screen.getByText('Confirm Draw?')).toBeInTheDocument();
    });

    it('renders SuccessModal when showSuccessModal is true', () => {
        (useSantaForm as jest.Mock).mockReturnValue({
            ...defaultHookValues,
            uiState: { ...defaultHookValues.uiState, showSuccessModal: true },
        });

        render(<SantaForm onSubmit={mockOnSubmit} />);
        expect(screen.getByText('Pairs Generated Successfully!')).toBeInTheDocument();
    });

    it('disables submit button when isLoading is true', () => {
        (useSantaForm as jest.Mock).mockReturnValue({
            ...defaultHookValues,
            uiState: { ...defaultHookValues.uiState, isLoading: true },
        });

        render(<SantaForm onSubmit={mockOnSubmit} />);
        const submitButton = screen.getByRole('button', { name: /Processing.../i });
        expect(submitButton).toBeDisabled();
    });
});
