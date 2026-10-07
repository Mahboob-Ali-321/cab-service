import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_DATA, ServiceItem } from '../data/businessData';
import { PageSEO } from '../components/PageSEO';
import { BookingQuoteModal } from '../components/BookingQuoteModal';

export const ServicesPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="w-full">
      <PageSEO
        title="Cab Services in Indore | Airport, Local & Outstation Taxi | City Cab"
        description="Comprehensive cab services in Indore: Airport transfers (IDR), local hourly rental (8h/80km), one way taxi, outstation yatra cabs, and Tempo Travellers."
        canonicalPath="/services"
      />

      <BookingQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        destinationTitle={selectedService ? selectedService.titleEn : 'Indore Cab Service'}
      />

      {/* Page Hero */}
      <section className="bg-white py-12 md:py-16 border-b border-[#e7eeff] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
              {t('Transparent, Verified & On-Time', 'पारदर्शी, सत्यापित एवं समयबद्ध')}
            </span>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#111c2d] mt-2 mb-3">
              {t('Our Cab Services in Indore', 'इंदौर में हमारी संपूर्ण कैब सेवाएं')}
            </h1>
            <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
              {t(
                'From urgent midnight airport transfers to multi-day temple darshan circuits, City Cab Service provides dedicated vehicles driven by verified regional chauffeurs with zero surge pricing.',
                'मध्य रात्रि एयरपोर्ट ट्रांसफर से लेकर कई दिनों की तीर्थ दर्शन यात्राओं तक, सिटी कैब सर्विस बिना किसी पीक सर्ज के पारदर्शी दरों पर सुरक्षित कैब उपलब्ध कराती है।'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid with in-depth features */}
      <section className="py-14 bg-[#f9f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_DATA.services.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-[#e7eeff] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] mb-4">
                    <span className="material-symbols-outlined text-[26px]">{srv.icon}</span>
                  </div>
                  <h2 className="font-serif font-bold text-lg text-[#111c2d] mb-2">
                    {t(srv.titleEn, srv.titleHi)}
                  </h2>
                  <p className="text-xs text-[#554336] leading-relaxed mb-4">
                    {t(srv.descEn, srv.descHi)}
                  </p>

                  <div className="space-y-2 mb-4">
                    <span className="text-[11px] font-bold text-[#111c2d] uppercase tracking-wider block">
                      {t('Key Inclusions:', 'विशेषताएं:')}
                    </span>
                    {srv.featuresEn.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-[#554336]">
                        <span className="material-symbols-outlined text-[16px] text-emerald-600 mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span>{t(f, srv.featuresHi[idx])}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#f0f3ff] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#554336]">{t('Fare Rate', 'किराया दर')}</span>
                    <span className="text-xs font-bold text-[#8d4b00] bg-[#ffdcc3]/50 px-2.5 py-0.5 rounded">
                      {t(srv.startingFareEn, srv.startingFareHi)}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
                      `Namaste City Cab Service, I want to book: ${srv.titleEn}. Please share the best rate.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#8d4b00] hover:bg-[#b15f00] text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>{t('Book This Service', 'यह सेवा बुक करें')}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Service Policies & Guarantees */}
          <div className="mt-14 bg-white rounded-2xl p-6 md:p-8 border border-[#e7eeff] shadow-sm">
            <h3 className="font-serif font-bold text-xl text-[#111c2d] mb-4">
              {t('Our Service Guarantees', 'हमारी सेवा गारंटी')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#554336]">
              <div className="p-4 rounded-xl bg-[#f0f3ff] space-y-2">
                <span className="font-bold text-sm text-[#111c2d] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#8d4b00]">timer</span>
                  {t('Punctuality Assurance', 'समय की पाबंदी')}
                </span>
                <p>
                  {t(
                    'For flight departures and morning 3 AM Bhasma Aarti, drivers report 15 minutes before the pickup schedule.',
                    'फ्लाइट प्रस्थान और सुबह 3 बजे भस्म आरती के लिए ड्राइवर 15 मिनट पूर्व उपस्थित रहता है।'
                  )}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f0f3ff] space-y-2">
                <span className="font-bold text-sm text-[#111c2d] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#8d4b00]">sanitizer</span>
                  {t('Strict Fleet Sanitization', 'सख्त स्वच्छता मानक')}
                </span>
                <p>
                  {t(
                    'Clean seat upholstery, crisp AC ventilation, and regular dust vacuuming before every journey.',
                    'प्रत्येक सफर से पहले स्वच्छ सीट कवर, प्रभावी एसी और इंटीरियर की सफाई।'
                  )}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f0f3ff] space-y-2">
                <span className="font-bold text-sm text-[#111c2d] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#8d4b00]">receipt</span>
                  {t('No Hidden Charges', 'पारदर्शी बिलिंग')}
                </span>
                <p>
                  {t(
                    'State tolls, driver allowances, and parking fees are clearly specified in advance with zero surprise markups.',
                    'टोल, पार्किंग एवं ड्राइवर भत्ते की अग्रिम स्पष्ट जानकारी, कोई छुपा हुआ शुल्क नहीं।'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
