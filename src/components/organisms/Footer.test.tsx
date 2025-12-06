import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    it('renders the copyright text', () => {
        render(<Footer />);
        expect(screen.getByText((content) => content.includes('Secret Santa. Tous droits réservés.'))).toBeInTheDocument();
    });

    it('renders legal links', () => {
        render(<Footer />);
        expect(screen.getByText('Mentions légales')).toBeInTheDocument();
        expect(screen.getByText('Confidentialité')).toBeInTheDocument();
    });
});
