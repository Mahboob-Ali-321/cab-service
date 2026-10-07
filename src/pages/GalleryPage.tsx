import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_DATA, GalleryPhoto } from '../data/businessData';
import { PageSEO } from '../components/PageSEO';
import { GalleryLightbox } from '../components/GalleryLightbox';

export const GalleryPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'vehicles' | 'groups' | 'destinations'>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = BUSINESS_DATA.gallery.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <div className="w-full">
      <PageSEO
        title="Photo Gallery | Real Fleet & Pilgrimage Moments | City Cab Indore"
        description="View authentic photographs of City Cab Service Indore: Clean Maruti Dzire, Ertiga, Force Tempo Travellers, and happy pilgrim groups at Ujjain, Omkareshwar, and Patalpani."
        canonicalPath="/gallery"
      />

      <GalleryLightbox
        photo={activePhoto}
        allPhotos={BUSINESS_DATA.gallery}
        onClose={() => setActivePhoto(null)}
        onSelectPhoto={(p) => setActivePhoto(p)}
      />

      {/* Header */}
      <section className="bg-white py-12 md:py-16 border-b border-[#e7eeff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-widest">
              {t('Genuine Photography Only', 'वास्तविक एवं प्रामाणिक फोटोग्राफी')}
            </span>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#111c2d] mt-2 mb-3">
              {t('Fleet & Pilgrimage Photo Gallery', 'वाहन एवं तीर्थ यात्रा फोटो गैलरी')}
            </h1>
            <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
              {t(
                'Explore genuine pictures of our vehicles, verified tour captains, and satisfied pilgrim groups across Mahakaleshwar Ujjain, Omkareshwar Jyotirlinga, and scenic MP destinations.',
                'हमारे सुसज्जित वाहनों, अनुभवी ड्राइवरों और महाकाल व ओंकारेश्वर यात्रा करने वाले प्रसन्न यात्री समूहों के वास्तविक चित्र।'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-14 bg-[#f9f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {(['all', 'vehicles', 'groups', 'destinations'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#8d4b00] text-white shadow-md'
                    : 'bg-white text-[#554336] hover:bg-[#f0f3ff] border border-[#e7eeff]'
                }`}
              >
                {t(cat, cat === 'all' ? 'सभी चित्र' : cat === 'vehicles' ? 'गाड़ियां' : cat === 'groups' ? 'ग्रुप टूर' : 'दर्शनीय स्थल')}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#e7eeff] cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-square overflow-hidden bg-[#dee8ff]">
                  <img
                    src={photo.src}
                    alt={photo.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#263143]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs text-white font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">visibility</span>
                      {t('Click to view full story', 'पूरी कहानी देखने के लिए क्लिक करें')}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-xs text-[#111c2d] line-clamp-1">
                    {t(photo.titleEn, photo.titleHi)}
                  </h3>
                  {photo.metaEn && (
                    <p className="text-[11px] text-[#8d4b00] font-semibold mt-1">
                      {photo.metaEn}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
