'use client';

import { Gift, Users, Mail, Sparkles } from "lucide-react";
import { useTranslation } from "../../i18n/client";

export default function HowItWorks() {
    const { t } = useTranslation();

    const steps = [
        {
            icon: Gift,
            title: t('step_1_title'),
            description: t('step_1_desc')
        },
        {
            icon: Users,
            title: t('step_2_title'),
            description: t('step_2_desc')
        },
        {
            icon: Sparkles,
            title: t('step_3_title'),
            description: t('step_3_desc')
        },
        {
            icon: Mail,
            title: t('step_4_title'),
            description: t('step_4_desc')
        }
    ];

    return (
        <section className="relative min-h-screen px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="mb-4 text-4xl md:text-5xl font-bold font-serif text-[#2F4F4F]">{t('page_how_it_works_title')}</h1>
                    <p className="text-lg text-[#333333]/70 max-w-2xl mx-auto">
                        {t('page_how_it_works_subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#D24545] rounded-full flex items-center justify-center text-white shadow-lg font-bold">
                                    {index + 1}
                                </div>

                                <div className="mb-6 mt-4">
                                    <div className="w-16 h-16 bg-[#2F4F4F]/10 rounded-2xl flex items-center justify-center">
                                        <step.icon className="w-8 h-8 text-[#2F4F4F]" />
                                    </div>
                                </div>

                                <h3 className="mb-3 text-xl font-semibold text-[#2F4F4F]">{step.title}</h3>
                                <p className="text-[#333333]/70">{step.description}</p>
                            </div>

                            {/* Version A: Perfectly centered connector bars */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                                    <div className="w-8 h-0.5 bg-[#D24545]/30"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Additional Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl p-8 shadow-md">
                        <h3 className="mb-3 text-xl font-semibold text-[#2F4F4F]">{t('info_1_title')}</h3>
                        <p className="text-[#333333]/70">
                            {t('info_1_desc')}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-md">
                        <h3 className="mb-3 text-xl font-semibold text-[#2F4F4F]">{t('info_2_title')}</h3>
                        <p className="text-[#333333]/70">
                            {t('info_2_desc')}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-md">
                        <h3 className="mb-3 text-xl font-semibold text-[#2F4F4F]">{t('info_3_title')}</h3>
                        <p className="text-[#333333]/70">
                            {t('info_3_desc')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
