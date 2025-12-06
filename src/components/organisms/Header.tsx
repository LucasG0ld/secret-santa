'use client';

import Link from 'next/link';
import { Gift, Menu, X } from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation';
import { useTranslation } from '../../i18n/client';

const Header = () => {
    const { t } = useTranslation();
    const { state, actions } = useNavigation();
    const { mobileMenuOpen, navLinks } = state;
    const { setMobileMenuOpen, closeMobileMenu, isActive } = actions;

    return (
        <>
            <nav className="sticky top-0 z-50 bg-[#F9F6F0]/95 backdrop-blur-sm relative">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="flex items-center gap-2 group"
                            onClick={closeMobileMenu}
                        >
                            <div className="w-10 h-10 bg-[#D24545] rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                                <Gift className="w-6 h-6 text-[#F9F6F0]" />
                            </div>
                            <span className="text-xl text-[#2F4F4F] tracking-tight font-bold">{t('app_title')}</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative transition-colors ${isActive(link.href)
                                        ? 'text-[#D24545]'
                                        : 'text-[#2F4F4F] hover:text-[#D24545]'
                                        }`}
                                >
                                    {t(link.name)}
                                    {isActive(link.href) && (
                                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D24545]" />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Hamburger Icon */}
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="md:hidden w-10 h-10 flex items-center justify-center text-[#2F4F4F] hover:text-[#D24545] transition-colors"
                            aria-label="Open menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Integrated Light Garland - Replaces Bottom Border */}
            <div className="sticky top-[72px] z-50 w-full pointer-events-none mt-[-1px]">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Desktop & Mobile Garland */}
                    <div className="relative w-full flex items-center justify-center">
                        {/* Horizontal line separator */}
                        <div className="absolute left-0 right-0 h-[1px] bg-[#333333]" />

                        {/* Light orbs - Full width with controlled variations */}
                        <div className="absolute left-0 right-0 flex items-center justify-between px-4">
                            {/* Desktop Garland (Full Density) */}
                            <div className="hidden md:flex w-full justify-between">
                                {[
                                    { color: '#D24545', size: 10, delay: '0s' },      // Red
                                    { color: '#FFD700', size: 9, delay: '0.6s' },     // Gold
                                    { color: '#2F4F4F', size: 11, delay: '1.2s' },    // Forest Green
                                    { color: '#D24545', size: 8, delay: '1.8s' },     // Red
                                    { color: '#FFD700', size: 12, delay: '2.4s' },    // Gold
                                    { color: '#2F4F4F', size: 10, delay: '3s' },      // Forest Green
                                    { color: '#D24545', size: 9, delay: '3.6s' },     // Red
                                    { color: '#FFD700', size: 11, delay: '4.2s' },    // Gold
                                    { color: '#2F4F4F', size: 8, delay: '4.8s' },     // Forest Green
                                    { color: '#D24545', size: 10, delay: '5.4s' },    // Red
                                    { color: '#FFD700', size: 12, delay: '0.3s' },    // Gold
                                    { color: '#2F4F4F', size: 9, delay: '0.9s' },     // Forest Green
                                    { color: '#D24545', size: 11, delay: '1.5s' },    // Red
                                    { color: '#FFD700', size: 8, delay: '2.1s' },     // Gold
                                    { color: '#2F4F4F', size: 10, delay: '2.7s' },    // Forest Green
                                    { color: '#D24545', size: 12, delay: '3.3s' },    // Red
                                    { color: '#FFD700', size: 9, delay: '3.9s' },     // Gold
                                    { color: '#2F4F4F', size: 11, delay: '4.5s' },    // Forest Green
                                ].map((light, index) => (
                                    <div
                                        key={`desktop-${index}`}
                                        className="garland-light"
                                        style={{
                                            width: `${light.size}px`,
                                            height: `${light.size}px`,
                                            borderRadius: '50%',
                                            backgroundColor: light.color,
                                            color: light.color,
                                            boxShadow: `
                        0 2px 4px rgba(0, 0, 0, 0.15),
                        0 0 8px ${light.color}66,
                        0 0 12px ${light.color}33
                      `,
                                            animationDelay: light.delay,
                                            flexShrink: 0,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Mobile Garland (Reduced Density) */}
                            <div className="flex md:hidden w-full justify-between">
                                {[
                                    { color: '#D24545', size: 10, delay: '0s' },      // Red
                                    { color: '#FFD700', size: 12, delay: '1.2s' },    // Gold
                                    { color: '#2F4F4F', size: 11, delay: '2.4s' },    // Forest Green
                                    { color: '#D24545', size: 12, delay: '3.6s' },    // Red
                                    { color: '#FFD700', size: 10, delay: '4.8s' },    // Gold
                                    { color: '#2F4F4F', size: 12, delay: '0.6s' },    // Forest Green
                                ].map((light, index) => (
                                    <div
                                        key={`mobile-${index}`}
                                        className="garland-light"
                                        style={{
                                            width: `${light.size}px`,
                                            height: `${light.size}px`,
                                            borderRadius: '50%',
                                            backgroundColor: light.color,
                                            color: light.color,
                                            boxShadow: `
                        0 2px 4px rgba(0, 0, 0, 0.15),
                        0 0 8px ${light.color}66,
                        0 0 12px ${light.color}33
                      `,
                                            animationDelay: light.delay,
                                            flexShrink: 0,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Full-Screen Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[60] md:hidden">
                    {/* Overlay Background */}
                    <div
                        className="absolute inset-0 bg-[#2F4F4F] animate-fadeIn"
                        onClick={closeMobileMenu}
                    />

                    {/* Overlay Content */}
                    <div className="relative h-full flex flex-col animate-slideIn">
                        {/* Close Button */}
                        <div className="flex justify-end p-6">
                            <button
                                onClick={closeMobileMenu}
                                className="w-12 h-12 flex items-center justify-center text-white hover:text-[#D24545] transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    className={`text-3xl transition-colors ${isActive(link.href)
                                        ? 'text-[#D24545]'
                                        : 'text-white hover:text-[#D24545]'
                                        }`}
                                >
                                    {t(link.name)}
                                </Link>
                            ))}

                            {/* CTA Button */}
                            <Link
                                href="/secret-santa"
                                onClick={closeMobileMenu}
                                className="mt-8 px-8 py-4 bg-[#D24545] text-white rounded-xl hover:bg-[#D24545]/90 transition-all shadow-lg"
                            >
                                {t('header_cta_create_event')}
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
        </>
    );
};

export default Header;
