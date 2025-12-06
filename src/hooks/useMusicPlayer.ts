import { useState, useRef, useEffect } from "react";
import { playlist } from "../data/playlist";
import { useMediaQuery } from "./useMediaQuery";

export function useMusicPlayer() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Safe access
    const currentSong = playlist?.[currentSongIndex];

    // Mobile check
    const isDesktop = useMediaQuery("(min-width: 768px)");

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.05;
        }
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(error => {
                    console.error("Playback failed:", error);
                    setIsPlaying(false);
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentSongIndex]);

    const handleNext = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
        setIsPlaying(true);
    };

    const handlePrevious = () => {
        setCurrentSongIndex((prevIndex) =>
            prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
        );
        setIsPlaying(true);
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleEnded = () => {
        handleNext();
    };

    const handleClosePlayer = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsExpanded(false);
    };

    return {
        state: {
            isExpanded,
            isPlaying,
            currentSong,
            isDesktop,
            isMounted,
        },
        actions: {
            setIsExpanded,
            setIsPlaying,
            handleNext,
            handlePrevious,
            handlePlayPause,
            handleEnded,
            handleClosePlayer,
        },
        refs: {
            audioRef,
        }
    };
}
