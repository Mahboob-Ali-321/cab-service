import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_DATA, GalleryPhoto } from '../data/businessData';

interface GalleryLightboxProps {
  photo: GalleryPhoto | null;
  allPhotos: GalleryPhoto[];
  onClose: () => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  photo,
  allPhotos,
  onClose,
  onSelectPhoto,
}) => {
  const { t } = useLanguage();

  if (!photo) return null;

  const currentIndex = allPhotos.findIndex((p) => p.id === photo.id);
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length;
    onSelectPhoto(allPhotos[prevIndex]);
  };
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % allPhotos.length;
    onSelectPhoto(allPhotos[nextIndex]);
  };

  const whatsappInquiryUrl = `https://api.whatsapp.com/send?phone=${BUSINESS_DATA.whatsappNumber}&text=${encodeURIComponent(
    `Namaste City Cab Service Indore, I saw your gallery photo for "${photo.titleEn}" and want to inquire about booking a similar vehicle/tour.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#263143]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lightbox Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#e7eeff] bg-[#f0f3ff]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#8d4b00] text-[20px] sm:text-[22px]">photo_library</span>
            <span className="text-[11px] sm:text-xs font-bold text-[#111c2d] uppercase tracking-wider line-clamp-1">
              {t('Customer Pilgrimage Story • Verified Yatra', 'ग्राहक तीर्थ यात्रा संस्मरण • सत्यापित यात्रा')}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="w-8 h-8 rounded-full bg-[#dee8ff] hover:bg-[#cfdaf2] text-[#111c2d] flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-2"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Lightbox Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden min-h-0">
          {/* Left: Image with Navigation */}
          <div className="lg:col-span-7 bg-[#263143] flex flex-col justify-center items-center p-3 sm:p-4 relative min-h-[260px] sm:min-h-[320px] lg:min-h-[460px]">
            <img
              src={photo.src}
              alt={t(photo.titleEn, photo.titleHi)}
              className="max-w-full max-h-[50vh] sm:max-h-[58vh] object-contain rounded-xl shadow-lg"
            />
            {photo.metaEn && (
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-[#263143]/85 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-semibold text-white flex items-center gap-1.5 shadow">
                <span className="material-symbols-outlined text-[#ffb77d] text-[15px] sm:text-[16px]">verified</span>
                <span>{photo.metaEn}</span>
              </div>
            )}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-[#263143]/80 hover:bg-[#263143] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
              title="Previous"
            >
              <span className="material-symbols-outlined text-[22px] sm:text-[24px]">chevron_left</span>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-[#263143]/80 hover:bg-[#263143] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
              title="Next"
            >
              <span className="material-symbols-outlined text-[22px] sm:text-[24px]">chevron_right</span>
            </button>
          </div>

          {/* Right: Story Details & Booking Call-to-Action */}
          <div className="lg:col-span-5 p-4 sm:p-6 flex flex-col justify-between overflow-y-auto bg-white">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#dae2fd] text-[#131b2e] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-[#8d4b00]">verified</span>
                  {t('Verified Devotee Group', 'सत्यापित तीर्थ यात्री समूह')}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#dee8ff] text-[#111c2d] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-[#8d4b00]">ac_unit</span>
                  {t('Clean AC Vehicle', 'स्वच्छ एसी वाहन')}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#ffddb8] text-[#2a1700] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">schedule</span>
                  {t('100% Punctual', '100% समय पर')}
                </span>
              </div>

              <h3 className="font-serif font-bold text-xl text-[#111c2d] leading-snug">
                {t(photo.titleEn, photo.titleHi)}
              </h3>

              <div className="p-3.5 rounded-xl bg-[#f0f3ff] border border-[#e7eeff]">
                <p className="text-xs text-[#554336] leading-relaxed">
                  “{t(photo.storyEn || photo.titleEn, photo.storyHi || photo.titleHi)}”
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-[#554336]">
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white border border-[#e7eeff]">
                  <span className="material-symbols-outlined text-[#8d4b00] text-[18px]">route</span>
                  <span>Indore • Ujjain • Mandu</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white border border-[#e7eeff]">
                  <span className="material-symbols-outlined text-[#8d4b00] text-[18px]">badge</span>
                  <span>Commercial MP09</span>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-2 border-t border-[#e7eeff] mt-4">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#8d4b00] hover:bg-[#b15f00] text-white font-bold text-xs transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>{t('Book Similar Tour on WhatsApp', 'व्हाट्सएप पर ऐसी ही यात्रा बुक करें')}</span>
              </a>
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#263143] text-white font-semibold text-xs hover:bg-[#111c2d] transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>{t('Call 099933 36703', 'कॉल करें 099933 36703')}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="p-3 bg-[#f0f3ff] border-t border-[#e7eeff] flex items-center justify-between gap-3">
          <div className="text-xs text-[#554336] shrink-0 hidden sm:block font-medium">
            {t('More Yatra Memories:', 'अन्य यात्रा चित्र:')}
          </div>
          <div className="flex items-center gap-2.5 overflow-x-auto py-1">
            {allPhotos.map((p) => (
              <button
                key={p.id}
                onClick={() => onSelectPhoto(p)}
                className={`w-16 h-12 rounded-lg overflow-hidden shrink-0 relative transition-all cursor-pointer ${
                  p.id === photo.id
                    ? 'border-2 border-[#8d4b00] scale-105 shadow-sm'
                    : 'border border-[#e7eeff] opacity-70 hover:opacity-100'
                }`}
              >
                <img src={p.src} alt={p.titleEn} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-lg bg-white hover:bg-[#e7eeff] text-[#111c2d] flex items-center justify-center transition-colors cursor-pointer border border-[#e7eeff]"
              title="Previous"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-lg bg-white hover:bg-[#e7eeff] text-[#111c2d] flex items-center justify-center transition-colors cursor-pointer border border-[#e7eeff]"
              title="Next"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
