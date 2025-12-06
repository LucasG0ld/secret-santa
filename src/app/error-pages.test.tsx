import { render, screen, fireEvent } from '@testing-library/react';
import NotFound from './not-found';
import ErrorPage from './error';

describe('Error Pages', () => {
    describe('NotFound', () => {
        it('renders the 404 message and home link', () => {
            render(<NotFound />);
            expect(screen.getByText('404')).toBeInTheDocument();
            expect(screen.getByText(/Oups ! Cette page s'est perdue/i)).toBeInTheDocument();
            expect(screen.getByRole('link', { name: /Retourner à l'accueil/i })).toHaveAttribute('href', '/');
        });
    });

    describe('Error', () => {
        const mockError = new Error('Test error');
        const mockReset = jest.fn();

        beforeEach(() => {
            jest.clearAllMocks();
            // Suppress console.error for expected error logging
            jest.spyOn(console, 'error').mockImplementation(() => { });
        });

        afterEach(() => {
            (console.error as jest.Mock).mockRestore();
        });

        it('renders the error message and reset button', () => {
            render(<ErrorPage error={mockError} reset={mockReset} />);
            expect(screen.getByText(/Aïe ! Quelque chose s'est cassé/i)).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /Réessayer/i })).toBeInTheDocument();
        });

        it('logs the error to console', () => {
            render(<ErrorPage error={mockError} reset={mockReset} />);
            expect(console.error).toHaveBeenCalledWith(mockError);
        });

        it('calls reset function when button is clicked', () => {
            render(<ErrorPage error={mockError} reset={mockReset} />);
            const resetButton = screen.getByRole('button', { name: /Réessayer/i });
            fireEvent.click(resetButton);
            expect(mockReset).toHaveBeenCalled();
        });
    });
});
