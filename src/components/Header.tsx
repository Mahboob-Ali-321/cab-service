import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_DATA } from '../data/businessData';

export const Header: React.FC = () => {
  const { lang, toggleLang, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  // Close 'More' dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [location.pathname]);

  const primaryNavLinks = [
    { path: '/', labelEn: 'Home', labelHi: 'होम' },
    { path: '/services', labelEn: 'Services', labelHi: 'सेवाएं' },
    { path: '/fleet', labelEn: 'Fleet', labelHi: 'गाड़ियां' },
    { path: '/tours', labelEn: 'Tours', labelHi: 'तीर्थ यात्रा' },
    { path: '/about', labelEn: 'About', labelHi: 'परिचय' },
    { path: '/reviews', labelEn: 'Reviews', labelHi: 'समीक्षाएं' },
    { path: '/contact', labelEn: 'Contact', labelHi: 'संपर्क' },
  ];

  const secondaryNavLinks = [
    { path: '/gallery', labelEn: 'Photo Gallery', labelHi: 'फोटो गैलरी', icon: 'photo_library' },
    { path: '/faq', labelEn: 'FAQ & Policies', labelHi: 'सामान्य प्रश्न व नीतियां', icon: 'help_outline' },
    { path: '/book', labelEn: 'Book Online', labelHi: 'ऑनलाइन कैब बुकिंग', icon: 'local_taxi' },
  ];

  const allMobileNavLinks = [
    { path: '/', labelEn: 'Home', labelHi: 'होम', icon: 'home' },
    { path: '/services', labelEn: 'Services', labelHi: 'सेवाएं', icon: 'commute' },
    { path: '/fleet', labelEn: 'Fleet', labelHi: 'गाड़ियां', icon: 'directions_car' },
    { path: '/tours', labelEn: 'Tours', labelHi: 'तीर्थ यात्रा', icon: 'temple_hindu' },
    { path: '/about', labelEn: 'About', labelHi: 'परिचय', icon: 'info' },
    { path: '/reviews', labelEn: 'Reviews', labelHi: 'समीक्षाएं', icon: 'star' },
    { path: '/gallery', labelEn: 'Gallery', labelHi: 'गैलरी', icon: 'photo_library' },
    { path: '/faq', labelEn: 'FAQ', labelHi: 'प्रश्न', icon: 'help' },
    { path: '/contact', labelEn: 'Contact', labelHi: 'संपर्क', icon: 'call' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isMoreActive = secondaryNavLinks.some((l) => isActive(l.path));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-[0_2px_14px_rgba(0,0,0,0.07)] border-b border-[#e7eeff] transition-all">
      <div className="h-20 sm:h-24 md:h-26 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Logo - Enhanced size on mobile, tablet & desktop */}
        <Link
          to="/"
          className="flex items-center shrink-0 group py-1 focus:outline-none"
          title="City Cab Service Indore"
        >
          {/* Mobile compact icon under 360px */}
          <img
            src={BUSINESS_DATA.logoIconUrl}
            alt="City Cab Service Logo"
            className="h-12 w-12 object-contain block min-[360px]:hidden transition-transform group-hover:scale-105"
          />
          {/* Prominent Full wide logo for 360px and above */}
          <img
            src={BUSINESS_DATA.logoUrl}
            alt="City Cab Service - Your Ride Anytime Anywhere"
            className="h-13 sm:h-16 md:h-19 lg:h-20 w-auto max-w-[210px] min-[400px]:max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] object-contain hidden min-[360px]:block transition-transform group-hover:scale-102"
          />
        </Link>

        {/* Desktop Navigation Links with generous breathing room and 'More' dropdown */}
        <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
          {primaryNavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 relative ${
                isActive(link.path)
                  ? 'text-[#8d4b00] font-bold bg-[#ffdcc3]/35'
                  : 'text-[#554336] hover:text-[#111c2d] hover:bg-[#f0f3ff]'
              }`}
            >
              {t(link.labelEn, link.labelHi)}
            </Link>
          ))}

          {/* More Dropdown for Gallery, FAQ, etc. */}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 inline-flex items-center gap-1 cursor-pointer ${
                isMoreActive || moreDropdownOpen
                  ? 'text-[#8d4b00] font-bold bg-[#ffdcc3]/35'
                  : 'text-[#554336] hover:text-[#111c2d] hover:bg-[#f0f3ff]'
              }`}
              aria-expanded={moreDropdownOpen}
              aria-haspopup="true"
            >
              <span>{t('More', 'अन्य')}</span>
              <span
                className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                  moreDropdownOpen ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>

            {moreDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#e7eeff] py-2 z-50 animate-fade-in">
                {secondaryNavLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMoreDropdownOpen(false)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold transition-colors ${
                      isActive(item.path)
                        ? 'bg-[#ffdcc3]/40 text-[#8d4b00] font-bold'
                        : 'text-[#554336] hover:bg-[#f0f3ff] hover:text-[#111c2d]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#8d4b00]">
                      {item.icon}
                    </span>
                    <span>{t(item.labelEn, item.labelHi)}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right CTA cluster & Language Toggle with generous horizontal spacing */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-3.5 shrink-0">
          {/* Real EN / हिं Language Switcher */}
          <button
            onClick={toggleLang}
            className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-[#e7eeff] hover:bg-[#dee8ff] text-[#111c2d] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border border-[#cfdaf2] active:scale-95"
            title="Switch Language / भाषा बदलें"
          >
            <span className="material-symbols-outlined text-[16px] text-[#8d4b00]">translate</span>
            <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
          </button>

          {/* Direct Phone Call Button */}
          <a
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#263143] text-white hover:bg-[#111c2d] transition-all text-xs font-bold shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-[16px]">call</span>
            <span>{BUSINESS_DATA.phone}</span>
          </a>

          {/* Quick WhatsApp Dispatch */}
          <a
            href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
              'Namaste City Cab Service Indore, I want to book a cab'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#8d4b00] text-white hover:bg-[#b15f00] transition-all text-xs font-bold shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-11 h-11 rounded-xl bg-[#f0f3ff] hover:bg-[#e7eeff] text-[#111c2d] flex items-center justify-center transition-colors cursor-pointer border border-[#e7eeff] active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Backdrop & Drawer Navigation */}
      {mobileMenuOpen && (
        <>
          <div
            className="xl:hidden fixed inset-0 top-20 sm:top-24 md:top-26 bg-black/40 backdrop-blur-sm z-40 transition-opacity animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="xl:hidden relative z-50 bg-white border-b border-[#e7eeff] px-4 sm:px-6 py-5 shadow-2xl animate-fade-in max-h-[calc(100vh-5rem)] overflow-y-auto">
            {/* Logo preview in mobile drawer */}
            <div className="pb-4 mb-4 border-b border-[#f0f3ff] flex items-center justify-between">
              <img
                src={BUSINESS_DATA.logoUrl}
                alt="City Cab Service Logo"
                className="h-12 w-auto max-w-[220px] object-contain"
              />
              <span className="text-xs text-[#8d4b00] font-bold bg-[#ffdcc3]/50 px-2 py-0.5 rounded-full">
                24/7 Indore Taxi
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 pb-4 mb-4 border-b border-[#f0f3ff]">
              {allMobileNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 px-3 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                    isActive(link.path)
                      ? 'bg-[#ffdcc3]/60 text-[#8d4b00] font-bold'
                      : 'text-[#554336] hover:bg-[#f0f3ff] hover:text-[#111c2d]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px] text-[#8d4b00]">
                    {link.icon}
                  </span>
                  <span>{t(link.labelEn, link.labelHi)}</span>
                </Link>
              ))}
            </div>

            {/* Quick Action Buttons in Drawer */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="w-full sm:flex-1 py-3.5 rounded-xl bg-[#263143] text-white text-xs sm:text-sm font-bold text-center flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>099933 36703</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
                  'Namaste City Cab Service Indore, I would like to book a cab'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3.5 rounded-xl bg-[#8d4b00] text-white text-xs sm:text-sm font-bold text-center flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Book on WhatsApp</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

