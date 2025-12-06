import { renderHook, act } from '@testing-library/react';
import { useSantaForm } from './useSantaForm';

// Mock toast
jest.mock('sonner', () => ({
    toast: {
        error: jest.fn(),
    },
}));

describe('useSantaForm', () => {
    const mockOnSubmit = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should initialize with default values', () => {
        const { result } = renderHook(() => useSantaForm({ onSubmit: mockOnSubmit }));

        expect(result.current.formData.eventName).toBe('');
        expect(result.current.formData.participants).toHaveLength(3);
        expect(result.current.uiState.isModalOpen).toBe(false);
    });

    it('should add a participant', () => {
        const { result } = renderHook(() => useSantaForm({ onSubmit: mockOnSubmit }));

        act(() => {
            result.current.actions.addParticipant();
        });

        expect(result.current.formData.participants).toHaveLength(4);
    });

    it('should remove a participant if more than 3', () => {
        const { result } = renderHook(() => useSantaForm({ onSubmit: mockOnSubmit }));

        act(() => {
            result.current.actions.addParticipant();
        });
        expect(result.current.formData.participants).toHaveLength(4);

        const idToRemove = result.current.formData.participants[3].id;

        act(() => {
            result.current.actions.removeParticipant(idToRemove);
        });

        expect(result.current.formData.participants).toHaveLength(3);
    });

    it('should not remove a participant if 3 or less', () => {
        const { result } = renderHook(() => useSantaForm({ onSubmit: mockOnSubmit }));
        const idToRemove = result.current.formData.participants[0].id;

        act(() => {
            result.current.actions.removeParticipant(idToRemove);
        });

        expect(result.current.formData.participants).toHaveLength(3);
    });

    it('should update participant details', () => {
        const { result } = renderHook(() => useSantaForm({ onSubmit: mockOnSubmit }));
        const idToUpdate = result.current.formData.participants[0].id;

        act(() => {
            result.current.actions.updateParticipant(idToUpdate, 'name', 'John Doe');
        });

        expect(result.current.formData.participants[0].name).toBe('John Doe');
    });

    it('should handle submission success', async () => {
        mockOnSubmit.mockResolvedValueOnce(undefined);
        const { result } = renderHook(() => useSantaForm({ onSubmit: mockOnSubmit }));

        await act(async () => {
            await result.current.actions.handleConfirm();
        });

        expect(mockOnSubmit).toHaveBeenCalled();
        expect(result.current.uiState.showSuccessModal).toBe(true);
        expect(result.current.uiState.isModalOpen).toBe(false);
    });

    it('should handle submission error', async () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
        mockOnSubmit.mockRejectedValueOnce(new Error('Submission failed'));
        const { result } = renderHook(() => useSantaForm({ onSubmit: mockOnSubmit }));

        await act(async () => {
            await result.current.actions.handleConfirm();
        });

        expect(mockOnSubmit).toHaveBeenCalled();
        expect(result.current.uiState.showSuccessModal).toBe(false);
        expect(result.current.uiState.isModalOpen).toBe(false);

        consoleSpy.mockRestore();
    });

    it('should reset form on create another', () => {
        const { result } = renderHook(() => useSantaForm({ onSubmit: mockOnSubmit }));

        act(() => {
            result.current.actions.setEventName('Test Event');
            result.current.actions.handleCreateAnother();
        });

        expect(result.current.formData.eventName).toBe('');
        expect(result.current.formData.participants).toHaveLength(3);
        expect(result.current.uiState.showSuccessModal).toBe(false);
    });
});
