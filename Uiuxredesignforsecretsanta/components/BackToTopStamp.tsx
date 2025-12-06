import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function BackToTopStamp() {
  const [isVisible, setIsVisible] = useState(false);

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
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 z-50 
            relative
            flex items-center justify-center 
            w-14 h-14 
            rounded-full 
            bg-[#D24545] 
            text-white 
            shadow-lg 
            hover:scale-110 
            transition-all duration-200
            group
          "
          style={{
            border: '3px dashed rgba(255, 255, 255, 0.5)',
            borderRadius: '50%',
          }}
          aria-label="Back to top"
        >
          {/* Inner stitched border effect */}
          <div 
            className="absolute inset-[6px] rounded-full pointer-events-none"
            style={{
              border: '2px dotted rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
            }}
          ></div>
          
          {/* Icon */}
          <ChevronUp className="w-6 h-6 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
