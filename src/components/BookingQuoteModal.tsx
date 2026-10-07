import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_DATA } from '../data/businessData';

interface BookingQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  destinationTitle?: string;
  vehicleName?: string;
  vehicleReg?: string;
  fareAmount?: number;
  pickupLocation?: string;
  dropLocation?: string;
}

export const BookingQuoteModal: React.FC<BookingQuoteModalProps> = ({
  isOpen,
  onClose,
  destinationTitle = 'Indore Airport Pickup to Ujjain Mahakal Jyotirlinga',
  vehicleName = 'Maruti Suzuki Dzire (AC Sedan)',
  vehicleReg = 'MP09TB5877',
  fareAmount = 2100,
  pickupLocation = 'Devi Ahilya Bai Holkar Airport (IDR)',
  dropLocation = 'Mahakaleshwar Temple, Ujjain',
}) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const whatsappText = encodeURIComponent(
    `Namaste City Cab Service Indore,\n\nI confirm my booking quote:\n- Vehicle: ${vehicleName} (${vehicleReg})\n- Pickup: ${pickupLocation}\n- Destination: ${dropLocation}\n- Estimated Fixed Fare: ₹${fareAmount}\n\nPlease dispatch driver and confirm booking.`
  );

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${BUSINESS_DATA.whatsappNumber}&text=${whatsappText}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#263143]/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#dee8ff] px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-[#e7eeff]">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px] sm:text-[24px]">check_circle</span>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#111c2d]">
                  {t('Booking Quote & Fare Summary', 'बुकिंग कोटेशन एवं किराया विवरण')}
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 text-[11px] sm:text-xs font-bold">
                  {t('Instant Dispatch Ready', 'तत्काल रवानगी हेतु तैयार')}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#554336] line-clamp-1">{destinationTitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#e7eeff] hover:bg-[#d8e3fb] text-[#554336] hover:text-[#111c2d] flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-2"
            title="Close"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 max-h-[82vh] overflow-y-auto">
          {/* Assigned Fleet Class */}
          <div className="bg-[#f0f3ff] rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4 border border-[#e7eeff]">
            <div className="w-full sm:w-40 aspect-[4/3] rounded-lg overflow-hidden bg-[#e7eeff] shrink-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvzFWeO4g4-qjL_VtmibUYB8zI0BbpuDbrT_klxe4LyiLIqXXgVEA19M86GM9XJK-c_5yYPCrzcGenHppdRh0YkWdh3L8BiK5h8Np9PL1eyvE26pn9AgGKj82gfJeRVUZ079JHDHb08sVYlgnAU0DKgeSxMo662ze5Mw9tJ7ZtsdeIMcJ5H5qdN7HBIYH0pdC_r8xOZGcuhbNPcWYygHHO5JqtGNLigVjs-W1VsVIMT8Oa0_o1wkoC"
                alt="Maruti Suzuki Dzire MP09TB5877"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 space-y-1 w-full">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#8d4b00] font-bold uppercase tracking-wider">
                  {t('Assigned Fleet Class', 'निर्धारित वाहन श्रेणी')}
                </span>
                <span className="text-xs bg-[#d8e3fb] px-2 py-0.5 rounded text-[#111c2d] font-semibold">
                  Reg: {vehicleReg}
                </span>
              </div>
              <h4 className="font-bold text-[#111c2d] text-base">{vehicleName}</h4>
              <p className="text-xs text-[#554336]">
                {t('Chilled AC • Luggage Carrier • Sanitized Cabin • Uniformed Chauffeur', 'चिल्ड एसी • रूफ कैरियर • सैनिटाइज्ड केबिन • अनुभवी ड्राइवर')}
              </p>
              <div className="flex items-center gap-3 pt-1 text-xs text-[#111c2d]">
                <span className="inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#8d4b00] text-[16px]">person</span>
                  Up to 4 Pax
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#8d4b00] text-[16px]">luggage</span>
                  2 Suitcases
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-emerald-600 text-[16px]">verified</span>
                  Clean & Odor-free
                </span>
              </div>
            </div>
          </div>

          {/* Itinerary Details */}
          <div className="bg-[#f0f3ff] rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-[#e7eeff] pb-2">
              <span className="text-xs font-bold text-[#111c2d] uppercase tracking-wide">
                {t('Itinerary & Schedule Details', 'यात्रा एवं समय विवरण')}
              </span>
              <span className="text-xs text-[#8d4b00] font-semibold">55 km • Approx 1 hr 15 mins</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8d4b00] text-[18px] mt-0.5">flight_land</span>
                <div>
                  <span className="text-[#554336] block">{t('Pickup Location', 'पिकअप स्थान')}</span>
                  <strong className="text-[#111c2d] text-sm">{pickupLocation}</strong>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8d4b00] text-[18px] mt-0.5">temple_hindu</span>
                <div>
                  <span className="text-[#554336] block">{t('Drop Destination', 'ड्रॉप स्थान')}</span>
                  <strong className="text-[#111c2d] text-sm">{dropLocation}</strong>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8d4b00] text-[18px] mt-0.5">calendar_month</span>
                <div>
                  <span className="text-[#554336] block">{t('Travel Date & Time', 'यात्रा दिनांक व समय')}</span>
                  <strong className="text-[#111c2d] text-sm">{t('Today / Flexible • On Arrival', 'आज / सुविधानुसार • आगमन पर')}</strong>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8d4b00] text-[18px] mt-0.5">badge</span>
                <div>
                  <span className="text-[#554336] block">{t('Support Dispatch', 'डिस्पैच हेल्पलाइन')}</span>
                  <strong className="text-[#111c2d] text-sm">{BUSINESS_DATA.phone}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Fare Breakdown */}
          <div className="bg-white rounded-xl p-4 border border-[#d8e3fb] shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#111c2d] font-bold">
                {t('Transparent Fare Breakdown', 'पारदर्शी किराया विवरण')}
              </span>
              <span className="text-xs text-emerald-600 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                {t('No Hidden Charges', 'कोई छिपा शुल्क नहीं')}
              </span>
            </div>
            <div className="space-y-1.5 text-xs text-[#554336] pt-1">
              <div className="flex justify-between">
                <span>{t('Base Dedicated Cab Fare (Indore Airport → Ujjain)', 'बेस कैब किराया (इंदौर एयरपोर्ट → उज्जैन)')}</span>
                <span className="text-[#111c2d] font-medium">₹1,700</span>
              </div>
              <div className="flex justify-between">
                <span>{t('State Toll Tax & Airport Parking Allowance', 'स्टेट टोल टैक्स एवं एयरपोर्ट पार्किंग')}</span>
                <span className="text-[#111c2d] font-medium">{t('Included (₹250)', 'शामिल (₹250)')}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('Driver Allowance & Fuel Charges', 'ड्राइवर भत्ता व ईंधन व्यय')}</span>
                <span className="text-[#111c2d] font-medium">{t('Included', 'शामिल')}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('Night / Peak Surge Charges', 'नाइट / पीक सर्ज चार्ज')}</span>
                <span className="text-emerald-600 font-medium">₹0 ({t('Zero Surge', 'शून्य सर्ज')})</span>
              </div>
              <div className="border-t border-[#e7eeff] pt-2 mt-1 flex justify-between items-center text-sm">
                <span className="font-bold text-[#111c2d]">{t('Total Guaranteed Fixed Fare', 'कुल निश्चित किराया')}</span>
                <div className="text-right">
                  <span className="font-serif text-[#8d4b00] font-bold text-[22px]">₹{fareAmount}</span>
                  <span className="block text-[11px] text-[#554336]">
                    {t('Pay after arrival in cash or UPI', 'यात्रा पूरी होने पर कैश अथवा यूपीआई द्वारा भुगतान')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="space-y-2 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[22px]">chat</span>
              <span>{t('Send WhatsApp Booking to 099933 36703', 'व्हाट्सएप बुकिंग 099933 36703 पर भेजें')}</span>
            </a>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#263143] hover:bg-[#111c2d] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>{t('Call Driver Dispatch', 'ड्राइवर डिस्पैच कॉल करें')}</span>
              </a>
              <button
                onClick={onClose}
                className="py-2.5 px-4 rounded-xl bg-[#e7eeff] hover:bg-[#dee8ff] text-[#111c2d] text-xs font-semibold transition-colors cursor-pointer"
              >
                {t('Close', 'बंद करें')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
