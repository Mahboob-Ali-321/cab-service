import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_DATA } from '../data/businessData';

interface StickyActionsProps {
  onOpenBookingModal?: () => void;
}

export const StickyActions: React.FC<StickyActionsProps> = ({ onOpenBookingModal }) => {
  const { t } = useLanguage();

  const whatsappDirectUrl = `https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
    'Namaste City Cab Service Indore, I would like to book a cab'
  )}`;

  return (
    <>
      {/* Desktop Floating Actions with Periodic Pulse */}
      <aside className="fixed bottom-8 right-6 z-40 hidden md:flex flex-col gap-3 items-end">
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_DATA.phoneInternational}`}
          className="w-12 h-12 rounded-full bg-[#263143] text-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200"
          title={`Call City Cab Service (${BUSINESS_DATA.phone})`}
          aria-label="Call City Cab Service"
        >
          <span className="material-symbols-outlined text-[22px]">call</span>
        </a>

        {/* WhatsApp Floating Button with subtle periodic pulse */}
        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#8d4b00] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 animate-whatsapp-pulse relative group"
          title="Book on WhatsApp"
          aria-label="Book on WhatsApp"
        >
          <span className="material-symbols-outlined text-[28px]">chat</span>
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#111c2d] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {t('Chat with Dispatcher', 'डिस्पैच से चैट करें')}
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-lg shadow-[0_-3px_16px_rgba(0,0,0,0.12)] px-3 py-2 sm:py-2.5 flex items-center justify-between gap-2 border-t border-[#e7eeff] pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {/* Call Now */}
        <a
          href={`tel:${BUSINESS_DATA.phoneInternational}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 h-11 sm:h-12 px-2 rounded-xl bg-[#f0f3ff] active:bg-[#dee8ff] text-[#111c2d] font-bold text-xs sm:text-sm active:scale-95 transition-all shadow-sm border border-[#e7eeff]"
        >
          <span className="material-symbols-outlined text-[18px] text-[#8d4b00]">call</span>
          <span>{t('Call Now', 'कॉल करें')}</span>
        </a>

        {/* Book on WhatsApp */}
        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 h-11 sm:h-12 px-2 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm active:scale-95 transition-all shadow-md"
        >
          <span className="material-symbols-outlined text-[18px]">chat</span>
          <span>{t('WhatsApp', 'व्हाट्सएप')}</span>
        </a>

        {/* Fare Quote Trigger or Book Cab */}
        <button
          onClick={onOpenBookingModal}
          className="flex-1 inline-flex items-center justify-center gap-1 h-11 sm:h-12 px-2 rounded-xl bg-[#8d4b00] active:bg-[#b15f00] text-white font-bold text-xs sm:text-sm active:scale-95 transition-all shadow-md cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">local_taxi</span>
          <span>{t('Book Cab', 'कैब बुक')}</span>
        </button>
      </nav>
    </>
  );
};
