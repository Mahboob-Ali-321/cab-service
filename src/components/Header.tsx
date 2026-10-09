import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_DATA } from '../data/businessData';

export const Header: React.FC = () => {
  const { lang, toggleLang, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // All 9 navigation links as requested
  const navLinks = [
    { path: '/', labelEn: 'Home', labelHi: 'होम', icon: 'home' },
    { path: '/services', labelEn: 'Services', labelHi: 'सेवाएं', icon: 'commute' },
    { path: '/fleet', labelEn: 'Fleet', labelHi: 'गाड़ियां', icon: 'directions_car' },
    { path: '/tours', labelEn: 'Tours', labelHi: 'तीर्थ यात्रा', icon: 'temple_hindu' },
    { path: '/about', labelEn: 'About', labelHi: 'परिचय', icon: 'info' },
    { path: '/reviews', labelEn: 'Reviews', labelHi: 'समीक्षाएं', icon: 'star' },
    { path: '/gallery', labelEn: 'Gallery', labelHi: 'गैलरी', icon: 'photo_library' },
    { path: '/faq', labelEn: 'FAQ', labelHi: 'सामान्य प्रश्न', icon: 'help_outline' },
    { path: '/contact', labelEn: 'Contact', labelHi: 'संपर्क', icon: 'call' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-[0_2px_14px_rgba(0,0,0,0.06)] border-b border-[#e7eeff] transition-all">
      {/* One shared header container: max-w-7xl, mx-auto, px-4 sm:px-6 lg:px-8, single flex row vertically centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          to="/"
          className="flex items-center shrink-0 focus:outline-none"
          title="City Cab Service Indore"
        >
          {/* Header (below sm, 640px): icon-only */}
          <img
            src="/city-cab-logo-icon.png"
            alt="City Cab Service"
            className="block sm:hidden h-10 w-auto object-contain"
          />
          {/* Header (sm and above): full logo */}
          <img
            src="/city-cab-logo-full.png"
            alt="City Cab Service logo"
            className="hidden sm:block h-12 sm:h-14 lg:h-16 w-auto object-contain"
          />
        </Link>

        {/* Center: Nav links (Home, Services, Fleet, Tours, About, Reviews, Gallery, FAQ, Contact) with gap-6 to gap-8 at xl */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold transition-colors py-1 relative ${
                isActive(link.path)
                  ? 'text-[#8d4b00] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8d4b00] after:rounded-full'
                  : 'text-[#554336] hover:text-[#111c2d]'
              }`}
            >
              {t(link.labelEn, link.labelHi)}
            </Link>
          ))}
        </nav>

        {/* Right: Phone number, WhatsApp button, and Hindi language toggle with gap-3 */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Direct Phone Call Button (Desktop xl) */}
          <a
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#263143] text-white hover:bg-[#111c2d] transition-all text-xs font-bold shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-[16px]">call</span>
            <span>{BUSINESS_DATA.phone}</span>
          </a>

          {/* Quick WhatsApp Dispatch (Visible below xl on sm and above; hidden on mobile to avoid overlap at 360px) */}
          <a
            href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
              'Namaste City Cab Service Indore, I want to book a cab'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#8d4b00] text-white hover:bg-[#b15f00] transition-all text-xs font-bold shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>WhatsApp</span>
          </a>

          {/* Real EN / हिं Language Switcher (Always visible) */}
          <button
            onClick={toggleLang}
            className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-[#e7eeff] hover:bg-[#dee8ff] text-[#111c2d] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border border-[#cfdaf2] active:scale-95"
            title="Switch Language / भाषा बदलें"
          >
            <span className="material-symbols-outlined text-[16px] text-[#8d4b00]">translate</span>
            <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
          </button>

          {/* Hamburger Menu (Shown below xl) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-xl bg-[#f0f3ff] hover:bg-[#e7eeff] text-[#111c2d] flex items-center justify-center transition-colors cursor-pointer border border-[#e7eeff] active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Hamburger Drawer Navigation (Shown below xl) */}
      {mobileMenuOpen && (
        <>
          <div
            className="xl:hidden fixed inset-0 top-16 md:top-20 bg-black/40 backdrop-blur-sm z-40 transition-opacity animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="xl:hidden relative z-50 bg-white border-b border-[#e7eeff] px-4 sm:px-6 py-5 shadow-2xl animate-fade-in max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-5rem)] overflow-y-auto">
            {/* Top of drawer: Full Logo */}
            <div className="pb-4 mb-3 border-b border-[#f0f3ff] flex items-center justify-between">
              <img
                src="/city-cab-logo-full.png"
                alt="City Cab Service logo"
                className="h-12 sm:h-14 w-auto object-contain"
              />
              <span className="text-xs text-[#8d4b00] font-bold bg-[#ffdcc3]/50 px-2.5 py-1 rounded-full">
                24/7 Indore Taxi
              </span>
            </div>

            {/* All Nav Links with generous 48px tap targets */}
            <div className="flex flex-col space-y-1 pb-4 mb-4 border-b border-[#f0f3ff]">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`min-h-[48px] flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
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

            {/* Bottom: Call and WhatsApp buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="w-full sm:flex-1 min-h-[48px] py-3 rounded-xl bg-[#263143] text-white text-sm font-bold text-center flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>{BUSINESS_DATA.phone}</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
                  'Namaste City Cab Service Indore, I would like to book a cab'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 min-h-[48px] py-3 rounded-xl bg-[#8d4b00] text-white text-sm font-bold text-center flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
