import { useState } from "react";
import { Music, SkipBack, Play, Pause, SkipForward } from "lucide-react";

export function MusicPlayer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState("Jingle Bells");

  const songs = [
    "Jingle Bells",
    "Silent Night",
    "Deck the Halls",
    "Joy to the World"
  ];

  const handleNext = () => {
    const currentIndex = songs.indexOf(currentSong);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = songs.indexOf(currentSong);
    const previousIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    setCurrentSong(songs[previousIndex]);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Fixed Position Container */}
      <div className="fixed bottom-6 left-6 z-50">
        <div
          className="group"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {/* Collapsed State - Music Ornament */}
          <div
            className={`
              transition-all duration-300 ease-in-out
              ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}
            `}
          >
            <button
              className="relative flex flex-col items-center"
              aria-label="Open music player"
            >
              {/* Ornament Cap - Gold like BackToTop */}
              <div className="w-4 h-3 bg-gradient-to-b from-[#FFD700] to-[#DAA520] rounded-t-sm mb-[-2px] z-10 relative shadow-sm transition-all duration-200 group-hover:brightness-110">
                {/* Cap detail line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8860B] opacity-50"></div>
              </div>
              
              {/* Main Ornament Body - Forest Green with glossy effect */}
              <div className="relative w-14 h-14 rounded-full bg-[#2F4F4F] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(47,79,79,0.6),0_0_40px_rgba(47,79,79,0.4)]">
                {/* Ornament highlight (makes it look glossy) */}
                <div className="absolute top-2 left-3 w-4 h-4 bg-white opacity-20 rounded-full blur-sm"></div>
                
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
                "
              >
                {/* Tag Hole/Corner Cutout */}
                <div className="absolute top-0 left-0 w-6 h-6">
                  <div className="w-full h-full bg-[#F9F6F0] border-2 border-[#2F4F4F]/20 border-b-0 border-r-0 rounded-tl-lg" />
                  <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 bg-white border border-[#2F4F4F]/30 rounded-full shadow-inner" />
                </div>

                {/* Now Playing Text */}
                <div className="mb-3 relative">
                  <p className="text-xs text-[#2F4F4F]/60 mb-1">Now Playing</p>
                  <p className="text-[#D24545] font-playfair italic text-lg">{currentSong}</p>
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
                    aria-label="Previous track"
                  >
                    <SkipBack className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handlePlayPause}
                    className="
                      relative
                      w-10 h-10 
                      bg-[#D24545] 
                      rounded-full 
                      flex items-center justify-center
                      text-[#F9F6F0]
                      hover:bg-[#2F4F4F]
                      transition-all
                      hover:scale-110
                      transform
                      shadow-md
                    "
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {/* Glossy highlight on play button */}
                    <div className="absolute top-1 left-2 w-3 h-3 bg-white opacity-20 rounded-full blur-sm"></div>
                    
                    {isPlaying ? (
                      <Pause className="w-5 h-5 relative z-10" fill="currentColor" />
                    ) : (
                      <Play className="w-5 h-5 ml-0.5 relative z-10" fill="currentColor" />
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
                    aria-label="Next track"
                  >
                    <SkipForward className="w-5 h-5" />
                  </button>
                </div>

                {/* Decorative String/Ribbon - Gold accent */}
                <div className="absolute -top-8 left-3">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-[#DAA520] to-[#333333]/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Touch Version - Tap to Toggle */}
      <style>{`
        @media (hover: none) and (pointer: coarse) {
          .group:active .opacity-100 {
            opacity: 0 !important;
          }
          .group:active .opacity-0 {
            opacity: 100 !important;
          }
        }
      `}</style>
    </>
  );
}
