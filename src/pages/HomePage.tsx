import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_DATA, GOOGLE_MAPS_URL, GalleryPhoto } from '../data/businessData';
import { BookingForm } from '../components/BookingForm';
import { PageSEO } from '../components/PageSEO';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { BookingQuoteModal } from '../components/BookingQuoteModal';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();

  // Modal states
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState<GalleryPhoto | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'vehicles' | 'groups' | 'destinations'>('all');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const filteredGallery = BUSINESS_DATA.gallery.filter((p) => {
    if (galleryFilter === 'all') return true;
    return p.category === galleryFilter;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="w-full">
      <PageSEO
        title="City Cab Service Indore | Premier Taxi & Spiritual Tours"
        description="Reliable cab and pilgrimage taxi service in Indore. Clean Dzire, Ertiga, and Tempo Travellers for local travel, airport transfers, Ujjain Mahakal, and Omkareshwar Jyotirlinga."
        canonicalPath="/"
      />

      {/* Quote summary modal if requested */}
      <BookingQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Gallery Lightbox */}
      <GalleryLightbox
        photo={selectedGalleryPhoto}
        allPhotos={BUSINESS_DATA.gallery}
        onClose={() => setSelectedGalleryPhoto(null)}
        onSelectPhoto={(photo) => setSelectedGalleryPhoto(photo)}
      />

      {/* ========================================== */}
      {/* 1. HERO SECTION                            */}
      {/* ========================================== */}
      <section className="relative overflow-hidden bg-white text-[#111c2d] py-10 md:py-18 lg:py-20" id="hero">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#8d4b00]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#ffddb8]/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Editorial Content */}
            <div className="lg:col-span-7 space-y-5">
              {/* Google rating badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f0f3ff] shadow-sm border border-[#e7eeff]">
                <div className="flex items-center text-[#f59e0b] text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="text-xs font-bold text-[#111c2d]">5.0 Rated</span>
                <span className="text-[#554336] text-xs">• 28+ Google Reviews</span>
              </div>

              {/* Main Title */}
              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111c2d] tracking-tight leading-tight">
                {t('Reliable Cab Service in', 'विश्वसनीय कैब सर्विस')}{' '}
                <span className="text-[#8d4b00] italic font-serif">Indore</span>
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-base text-[#554336] max-w-2xl leading-relaxed">
                {t(
                  'Safe, clean and comfortable rides for local city travel, outstation trips, Devi Ahilya Bai Holkar Airport transfers, and revered pilgrimage yatras across Madhya Pradesh.',
                  'इंदौर शहर, एयरपोर्ट ट्रांसफर, उज्जैन महाकाल, ओंकारेश्वर एवं संपूर्ण मध्य प्रदेश तीर्थ यात्राओं के लिए साफ-सुथरी, सुरक्षित एवं विश्वसनीय कैब सर्विस।'
                )}
              </p>

              {/* Core Value Highlights */}
              <div className="flex flex-wrap gap-y-2 gap-x-4 pt-1 text-xs font-bold text-[#111c2d]">
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#8d4b00] text-[20px]">check_circle</span>
                  {t('Clean Sanitized Cars', 'स्वच्छ सैनिटाइज्ड गाड़ियां')}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#8d4b00] text-[20px]">verified_user</span>
                  {t('Professional Drivers', 'अनुभवी एवं विनम्र ड्राइवर')}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#8d4b00] text-[20px]">schedule</span>
                  {t('24/7 Guaranteed Pickup', '24/7 समय पर पिकअप')}
                </span>
              </div>

              {/* Call to actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#booking-form"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#8d4b00] text-white text-xs sm:text-sm font-bold hover:bg-[#b15f00] transition-all shadow-md hover:shadow-lg"
                >
                  <span className="material-symbols-outlined text-[20px]">local_taxi</span>
                  <span>{t('Book Your Cab', 'कैब बुक करें')}</span>
                </a>
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#263143] text-white text-xs sm:text-sm font-bold hover:bg-[#111c2d] transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  <span>{t('Call 099933 36703', 'कॉल 099933 36703')}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
                    'Namaste City Cab Service, I want to inquire about a taxi booking'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#dae2fd] text-[#131b2e] text-xs sm:text-sm font-bold hover:bg-[#bec6e0] transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Trust Sub-badge */}
              <div className="pt-2 flex items-center gap-1.5 text-[#554336] text-xs">
                <span className="material-symbols-outlined text-[#8d4b00] text-[18px]">verified</span>
                <span>
                  {t(
                    'Trusted by over 3,500+ families & pilgrims visiting Indore, Ujjain & Omkareshwar',
                    'इंदौर, उज्जैन और ओंकारेश्वर आने वाले 3,500+ परिवारों का अटूट भरोसा'
                  )}
                </span>
              </div>
            </div>

            {/* Right: Fleet Showcase Mosaic */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative bg-[#f0f3ff] rounded-2xl p-3 shadow-xl border border-[#e7eeff]">
                {/* Main Hero Image: Maruti Suzuki Dzire */}
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-[#dee8ff]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB12pl1EByee2TsUvE5F7jHtmuNg-EEtG1Z6lJI1DHzkRq5JZQXeeqr3Ph8rl1CcVsx1cBcbb8Sob9keW6YCyl0ZMv5T08Cr-NOfCh4UsuteuU2EA8XMRIa-SvrLUop_EE7FWIJXHDCe68hBj3WZraavS1jjo8_yCuhnOz0FPIamYqi8h4i7R8jMP3gfwb9Nkg6QDljLzaMzywShsF_qkPpwhhWRzd9nDzLH1JLRmc3qjMAJYqxnArw"
                    alt="City Cab Service Maruti Suzuki Dzire Sedan MP09TB5877"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#263143]/90 backdrop-blur-md text-white px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 shadow">
                    <span className="material-symbols-outlined text-[16px] text-[#ffddb8]">directions_car</span>
                    <span>Maruti Dzire • MP 09 TB 5877</span>
                  </div>
                </div>

                {/* Overlapping Card: Force Tempo Traveller */}
                <div className="absolute -bottom-5 -left-5 w-3/5 rounded-xl overflow-hidden shadow-2xl bg-white p-2 hidden sm:block border border-[#e7eeff]">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-[#dee8ff]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuABWE_etdSilvbf2VvTCdDFETklmTFBGJe94QOGeNh_danqklYK4c7B22QcYokeOJCD_jc88EsMRwWQaVwqg8LBzeqvxF5Qlld7lShcL6-upcWgic6rzN1WU1ucPCStUL5En9JskczGl6EoOcKmrX5w6yawitDSyUHSCTTn_YsLiSiTjwpEhHmbmmNOcPtK0UfwzJAq7E1d7kZIY6STpmq15yDyE_KkHv-itmPb1i0O85Mjwp_ppEOt"
                      alt="City Cab Force Tempo Traveller Tourist Van"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-2 px-1 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#111c2d]">12-26 Seater Tempo</span>
                    <span className="text-[#8d4b00] font-bold">Group Yatra</span>
                  </div>
                </div>

                {/* Floating All-India Permit Badge */}
                <div className="absolute -top-3 right-0 sm:-right-3 bg-[#ffddb8] text-[#2a1700] px-3 sm:px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 text-xs font-bold border border-[#ffb95f]">
                  <span className="material-symbols-outlined text-[18px]">badge</span>
                  <span>All India Tourist Permit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. QUICK BOOKING WIDGET ("Plan Your Ride")  */}
      {/* ========================================== */}
      <section className="relative -mt-4 z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full" id="booking-form">
        <div className="bg-white rounded-2xl shadow-xl p-5 md:p-8 border border-[#e7eeff]">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 gap-2 border-b border-[#f0f3ff] mb-4">
            <div>
              <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-wider block">
                {t('Quick Fare Estimator & Dispatch', 'त्वरित किराया अनुमान एवं बुकिंग')}
              </span>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#111c2d]">
                {t('Plan Your Ride in Seconds', 'कुछ ही पलों में अपनी यात्रा प्लान करें')}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#554336]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t('Drivers on standby in Indore & Airport', 'इंदौर शहर व एयरपोर्ट पर कैब्स उपलब्ध')}</span>
            </div>
          </div>

          <BookingForm />
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. WHY CHOOSE US (Trust Section)           */}
      {/* ========================================== */}
      <section className="py-16 md:py-20 bg-[#f9f9ff]" id="about-why">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
              {t('Uncompromising Quality', 'अटूट भरोसा एवं गुणवत्ता')}
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#111c2d] mt-1">
              {t('Why Choose City Cab Service?', 'सिटी कैब सर्विस ही क्यों चुनें?')}
            </h2>
            <p className="text-xs sm:text-sm text-[#554336] mt-2">
              {t(
                'Serving Indore residents, visiting corporate guests, and sacred pilgrims with spotless cars and polite, route-expert drivers.',
                'इंदौर वासियों, कॉरपोरेट अतिथियों एवं तीर्थ यात्रियों के लिए साफ-सुथरी गाड़ियां और मार्ग-विशेषज्ञ ड्राइवर।'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Clean & Comfortable Cars */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group border border-[#e7eeff]">
              <div className="w-12 h-12 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] mb-4 group-hover:bg-[#8d4b00] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[26px]">sanitizer</span>
              </div>
              <h3 className="font-bold text-base text-[#111c2d] mb-1">
                {t('Clean & Comfortable Cars', 'साफ-सुथरी एवं आरामदायक गाड़ियां')}
              </h3>
              <p className="text-xs text-[#554336] leading-relaxed">
                {t(
                  'Well-maintained, odor-free vehicles with chilled air conditioning for a completely stress-free journey.',
                  'सुव्यवस्थित, सुगंधित और चिल्ड एयर कंडीशनिंग युक्त गाड़ियां जिससे आपका सफर तनावमुक्त रहे।'
                )}
              </p>
            </div>

            {/* 2. Experienced Drivers */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group border border-[#e7eeff]">
              <div className="w-12 h-12 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] mb-4 group-hover:bg-[#8d4b00] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[26px]">airline_seat_recline_normal</span>
              </div>
              <h3 className="font-bold text-base text-[#111c2d] mb-1">
                {t('Experienced Drivers', 'अनुभवी एवं प्रशिक्षित ड्राइवर')}
              </h3>
              <p className="text-xs text-[#554336] leading-relaxed">
                {t(
                  'Polite, uniformed, and responsible drivers who know all bypasses, darshan queues, and toll-free short routes.',
                  'विनम्र और जिम्मेदार ड्राइवर जो मंदिर दर्शन के समय, पार्किंग और सुरक्षित हाईवे मार्गों से भली-भांति परिचित हैं।'
                )}
              </p>
            </div>

            {/* 3. Safe Family Travel */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group border border-[#e7eeff]">
              <div className="w-12 h-12 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] mb-4 group-hover:bg-[#8d4b00] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[26px]">family_restroom</span>
              </div>
              <h3 className="font-bold text-base text-[#111c2d] mb-1">
                {t('Safe Family Travel', 'सुरक्षित पारिवारिक सफर')}
              </h3>
              <p className="text-xs text-[#554336] leading-relaxed">
                {t(
                  'Family-friendly hospitality with senior citizen assistance, ample luggage space, and vetted background checks.',
                  'बुजुर्गों और महिलाओं के लिए विशेष सम्मान, पर्याप्त सामान की जगह और शत-प्रतिशत पुलिस-सत्यापित ड्राइवर।'
                )}
              </p>
            </div>

            {/* 4. Transparent Pricing */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group border border-[#e7eeff]">
              <div className="w-12 h-12 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] mb-4 group-hover:bg-[#8d4b00] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[26px]">receipt_long</span>
              </div>
              <h3 className="font-bold text-base text-[#111c2d] mb-1">
                {t('Transparent Pricing', 'पारदर्शी मूल्य नीति')}
              </h3>
              <p className="text-xs text-[#554336] leading-relaxed">
                {t(
                  'Competitive rates per kilometer or fixed packages with absolutely no hidden charges or last-minute surge.',
                  'प्रति किलोमीटर या निश्चित पैकेज के पारदर्शी रेट। कोई छुपा हुआ खर्च नहीं और न ही कोई पीक सर्ज चार्ज।'
                )}
              </p>
            </div>

            {/* 5. Local & Outstation */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group border border-[#e7eeff]">
              <div className="w-12 h-12 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] mb-4 group-hover:bg-[#8d4b00] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[26px]">alt_route</span>
              </div>
              <h3 className="font-bold text-base text-[#111c2d] mb-1">
                {t('Local & Outstation', 'लोकल एवं आउटस्टेशन सुविधा')}
              </h3>
              <p className="text-xs text-[#554336] leading-relaxed">
                {t(
                  'Travel effortlessly within Indore city limits or expand your yatra across Ujjain, Omkareshwar, Bhopal, and Pachmarhi.',
                  'इंदौर शहर में स्थानीय यात्रा हो या उज्जैन, ओंकारेश्वर, भोपाल, पचमढ़ी आदि की दूरगामी यात्रा, सभी सेवाएं उपलब्ध।'
                )}
              </p>
            </div>

            {/* 6. 24/7 Booking Assistance */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group border border-[#e7eeff]">
              <div className="w-12 h-12 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] mb-4 group-hover:bg-[#8d4b00] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[26px]">support_agent</span>
              </div>
              <h3 className="font-bold text-base text-[#111c2d] mb-1">
                {t('24/7 Booking Assistance', '24/7 हेल्पलाइन सहायता')}
              </h3>
              <p className="text-xs text-[#554336] leading-relaxed">
                {t(
                  'Direct telephone and WhatsApp hotline for emergency night airport drops, morning Bhasma Aarti pickups, and urgent changes.',
                  'अलसुबह 3 बजे भस्म आरती हो या देर रात एयरपोर्ट ट्रांसफर, हमारी हेल्पलाइन हमेशा आपकी सेवा में तत्पर है।'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. OUR CAB SERVICES                        */}
      {/* ========================================== */}
      <section className="py-16 bg-[#f0f3ff]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
                {t('Comprehensive Mobility', 'व्यापक कैब सेवाएं')}
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#111c2d] mt-1">
                {t('Our Cab Services', 'हमारी कैब सेवाएं')}
              </h2>
              <p className="text-xs sm:text-sm text-[#554336] mt-1">
                {t(
                  'Select the exact transit solution tailored to your travel requirements.',
                  'अपनी यात्रा की आवश्यकतानुसार उपयुक्त कैब विकल्प चुनें।'
                )}
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#263143] text-white text-xs font-bold hover:bg-[#111c2d] self-start md:self-auto shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>{t('Instant Assistance: 099933 36703', 'तत्काल सहायता: 099933 36703')}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BUSINESS_DATA.services.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-[#e7eeff]"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#8d4b00] mb-3">
                    <span className="material-symbols-outlined text-[22px]">{srv.icon}</span>
                  </div>
                  <h3 className="font-bold text-base text-[#111c2d] mb-1">
                    {t(srv.titleEn, srv.titleHi)}
                  </h3>
                  <p className="text-xs text-[#554336] leading-relaxed mb-3">
                    {t(srv.descEn, srv.descHi)}
                  </p>
                  <span className="inline-block text-[11px] font-bold text-[#8d4b00] bg-[#ffdcc3]/50 px-2 py-0.5 rounded">
                    {t(srv.startingFareEn, srv.startingFareHi)}
                  </span>
                </div>
                <div className="pt-4 mt-2 border-t border-[#f0f3ff]">
                  <a
                    href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
                      `Namaste City Cab Service, I want to book ${srv.titleEn}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#8d4b00] hover:underline"
                  >
                    <span>{t('Book on WhatsApp', 'व्हाट्सएप पर बुक करें')}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#8d4b00] hover:bg-[#8d4b00] hover:text-white border border-[#8d4b00] font-bold text-xs transition-colors shadow-sm"
            >
              <span>{t('View Detailed Services & Fare Charts', 'विस्तृत सेवाएं एवं किराया चार्ट देखें')}</span>
              <span className="material-symbols-outlined text-[16px]">east</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. OUR FLEET (Real Vehicle Photographs)    */}
      {/* ========================================== */}
      <section className="py-16 md:py-20 bg-white" id="fleet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
              {t('Genuine Company Fleet', 'कंपनी के वास्तविक वाहन')}
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#111c2d] mt-1">
              {t('Our Fleet', 'हमारा वाहन बेड़ा')}
            </h2>
            <p className="text-xs sm:text-sm text-[#554336] mt-2">
              {t(
                'Real photos of our well-maintained, commercial yellow plate registered vehicles based right here in Indore.',
                'इंदौर स्थित हमारे कमर्शियल येलो प्लेट रजिस्टर्ड साफ-सुथरे वाहनों के वास्तविक फोटो।'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BUSINESS_DATA.vehicles.map((v) => (
              <div
                key={v.id}
                className="bg-[#f0f3ff] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-[#e7eeff]"
              >
                <div>
                  <div className="relative aspect-[4/3] bg-[#dee8ff] overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-xs font-bold text-[#111c2d] shadow">
                      {v.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#263143]/90 text-white px-2.5 py-1 rounded text-xs font-mono">
                      Reg: {v.regNumber}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif font-bold text-lg text-[#111c2d]">{v.name}</h3>
                      <span className="text-xs font-bold text-[#8d4b00]">
                        ₹{v.ratePerKm}/km
                      </span>
                    </div>
                    <p className="text-xs text-[#554336] mb-4 leading-relaxed">
                      {t(v.descEn, v.descHi)}
                    </p>

                    {/* Specifications Matrix */}
                    <div className="grid grid-cols-3 gap-2 text-center py-2 bg-white rounded-lg mb-4 text-xs font-semibold text-[#111c2d] border border-[#e7eeff]">
                      <div className="flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-[18px] text-[#8d4b00]">person</span>
                        <span>{v.seats}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-[18px] text-[#8d4b00]">luggage</span>
                        <span>{v.luggage}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-[18px] text-[#8d4b00]">ac_unit</span>
                        <span>{v.acType}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-[#554336]">
                      {v.highlightsEn.slice(0, 2).map((h, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-[#8d4b00]">check</span>
                          <span>{t(h, v.highlightsHi[idx])}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
                      `Hello City Cab Service, I would like to book the ${v.name} (${v.regNumber})`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#8d4b00] text-white text-xs font-bold hover:bg-[#b15f00] transition-colors shadow"
                  >
                    <span className="material-symbols-outlined text-[18px]">local_taxi</span>
                    <span>{t(`Book This ${v.name}`, `यह ${v.name} बुक करें`)}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f0f3ff] text-[#111c2d] hover:bg-[#dee8ff] font-bold text-xs transition-colors border border-[#cfdaf2]"
            >
              <span>{t('View Complete Fleet Specifications', 'संपूर्ण वाहन विवरण देखें')}</span>
              <span className="material-symbols-outlined text-[16px]">east</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 6. EXPLORE FROM INDORE (Pilgrimage Circuits) */}
      {/* ========================================== */}
      <section className="py-16 md:py-20 bg-[#f9f9ff]" id="tours">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
                {t('Pilgrimage & Heritage Circuits', 'तीर्थ एवं ऐतिहासिक सर्किट')}
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#111c2d] mt-1">
                {t('Explore From Indore', 'इंदौर से प्रमुख दर्शनीय स्थल')}
              </h2>
              <p className="text-xs sm:text-sm text-[#554336] mt-1">
                {t(
                  'Discover sacred Jyotirlingas, roaring waterfalls, and timeless dynastic architecture.',
                  'पावन ज्योतिर्लिंग, प्राकृतिक झरने और भव्य ऐतिहासिक किलों के दर्शन।'
                )}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-[#dae2fd] text-[#131b2e] font-semibold">
                {t('Customizable Stops', 'सुविधानुसार ठहराव')}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-[#dee8ff] text-[#111c2d] font-semibold">
                {t('Same-Day Returns', 'सेम-डे वापसी')}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_DATA.destinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between border border-[#e7eeff]"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-[#dee8ff] overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.nameEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#263143]/85 backdrop-blur-md text-white px-2.5 py-1 rounded text-xs font-medium">
                      {t(dest.distanceEn, dest.distanceHi)}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#ffddb8] text-[#2a1700] px-2 py-0.5 rounded text-xs font-bold">
                      {t(dest.tagEn, dest.tagHi)}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif font-bold text-lg text-[#111c2d]">
                      {t(dest.nameEn, dest.nameHi)}
                    </h3>
                    <p className="text-xs text-[#554336] mt-1 mb-3 leading-relaxed">
                      {t(dest.descEn, dest.descHi)}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {dest.chipsEn.map((chip, idx) => (
                        <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-[#f0f3ff] text-[#111c2d]">
                          {t(chip, dest.chipsHi[idx])}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
                      `Namaste City Cab Service, I want to book a trip to ${dest.nameEn}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-lg bg-[#f0f3ff] hover:bg-[#8d4b00] hover:text-white transition-colors text-xs font-bold text-[#111c2d] flex items-center justify-between"
                  >
                    <span>{t(`Plan ${dest.nameEn.split(' ')[0]} Yatra`, `${dest.nameHi.split(' ')[0]} यात्रा प्लान करें`)}</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 7. TRAVELLING WITH A GROUP? (Tempo Yatra)  */}
      {/* ========================================== */}
      <section className="py-16 md:py-20 bg-[#f0f3ff] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Text & Features */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
                {t('Group Transport & Pilgrimage Special', 'ग्रुप ट्रांसपोर्ट एवं तीर्थ विशेष')}
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#111c2d]">
                {t('Travelling With a Group?', 'क्या आप समूह अथवा बड़े परिवार के साथ हैं?')}
              </h2>
              <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                {t(
                  'Make family trips, community pilgrimages, wedding guest transfers, and corporate retreats completely effortless with our spacious Tempo Traveller fleet and seasoned highway captains.',
                  'पारिवारिक यात्रा, महिला मंडल, तीर्थ मंडल एवं विवाह समारोह के लिए हमारे 12 से 26 सीटर टेम्पो ट्रेवलर में पूरा परिवार एक साथ आनंदपूर्वक सफर कर सकता है।'
                )}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8d4b00]/10 flex items-center justify-center text-[#8d4b00] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">airline_seat_recline_extra</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#111c2d]">
                      {t('Luxury Reclining Pushback Seats', 'लग्जरी रिक्लाइनिंग पुशबैक सीट्स')}
                    </h4>
                    <p className="text-xs text-[#554336]">
                      {t(
                        'Individual armrests and reclining mechanisms allow elder pilgrims to rest comfortably during intercity travels.',
                        'आरामदायक पुशबैक सीट्स जिससे बुजुर्ग यात्री लंबी यात्रा में भी थकान महसूस न करें।'
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8d4b00]/10 flex items-center justify-center text-[#8d4b00] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">group_work</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#111c2d]">
                      {t('Entire Family Rides Together', 'पूरा परिवार एक साथ')}
                    </h4>
                    <p className="text-xs text-[#554336]">
                      {t(
                        'Eliminates the logistical hassle and fragmented expense of booking multiple disconnected small cabs.',
                        'अलग-अलग छोटी कैब करने के बजाय एक ही वाहन में पूरे परिवार के साथ सुखद और किफायती सफर।'
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8d4b00]/10 flex items-center justify-center text-[#8d4b00] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#111c2d]">
                      {t('Verified Pilgrim Experience', 'तीर्थ मार्गों के अनुभवी ड्राइवर')}
                    </h4>
                    <p className="text-xs text-[#554336]">
                      {t(
                        'Our drivers guide groups on temple entry gates, VIP pass counters, clean food dhabas, and senior citizen parking.',
                        'मंदिर के सही प्रवेश द्वार, VIP दर्शन व्यवस्था और साफ-सुथरे भोजन ढाबों की पूरी जानकारी।'
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
                    'Namaste City Cab Service, I need a Tempo Traveller quotation for our group tour'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#8d4b00] text-white text-xs sm:text-sm font-bold hover:bg-[#b15f00] transition-all shadow-md"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>{t('Get Group Tour Quote', 'ग्रुप टूर कोटेशन प्राप्त करें')}</span>
                </a>
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#263143] text-white text-xs sm:text-sm font-bold hover:bg-[#111c2d] transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  <span>{BUSINESS_DATA.phone}</span>
                </a>
              </div>
            </div>

            {/* Right: Real Group Tour Photos Mosaic */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main Group Photo: Ladies Tour Group with Tempo Traveller */}
              <div
                className="bg-white rounded-2xl overflow-hidden shadow-md p-2 cursor-pointer border border-[#e7eeff]"
                onClick={() => setSelectedGalleryPhoto(BUSINESS_DATA.gallery[3])}
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#dee8ff]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASE0wqMIp7mSzL5L6T_9dqHVDY-1vwY7qxEJpOkRfAMcHwazFCXuwcWNsYllkvILlorQMfnakbMdmdmbq31NWZlnyEOPisAqzCWcq4xCImegBxH-eE8TYxYOY29orbS0LqxsHPBZEBbOx4b_pOa6iELgFVBLiQRI49un9rKRAdm3nhLn30KmrdJ5pQ20NYkIMbsajQ92zYKX9swe123mDV41V2CT7GOAyuTGIGw-K1GkGyExOJoBhp"
                    alt="Happy group tour of ladies pilgrims in traditional colorful attire in front of City Cab Tempo Traveller"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#263143]/90 text-white px-2.5 py-1 rounded text-xs font-semibold">
                    Mahakal Yatra Group • Happy Pilgrims
                  </div>
                </div>
              </div>

              {/* Secondary Group Photos Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Pilgrim group in red stoles at night */}
                <div
                  className="bg-white rounded-xl overflow-hidden shadow-sm p-2 cursor-pointer border border-[#e7eeff]"
                  onClick={() => setSelectedGalleryPhoto(BUSINESS_DATA.gallery[4])}
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-[#dee8ff]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyA19gJpnFfHDnlbpHGXkMb6bS2gDzD2rgZuLLNYuVZ6iNMP9i22KDbEg4oZJTpQy9MML4CM-whKFkczJAHzIqd39RaKwLBewtUdb4jO944gTDl1Nizje5S5Z_raH2hL42ZMTcl1C6-wNjWE40k__1DOcYyY-rp_bU3-nmJSD_I6SnhwvcpnX4mm2PQuNPriMBu-G9lv-UUAD3wJm8fnTGxNS7_OchG9cMf2WloM4vklfshaVpLg7R"
                      alt="Pilgrim tour group wearing sacred red stoles smiling in front of City Cab tempo traveller"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs font-semibold text-[#111c2d] pt-1.5 px-1 truncate">
                    Night Departure Jyotirlinga Darshan
                  </p>
                </div>

                {/* Venkateswara Tour Group with Tourist Coach */}
                <div
                  className="bg-white rounded-xl overflow-hidden shadow-sm p-2 cursor-pointer border border-[#e7eeff]"
                  onClick={() => setSelectedGalleryPhoto(BUSINESS_DATA.gallery[5])}
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-[#dee8ff]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrK2fhB5wN6vscqT7L34Zuv011XSB01m36LitCbbnkc0yUzE_dVci60q6rSBB0M2DLGNF28XQLhWSmo98B-9XeAlNhHgpBMUUAbNpLxxjVvn58c6QZ7R8W6btgU8fvZWeZ09HoRvEh4nfnHhZaDuKSfwHwI6jqCDID2wdGLk5WaXnCgPCGfjnIVJa4EOl5LTiFFIpmLLMTP2BqJvv9hymF1z3jhfDheWWx5Ze5TNzDsREZdZPjGx7l"
                      alt="Sri Venkateswara Jyotirlingalu Dwarakalu pilgrimage tour group"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs font-semibold text-[#111c2d] pt-1.5 px-1 truncate">
                    5 Dwaraka & Jyotirlinga Tour
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 8. POPULAR TOUR PACKAGES                   */}
      {/* ========================================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
              {t('Curated Itineraries', 'निश्चित दर यात्रा पैकेज')}
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#111c2d] mt-1">
              {t('Popular Tour Packages', 'लोकप्रिय टूर पैकेज')}
            </h2>
            <p className="text-xs sm:text-sm text-[#554336] mt-2">
              {t(
                'Transparent, fixed-price travel packages starting directly from your hotel, residence, or Indore Airport.',
                'होटल, घर या एयरपोर्ट से सीधे प्रस्थान के लिए पारदर्शी और निश्चित पैकेज।'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_DATA.packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#f0f3ff] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-[#e7eeff]"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#dee8ff]">
                    <span className="text-xs px-2.5 py-0.5 rounded bg-[#8d4b00] text-white font-bold">
                      {t(pkg.badgeEn, pkg.badgeHi)}
                    </span>
                    <span className="text-xs text-[#554336] font-medium">
                      {t(pkg.durationEn, pkg.durationHi)}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#111c2d] mt-3">
                    {t(pkg.titleEn, pkg.titleHi)}
                  </h3>
                  <p className="text-xs text-[#554336] mt-1 mb-4 leading-relaxed">
                    {t(pkg.descEn, pkg.descHi)}
                  </p>

                  <div className="space-y-1.5 py-3 bg-white rounded-xl px-3 mb-4 text-xs border border-[#e7eeff]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#554336]">Sedan (Dzire):</span>
                      <span className="font-bold text-[#111c2d]">
                        {pkg.rates.dzire > 100 ? `₹${pkg.rates.dzire}` : `₹${pkg.rates.dzire}/km`}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#554336]">SUV / MPV (Ertiga):</span>
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
                </div>

                <div>
                  <a
                    href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
                      `Namaste City Cab Service, I want to book the package: ${pkg.titleEn}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-[#8d4b00] text-white text-xs font-bold text-center block hover:bg-[#b15f00] transition-colors shadow"
                  >
                    {t('Book This Package on WhatsApp', 'यह पैकेज व्हाट्सएप पर बुक करें')}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f0f3ff] text-[#111c2d] hover:bg-[#dee8ff] font-bold text-xs transition-colors border border-[#cfdaf2]"
            >
              <span>{t('Explore All Pilgrimage & Sightseeing Circuits', 'सभी तीर्थ एवं दर्शनीय स्थल देखें')}</span>
              <span className="material-symbols-outlined text-[16px]">east</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 9. WHAT OUR CUSTOMERS SAY (Real Reviews)   */}
      {/* ========================================== */}
      <section className="py-16 md:py-20 bg-[#f9f9ff]" id="reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-[#e7eeff]">
            {/* Trust Banner Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#f0f3ff] gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-[#f59e0b]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[24px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="font-serif font-bold text-lg text-[#111c2d]">
                    5.0 Out of 5.0 Rating
                  </span>
                </div>
                <p className="text-xs text-[#554336]">
                  {t(
                    'Based on 28+ verified customer reviews on Google Maps in Indore',
                    'इंदौर गूगल मैप्स पर 28+ सत्यापित ग्राहकों की 5-स्टार समीक्षाओं के आधार पर'
                  )}
                </p>
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#f0f3ff] text-[#111c2d] hover:bg-[#dee8ff] transition-colors text-xs font-bold self-start md:self-auto border border-[#e7eeff]"
              >
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                <span>{t('View All Google Reviews', 'सभी गूगल समीक्षाएं देखें')}</span>
              </a>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {BUSINESS_DATA.reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-[#f0f3ff] rounded-xl p-5 flex flex-col justify-between border border-[#e7eeff]"
                >
                  <div>
                    <div className="flex text-[#f59e0b] mb-2.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-[16px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-[#111c2d] italic mb-4 leading-relaxed">
                      "{t(rev.text, rev.textHi)}"
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 pt-3 border-t border-[#dee8ff]">
                    <div className="w-9 h-9 rounded-full bg-[#8d4b00]/20 text-[#8d4b00] font-bold flex items-center justify-center text-xs">
                      {rev.initial}
                    </div>
                    <div>
                      <p className="font-bold text-xs text-[#111c2d] leading-tight">{rev.author}</p>
                      <p className="text-[11px] text-[#554336]">{t(rev.badgeEn, rev.badgeHi)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 10. GALLERY (Real Photos + Lightbox Modal) */}
      {/* ========================================== */}
      <section className="py-16 md:py-20 bg-[#f0f3ff]" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
                {t('Real Moments & Verified Fleet', 'वास्तविक चित्र एवं प्रमाणित बेड़ा')}
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#111c2d] mt-1">
                {t('Photo Gallery', 'फोटो गैलरी')}
              </h2>
              <p className="text-xs sm:text-sm text-[#554336] mt-1">
                {t(
                  'Browse our real fleet vehicles, pilgrim groups, and destination highlights.',
                  'हमारे वास्तविक वाहन, तीर्थ यात्री समूह और दर्शनीय स्थलों के चित्र।'
                )}
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl shadow-sm self-start md:self-auto border border-[#e7eeff]">
              {(['all', 'vehicles', 'groups', 'destinations'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGalleryFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-colors cursor-pointer ${
                    galleryFilter === cat
                      ? 'bg-[#8d4b00] text-white shadow-sm'
                      : 'text-[#554336] hover:text-[#111c2d]'
                  }`}
                >
                  {t(cat, cat === 'all' ? 'सभी' : cat === 'vehicles' ? 'गाड़ियां' : cat === 'groups' ? 'ग्रुप टूर' : 'दर्शनीय स्थल')}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredGallery.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedGalleryPhoto(photo)}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm bg-white cursor-pointer border border-[#e7eeff]"
              >
                <img
                  src={photo.src}
                  alt={photo.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#263143]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                  <span className="text-xs text-white font-semibold">
                    {t(photo.titleEn, photo.titleHi)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#111c2d] hover:bg-[#dee8ff] font-bold text-xs transition-colors border border-[#cfdaf2]"
            >
              <span>{t('Open Full Yatra Stories & Photos', 'संपूर्ण यात्रा संस्मरण एवं गैलरी खोलें')}</span>
              <span className="material-symbols-outlined text-[16px]">photo_library</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 11. ABOUT CITY CAB SERVICE                 */}
      {/* ========================================== */}
      <section className="py-16 md:py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
                {t('Trusted Since Day One', 'प्रथम दिवस से भरोसेमंद')}
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#111c2d]">
                {t('Your Trusted Travel Partner in Indore', 'इंदौर में आपकी यात्रा का सच्चा साथी')}
              </h2>
              <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                {t(
                  'City Cab Service provides comfortable and reliable taxi and travel services for customers travelling within Indore and to destinations beyond the city. From daily local rides to family vacations, pilgrimage trips and group tours, our focus is on clean vehicles, safe driving and dependable service.',
                  'सिटी कैब सर्विस इंदौर एवं इंदौर से बाहर यात्रा करने वाले सभी यात्रियों को आरामदायक और विश्वसनीय टैक्सी सेवा प्रदान करती है। चाहे लोकल शॉपिंग हो, एयरपोर्ट ट्रांसफर हो या महाकाल व ओंकारेश्वर दर्शन यात्रा — हमारा ध्यान सदैव स्वच्छता, सुरक्षा और समय की पाबंदी पर रहता है।'
                )}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#f0f3ff] rounded-xl border border-[#e7eeff]">
                  <span className="font-serif font-bold text-2xl text-[#8d4b00]">100%</span>
                  <p className="text-xs font-bold text-[#111c2d] mt-1">
                    {t('Commercial Yellow Plates', 'कमर्शियल येलो नंबर प्लेट्स')}
                  </p>
                  <p className="text-[11px] text-[#554336]">
                    {t('Fully insured legal passenger commercial vehicles', 'पूर्ण बीमाकृत एवं कानूनी यात्री परमिट')}
                  </p>
                </div>
                <div className="p-4 bg-[#f0f3ff] rounded-xl border border-[#e7eeff]">
                  <span className="font-serif font-bold text-2xl text-[#8d4b00]">24 / 7</span>
                  <p className="text-xs font-bold text-[#111c2d] mt-1">
                    {t('Indore Dispatch Desk', 'इंदौर डिस्पैच डेस्क')}
                  </p>
                  <p className="text-[11px] text-[#554336]">
                    {t('Late night and early morning airport support', 'देर रात एवं तड़के सुबह तत्काल कैब सपोर्ट')}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#8d4b00] text-white text-xs font-bold hover:bg-[#b15f00] transition-colors shadow"
                >
                  <span>{t('Learn More About Our Team', 'हमारी टीम के बारे में जानें')}</span>
                  <span className="material-symbols-outlined text-[18px]">east</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#f0f3ff] rounded-2xl p-6 shadow-sm space-y-4 border border-[#e7eeff]">
                <h3 className="font-bold text-base text-[#111c2d] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#8d4b00]">verified</span>
                  <span>{t('Our Operational Commitments', 'हमारी सेवा प्रतिबद्धताएं')}</span>
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#e7eeff]">
                    <span className="material-symbols-outlined text-[#8d4b00] text-[22px] mt-0.5">cleaning_services</span>
                    <div>
                      <h4 className="font-bold text-xs text-[#111c2d]">
                        {t('Clean & Sanitized Vehicles', 'स्वच्छ एवं सैनिटाइज्ड गाड़ियां')}
                      </h4>
                      <p className="text-[11px] text-[#554336]">
                        {t(
                          'Every car is vacuumed, interior wiped, and perfume freshened before each passenger pickup.',
                          'प्रत्येक यात्री पिकअप से पूर्व गाड़ी को वैक्यूम व साफ किया जाता है।'
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#e7eeff]">
                    <span className="material-symbols-outlined text-[#8d4b00] text-[22px] mt-0.5">timer</span>
                    <div>
                      <h4 className="font-bold text-xs text-[#111c2d]">
                        {t('Strict Zero-Delay Policy', 'शून्य विलंब (Zero-Delay) नीति')}
                      </h4>
                      <p className="text-[11px] text-[#554336]">
                        {t(
                          'For temple Bhasma Aarti and early flight departures, vehicles report 15 minutes before scheduled time.',
                          'भस्म आरती व सुबह की फ्लाइट्स के लिए गाड़ी निर्धारित समय से 15 मिनट पूर्व रिपोर्ट करती है।'
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#e7eeff]">
                    <span className="material-symbols-outlined text-[#8d4b00] text-[22px] mt-0.5">badge</span>
                    <div>
                      <h4 className="font-bold text-xs text-[#111c2d]">
                        {t('Vetted Regional Drivers', 'सत्यापित स्थानीय ड्राइवर')}
                      </h4>
                      <p className="text-[11px] text-[#554336]">
                        {t(
                          'Local chauffeurs familiar with MP roads, highway safety, speed limits, and polite hospitality.',
                          'मध्य प्रदेश के सभी हाईवे, गति सीमा और विनम्र आतिथ्य से परिचित जिम्मेदार ड्राइवर।'
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#e7eeff]">
                    <span className="material-symbols-outlined text-[#8d4b00] text-[22px] mt-0.5">price_check</span>
                    <div>
                      <h4 className="font-bold text-xs text-[#111c2d]">
                        {t('Honest Direct Billing', 'प्रत्यक्ष एवं ईमानदार बिलिंग')}
                      </h4>
                      <p className="text-[11px] text-[#554336]">
                        {t(
                          'No app commission middleman markup. You interact directly with the local Indore fleet operator.',
                          'बिना किसी एप बिचौलिए कमीशन के सीधे स्थानीय ऑपरेटर से संपर्क और पारदर्शी मूल्य।'
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 12. HOW IT WORKS (4-Step Process)          */}
      {/* ========================================== */}
      <section className="py-16 md:py-20 bg-[#f9f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
              {t('Effortless Reservation', 'सरल एवं त्वरित बुकिंग')}
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#111c2d] mt-1">
              {t('How It Works', 'बुकिंग कैसे करें?')}
            </h2>
            <p className="text-xs sm:text-sm text-[#554336] mt-2">
              {t(
                'Reserve your Indore cab in four simple steps without downloading apps or entering credit card details.',
                'बिना किसी एप डाउनलोड या क्रेडिट कार्ड झंझट के मात्र 4 आसान चरणों में कैब बुक करें।'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-5 shadow-sm relative border border-[#e7eeff]">
              <span className="text-3xl font-serif font-bold text-[#8d4b00]/20 absolute top-4 right-4">01</span>
              <div className="w-10 h-10 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] mb-3">
                <span className="material-symbols-outlined text-[20px]">edit_note</span>
              </div>
              <h3 className="font-bold text-sm text-[#111c2d] mb-1">
                {t('Tell Us Your Trip', 'यात्रा विवरण बताएं')}
              </h3>
              <p className="text-xs text-[#554336] leading-relaxed">
                {t(
                  'Provide your pickup point, travel date, destination (e.g. Ujjain, Airport), and preferred vehicle type.',
                  'पिकअप स्थान, दिनांक, गंतव्य (जैसे उज्जैन, ओंकारेश्वर) एवं वाहन का चयन करें।'
                )}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-5 shadow-sm relative border border-[#e7eeff]">
              <span className="text-3xl font-serif font-bold text-[#8d4b00]/20 absolute top-4 right-4">02</span>
              <div className="w-10 h-10 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] mb-3">
                <span className="material-symbols-outlined text-[20px]">request_quote</span>
              </div>
              <h3 className="font-bold text-sm text-[#111c2d] mb-1">
                {t('Get Your Quote', 'किराया कोटेशन प्राप्त करें')}
              </h3>
              <p className="text-xs text-[#554336] leading-relaxed">
                {t(
                  'Receive an all-inclusive transparent fare quote immediately via WhatsApp or phone call.',
                  'व्हाट्सएप अथवा फोन कॉल पर तुरंत पारदर्शी एवं निश्चित किराया विवरण प्राप्त करें।'
                )}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-5 shadow-sm relative border border-[#e7eeff]">
              <span className="text-3xl font-serif font-bold text-[#8d4b00]/20 absolute top-4 right-4">03</span>
              <div className="w-10 h-10 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] mb-3">
                <span className="material-symbols-outlined text-[20px]">task_alt</span>
              </div>
              <h3 className="font-bold text-sm text-[#111c2d] mb-1">
                {t('Confirm Instantly', 'तत्काल कन्फर्म करें')}
              </h3>
              <p className="text-xs text-[#554336] leading-relaxed">
                {t(
                  'Zero advance payment headaches. We assign your designated driver name and vehicle number promptly.',
                  'बिना किसी अग्रिम शुल्क के गाड़ी व ड्राइवर नंबर तुरंत आपके साथ साझा किया जाता है।'
                )}
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-5 shadow-sm relative border border-[#e7eeff]">
              <span className="text-3xl font-serif font-bold text-[#8d4b00]/20 absolute top-4 right-4">04</span>
              <div className="w-10 h-10 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] mb-3">
                <span className="material-symbols-outlined text-[20px]">sentiment_satisfied</span>
              </div>
              <h3 className="font-bold text-sm text-[#111c2d] mb-1">
                {t('Enjoy Your Journey', 'आनंदमय सफर')}
              </h3>
              <p className="text-xs text-[#554336] leading-relaxed">
                {t(
                  'Sit back in a chilled AC cab. Pay the driver conveniently in cash or UPI at the completion of your trip.',
                  'आरामदायक सफर का आनंद लें। यात्रा पूर्ण होने पर ड्राइवर को कैश या UPI से भुगतान करें।'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 13. FREQUENTLY ASKED QUESTIONS (FAQ)       */}
      {/* ========================================== */}
      <section className="py-16 md:py-20 bg-[#f0f3ff]" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
              {t('Trip Clarifications', 'सामान्य प्रश्न व समाधान')}
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#111c2d] mt-1">
              {t('Frequently Asked Questions', 'अक्सर पूछे जाने वाले प्रश्न')}
            </h2>
            <p className="text-xs sm:text-sm text-[#554336] mt-2">
              {t(
                'Everything you need to know about booking with City Cab Service Indore.',
                'सिटी कैब सर्विस इंदौर की बुकिंग और यात्रा से संबंधित संपूर्ण जानकारी।'
              )}
            </p>
          </div>

          <div className="space-y-3">
            {BUSINESS_DATA.faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e7eeff]"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#111c2d] hover:text-[#8d4b00] transition-colors cursor-pointer"
                  >
                    <span>{t(faq.questionEn, faq.questionHi)}</span>
                    <span
                      className={`material-symbols-outlined text-[22px] transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#8d4b00]' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-[#554336] leading-relaxed border-t border-[#f0f3ff] pt-3">
                      {t(faq.answerEn, faq.answerHi)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#8d4b00] hover:bg-[#dee8ff] font-bold text-xs transition-colors border border-[#cfdaf2]"
            >
              <span>{t('View Complete FAQ & Booking Policies', 'संपूर्ण नियम व नीतियां देखें')}</span>
              <span className="material-symbols-outlined text-[16px]">east</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 14. CONTACT SECTION                        */}
      {/* ========================================== */}
      <section className="py-16 md:py-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
                {t('Indore Head Office', 'इंदौर प्रधान कार्यालय')}
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#111c2d]">
                {t('Get in Touch', 'हमसे संपर्क करें')}
              </h2>
              <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                {t(
                  'Have a question about route timings, vehicle availability, or customized group packages? Contact our dispatcher anytime.',
                  'मार्ग समय, गाड़ियों की उपलब्धता या ग्रुप पैकेज के संबंध में कभी भी हमारे डिस्पैच डेस्क से संपर्क करें।'
                )}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[22px]">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold text-xs text-[#111c2d]">{t('Registered Office', 'पंजीकृत कार्यालय')}</p>
                    <p className="text-xs text-[#554336] mt-0.5">{BUSINESS_DATA.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#8d4b00] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[22px]">call</span>
                  </div>
                  <div>
                    <p className="font-bold text-xs text-[#111c2d]">{t('24/7 Booking Hotline', '24/7 बुकिंग हेल्पलाइन')}</p>
                    <a
                      href={`tel:${BUSINESS_DATA.phoneRaw}`}
                      className="font-serif font-bold text-lg text-[#8d4b00] hover:underline block"
                    >
                      {BUSINESS_DATA.phone}
                    </a>
                    <p className="text-[11px] text-[#554336]">{t('Instant driver & cab allocation', 'तत्काल कैब आवंटन')}</p>
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

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#263143] text-white text-xs font-bold hover:bg-[#111c2d] transition-colors shadow"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>{t('Call Now', 'कॉल करें')}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp</span>
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f0f3ff] text-[#111c2d] text-xs font-bold hover:bg-[#dee8ff] transition-colors border border-[#cfdaf2]"
                >
                  <span className="material-symbols-outlined text-[18px]">directions</span>
                  <span>{t('Directions', 'दिशा निर्देश')}</span>
                </a>
              </div>
            </div>

            {/* Right: Map Location Display */}
            <div className="lg:col-span-7">
              <div className="bg-[#f0f3ff] rounded-2xl overflow-hidden shadow-md p-3 h-full flex flex-col border border-[#e7eeff]">
                <div
                  className="w-full flex-1 min-h-[340px] rounded-xl bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD60WKKT0LcIMmaZ2O1qg7Tcbss8KahrG6hL_Ko4OQy-W_D0g-Nx0_7LzTrudaVuyLeC2A3G4CNYyzFKAasElQ5-PkeX6cBo6nXKwmhaFEEhORFrJR8CZ83hzIDYhrOYOJgIPaFCtGEVuEvStH8TcyYaYLdApFsoH48hW1fcTdSCjPmSZHKNXkTJHQ_UX6HYULxU3dTLzuqNu7D5wOW8o3U0d-whK3G9gSu5Bxhp2E')`,
                  }}
                >
                  <div className="absolute inset-0 bg-[#263143]/10 rounded-xl" />
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-sm border border-[#e7eeff]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-[#8d4b00] text-[20px]">local_taxi</span>
                      <span className="font-bold text-sm text-[#111c2d]">{BUSINESS_DATA.name}</span>
                    </div>
                    <p className="text-xs text-[#554336] mb-2">{BUSINESS_DATA.address}</p>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#8d4b00] font-bold hover:underline"
                    >
                      <span>{t('Open in Google Maps', 'गूगल मैप्स में खोलें')}</span>
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 15. READY TO PLAN YOUR JOURNEY (FINAL CTA) */}
      {/* ========================================== */}
      <section className="py-16 md:py-20 bg-[#263143] text-white relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#8d4b00]/20 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4">
          <span className="text-xs font-bold text-[#ffb95f] uppercase tracking-widest">
            {t('Experience Madhya Pradesh With Ease', 'मध्य प्रदेश की सुखद एवं निश्चिंत यात्रा')}
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-white leading-tight">
            {t('Ready to Plan Your Journey?', 'क्या आप अपनी यात्रा शुरू करने के लिए तैयार हैं?')}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t(
              "Tell us where you want to go and we'll help you choose the right vehicle with guaranteed fair pricing and an expert driver.",
              'हमें अपना गंतव्य बताएं, हम निश्चित किराए और अनुभवी ड्राइवर के साथ आपकी सेवा में उपस्थित रहेंगे।'
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <a
              href="#booking-form"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8d4b00] text-white text-xs sm:text-sm font-bold hover:bg-[#b15f00] transition-all shadow-lg"
            >
              <span className="material-symbols-outlined text-[20px]">local_taxi</span>
              <span>{t('Book Your Cab', 'कैब बुक करें')}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
                'Namaste City Cab Service, I would like to plan my trip from Indore'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-bold hover:bg-emerald-700 transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>WhatsApp Us</span>
            </a>
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white text-[#111c2d] text-xs sm:text-sm font-bold hover:bg-gray-100 transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>{BUSINESS_DATA.phone}</span>
            </a>
          </div>

          <p className="text-[11px] text-gray-400 pt-2">
            Prompt Service • Clean Vehicles • Verified Commercial Permit MP-09
          </p>
        </div>
      </section>
    </div>
  );
};
