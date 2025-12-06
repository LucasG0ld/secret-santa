import { renderHook, act, fireEvent } from '@testing-library/react';
import { useScrollVisibility } from './useScrollVisibility';

describe('useScrollVisibility', () => {
    beforeAll(() => {
        // Mock window.scrollTo
        window.scrollTo = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
        window.scrollY = 0;
    });

    it('should be invisible initially', () => {
        const { result } = renderHook(() => useScrollVisibility());
        expect(result.current.isVisible).toBe(false);
    });

    it('should become visible after scrolling past threshold', () => {
        const { result } = renderHook(() => useScrollVisibility(100));

        act(() => {
            window.scrollY = 150;
            fireEvent.scroll(window);
        });

        expect(result.current.isVisible).toBe(true);
    });

    it('should become invisible when scrolling back up', () => {
        const { result } = renderHook(() => useScrollVisibility(100));

        act(() => {
            window.scrollY = 150;
            fireEvent.scroll(window);
        });
        expect(result.current.isVisible).toBe(true);

        act(() => {
            window.scrollY = 50;
            fireEvent.scroll(window);
        });
        expect(result.current.isVisible).toBe(false);
    });

    it('should call window.scrollTo when scrollToTop is called', () => {
        const { result } = renderHook(() => useScrollVisibility());

        act(() => {
            result.current.scrollToTop();
        });

        expect(window.scrollTo).toHaveBeenCalledWith({
            top: 0,
            behavior: 'smooth',
        });
    });
});
