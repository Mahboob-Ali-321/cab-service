import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageSEO } from '../components/PageSEO';
import { BookingForm } from '../components/BookingForm';
import { BUSINESS_DATA } from '../data/businessData';

export const BookPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <PageSEO
        title="Book a Cab in Indore | Instant Fare Quote | City Cab Service"
        description="Book your cab in Indore instantly. Swift Dzire, Ertiga, and Tempo Travellers for Ujjain, Omkareshwar, Airport, and Local trips with zero advance fee."
        canonicalPath="/book"
      />

      <section className="bg-white py-12 md:py-16 border-b border-[#e7eeff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
              {t('Instant Dispatch Guarantee', 'तत्काल रवानगी गारंटी')}
            </span>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#111c2d] mt-2 mb-3">
              {t('Book Your Cab in Indore', 'इंदौर में अपनी कैब बुक करें')}
            </h1>
            <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
              {t(
                'Complete the form below to receive a guaranteed fixed quotation directly on WhatsApp. No advance payment required.',
                'नीचे दिए गए फॉर्म में यात्रा विवरण भरें और सीधे व्हाट्सएप पर कन्फर्म कोटेशन पाएं। अग्रिम भुगतान की कोई आवश्यकता नहीं है।'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#f9f9ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-[#e7eeff]">
            <BookingForm />
          </div>

          <div className="mt-8 text-center text-xs text-[#554336]">
            <span>{t('Need urgent pickup within 15 minutes? Direct call: ', '15 मिनट में तत्काल कैब चाहिए? सीधा कॉल करें: ')}</span>
            <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="text-[#8d4b00] font-bold underline">
              {BUSINESS_DATA.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
