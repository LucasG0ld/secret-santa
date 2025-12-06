import { render, screen } from '@testing-library/react';
import MainLayout from './MainLayout';

// Mock Header and Footer to isolate MainLayout testing
jest.mock('../organisms/Header', () => {
    return function MockHeader() {
        return <div data-testid="mock-header">Header</div>;
    };
});

jest.mock('../organisms/Footer', () => {
    return function MockFooter() {
        return <div data-testid="mock-footer">Footer</div>;
    };
});

describe('MainLayout', () => {
    it('renders header, footer and children', () => {
        render(
            <MainLayout>
                <div data-testid="child-content">Child Content</div>
            </MainLayout>
        );

        expect(screen.getByTestId('mock-header')).toBeInTheDocument();
        expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
        expect(screen.getByTestId('child-content')).toBeInTheDocument();
    });
});
