'use client';

import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useScrollVisibility } from "../../hooks/useScrollVisibility";
import { useTranslation } from "../../i18n/client";

export function BackToTopOrnament() {
    const { t } = useTranslation();
    const { isVisible, scrollToTop } = useScrollVisibility();
    const [isHovered, setIsHovered] = useState(false);

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
                        className="relative flex flex-col items-center group border-none outline-none focus:outline-none"
                        aria-label={t('back_to_top')}
                    >
                        {/* Ornament Cap */}
                        <div className="w-[16px] h-[12px] bg-gradient-to-b from-[#FFD700] to-[#DAA520] rounded-t-sm mb-[-4px] z-20 relative shadow-sm transition-all duration-200 group-hover:brightness-110">
                            {/* Cap detail line */}
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8860B] opacity-50"></div>
                        </div>

                        {/* Main Ornament Body */}
                        <div className={`
              relative w-[56px] h-[56px] rounded-full bg-[#D24545] 
              flex items-center justify-center
              shadow-lg z-10
              transition-all duration-300
              ${isHovered ? 'shadow-[0_0_20px_rgba(210,69,69,0.6),0_0_40px_rgba(210,69,69,0.4)]' : ''}
            `}>
                            {/* Glossy Effect */}
                            <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-white opacity-20 filter blur-[1px]"></div>

                            <ChevronUp
                                className="w-6 h-6 text-white relative z-10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </div>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
