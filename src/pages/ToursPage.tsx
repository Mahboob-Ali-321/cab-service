import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_DATA } from '../data/businessData';
import { PageSEO } from '../components/PageSEO';

export const ToursPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <PageSEO
        title="Ujjain Mahakal & Omkareshwar Tour Packages | Indore Taxi Tours"
        description="Book Indore to Ujjain Mahakaleshwar Jyotirlinga, Omkareshwar, Mandu, Maheshwar, and Patalpani taxi packages. Clean Dzire, Ertiga & Tempo Travellers with 3 AM Bhasma Aarti timing."
        canonicalPath="/tours"
      />

      {/* Header */}
      <section className="bg-white py-12 md:py-16 border-b border-[#e7eeff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
              {t('Pilgrimage & Heritage Circuits', 'तीर्थ एवं ऐतिहासिक सर्किट')}
            </span>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#111c2d] mt-2 mb-3">
              {t('Spiritual Yatras & Sightseeing Tours from Indore', 'इंदौर से तीर्थ यात्राएं एवं दर्शनीय टूर')}
            </h1>
            <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
              {t(
                'Explore the twin Jyotirlingas of Mahakaleshwar Ujjain and Omkareshwar, the romantic medieval ruins of Mandu, the sacred ghats of Maheshwar, and Indore city heritage with our seasoned drivers and transparent packages.',
                'उज्जैन महाकालेश्वर एवं ओंकारेश्वर के दोनों पावन ज्योतिर्लिंग दर्शन, मांडू की ऐतिहासिक धरोहर, महेश्वर के पाषाण घाट और इंदौर शहर भ्रमण के लिए हमारे सुव्यवस्थित टूर पैकेज।'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Special Callout: 3 AM Bhasma Aarti Guide */}
      <section className="bg-[#ffdcc3]/40 border-b border-[#ffb77d]/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#8d4b00] text-white flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">temple_hindu</span>
            </div>
            <div>
              <h2 className="font-serif font-bold text-sm text-[#111c2d]">
                {t('Early Morning 3:00 AM Mahakal Bhasma Aarti Service', 'तड़के 3:00 बजे महाकाल भस्म आरती विशेष सेवा')}
              </h2>
              <p className="text-xs text-[#554336]">
                {t(
                  'Vehicles depart Indore at 1:30 AM, wait at Ujjain temple parking during darshan, and safely escort you back with zero night surcharge.',
                  'हमारी कैब रात 1:30 बजे इंदौर से प्रस्थान कर भस्म आरती समाप्ति तक मंदिर पार्किंग में प्रतीक्षा करती है।'
                )}
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
              'Namaste City Cab Service, I want to book a cab for Ujjain Mahakal Bhasma Aarti (3 AM)'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-[#8d4b00] hover:bg-[#b15f00] text-white text-xs font-bold shrink-0 transition-colors shadow-sm"
          >
            {t('Book Bhasma Aarti Cab', 'भस्म आरती कैब बुक करें')}
          </a>
        </div>
      </section>

      {/* Curated Tour Packages */}
      <section className="py-14 bg-[#f9f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
              {t('Fixed Price Transparency', 'निश्चित दर एवं पूर्ण पारदर्शिता')}
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#111c2d] mt-1">
              {t('Curated Tour Packages', 'सर्वोत्तम टूर पैकेज')}
            </h2>
            <p className="text-xs sm:text-sm text-[#554336] mt-1">
              {t('All packages include vehicle fuel, tolls, and parking.', 'सभी पैकेजों में ईंधन, टोल और पार्किंग शुल्क शामिल हैं।')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_DATA.packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-[#e7eeff]"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-[#dee8ff]">
                    <img
                      src={pkg.image}
                      alt={pkg.id === 'pkg-ujjain' ? 'Mahakaleshwar Jyotirlinga temple, Ujjain' : pkg.titleEn}
                      className="w-full h-full object-cover"
                      style={pkg.id === 'pkg-ujjain' ? { objectPosition: 'center 20%' } : undefined}
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#8d4b00] text-white px-2.5 py-1 rounded text-xs font-bold">
                      {t(pkg.badgeEn, pkg.badgeHi)}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#263143]/90 text-white px-2.5 py-1 rounded text-xs">
                      {t(pkg.durationEn, pkg.durationHi)}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif font-bold text-xl text-[#111c2d] mb-1">
                      {t(pkg.titleEn, pkg.titleHi)}
                    </h3>
                    <p className="text-xs text-[#554336] leading-relaxed mb-4">
                      {t(pkg.descEn, pkg.descHi)}
                    </p>

                    <div className="space-y-1.5 py-3 bg-[#f0f3ff] rounded-xl px-3.5 mb-4 text-xs border border-[#e7eeff]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#554336]">Sedan (Maruti Dzire):</span>
                        <span className="font-bold text-[#111c2d]">
                          {pkg.rates.dzire > 100 ? `₹${pkg.rates.dzire}` : `₹${pkg.rates.dzire}/km`}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#554336]">MPV (Maruti Ertiga):</span>
                        <span className="font-bold text-[#111c2d]">
                          {pkg.rates.ertiga > 100 ? `₹${pkg.rates.ertiga}` : `₹${pkg.rates.ertiga}/km`}
                        </span>
                      </div>
                      {pkg.rates.tempo && (
                        <div className="flex items-center justify-between">
                          <span className="text-[#554336]">Tempo (12-17 Pax):</span>
                          <span className="font-bold text-[#111c2d]">
                            {pkg.rates.tempo > 100 ? `₹${pkg.rates.tempo}` : `₹${pkg.rates.tempo}/km`}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-1.5 text-xs text-[#554336]">
                      {pkg.highlightsEn.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-emerald-600">
                            check_circle
                          </span>
                          <span>{t(h, pkg.highlightsHi[idx])}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
                      `Namaste City Cab Service, I want to book: ${pkg.titleEn}. Please confirm availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[#8d4b00] hover:bg-[#b15f00] text-white text-xs font-bold text-center block transition-colors shadow-sm"
                  >
                    {t('Book This Tour on WhatsApp', 'यह यात्रा व्हाट्सएप पर बुक करें')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Profiles */}
      <section className="py-14 bg-white border-t border-[#e7eeff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#111c2d]">
              {t('Explore Major Destinations', 'प्रमुख दर्शनीय स्थल')}
            </h2>
            <p className="text-xs text-[#554336] mt-1">
              {t('Direct taxi transfers available from anywhere in Indore and Airport.', 'इंदौर शहर और एयरपोर्ट से सीधी टैक्सी सेवा उपलब्ध।')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_DATA.destinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-[#f0f3ff] rounded-2xl overflow-hidden border border-[#e7eeff] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.id === 'ujjain' ? 'Mahakaleshwar Jyotirlinga temple, Ujjain' : dest.nameEn}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      style={dest.id === 'ujjain' ? { objectPosition: 'center 20%' } : undefined}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-[#8d4b00] font-bold uppercase tracking-wider">
                        {t(dest.tagEn, dest.tagHi)}
                      </span>
                      <span className="text-xs text-[#554336]">{t(dest.distanceEn, dest.distanceHi)}</span>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-[#111c2d] mb-2">
                      {t(dest.nameEn, dest.nameHi)}
                    </h3>
                    <p className="text-xs text-[#554336] leading-relaxed mb-3">
                      {t(dest.descEn, dest.descHi)}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.chipsEn.map((c, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-white text-[#111c2d] border border-[#e7eeff]">
                          {t(c, dest.chipsHi[i])}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
                      `Namaste City Cab Service, I want to book a taxi from Indore to ${dest.nameEn}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-white hover:bg-[#8d4b00] hover:text-white text-[#111c2d] text-xs font-bold text-center block transition-colors border border-[#cfdaf2]"
                  >
                    {t(`Book Taxi to ${dest.nameEn}`, `${dest.nameHi} हेतु कैब बुक करें`)}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
