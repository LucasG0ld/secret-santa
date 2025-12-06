import { renderHook, act } from '@testing-library/react';
import { useMusicPlayer } from './useMusicPlayer';
import { playlist } from '../data/playlist';

// Mock useMediaQuery
jest.mock('./useMediaQuery', () => ({
    useMediaQuery: jest.fn().mockReturnValue(true),
}));

describe('useMusicPlayer', () => {
    let audioMock: HTMLAudioElement;

    beforeEach(() => {
        // Mock Audio element
        audioMock = {
            play: jest.fn().mockResolvedValue(undefined),
            pause: jest.fn(),
            volume: 1,
        } as unknown as HTMLAudioElement;

        // Mock useRef to return our audio mock
        jest.spyOn(require('react'), 'useRef').mockReturnValue({ current: audioMock });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should initialize with default state', () => {
        const { result } = renderHook(() => useMusicPlayer());

        expect(result.current.state.isPlaying).toBe(false);
        expect(result.current.state.currentSong).toEqual(playlist[0]);
        expect(result.current.state.isExpanded).toBe(false);
    });

    it('should toggle play/pause', () => {
        const { result } = renderHook(() => useMusicPlayer());

        act(() => {
            result.current.actions.handlePlayPause();
        });

        expect(result.current.state.isPlaying).toBe(true);

        act(() => {
            result.current.actions.handlePlayPause();
        });

        expect(result.current.state.isPlaying).toBe(false);
    });

    it('should play next song', () => {
        const { result } = renderHook(() => useMusicPlayer());

        act(() => {
            result.current.actions.handleNext();
        });

        expect(result.current.state.currentSong).toEqual(playlist[1]);
        expect(result.current.state.isPlaying).toBe(true);
    });

    it('should play previous song', () => {
        const { result } = renderHook(() => useMusicPlayer());

        // Move to second song first
        act(() => {
            result.current.actions.handleNext();
        });

        act(() => {
            result.current.actions.handlePrevious();
        });

        expect(result.current.state.currentSong).toEqual(playlist[0]);
        expect(result.current.state.isPlaying).toBe(true);
    });

    it('should loop to last song when previous is clicked on first song', () => {
        const { result } = renderHook(() => useMusicPlayer());

        act(() => {
            result.current.actions.handlePrevious();
        });

        expect(result.current.state.currentSong).toEqual(playlist[playlist.length - 1]);
    });

    it('should expand and collapse player', () => {
        const { result } = renderHook(() => useMusicPlayer());

        act(() => {
            result.current.actions.setIsExpanded(true);
        });
        expect(result.current.state.isExpanded).toBe(true);

        act(() => {
            // Mock event for handleClosePlayer
            const event = { stopPropagation: jest.fn() } as unknown as React.MouseEvent;
            result.current.actions.handleClosePlayer(event);
        });
        expect(result.current.state.isExpanded).toBe(false);
    });
});
