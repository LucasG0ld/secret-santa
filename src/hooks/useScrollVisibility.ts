import { useState, useEffect } from "react";

export function useScrollVisibility(threshold: number = 50) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > threshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        // Initial check
        toggleVisibility();

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, [threshold]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return { isVisible, scrollToTop };
}
