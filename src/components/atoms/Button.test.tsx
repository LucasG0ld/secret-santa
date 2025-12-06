import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    it('renders correctly with default props', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('bg-red-600'); // Primary variant default
    });

    it('renders secondary variant', () => {
        render(<Button variant="secondary">Secondary</Button>);
        const button = screen.getByRole('button', { name: /secondary/i });
        expect(button).toHaveClass('bg-pink-500');
    });

    it('renders different sizes', () => {
        render(<Button size="lg">Large</Button>);
        const button = screen.getByRole('button', { name: /large/i });
        expect(button).toHaveClass('px-6 py-3 text-lg');
    });

    it('shows loading spinner when isLoading is true', () => {
        render(<Button isLoading>Loading</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
        // Check for SVG spinner presence (simplified check)
        expect(screen.getByRole('button').querySelector('svg')).toBeInTheDocument();
    });

    it('handles click events', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        fireEvent.click(screen.getByRole('button', { name: /click me/i }));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('is disabled when disabled prop is passed', () => {
        render(<Button disabled>Disabled</Button>);
        expect(screen.getByRole('button', { name: /disabled/i })).toBeDisabled();
    });
});
