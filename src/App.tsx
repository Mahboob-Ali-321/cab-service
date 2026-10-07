/**
 * City Cab Service Indore - Multi-Page Web Application
 * @license Apache-2.0
 */
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyActions } from './components/StickyActions';
import { BookingQuoteModal } from './components/BookingQuoteModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { FleetPage } from './pages/FleetPage';
import { ToursPage } from './pages/ToursPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { GalleryPage } from './pages/GalleryPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { BookPage } from './pages/BookPage';

export default function App() {
  const [isGlobalQuoteOpen, setIsGlobalQuoteOpen] = useState(false);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-[#111c2d] selection:bg-[#d97706]/20 selection:text-[#8d4b00]">
          {/* Shared Header across all pages */}
          <Header />

          {/* Main content route view */}
          <main className="flex-1 w-full pt-20 sm:pt-24 md:pt-26">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/fleet" element={<FleetPage />} />
              <Route path="/tours" element={<ToursPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/book" element={<BookPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Sticky actions (Mobile bottom bar + Desktop floating pulsing WhatsApp) */}
          <StickyActions onOpenBookingModal={() => setIsGlobalQuoteOpen(true)} />

          {/* Global Booking Quote Modal */}
          <BookingQuoteModal
            isOpen={isGlobalQuoteOpen}
            onClose={() => setIsGlobalQuoteOpen(false)}
          />

          {/* Shared Footer across all pages */}
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
