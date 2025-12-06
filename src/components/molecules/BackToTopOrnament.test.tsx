import { render, screen, fireEvent } from '@testing-library/react';
import { BackToTopOrnament } from './BackToTopOrnament';
import { useScrollVisibility } from '../../hooks/useScrollVisibility';

// Mock useScrollVisibility
jest.mock('../../hooks/useScrollVisibility');

// Mock AnimatePresence to render children immediately
jest.mock('motion/react', () => ({
    motion: {
        div: ({ children, className, ...props }: any) => <div className={className} {...props}>{children}</div>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('BackToTopOrnament', () => {
    const mockScrollToTop = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        (useScrollVisibility as jest.Mock).mockReturnValue({
            isVisible: false,
            scrollToTop: mockScrollToTop,
        });
    });

    it('renders nothing when not visible', () => {
        render(<BackToTopOrnament />);
        const button = screen.queryByLabelText('Back to top');
        expect(button).not.toBeInTheDocument();
    });

    it('renders button when visible', () => {
        (useScrollVisibility as jest.Mock).mockReturnValue({
            isVisible: true,
            scrollToTop: mockScrollToTop,
        });

        render(<BackToTopOrnament />);
        const button = screen.getByLabelText('Back to top');
        expect(button).toBeInTheDocument();
    });

    it('calls scrollToTop when clicked', () => {
        (useScrollVisibility as jest.Mock).mockReturnValue({
            isVisible: true,
            scrollToTop: mockScrollToTop,
        });

        render(<BackToTopOrnament />);
        const button = screen.getByLabelText('Back to top');
        fireEvent.click(button);
        expect(mockScrollToTop).toHaveBeenCalled();
    });
});
