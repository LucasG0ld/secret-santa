import { useState } from 'react';
import { usePathname } from 'next/navigation';

export const NAV_LINKS = [
    { name: 'nav_home', href: '/' },
    { name: 'nav_create_event', href: '/secret-santa' },
    { name: 'nav_how_it_works', href: '/how-it-works' },
    { name: 'nav_faq', href: '/faq' },
    { name: 'nav_privacy', href: '/privacy-policy' }
];

export function useNavigation() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (href: string) => {
        if (href === '/' && pathname !== '/') return false;
        return pathname.startsWith(href);
    };

    const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
    const closeMobileMenu = () => setMobileMenuOpen(false);

    return {
        state: {
            mobileMenuOpen,
            navLinks: NAV_LINKS,
        },
        actions: {
            setMobileMenuOpen,
            toggleMobileMenu,
            closeMobileMenu,
            isActive,
        }
    };
}
