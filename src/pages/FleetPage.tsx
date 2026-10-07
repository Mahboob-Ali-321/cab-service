import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_DATA, Vehicle } from '../data/businessData';
import { PageSEO } from '../components/PageSEO';
import { BookingQuoteModal } from '../components/BookingQuoteModal';

export const FleetPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="w-full">
      <PageSEO
        title="Our Fleet | Maruti Dzire, Ertiga & Tempo Traveller | City Cab Indore"
        description="Explore the City Cab Service Indore fleet: Maruti Dzire (MP09TB5877), 6-seater Ertiga (MP09WK6994), and 12-26 seater Force Tempo Travellers with All India Permits."
        canonicalPath="/fleet"
      />

      <BookingQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        vehicleName={selectedVehicle ? selectedVehicle.name : 'Maruti Suzuki Dzire'}
        vehicleReg={selectedVehicle ? selectedVehicle.regNumber : 'MP09TB5877'}
      />

      {/* Page Header */}
      <section className="bg-white py-12 md:py-16 border-b border-[#e7eeff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
              {t('Commercial MP-09 Certified Fleet', 'कमर्शियल MP-09 प्रमाणित वाहन बेड़ा')}
            </span>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#111c2d] mt-2 mb-3">
              {t('Our Verified Fleet in Indore', 'हमारा प्रमाणित वाहन बेड़ा')}
            </h1>
            <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
              {t(
                'Every vehicle in our fleet is fully licensed with commercial yellow number plates, pristine interiors, chilled air conditioning, and experienced chauffeurs who know Madhya Pradesh roads inside out.',
                'हमारी सभी गाड़ियां कमर्शियल येलो नंबर प्लेट, नियमित सर्विसिंग, साफ-सुथरे इंटीरियर और मध्यप्रदेश के मार्गों से भली-भांति परिचित अनुभवी ड्राइवरों के साथ उपलब्ध हैं।'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Vehicles Detailed Grid */}
      <section className="py-14 bg-[#f9f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {BUSINESS_DATA.vehicles.map((v, index) => (
              <div
                key={v.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e7eeff] grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Vehicle Photo */}
                <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto bg-[#dee8ff]">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-[#111c2d] shadow">
                    {v.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#263143]/95 text-white px-3 py-1 rounded-md text-xs font-mono shadow">
                    Reg: {v.regNumber}
                  </div>
                </div>

                {/* Details & Specifications */}
                <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h2 className="font-serif font-bold text-2xl text-[#111c2d]">{v.name}</h2>
                      <div className="text-right">
                        <span className="text-xs text-[#554336] block">{t('Base Rate', 'आधार दर')}</span>
                        <span className="font-serif font-bold text-lg text-[#8d4b00]">
                          ₹{v.ratePerKm} / km
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#554336] mb-4 leading-relaxed">
                      {t(v.descEn, v.descHi)}
                    </p>

                    {/* Spec badges */}
                    <div className="grid grid-cols-3 gap-3 py-3 bg-[#f0f3ff] rounded-xl mb-4 text-xs font-semibold text-[#111c2d] text-center border border-[#e7eeff]">
                      <div>
                        <span className="text-[#554336] block text-[11px]">{t('Capacity', 'क्षमता')}</span>
                        <strong className="text-[#111c2d] text-sm">{v.seats}</strong>
                      </div>
                      <div>
                        <span className="text-[#554336] block text-[11px]">{t('Luggage Space', 'सामान स्थान')}</span>
                        <strong className="text-[#111c2d] text-sm">{v.luggage}</strong>
                      </div>
                      <div>
                        <span className="text-[#554336] block text-[11px]">{t('Climate', 'एसी')}</span>
                        <strong className="text-[#111c2d] text-sm">{v.acType}</strong>
                      </div>
                    </div>

                    {/* Key features */}
                    <div className="space-y-2 mb-4">
                      <span className="text-xs font-bold text-[#111c2d] uppercase tracking-wider block">
                        {t('Features & Equipment:', 'सुविधाएं एवं विशेषताएं:')}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#554336]">
                        {v.highlightsEn.map((h, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[#8d4b00] text-[18px]">
                              check_circle
                            </span>
                            <span>{t(h, v.highlightsHi[idx])}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#dae2fd]/40 border border-[#dae2fd] text-xs text-[#131b2e] mb-4">
                      <strong className="font-bold">{t('Best For: ', 'इसके लिए सबसे उपयुक्त: ')}</strong>
                      <span>{t(v.bestForEn, v.bestForHi)}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#f0f3ff] flex flex-wrap items-center gap-3">
                    <a
                      href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
                        `Namaste City Cab Service, I want to book ${v.name} (${v.regNumber}). Please share availability.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-[#8d4b00] hover:bg-[#b15f00] text-white text-xs font-bold text-center transition-colors shadow-sm flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>{t(`Book ${v.name} on WhatsApp`, `${v.name} व्हाट्सएप पर बुक करें`)}</span>
                    </a>
                    <button
                      onClick={() => {
                        setSelectedVehicle(v);
                        setIsQuoteOpen(true);
                      }}
                      className="py-3 px-4 rounded-xl bg-[#f0f3ff] hover:bg-[#dee8ff] text-[#111c2d] text-xs font-bold transition-colors cursor-pointer border border-[#cfdaf2]"
                    >
                      {t('View Fare Summary', 'किराया विवरण देखें')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Fleet: Innova Crysta callout */}
          <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-[#e7eeff] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-wider">
                {t('Premium Executive Option', 'प्रीमियम एग्जीक्यूटिव विकल्प')}
              </span>
              <h3 className="font-serif font-bold text-xl text-[#111c2d]">
                {t('Need Toyota Innova Crysta?', 'टोयोटा इनोवा क्रिस्टा की आवश्यकता है?')}
              </h3>
              <p className="text-xs text-[#554336] max-w-xl">
                {t(
                  'We also provide luxury Toyota Innova Crysta 6 & 7-seater vehicles for corporate VIP movements and premium family darshan tours upon advance request.',
                  'वीआईपी कॉरपोरेट डेलिगेट्स और प्रीमियम फैमिली यात्रा हेतु 6 व 7 सीटर टोयोटा इनोवा क्रिस्टा अग्रिम अनुरोध पर उपलब्ध है।'
                )}
              </p>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
                'Namaste City Cab Service, I want to inquire about Toyota Innova Crysta booking in Indore'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#263143] text-white font-bold text-xs hover:bg-[#111c2d] transition-colors shrink-0 shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>{t('Inquire Innova Crysta', 'इनोवा क्रिस्टा हेतु संपर्क करें')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
