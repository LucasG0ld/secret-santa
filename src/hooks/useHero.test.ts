import { renderHook, act } from '@testing-library/react';
import { useHero } from './useHero';
import { useRouter } from 'next/navigation';

// Mock useRouter
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

describe('useHero', () => {
    const mockPush = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        (useRouter as jest.Mock).mockReturnValue({
            push: mockPush,
        });
    });

    it('should navigate to create event page', () => {
        const { result } = renderHook(() => useHero());

        act(() => {
            result.current.navigateToCreateEvent();
        });

        expect(mockPush).toHaveBeenCalledWith('/secret-santa');
    });

    it('should navigate to how it works page', () => {
        const { result } = renderHook(() => useHero());

        act(() => {
            result.current.navigateToHowItWorks();
        });

        expect(mockPush).toHaveBeenCalledWith('/how-it-works');
    });
});
