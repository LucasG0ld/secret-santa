'use client';

import { useTranslation } from '../../i18n/client';

interface ConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal = ({ isOpen, onConfirm, onCancel }: ConfirmationModalProps) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 relative animate-scaleIn">
        <h2 className="text-2xl font-bold font-serif text-[#2F4F4F] mb-4">{t('confirm_modal_title')}</h2>
        <p className="text-[#333333]/70 mb-8">
          {t('confirm_modal_message')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <button
            onClick={onCancel}
            className="flex-1 px-6 py-3 bg-transparent text-[#2F4F4F] rounded-xl border-2 border-[#2F4F4F] hover:bg-[#2F4F4F] hover:text-white transition-all font-medium"
          >
            {t('confirm_modal_cancel')}
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-6 py-3 bg-[#D24545] text-white rounded-xl hover:bg-[#D24545]/90 transition-all shadow-lg hover:shadow-xl font-medium"
          >
            {t('confirm_modal_confirm')}
          </button>
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
};

export default ConfirmationModal;
