import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        const updateMatches = () => setMatches(media.matches);

        updateMatches();

        const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
        media.addEventListener("change", listener);
        window.addEventListener("resize", updateMatches);

        return () => {
            media.removeEventListener("change", listener);
            window.removeEventListener("resize", updateMatches);
        };
    }, [query]);

    return matches;
}
