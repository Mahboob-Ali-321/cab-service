import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_DATA } from '../data/businessData';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-white text-[#111c2d] pt-14 pb-28 md:pb-12 border-t border-[#e7eeff] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <Link to="/" className="inline-block focus:outline-none group">
              <img
                src="/city-cab-logo-v2.png"
                alt="City Cab Service logo"
                className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </Link>
            <p className="text-xs text-[#554336] leading-relaxed">
              {t(
                'Trusted travel companion for Mahakal Darshan Ujjain, Omkareshwar Jyotirlinga, Devi Ahilya Bai Holkar Airport Indore transfers, and verified outstation transit across Madhya Pradesh.',
                'महाकाल दर्शन उज्जैन, ओंकारेश्वर ज्योतिर्लिंग, इंदौर एयरपोर्ट ट्रांसफर एवं मध्य प्रदेश आउटस्टेशन यात्रा हेतु आपका सर्वाधिक विश्वसनीय कैब साथी।'
              )}
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs">
              <span className="px-2 py-0.5 rounded-md bg-[#dee8ff] text-[#111c2d] font-semibold">
                MP-09 Certified
              </span>
              <span className="px-2 py-0.5 rounded-md bg-[#dee8ff] text-[#111c2d] font-semibold">
                24/7 Dispatch Desk
              </span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h4 className="font-bold text-sm text-[#111c2d] uppercase tracking-wider mb-3">
              {t('Quick Navigation', 'त्वरित नेविगेशन')}
            </h4>
            <ul className="space-y-2 text-xs text-[#554336]">
              <li>
                <Link to="/" className="hover:text-[#8d4b00] transition-colors">
                  {t('Home & Fare Estimator', 'होम एवं किराया अनुमान')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#8d4b00] transition-colors">
                  {t('Indore Local & Airport Cabs', 'इंदौर लोकल एवं एयरपोर्ट कैब्स')}
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-[#8d4b00] transition-colors">
                  {t('Dzire, Ertiga & Tempo Fleet', 'डिजायर, अर्टिगा एवं टेम्पो फ्लीट')}
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-[#8d4b00] transition-colors">
                  {t('Pilgrimage Darshan Yatra', 'तीर्थ दर्शन यात्रा पैकेज')}
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[#8d4b00] transition-colors">
                  {t('Pilgrim & Family Reviews', 'यात्री एवं परिवार समीक्षाएं')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#8d4b00] transition-colors">
                  {t('Fleet & Tour Photo Gallery', 'वाहन एवं टूर फोटो गैलरी')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#8d4b00] transition-colors">
                  {t('Booking Questions & Policy', 'बुकिंग नियम एवं सामान्य प्रश्न')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Yatra Routes */}
          <div>
            <h4 className="font-bold text-sm text-[#111c2d] uppercase tracking-wider mb-3">
              {t('Popular Yatra Routes', 'लोकप्रिय तीर्थ मार्ग')}
            </h4>
            <ul className="space-y-2 text-xs text-[#554336]">
              <li>
                <Link to="/tours" className="hover:text-[#8d4b00] transition-colors">
                  {t('Indore to Mahakaleshwar Ujjain Cab', 'इंदौर से महाकालेश्वर उज्जैन कैब')}
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-[#8d4b00] transition-colors">
                  {t('Indore to Omkareshwar Jyotirlinga', 'इंदौर से ओंकारेश्वर ज्योतिर्लिंग')}
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-[#8d4b00] transition-colors">
                  {t('Maheshwar & Mandu Heritage Circuit', 'महेश्वर एवं मांडू हेरिटेज टूर')}
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-[#8d4b00] transition-colors">
                  {t('Patalpani & Choral Dam Excursions', 'पातालपानी एवं चोरल डैम पिकनिक')}
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-[#8d4b00] transition-colors">
                  {t('Bhopal & Pachmarhi Intercity Outstation', 'भोपाल एवं पचमढ़ी आउटस्टेशन')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Indore Office */}
          <div>
            <h4 className="font-bold text-sm text-[#111c2d] uppercase tracking-wider mb-3">
              {t('Contact Indore Office', 'इंदौर कार्यालय संपर्क')}
            </h4>
            <div className="space-y-2.5 text-xs text-[#554336]">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#8d4b00] shrink-0 mt-0.5">location_on</span>
                <span>{BUSINESS_DATA.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#8d4b00] shrink-0">call</span>
                <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="font-bold text-[#111c2d] hover:text-[#8d4b00]">
                  {BUSINESS_DATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#8d4b00] shrink-0">schedule</span>
                <span>{BUSINESS_DATA.workingHours}</span>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
                    'Namaste City Cab Service Indore, I would like to inquire about a cab'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="pt-6 border-t border-[#f0f3ff] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#554336]">
          <div>
            © 2026 {BUSINESS_DATA.name} ({BUSINESS_DATA.nameHi}). All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <Link to="/faq" className="hover:text-[#8d4b00] transition-colors">
              Terms & Pricing
            </Link>
            <Link to="/contact" className="hover:text-[#8d4b00] transition-colors">
              Driver Partner Portal
            </Link>
            <Link to="/contact" className="hover:text-[#8d4b00] transition-colors">
              Corporate Accounts
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
