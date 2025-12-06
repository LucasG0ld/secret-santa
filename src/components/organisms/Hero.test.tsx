import { render, screen, fireEvent } from '@testing-library/react';
import { Hero } from './Hero';
import { useHero } from '../../hooks/useHero';

// Mock hook
jest.mock('../../hooks/useHero');

// Mock ChristmasIllustration to avoid SVG complexity in tests
jest.mock('../molecules/ChristmasIllustration', () => ({
    ChristmasIllustration: () => <div data-testid="christmas-illustration" />,
}));

describe('Hero', () => {
    const mockNavigateToCreateEvent = jest.fn();
    const mockNavigateToHowItWorks = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        (useHero as jest.Mock).mockReturnValue({
            navigateToCreateEvent: mockNavigateToCreateEvent,
            navigateToHowItWorks: mockNavigateToHowItWorks,
        });
    });

    it('renders correctly', () => {
        render(<Hero />);
        expect(screen.getByText('Organize your Secret Santa in seconds.')).toBeInTheDocument();
    });

    it('calls navigateToCreateEvent when "Create Your Event" is clicked', () => {
        render(<Hero />);
        const button = screen.getByText('Create Your Event');
        fireEvent.click(button);
        expect(mockNavigateToCreateEvent).toHaveBeenCalled();
    });

    it('calls navigateToHowItWorks when "See How It Works" is clicked', () => {
        render(<Hero />);
        const button = screen.getByText('See How It Works');
        fireEvent.click(button);
        expect(mockNavigateToHowItWorks).toHaveBeenCalled();
    });
});
