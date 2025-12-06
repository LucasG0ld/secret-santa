import { render, screen, fireEvent } from '@testing-library/react';
import { MusicPlayer } from './MusicPlayer';
import { useMusicPlayer } from '../../hooks/useMusicPlayer';

// Mock useMusicPlayer
jest.mock('../../hooks/useMusicPlayer');

describe('MusicPlayer', () => {
    const mockActions = {
        setIsExpanded: jest.fn(),
        setIsPlaying: jest.fn(),
        handleNext: jest.fn(),
        handlePrevious: jest.fn(),
        handlePlayPause: jest.fn(),
        handleEnded: jest.fn(),
        handleClosePlayer: jest.fn(),
    };

    const defaultState = {
        isExpanded: false,
        isPlaying: false,
        currentSong: { title: 'Test Song', src: 'test.mp3' },
        isDesktop: true,
        isMounted: true,
    };

    const mockRefs = {
        audioRef: { current: null },
    };

    beforeEach(() => {
        jest.clearAllMocks();
        (useMusicPlayer as jest.Mock).mockReturnValue({
            state: defaultState,
            actions: mockActions,
            refs: mockRefs,
        });
    });

    it('renders nothing if not mounted or not desktop', () => {
        (useMusicPlayer as jest.Mock).mockReturnValue({
            state: { ...defaultState, isDesktop: false },
            actions: mockActions,
            refs: mockRefs,
        });
        const { container } = render(<MusicPlayer />);
        expect(container).toBeEmptyDOMElement();
    });

    it('renders collapsed state by default', () => {
        render(<MusicPlayer />);
        const openButton = screen.getByLabelText('Open music player');
        expect(openButton).toBeInTheDocument();
    });

    it('renders expanded state when isExpanded is true', () => {
        (useMusicPlayer as jest.Mock).mockReturnValue({
            state: { ...defaultState, isExpanded: true },
            actions: mockActions,
            refs: mockRefs,
        });

        render(<MusicPlayer />);
        expect(screen.getByText('Test Song')).toBeInTheDocument();
        expect(screen.getByLabelText('Play')).toBeInTheDocument();
    });

    it('calls handlePlayPause when play button is clicked', () => {
        (useMusicPlayer as jest.Mock).mockReturnValue({
            state: { ...defaultState, isExpanded: true },
            actions: mockActions,
            refs: mockRefs,
        });

        render(<MusicPlayer />);
        const playButton = screen.getByLabelText('Play');
        fireEvent.click(playButton);
        expect(mockActions.handlePlayPause).toHaveBeenCalled();
    });

    it('calls handleNext when next button is clicked', () => {
        (useMusicPlayer as jest.Mock).mockReturnValue({
            state: { ...defaultState, isExpanded: true },
            actions: mockActions,
            refs: mockRefs,
        });

        render(<MusicPlayer />);
        const nextButton = screen.getByLabelText('Next track');
        fireEvent.click(nextButton);
        expect(mockActions.handleNext).toHaveBeenCalled();
    });
});
