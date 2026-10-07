import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_DATA } from '../data/businessData';
import { PageSEO } from '../components/PageSEO';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <PageSEO
        title="About City Cab Service Indore | Trusted Chauffeurs & Pilgrimage Travel"
        description="Learn about City Cab Service Indore: Licensed commercial MP-09 fleet, trusted chauffeurs like Bunty Bhaiya, spotless AC cabs, and verified safety for families and solo female travellers."
        canonicalPath="/about"
      />

      {/* Header */}
      <section className="bg-white py-12 md:py-16 border-b border-[#e7eeff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
              {t('Serving Indore with Heart & Hospitality', 'इंदौर की सेवा में समर्पित एवं निष्ठावान')}
            </span>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#111c2d] mt-2 mb-3">
              {t('About City Cab Service (सिटी कैब सर्विस)', 'सिटी कैब सर्विस के बारे में')}
            </h1>
            <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
              {t(
                'Headquartered at 35E Prajapat Nagar, Indore, City Cab Service was founded on a simple promise: spotless clean cars, punctual arrivals, honest transparent pricing, and drivers who care for your family’s safety as their own.',
                '35E, प्रजापत नगर, इंदौर स्थित सिटी कैब सर्विस की स्थापना एक स्पष्ट संकल्प के साथ हुई: स्वच्छ गाड़ियां, समय की पाबंदी, पारदर्शी बिलिंग और यात्रियों की सुरक्षा के प्रति पूर्ण समर्पण।'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Key Story & Founder / Driver Tribute */}
      <section className="py-14 bg-[#f9f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-wider">
                {t('Driver Spotlight', 'ड्राइवर एवं आतिथ्य गौरव')}
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#111c2d]">
                {t('Safe Travel Trusted by Solo Travelers & Families', 'सोलो महिला यात्रियों एवं परिवारों का अटूट विश्वास')}
              </h2>
              <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                {t(
                  'Our drivers, including renowned chauffeurs like Bunty Bhaiya, are celebrated across Indore for their calm, defensive highway driving, deep respect for passengers, and punctual reporting even for 3:00 AM Bhasma Aarti temple departures.',
                  'हमारे ड्राइवर साथी, जैसे बंटी भैया, पूरे इंदौर में अपनी सुरक्षित हाईवे ड्राइविंग, यात्रियों के प्रति विनम्रता और सुबह 3 बजे की भस्म आरती यात्राओं में समय की पाबंदी के लिए जाने जाते हैं।'
                )}
              </p>

              {/* Review callout block */}
              <div className="p-4 rounded-xl bg-white border border-[#e7eeff] shadow-sm space-y-2">
                <div className="flex text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <blockquote className="text-xs text-[#111c2d] italic leading-relaxed">
                  “Bunty Bhaiya is the best cab driver in Indore. He is an excellent driver and drives very safely. The cab is also very clean and well maintained. I was a solo female traveller and felt so safe going to Mandav and Ujjain with him.”
                </blockquote>
                <p className="text-[11px] font-bold text-[#8d4b00]">— Bulbul Kumar, Local Guide</p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="px-5 py-2.5 rounded-xl bg-[#263143] text-white text-xs font-bold hover:bg-[#111c2d] transition-colors"
                >
                  {t('Call Our Office: 099933 36703', 'कार्यालय कॉल: 099933 36703')}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e7eeff] space-y-4">
                <h3 className="font-serif font-bold text-lg text-[#111c2d]">
                  {t('Our Foundational Pillars', 'हमारे प्रमुख सिद्धांत')}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f0f3ff]">
                    <span className="material-symbols-outlined text-[#8d4b00] text-[22px] mt-0.5">verified</span>
                    <div>
                      <strong className="text-xs font-bold text-[#111c2d] block">
                        {t('100% Commercial Yellow Plates', '100% कमर्शियल येलो नंबर प्लेट्स')}
                      </strong>
                      <span className="text-xs text-[#554336]">
                        {t(
                          'We never operate private white-plate cars for commercial transit. Every vehicle carries genuine MP-09 commercial taxi fitness, passenger insurance, and interstate permits.',
                          'हम कभी भी प्राइवेट गाड़ियों का प्रयोग नहीं करते। सभी वाहनों में वैध कमर्शियल परमिट, यात्री बीमा व फिटनेस उपलब्ध है।'
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f0f3ff]">
                    <span className="material-symbols-outlined text-[#8d4b00] text-[22px] mt-0.5">cleaning_services</span>
                    <div>
                      <strong className="text-xs font-bold text-[#111c2d] block">
                        {t('Spotless Cabin Hygiene', 'सैनिटाइज्ड एवं स्वच्छ केबिन')}
                      </strong>
                      <span className="text-xs text-[#554336]">
                        {t(
                          'Regular dry-cleaning, fresh fragrance, and chilled AC ensure complete relaxation after long train journeys or flights.',
                          'नियमित सफाई और ताजगी भरा वातावरण जिससे आपकी यात्रा आरामदायक और सुगंधित रहे।'
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f0f3ff]">
                    <span className="material-symbols-outlined text-[#8d4b00] text-[22px] mt-0.5">route</span>
                    <div>
                      <strong className="text-xs font-bold text-[#111c2d] block">
                        {t('Deep Regional Route Expertise', 'मार्गों एवं दर्शन स्थलों की गहरी समझ')}
                      </strong>
                      <span className="text-xs text-[#554336]">
                        {t(
                          'From the best breakfast poha points at Chhappan Dukan to VIP gates at Mahakal Lok and Narmada boating points in Omkareshwar, our drivers guide you seamlessly.',
                          'उज्जैन महाकाल के गेट नंबर से लेकर ओंकारेश्वर बोटिंग और इंदौर के मशहूर खान-पान तक संपूर्ण मार्गदर्शन।'
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-xl p-5 border border-[#e7eeff] shadow-sm">
              <span className="font-serif font-bold text-2xl sm:text-3xl text-[#8d4b00]">5.0 ★</span>
              <p className="text-xs font-bold text-[#111c2d] mt-1">{t('Google Rating', 'गूगल रेटिंग')}</p>
              <p className="text-[11px] text-[#554336]">28+ Verified Reviews</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-[#e7eeff] shadow-sm">
              <span className="font-serif font-bold text-2xl sm:text-3xl text-[#8d4b00]">3,500+</span>
              <p className="text-xs font-bold text-[#111c2d] mt-1">{t('Happy Families', 'प्रसन्न परिवार')}</p>
              <p className="text-[11px] text-[#554336]">Indore, Ujjain & Mandu</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-[#e7eeff] shadow-sm">
              <span className="font-serif font-bold text-2xl sm:text-3xl text-[#8d4b00]">24 / 7</span>
              <p className="text-xs font-bold text-[#111c2d] mt-1">{t('Availability', 'सेवा उपलब्धता')}</p>
              <p className="text-[11px] text-[#554336]">Day & Night Transfers</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-[#e7eeff] shadow-sm">
              <span className="font-serif font-bold text-2xl sm:text-3xl text-[#8d4b00]">100%</span>
              <p className="text-xs font-bold text-[#111c2d] mt-1">{t('Legal Permits', 'कानूनी परमिट')}</p>
              <p className="text-[11px] text-[#554336]">All India Tourist Plate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
