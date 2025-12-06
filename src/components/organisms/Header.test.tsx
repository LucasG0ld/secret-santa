import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { useNavigation } from '../../hooks/useNavigation';

// Mock useNavigation
jest.mock('../../hooks/useNavigation');

describe('Header', () => {
    const mockActions = {
        setMobileMenuOpen: jest.fn(),
        toggleMobileMenu: jest.fn(),
        closeMobileMenu: jest.fn(),
        isActive: jest.fn((href) => href === '/'),
    };

    const defaultState = {
        mobileMenuOpen: false,
        navLinks: [
            { name: 'Home', href: '/' },
            { name: 'Create Event', href: '/secret-santa' },
        ],
    };

    beforeEach(() => {
        jest.clearAllMocks();
        (useNavigation as jest.Mock).mockReturnValue({
            state: defaultState,
            actions: mockActions,
        });
    });

    it('renders logo and desktop navigation', () => {
        render(<Header />);
        expect(screen.getByText('Secret Santa')).toBeInTheDocument();
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Create Event')).toBeInTheDocument();
    });

    it('opens mobile menu when hamburger is clicked', () => {
        render(<Header />);
        const menuButton = screen.getByLabelText('Open menu');
        fireEvent.click(menuButton);
        expect(mockActions.setMobileMenuOpen).toHaveBeenCalledWith(true);
    });

    it('renders mobile menu when open', () => {
        (useNavigation as jest.Mock).mockReturnValue({
            state: { ...defaultState, mobileMenuOpen: true },
            actions: mockActions,
        });

        render(<Header />);
        const closeButton = screen.getByLabelText('Close menu');
        expect(closeButton).toBeInTheDocument();
        expect(screen.getAllByText('Home')).toHaveLength(2); // Desktop + Mobile
    });

    it('closes mobile menu when close button is clicked', () => {
        (useNavigation as jest.Mock).mockReturnValue({
            state: { ...defaultState, mobileMenuOpen: true },
            actions: mockActions,
        });

        render(<Header />);
        const closeButton = screen.getByLabelText('Close menu');
        fireEvent.click(closeButton);
        expect(mockActions.closeMobileMenu).toHaveBeenCalled();
    });
});
