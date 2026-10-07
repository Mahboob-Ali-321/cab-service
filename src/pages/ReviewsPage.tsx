import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_DATA, GOOGLE_MAPS_URL } from '../data/businessData';
import { PageSEO } from '../components/PageSEO';

export const ReviewsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <PageSEO
        title="Customer Reviews & Ratings | City Cab Service Indore (5.0★ Google)"
        description="Read verified 5.0 star Google reviews for City Cab Service Indore. Read real feedback from Bulbul Kumar, Vishal Soni, and Shubham Rathore on safe driving, spotless cabs, and fair pricing."
        canonicalPath="/reviews"
      />

      {/* Header */}
      <section className="bg-white py-12 md:py-16 border-b border-[#e7eeff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f0f3ff] mb-3 border border-[#e7eeff]">
              <div className="flex text-[#f59e0b]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <span className="text-xs font-bold text-[#111c2d]">5.0 Out of 5.0 Rating</span>
              <span className="text-xs text-[#554336]">• 28 Google Reviews</span>
            </div>

            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#111c2d] mb-3">
              {t('Verified Customer Reviews', 'सत्यापित ग्राहक समीक्षाएं')}
            </h1>
            <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
              {t(
                'Read real, unmodified Google reviews from families, business travellers, and solo pilgrims who booked City Cab Service for local and outstation travel across Madhya Pradesh.',
                'मध्य प्रदेश में हमारे साथ यात्रा करने वाले परिवारों, कॉरपोरेट अतिथियों एवं सोलो यात्रियों के वास्तविक एवं अप्रकाशित विचार।'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Detailed Section */}
      <section className="py-14 bg-[#f9f9ff]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          {BUSINESS_DATA.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e7eeff] space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#f0f3ff] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#8d4b00]/15 text-[#8d4b00] font-bold text-lg flex items-center justify-center">
                    {rev.initial}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#111c2d]">{rev.author}</h3>
                    <p className="text-xs text-[#554336]">{t(rev.badgeEn, rev.badgeHi)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[#f59e0b]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                  <span className="text-xs font-bold text-[#111c2d] ml-1">5.0 / 5.0</span>
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-[#111c2d] italic leading-relaxed">
                "{t(rev.text, rev.textHi)}"
              </blockquote>

              <div className="flex items-center gap-2 pt-2 text-xs text-emerald-700 font-semibold">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Verified Google Maps Reviewer</span>
              </div>
            </div>
          ))}

          {/* Google Review Prompt */}
          <div className="bg-white rounded-2xl p-8 border border-[#e7eeff] shadow-sm text-center space-y-3">
            <h3 className="font-serif font-bold text-xl text-[#111c2d]">
              {t('Have you travelled with City Cab Service recently?', 'क्या आपने हाल ही में हमारे साथ यात्रा की है?')}
            </h3>
            <p className="text-xs text-[#554336] max-w-lg mx-auto">
              {t(
                'Your honest feedback helps fellow travelers and pilgrims choose safe, vetted drivers in Indore. Click below to view all ratings or leave your review on Google.',
                'आपकी सच्ची समीक्षा अन्य यात्रियों एवं श्रद्धालुओं को इंदौर में सुरक्षित और प्रमाणित कैब चुनने में सहायता करती है।'
              )}
            </p>
            <div className="pt-2">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8d4b00] hover:bg-[#b15f00] text-white text-xs font-bold transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                <span>{t('View City Cab Service on Google Maps', 'गूगल मैप्स पर सभी समीक्षाएं देखें')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
