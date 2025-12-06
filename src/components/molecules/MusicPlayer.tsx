'use client';

import { Music, SkipBack, Play, Pause, SkipForward, X } from "lucide-react";
import { useMusicPlayer } from "../../hooks/useMusicPlayer";
import { useTranslation } from "../../i18n/client";

export function MusicPlayer() {
    const { t } = useTranslation();
    const { state, actions, refs } = useMusicPlayer();
    const { isExpanded, isPlaying, currentSong, isDesktop, isMounted } = state;
    const { setIsExpanded, handleNext, handlePrevious, handlePlayPause, handleEnded, handleClosePlayer } = actions;
    const { audioRef } = refs;

    if (!currentSong) return null;

    // Don't render on server or if not desktop (after mount)
    if (!isMounted) return null;
    if (!isDesktop) return null;

    return (
        <>
            <audio
                ref={audioRef}
                src={currentSong.src}
                onEnded={handleEnded}
            />

            {/* Fixed Position Container */}
            <div className="fixed bottom-6 left-6 z-50">
                <div
                    className="group"
                    onMouseEnter={() => setIsExpanded(true)}
                    onMouseLeave={() => setIsExpanded(false)}
                >
                    {/* Collapsed State - Music Icon */}
                    <div
                        className={`
              transition-all duration-300 ease-in-out
              ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}
            `}
                    >
                        <button
                            onClick={() => setIsExpanded(true)}
                            className={`
                relative flex flex-col items-center group border-none outline-none focus:outline-none
              `}
                            aria-label={t('music_open')}
                        >
                            {/* Ornament Cap */}
                            <div className="w-[16px] h-[12px] bg-gradient-to-b from-[#FFD700] to-[#DAA520] rounded-t-sm mb-[-4px] z-20 relative shadow-sm transition-all duration-200 group-hover:brightness-110">
                                {/* Cap detail line */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8860B] opacity-50"></div>
                            </div>

                            {/* Main Ornament Body */}
                            <div className={`
                relative w-[56px] h-[56px] rounded-full bg-[#2F4F4F] 
                flex items-center justify-center
                shadow-lg z-10
                transition-all duration-300
                shadow-[0_0_15px_rgba(47,79,79,0.3)]
                group-hover:shadow-[0_0_20px_rgba(47,79,79,0.6),0_0_40px_rgba(47,79,79,0.4)]
              `}>
                                {/* Glossy Effect */}
                                <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-white opacity-20 filter blur-[1px]"></div>

                                <Music className="w-6 h-6 text-[#F9F6F0] relative z-10" />
                            </div>
                        </button>
                    </div>

                    {/* Expanded State - Gift Tag Shape */}
                    <div
                        className={`
              absolute bottom-0 left-0
              transition-all duration-300 ease-in-out
              ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
            `}
                    >
                        {/* Gift Tag Container */}
                        <div className="relative">
                            {/* Main Tag Body */}
                            <div
                                className="
                  bg-[#F9F6F0] 
                  border-2 border-[#2F4F4F]/20
                  rounded-lg
                  shadow-xl
                  p-4
                  min-w-[280px]
                  relative
                "
                            >
                                {/* Tag Hole/Corner Cutout */}
                                <div className="absolute top-0 left-0 w-6 h-6">
                                    <div className="w-full h-full bg-[#F9F6F0] border-[#2F4F4F]/20 border-b-0 border-r-0 rounded-tl-lg" />
                                    <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 bg-white border border-[#2F4F4F]/20 rounded-full" />
                                </div>

                                {/* Mobile Close Button */}
                                <button
                                    onClick={handleClosePlayer}
                                    className="absolute top-2 right-2 md:hidden p-1 text-[#2F4F4F] hover:text-[#D24545] transition-colors"
                                    aria-label={t('music_close')}
                                >
                                    <X className="w-4 h-4" />
                                </button>

                                {/* Now Playing Text */}
                                <div className="mb-3 relative">
                                    <p className="text-xs text-[#2F4F4F] font-medium mb-1 uppercase tracking-wider">{t('music_now_playing')}</p>
                                    <p className="text-[#D24545] font-serif italic truncate text-lg">{currentSong.title}</p>
                                </div>

                                {/* Player Controls */}
                                <div className="flex items-center justify-center gap-4">
                                    <button
                                        onClick={handlePrevious}
                                        className="
                      w-8 h-8 
                      flex items-center justify-center
                      text-[#2F4F4F] 
                      hover:text-[#D24545]
                      transition-colors
                      hover:scale-110
                      transform
                    "
                                        aria-label={t('music_prev')}
                                    >
                                        <SkipBack className="w-5 h-5" />
                                    </button>

                                    <button
                                        onClick={handlePlayPause}
                                        className="
                      w-10 h-10 
                      bg-[#2F4F4F] 
                      rounded-full 
                      flex items-center justify-center
                      text-[#F9F6F0]
                      hover:bg-[#D24545]
                      transition-all
                      hover:scale-110
                      transform
                      shadow-md
                      group/play
                    "
                                        aria-label={isPlaying ? t('music_pause') : t('music_play')}
                                    >
                                        {isPlaying ? (
                                            <Pause className="w-5 h-5" fill="currentColor" />
                                        ) : (
                                            <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                                        )}
                                    </button>

                                    <button
                                        onClick={handleNext}
                                        className="
                      w-8 h-8 
                      flex items-center justify-center
                      text-[#2F4F4F] 
                      hover:text-[#D24545]
                      transition-colors
                      hover:scale-110
                      transform
                    "
                                        aria-label={t('music_next')}
                                    >
                                        <SkipForward className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Decorative String/Ribbon */}
                                <div className="absolute -top-8 left-3">
                                    <div className="w-0.5 h-8 bg-gradient-to-b from-[#FFD700] to-[#B8860B]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
