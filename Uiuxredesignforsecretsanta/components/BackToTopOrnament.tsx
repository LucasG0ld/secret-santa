import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function BackToTopOrnament() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex flex-col items-center group"
            aria-label="Back to top"
          >
            {/* Ornament Cap */}
            <div className="w-4 h-3 bg-gradient-to-b from-[#FFD700] to-[#DAA520] rounded-t-sm mb-[-2px] z-10 relative shadow-sm transition-all duration-200 group-hover:brightness-110">
              {/* Cap detail line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8860B] opacity-50"></div>
            </div>
            
            {/* Main Ornament Body */}
            <div className={`
              relative w-14 h-14 rounded-full bg-[#D24545] 
              flex items-center justify-center
              shadow-lg
              transition-all duration-300
              ${isHovered ? 'shadow-[0_0_20px_rgba(210,69,69,0.6),0_0_40px_rgba(210,69,69,0.4)]' : ''}
            `}>
              {/* Ornament highlight (makes it look glossy) */}
              <div className="absolute top-2 left-3 w-4 h-4 bg-white opacity-20 rounded-full blur-sm"></div>
              
              <ChevronUp className="w-6 h-6 text-white relative z-10" />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
