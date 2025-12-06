import { renderHook, act } from '@testing-library/react';
import { useNavigation, NAV_LINKS } from './useNavigation';
import { usePathname } from 'next/navigation';

// Mock usePathname
jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}));

describe('useNavigation', () => {
    beforeEach(() => {
        (usePathname as jest.Mock).mockReturnValue('/');
    });

    it('should return initial state', () => {
        const { result } = renderHook(() => useNavigation());
        expect(result.current.state.mobileMenuOpen).toBe(false);
        expect(result.current.state.navLinks).toEqual(NAV_LINKS);
    });

    it('should toggle mobile menu', () => {
        const { result } = renderHook(() => useNavigation());

        act(() => {
            result.current.actions.toggleMobileMenu();
        });
        expect(result.current.state.mobileMenuOpen).toBe(true);

        act(() => {
            result.current.actions.toggleMobileMenu();
        });
        expect(result.current.state.mobileMenuOpen).toBe(false);
    });

    it('should close mobile menu', () => {
        const { result } = renderHook(() => useNavigation());

        act(() => {
            result.current.actions.setMobileMenuOpen(true);
        });
        expect(result.current.state.mobileMenuOpen).toBe(true);

        act(() => {
            result.current.actions.closeMobileMenu();
        });
        expect(result.current.state.mobileMenuOpen).toBe(false);
    });

    it('should correctly identify active links', () => {
        (usePathname as jest.Mock).mockReturnValue('/secret-santa');
        const { result } = renderHook(() => useNavigation());

        expect(result.current.actions.isActive('/secret-santa')).toBe(true);
        expect(result.current.actions.isActive('/')).toBe(false);
    });

    it('should handle root path correctly', () => {
        (usePathname as jest.Mock).mockReturnValue('/');
        const { result } = renderHook(() => useNavigation());

        expect(result.current.actions.isActive('/')).toBe(true);
        expect(result.current.actions.isActive('/secret-santa')).toBe(false);
    });
});
