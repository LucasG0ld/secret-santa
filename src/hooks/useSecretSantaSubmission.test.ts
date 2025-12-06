import { renderHook, act } from '@testing-library/react';
import { useSecretSantaSubmission } from './useSecretSantaSubmission';

// Mock fetch
global.fetch = jest.fn();

describe('useSecretSantaSubmission', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should submit data successfully', async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: async () => ({ message: 'Success' }),
        });

        const { result } = renderHook(() => useSecretSantaSubmission());
        const mockData: any = { eventName: 'Test Event' };

        await act(async () => {
            await result.current.handleSubmit(mockData);
        });

        expect(global.fetch).toHaveBeenCalledWith('/api/send-santa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mockData),
        });
    });

    it('should throw error on failure', async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            json: async () => ({ message: 'Error occurred' }),
        });

        const { result } = renderHook(() => useSecretSantaSubmission());
        const mockData: any = { eventName: 'Test Event' };

        await expect(result.current.handleSubmit(mockData)).rejects.toThrow('Error occurred');
    });
});
