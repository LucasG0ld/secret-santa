'use client';

import { useTranslation } from "../../i18n/client";

export default function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-screen px-6 py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="mb-4 text-4xl md:text-5xl font-bold font-serif text-[#2F4F4F]">{t('page_privacy_title')}</h1>
                    <p className="text-lg text-[#333333]/70">
                        {t('page_privacy_updated')}
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(47,79,79,0.12)] p-8 md:p-12">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-[#2F4F4F] mb-4">{t('privacy_section_1_title')}</h3>
                            <p className="text-[#333333]/70 leading-relaxed">
                                {t('privacy_section_1_desc')}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#2F4F4F] mb-4">{t('privacy_section_2_title')}</h3>
                            <p className="text-[#333333]/70 mb-4">
                                {t('privacy_section_2_desc')}
                            </p>
                            <ul className="list-disc pl-6 text-[#333333]/70 space-y-2">
                                <li>{t('privacy_section_2_li_1')}</li>
                                <li>{t('privacy_section_2_li_2')}</li>
                                <li>{t('privacy_section_2_li_3')}</li>
                                <li>{t('privacy_section_2_li_4')}</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#2F4F4F] mb-4">{t('privacy_section_3_title')}</h3>
                            <p className="text-[#333333]/70 mb-4">
                                {t('privacy_section_3_desc')}
                            </p>
                            <ul className="list-disc pl-6 text-[#333333]/70 space-y-2">
                                <li>{t('privacy_section_3_li_1')}</li>
                                <li>{t('privacy_section_3_li_2')}</li>
                                <li>{t('privacy_section_3_li_3')}</li>
                                <li>{t('privacy_section_3_li_4')}</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#2F4F4F] mb-4">{t('privacy_section_4_title')}</h3>
                            <p className="text-[#333333]/70 leading-relaxed">
                                {t('privacy_section_4_desc')}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#2F4F4F] mb-4">{t('privacy_section_5_title')}</h3>
                            <p className="text-[#333333]/70 leading-relaxed">
                                {t('privacy_section_5_desc')}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#2F4F4F] mb-4">{t('privacy_section_6_title')}</h3>
                            <p className="text-[#333333]/70 mb-4">
                                {t('privacy_section_6_desc')}
                            </p>
                            <ul className="list-disc pl-6 text-[#333333]/70 space-y-2">
                                <li>{t('privacy_section_6_li_1')}</li>
                                <li>{t('privacy_section_6_li_2')}</li>
                                <li>{t('privacy_section_6_li_3')}</li>
                                <li>{t('privacy_section_6_li_4')}</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#2F4F4F] mb-4">{t('privacy_section_7_title')}</h3>
                            <p className="text-[#333333]/70 leading-relaxed">
                                {t('privacy_section_7_desc')}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#2F4F4F] mb-4">{t('privacy_section_8_title')}</h3>
                            <p className="text-[#333333]/70 leading-relaxed">
                                {t('privacy_section_8_desc')}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#2F4F4F] mb-4">{t('privacy_section_9_title')}</h3>
                            <p className="text-[#333333]/70 leading-relaxed">
                                {t('privacy_section_9_desc')}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#2F4F4F] mb-4">{t('privacy_section_10_title')}</h3>
                            <p className="text-[#333333]/70 leading-relaxed">
                                {t('privacy_section_10_desc')}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#2F4F4F] mb-4">{t('privacy_section_11_title')}</h3>
                            <p className="text-[#333333]/70 leading-relaxed">
                                {t('privacy_section_11_desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
