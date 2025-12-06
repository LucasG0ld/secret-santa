import { render, screen, fireEvent } from '@testing-library/react';
import ParticipantRow from './ParticipantRow';

describe('ParticipantRow', () => {
    const mockParticipant = {
        id: '1',
        name: 'Alice',
        email: 'alice@example.com',
    };
    const mockUpdate = jest.fn();
    const mockRemove = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders inputs with correct values', () => {
        render(
            <ParticipantRow
                participant={mockParticipant}
                index={0}
                onUpdate={mockUpdate}
                onRemove={mockRemove}
                canRemove={true}
            />
        );

        expect(screen.getByPlaceholderText('Name')).toHaveValue('Alice');
        expect(screen.getByPlaceholderText('Email address')).toHaveValue('alice@example.com');
    });

    it('calls onUpdate when name changes', () => {
        render(
            <ParticipantRow
                participant={mockParticipant}
                index={0}
                onUpdate={mockUpdate}
                onRemove={mockRemove}
                canRemove={true}
            />
        );

        const nameInput = screen.getByPlaceholderText('Name');
        fireEvent.change(nameInput, { target: { value: 'Bob' } });

        expect(mockUpdate).toHaveBeenCalledWith('1', 'name', 'Bob');
    });

    it('calls onUpdate when email changes', () => {
        render(
            <ParticipantRow
                participant={mockParticipant}
                index={0}
                onUpdate={mockUpdate}
                onRemove={mockRemove}
                canRemove={true}
            />
        );

        const emailInput = screen.getByPlaceholderText('Email address');
        fireEvent.change(emailInput, { target: { value: 'bob@example.com' } });

        expect(mockUpdate).toHaveBeenCalledWith('1', 'email', 'bob@example.com');
    });

    it('calls onRemove when delete button is clicked', () => {
        render(
            <ParticipantRow
                participant={mockParticipant}
                index={0}
                onUpdate={mockUpdate}
                onRemove={mockRemove}
                canRemove={true}
            />
        );

        const deleteButton = screen.getByRole('button', { name: /Remove participant 1/i });
        fireEvent.click(deleteButton);

        expect(mockRemove).toHaveBeenCalledWith('1');
    });

    it('does not render delete button when canRemove is false', () => {
        render(
            <ParticipantRow
                participant={mockParticipant}
                index={0}
                onUpdate={mockUpdate}
                onRemove={mockRemove}
                canRemove={false}
            />
        );

        const deleteButton = screen.queryByRole('button', { name: /Remove participant 1/i });
        expect(deleteButton).not.toBeInTheDocument();
    });
});
