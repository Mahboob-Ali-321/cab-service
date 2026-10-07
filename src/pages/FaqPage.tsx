import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_DATA } from '../data/businessData';
import { PageSEO } from '../components/PageSEO';

export const FaqPage: React.FC = () => {
  const { t } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="w-full">
      <PageSEO
        title="Frequently Asked Questions (FAQ) | City Cab Service Indore"
        description="Got questions about booking taxi in Indore? Find answers about one way taxi drops, Bhasma Aarti waiting, airport transfers, Tempo Travellers, tolls, and cancellation."
        canonicalPath="/faq"
      />

      {/* Header */}
      <section className="bg-white py-12 md:py-16 border-b border-[#e7eeff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
              {t('Clear Answers, No Ambiguity', 'स्पष्ट उत्तर, कोई संशय नहीं')}
            </span>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#111c2d] mt-2 mb-3">
              {t('Frequently Asked Questions & Booking Policies', 'अक्सर पूछे जाने वाले प्रश्न एवं बुकिंग नियम')}
            </h1>
            <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
              {t(
                'Everything you need to know about booking with City Cab Service Indore, payment methods, vehicle rules, and outstation travel conditions.',
                'सिटी कैब सर्विस इंदौर की बुकिंग, भुगतान के साधन, वाहन नियमों और आउटस्टेशन यात्रा से जुड़ी संपूर्ण जानकारी।'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-14 bg-[#f9f9ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          {BUSINESS_DATA.faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e7eeff]"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#111c2d] hover:text-[#8d4b00] transition-colors cursor-pointer"
                >
                  <span>{t(faq.questionEn, faq.questionHi)}</span>
                  <span
                    className={`material-symbols-outlined text-[24px] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#8d4b00]' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#554336] leading-relaxed border-t border-[#f0f3ff] pt-4">
                    {t(faq.answerEn, faq.answerHi)}
                  </div>
                )}
              </div>
            );
          })}

          {/* Additional Policy Cards */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 border border-[#e7eeff] shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8d4b00]">payments</span>
                <h3 className="font-bold text-sm text-[#111c2d]">
                  {t('Payment Modes Accepted', 'स्वीकृत भुगतान माध्यम')}
                </h3>
              </div>
              <p className="text-xs text-[#554336] leading-relaxed">
                {t(
                  'Pay directly to driver upon arrival via Cash, Google Pay, PhonePe, Paytm, or direct bank UPI transfer. No advance card entry needed.',
                  'सफर पूरा होने पर कैश, गूगल पे, फोनपे, पेटीएम या बैंक यूपीआई द्वारा सीधे ड्राइवर को भुगतान करें। किसी क्रेडिट कार्ड की आवश्यकता नहीं।'
                )}
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-[#e7eeff] shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8d4b00]">event_busy</span>
                <h3 className="font-bold text-sm text-[#111c2d]">
                  {t('Cancellation Policy', 'कैंसिलेशन नीति')}
                </h3>
              </div>
              <p className="text-xs text-[#554336] leading-relaxed">
                {t(
                  'Plans change! You can cancel or reschedule your ride with zero penalty by simply informing our 24/7 dispatcher at least 2 hours prior to pickup.',
                  'यात्रा में बदलाव होने पर पिकअप से कम से कम 2 घंटे पूर्व हमारे हेल्पलाइन पर सूचित करके बिना किसी पेनल्टी के कैब रद्द या रीशेड्यूल कर सकते हैं।'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
