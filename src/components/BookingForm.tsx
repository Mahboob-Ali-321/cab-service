import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { buildWhatsAppBookingUrl } from '../utils/whatsapp';

interface BookingFormProps {
  initialTripType?: string;
  initialVehicle?: string;
  compact?: boolean;
  onSuccess?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialTripType = 'Mahakal Darshan Ujjain',
  initialVehicle = 'Sedan (Dzire / Etios - 4 Seater)',
  compact = false,
  onSuccess,
}) => {
  const { t } = useLanguage();
  const todayStr = new Date().toISOString().split('T')[0];

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [tripType, setTripType] = useState(initialTripType);
  const [vehicle, setVehicle] = useState(initialVehicle);
  const [date, setDate] = useState(todayStr);
  const [time, setTime] = useState('06:00');
  const [passengers, setPassengers] = useState('4');
  const [notes, setNotes] = useState('');

  // Inline errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!name.trim()) {
      errs.name = t('Please enter your full name', 'कृपया अपना पूरा नाम दर्ज करें');
    }

    const cleanMobile = mobile.replace(/[^0-9]/g, '');
    if (!cleanMobile) {
      errs.mobile = t('Mobile number is required', 'मोबाइल नंबर अनिवार्य है');
    } else if (cleanMobile.length !== 10) {
      errs.mobile = t('Mobile number must be exactly 10 digits', 'मोबाइल नंबर 10 अंकों का होना चाहिए');
    }

    if (!pickup.trim()) {
      errs.pickup = t('Pickup location is required', 'पिकअप स्थान अनिवार्य है');
    }

    if (!drop.trim()) {
      errs.drop = t('Drop destination is required', 'ड्रॉप स्थान अनिवार्य है');
    }

    if (!date) {
      errs.date = t('Travel date is required', 'यात्रा दिनांक अनिवार्य है');
    } else {
      const selectedDate = new Date(date);
      selectedDate.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        errs.date = t('Date cannot be in the past', 'यात्रा दिनांक पुरानी नहीं हो सकती');
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const url = buildWhatsAppBookingUrl({
      name: name.trim(),
      mobile: mobile.trim(),
      pickup: pickup.trim(),
      drop: drop.trim(),
      tripType,
      vehicle,
      date,
      time,
      passengers,
      specialNotes: notes.trim(),
    });

    setSubmittedUrl(url);

    // Explicitly open in a new tab per requirement
    window.open(url, '_blank', 'noopener,noreferrer');

    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Row 1: Name and Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111c2d] mb-1">
              <span className="material-symbols-outlined text-[16px] text-[#8d4b00] align-middle mr-1">person</span>
              {t('Your Name *', 'आपका नाम *')}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors({ ...errors, name: '' });
              }}
              placeholder={t('e.g. Ramesh Sharma', 'उदा. रमेश शर्मा')}
              className={`w-full h-12 px-3.5 rounded-lg bg-[#f0f3ff] text-[#111c2d] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8d4b00] transition-colors border ${
                errors.name ? 'border-red-500 bg-red-50/40' : 'border-transparent'
              }`}
            />
            {errors.name && <p className="text-xs text-red-600 mt-1 font-medium">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111c2d] mb-1">
              <span className="material-symbols-outlined text-[16px] text-[#8d4b00] align-middle mr-1">call</span>
              {t('Mobile Number (10 Digits) *', 'मोबाइल नंबर (10 अंक) *')}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500">+91</span>
              <input
                type="tel"
                maxLength={10}
                value={mobile}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9]/g, '');
                  setMobile(val);
                  if (errors.mobile) setErrors({ ...errors, mobile: '' });
                }}
                placeholder="9993336703"
                className={`w-full h-12 pl-12 pr-3.5 rounded-lg bg-[#f0f3ff] text-[#111c2d] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8d4b00] transition-colors border ${
                  errors.mobile ? 'border-red-500 bg-red-50/40' : 'border-transparent'
                }`}
              />
            </div>
            {errors.mobile && <p className="text-xs text-red-600 mt-1 font-medium">{errors.mobile}</p>}
          </div>
        </div>

        {/* Row 2: Pickup and Drop Locations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111c2d] mb-1">
              <span className="material-symbols-outlined text-[16px] text-[#8d4b00] align-middle mr-1">my_location</span>
              {t('Pickup Location *', 'पिकअप स्थान *')}
            </label>
            <input
              type="text"
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
                if (errors.pickup) setErrors({ ...errors, pickup: '' });
              }}
              placeholder={t('e.g. Indore Airport, Vijay Nagar, Railway Station', 'उदा. इंदौर एयरपोर्ट, विजय नगर, स्टेशन')}
              className={`w-full h-12 px-3.5 rounded-lg bg-[#f0f3ff] text-[#111c2d] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8d4b00] transition-colors border ${
                errors.pickup ? 'border-red-500 bg-red-50/40' : 'border-transparent'
              }`}
            />
            {errors.pickup && <p className="text-xs text-red-600 mt-1 font-medium">{errors.pickup}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111c2d] mb-1">
              <span className="material-symbols-outlined text-[16px] text-[#8d4b00] align-middle mr-1">location_on</span>
              {t('Drop Destination *', 'ड्रॉप स्थान *')}
            </label>
            <input
              type="text"
              value={drop}
              onChange={(e) => {
                setDrop(e.target.value);
                if (errors.drop) setErrors({ ...errors, drop: '' });
              }}
              placeholder={t('e.g. Ujjain Mahakal, Omkareshwar, Bhopal, Mandu', 'उदा. उज्जैन महाकाल, ओंकारेश्वर, भोपाल')}
              className={`w-full h-12 px-3.5 rounded-lg bg-[#f0f3ff] text-[#111c2d] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8d4b00] transition-colors border ${
                errors.drop ? 'border-red-500 bg-red-50/40' : 'border-transparent'
              }`}
            />
            {errors.drop && <p className="text-xs text-red-600 mt-1 font-medium">{errors.drop}</p>}
          </div>
        </div>

        {/* Row 3: Trip Type & Vehicle Preference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111c2d] mb-1">
              <span className="material-symbols-outlined text-[16px] text-[#8d4b00] align-middle mr-1">sync_alt</span>
              {t('Trip Type', 'यात्रा का प्रकार')}
            </label>
            <select
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
              className="w-full h-12 px-3.5 rounded-lg bg-[#f0f3ff] text-[#111c2d] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8d4b00] transition-colors cursor-pointer"
            >
              <option value="Mahakal Darshan Ujjain">{t('Ujjain Mahakal Darshan', 'उज्जैन महाकाल दर्शन')}</option>
              <option value="Omkareshwar Jyotirlinga">{t('Omkareshwar Jyotirlinga Yatra', 'ओंकारेश्वर ज्योतिर्लिंग यात्रा')}</option>
              <option value="Dual Jyotirlinga Circuit">{t('Dual Jyotirlinga (Ujjain + Omkareshwar)', '2 ज्योतिर्लिंग (उज्जैन + ओंकारेश्वर)')}</option>
              <option value="Indore Airport Transfer">{t('Indore Airport Transfer (Pickup / Drop)', 'इंदौर एयरपोर्ट ट्रांसफर')}</option>
              <option value="Indore Local 8hr/80km">{t('Indore Local Sightseeing (8h / 80km)', 'इंदौर लोकल साइटसीइंग')}</option>
              <option value="Mandu & Maheshwar Heritage">{t('Mandu & Maheshwar Heritage Tour', 'मांडू एवं महेश्वर हेरिटेज टूर')}</option>
              <option value="One Way Outstation">{t('One Way Outstation Cab', 'वन वे आउटस्टेशन कैब')}</option>
              <option value="Round Trip Outstation">{t('Round Trip Intercity Cab', 'राउंड ट्रिप इंटरसिटी कैब')}</option>
              <option value="Tempo Traveller Group Tour">{t('Tempo Traveller Group Tour', 'टेम्पो ट्रेवलर ग्रुप टूर')}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111c2d] mb-1">
              <span className="material-symbols-outlined text-[16px] text-[#8d4b00] align-middle mr-1">directions_car</span>
              {t('Vehicle Preference', 'गाड़ी का चयन')}
            </label>
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full h-12 px-3.5 rounded-lg bg-[#f0f3ff] text-[#111c2d] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8d4b00] transition-colors cursor-pointer"
            >
              <option value="Sedan (Maruti Dzire - 4 Seater)">{t('Sedan (Maruti Dzire - 4 Pax)', 'सेडान (मारुति डिजायर - 4 सीटर)')}</option>
              <option value="MPV (Maruti Ertiga - 6 Seater)">{t('MPV (Maruti Ertiga - 6 Pax)', 'एमपीवी (मारुति अर्टिगा - 6 सीटर)')}</option>
              <option value="Innova Crysta (6-7 Seater)">{t('Innova Crysta (6-7 Pax)', 'इनोवा क्रिस्टा (6-7 सीटर)')}</option>
              <option value="Tempo Traveller (12-17 Seater)">{t('Tempo Traveller (12-17 Pax)', 'टेम्पो ट्रेवलर (12-17 सीटर)')}</option>
              <option value="Tempo Traveller (20-26 Seater)">{t('Tempo Traveller (20-26 Pax)', 'टेम्पो ट्रेवलर (20-26 सीटर)')}</option>
            </select>
          </div>
        </div>

        {/* Row 4: Travel Date, Pickup Time, Passengers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111c2d] mb-1">
              <span className="material-symbols-outlined text-[16px] text-[#8d4b00] align-middle mr-1">calendar_month</span>
              {t('Travel Date *', 'यात्रा दिनांक *')}
            </label>
            <input
              type="date"
              min={todayStr}
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                if (errors.date) setErrors({ ...errors, date: '' });
              }}
              className={`w-full h-12 px-3.5 rounded-lg bg-[#f0f3ff] text-[#111c2d] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8d4b00] transition-colors border ${
                errors.date ? 'border-red-500 bg-red-50/40' : 'border-transparent'
              }`}
            />
            {errors.date && <p className="text-xs text-red-600 mt-1 font-medium">{errors.date}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111c2d] mb-1">
              <span className="material-symbols-outlined text-[16px] text-[#8d4b00] align-middle mr-1">schedule</span>
              {t('Pickup Time', 'पिकअप समय')}
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full h-12 px-3.5 rounded-lg bg-[#f0f3ff] text-[#111c2d] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8d4b00] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111c2d] mb-1">
              <span className="material-symbols-outlined text-[16px] text-[#8d4b00] align-middle mr-1">group</span>
              {t('No. of Passengers', 'यात्रियों की संख्या')}
            </label>
            <input
              type="number"
              min={1}
              max={50}
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="w-full h-12 px-3.5 rounded-lg bg-[#f0f3ff] text-[#111c2d] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8d4b00] transition-colors"
            />
          </div>
        </div>

        {/* Optional Notes */}
        {!compact && (
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111c2d] mb-1">
              <span className="material-symbols-outlined text-[16px] text-[#8d4b00] align-middle mr-1">notes</span>
              {t('Special Requirements (Optional)', 'विशेष आवश्यकता (वैकल्पिक)')}
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t('e.g. 3 AM Bhasma Aarti, luggage carrier, senior citizen assistance', 'उदा. सुबह 3 बजे भस्म आरती, रूफ कैरियर, बुजुर्ग सहायता')}
              className="w-full h-12 px-3.5 rounded-lg bg-[#f0f3ff] text-[#111c2d] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8d4b00] transition-colors"
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full h-13 py-3.5 px-6 rounded-xl bg-[#8d4b00] hover:bg-[#b15f00] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
          >
            <span className="material-symbols-outlined text-[22px]">chat</span>
            <span>{t('Get Confirmed Quote on WhatsApp', 'व्हाट्सएप पर तुरंत कन्फर्म कोटेशन प्राप्त करें')}</span>
          </button>
        </div>

        {/* Fallback link if popup was blocked */}
        {submittedUrl && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-1 text-xs">
            <p className="text-emerald-900 font-medium">
              {t('Booking request prepared!', 'बुकिंग अनुरोध तैयार है!')}
            </p>
            <a
              href={submittedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#8d4b00] hover:underline font-bold text-xs"
            >
              <span>{t('Click here if WhatsApp did not open automatically', 'यदि व्हाट्सएप स्वतः नहीं खुला, तो यहाँ क्लिक करें')}</span>
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
          </div>
        )}

        {/* Trust assurance */}
        <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-[#554336] gap-2">
          <span className="inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-[#8d4b00]">currency_rupee</span>
            {t('Zero advance booking fee • Pay directly to driver after trip', 'शून्य एडवांस फीस • सफर के बाद ड्राइवर को सीधे भुगतान')}
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-[#8d4b00]">call</span>
            {t('Need urgent pickup? Call', 'तुरंत कैब चाहिए? कॉल करें')}{' '}
            <a href="tel:09993336703" className="text-[#8d4b00] font-bold hover:underline">
              099933 36703
            </a>
          </span>
        </div>
      </form>
    </div>
  );
};
