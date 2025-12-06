import { useRouter } from "next/navigation";

export function useHero() {
    const router = useRouter();

    const navigateToCreateEvent = () => {
        router.push('/secret-santa');
    };

    const navigateToHowItWorks = () => {
        router.push('/how-it-works');
    };

    return {
        navigateToCreateEvent,
        navigateToHowItWorks,
    };
}
