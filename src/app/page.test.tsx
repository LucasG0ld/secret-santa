import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home Page', () => {
    it('renders the main title', () => {
        render(<Home />);
        expect(screen.getByRole('heading', { name: /Organisez votre Secret Santa simplement/i })).toBeInTheDocument();
    });

    it('renders the link to organize a draw', () => {
        render(<Home />);
        const link = screen.getByRole('link', { name: /Organiser un tirage/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/secret-santa');
    });

    it('renders the link to how it works', () => {
        render(<Home />);
        const link = screen.getByRole('link', { name: /Comment ça marche/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/how-it-works');
    });
});
