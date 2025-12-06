import { CheckCircle, Mail, Calendar } from "lucide-react";
import { ChristmasIllustration } from "../molecules/ChristmasIllustration";
import { useTranslation } from "../../i18n/client";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreateAnother: () => void;
}

export function SuccessModal({ isOpen, onClose, onCreateAnother }: SuccessModalProps) {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 relative animate-scaleIn">
                {/* Decorative elements */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="w-16 h-16 bg-[#D24545] rounded-full flex items-center justify-center shadow-xl">
                        <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                </div>

                <div className="absolute top-6 right-6 opacity-30">
                    <ChristmasIllustration variant="star" className="w-20 h-20" />
                </div>

                <div className="text-center mt-8">
                    <h1 className="mb-4 text-3xl font-bold font-serif text-[#2F4F4F]">{t('success_modal_title')}</h1>
                    <p className="text-lg text-[#333333]/70 mb-8">
                        {t('success_modal_subtitle')}
                    </p>

                    {/* Success details */}
                    <div className="bg-[#F9F6F0] rounded-2xl p-6 mb-8 text-left">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 bg-[#2F4F4F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5 text-[#2F4F4F]" />
                            </div>
                            <div>
                                <h3 className="mb-1 font-semibold text-[#2F4F4F]">{t('success_modal_invitations_title')}</h3>
                                <p className="text-[#333333]/70 text-sm">
                                    {t('success_modal_invitations_message')}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-[#2F4F4F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Calendar className="w-5 h-5 text-[#2F4F4F]" />
                            </div>
                            <div>
                                <h3 className="mb-1 font-semibold text-[#2F4F4F]">{t('success_modal_management_title')}</h3>
                                <p className="text-[#333333]/70 text-sm">
                                    {t('success_modal_management_message')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className="flex justify-center mb-8">
                        <ChristmasIllustration variant="gift" className="w-32 h-32" />
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={onCreateAnother}
                            className="flex-1 px-6 py-4 bg-[#D24545] text-white rounded-xl hover:bg-[#D24545]/90 transition-all shadow-lg hover:shadow-xl font-medium"
                        >
                            {t('success_modal_cta_create_another')}
                        </button>
                        <button
                            onClick={onClose}
                            className="flex-1 px-6 py-4 bg-transparent text-[#2F4F4F] rounded-xl border-2 border-[#2F4F4F] hover:bg-[#2F4F4F] hover:text-white transition-all font-medium"
                        >
                            {t('success_modal_cta_home')}
                        </button>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}
