import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_DATA, GOOGLE_MAPS_URL } from '../data/businessData';
import { PageSEO } from '../components/PageSEO';
import { BookingForm } from '../components/BookingForm';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <PageSEO
        title="Contact City Cab Service Indore | Phone: 099933 36703 | 24/7 Booking"
        description="Contact City Cab Service Indore: 35E, Prajapat Nagar, Indore, MP 452009. Call 099933 36703 or message on WhatsApp for 24/7 cab booking, airport transfers & pilgrimage packages."
        canonicalPath="/contact"
      />

      {/* Header */}
      <section className="bg-white py-12 md:py-16 border-b border-[#e7eeff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
              {t('24/7 Indore Dispatch Desk', '24/7 इंदौर डिस्पैच डेस्क')}
            </span>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#111c2d] mt-2 mb-3">
              {t('Contact City Cab Service', 'सिटी कैब सर्विस से संपर्क करें')}
            </h1>
            <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
              {t(
                'Have a question about route timings, vehicle availability, or customized group packages? Contact our dispatcher anytime day or night.',
                'मार्ग समय, गाड़ियों की उपलब्धता या ग्रुप पैकेज के संबंध में कभी भी दिन या रात हमारे डिस्पैच डेस्क से संपर्क करें।'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-14 bg-[#f9f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Contact Info & Map Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e7eeff] space-y-5">
                <h2 className="font-serif font-bold text-xl text-[#111c2d]">
                  {t('Registered Office', 'पंजीकृत कार्यालय')}
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[22px]">location_on</span>
                    </div>
                    <div>
                      <p className="font-bold text-xs text-[#111c2d]">{t('Office Address', 'कार्यालय का पता')}</p>
                      <p className="text-xs text-[#554336] mt-0.5 leading-relaxed">{BUSINESS_DATA.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[22px]">call</span>
                    </div>
                    <div>
                      <p className="font-bold text-xs text-[#111c2d]">{t('24/7 Telephone Booking', '24/7 फोन बुकिंग')}</p>
                      <a
                        href={`tel:${BUSINESS_DATA.phoneRaw}`}
                        className="font-serif font-bold text-lg text-[#8d4b00] hover:underline block"
                      >
                        {BUSINESS_DATA.phone}
                      </a>
                      <p className="text-[11px] text-[#554336]">
                        {t('Instant cab confirmation in 2 minutes', 'मात्र 2 मिनट में कैब कन्फर्मेशन')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[22px]">chat</span>
                    </div>
                    <div>
                      <p className="font-bold text-xs text-[#111c2d]">{t('WhatsApp Direct Chat', 'व्हाट्सएप चैट')}</p>
                      <a
                        href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-xs text-emerald-700 hover:underline block mt-0.5"
                      >
                        +91 99933 36703
                      </a>
                      <p className="text-[11px] text-[#554336]">
                        {t('Send itinerary & get fare quote instantly', 'यात्रा विवरण भेजकर तुरंत कोटेशन पाएं')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[22px]">schedule</span>
                    </div>
                    <div>
                      <p className="font-bold text-xs text-[#111c2d]">{t('Working Hours', 'कार्य समय')}</p>
                      <p className="text-xs text-[#554336] mt-0.5">{BUSINESS_DATA.workingHours}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#263143] text-white text-xs font-bold text-center hover:bg-[#111c2d] transition-colors"
                  >
                    {t('Call Now', 'कॉल करें')}
                  </a>
                  <a
                    href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold text-center hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Map Card */}
              <div className="bg-[#f0f3ff] rounded-2xl overflow-hidden shadow-md p-3 border border-[#e7eeff]">
                <div
                  className="w-full min-h-[260px] rounded-xl bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD60WKKT0LcIMmaZ2O1qg7Tcbss8KahrG6hL_Ko4OQy-W_D0g-Nx0_7LzTrudaVuyLeC2A3G4CNYyzFKAasElQ5-PkeX6cBo6nXKwmhaFEEhORFrJR8CZ83hzIDYhrOYOJgIPaFCtGEVuEvStH8TcyYaYLdApFsoH48hW1fcTdSCjPmSZHKNXkTJHQ_UX6HYULxU3dTLzuqNu7D5wOW8o3U0d-whK3G9gSu5Bxhp2E')`,
                  }}
                >
                  <div className="absolute inset-0 bg-[#263143]/10 rounded-xl" />
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg max-w-xs border border-[#e7eeff]">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="material-symbols-outlined text-[#8d4b00] text-[18px]">local_taxi</span>
                      <strong className="text-xs text-[#111c2d]">{BUSINESS_DATA.name}</strong>
                    </div>
                    <p className="text-[11px] text-[#554336] mb-1.5">{BUSINESS_DATA.address}</p>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-[#8d4b00] font-bold hover:underline"
                    >
                      <span>{t('Open in Google Maps', 'गूगल मैप्स में खोलें')}</span>
                      <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enquiry / Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e7eeff]">
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-wider block">
                    {t('Direct WhatsApp Dispatch', 'सीधी व्हाट्सएप बुकिंग')}
                  </span>
                  <h2 className="font-serif font-bold text-2xl text-[#111c2d]">
                    {t('Send Ride Enquiry', 'यात्रा पूछताछ भेजें')}
                  </h2>
                  <p className="text-xs text-[#554336] mt-1">
                    {t(
                      'Fill out the form below to receive an instant fare quotation directly on WhatsApp.',
                      'नीचे दिया गया फॉर्म भरें और व्हाट्सएप पर तुरंत किराया विवरण प्राप्त करें।'
                    )}
                  </p>
                </div>

                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
