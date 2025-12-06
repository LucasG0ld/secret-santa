'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "../../i18n/client";

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQ() {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQItem[] = [
        {
            question: t('faq_1_q'),
            answer: t('faq_1_a')
        },
        {
            question: t('faq_2_q'),
            answer: t('faq_2_a')
        },
        {
            question: t('faq_3_q'),
            answer: t('faq_3_a')
        },
        {
            question: t('faq_4_q'),
            answer: t('faq_4_a')
        },
        {
            question: t('faq_5_q'),
            answer: t('faq_5_a')
        },
        {
            question: t('faq_6_q'),
            answer: t('faq_6_a')
        },
        {
            question: t('faq_7_q'),
            answer: t('faq_7_a')
        },
        {
            question: t('faq_8_q'),
            answer: t('faq_8_a')
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative min-h-screen px-6 py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="mb-4 text-4xl md:text-5xl font-bold font-serif text-[#2F4F4F]">{t('page_faq_title')}</h1>
                    <p className="text-lg text-[#333333]/70">
                        {t('page_faq_subtitle')}
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(47,79,79,0.12)] p-8 md:p-12">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-[#2F4F4F]/10 last:border-b-0"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full py-6 flex items-center justify-between text-left group"
                                >
                                    <h3 className="pr-8 text-lg font-semibold text-[#2F4F4F] group-hover:text-[#D24545] transition-colors">
                                        {faq.question}
                                    </h3>
                                    <ChevronDown
                                        className={`flex-shrink-0 w-6 h-6 text-[#2F4F4F] transition-transform ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 mb-6' : 'max-h-0'
                                        }`}
                                >
                                    <p className="text-[#333333]/70 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-br from-[#2F4F4F] to-[#2F4F4F]/80 rounded-2xl p-8 text-white">
                        <h3 className="mb-3 text-2xl font-bold font-serif text-white">{t('faq_contact_title')}</h3>
                        <p className="mb-6 text-white/80">
                            {t('faq_contact_subtitle')}
                        </p>
                        <button className="px-8 py-3 bg-[#D24545] text-white rounded-xl hover:bg-[#D24545]/90 transition-all shadow-lg font-medium">
                            {t('faq_contact_button')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
