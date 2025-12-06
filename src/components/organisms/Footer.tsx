'use client';

import Link from 'next/link';
import { useTranslation } from '../../i18n/client';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="mt-20 bg-[#F9F6F0] relative">
            {/* Integrated Light Garland - Replaces Top Border */}
            <div className="w-full pointer-events-none">
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
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="mb-4 text-xl font-semibold text-[#2F4F4F]">{t('footer_title')}</h3>
                        <p className="text-[#333333]/70">
                            {t('footer_description')}
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-xl font-semibold text-[#2F4F4F]">{t('footer_quick_links')}</h3>
                        <ul className="space-y-2">
                            <li><Link href="/how-it-works" className="text-[#333333]/70 hover:text-[#D24545]">{t('footer_link_how_it_works')}</Link></li>
                            <li><Link href="/faq" className="text-[#333333]/70 hover:text-[#D24545]">{t('footer_link_faq')}</Link></li>
                            <li><Link href="/privacy-policy" className="text-[#333333]/70 hover:text-[#D24545]">{t('footer_link_privacy')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-xl font-semibold text-[#2F4F4F]">{t('footer_contact_title')}</h3>
                        <p className="text-[#333333]/70">
                            {t('footer_contact_text')}
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[#2F4F4F]/10 text-center text-[#333333]/60">
                    <p>{t('footer_copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
