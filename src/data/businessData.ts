/**
 * City Cab Service - Centralized Business Data & Content Configuration
 * All business details, contact numbers, fares, fleet specs, and multilingual text.
 */

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  regNumber: string;
  seats: string;
  luggage: string;
  acType: string;
  ratePerKm: number;
  image: string;
  descEn: string;
  descHi: string;
  highlightsEn: string[];
  highlightsHi: string[];
  bestForEn: string;
  bestForHi: string;
}

export interface ServiceItem {
  id: string;
  titleEn: string;
  titleHi: string;
  icon: string;
  descEn: string;
  descHi: string;
  featuresEn: string[];
  featuresHi: string[];
  startingFareEn: string;
  startingFareHi: string;
}

export interface TourPackage {
  id: string;
  titleEn: string;
  titleHi: string;
  badgeEn: string;
  badgeHi: string;
  durationEn: string;
  durationHi: string;
  distanceEn: string;
  distanceHi: string;
  descEn: string;
  descHi: string;
  image: string;
  rates: {
    dzire: number;
    ertiga: number;
    tempo?: number;
  };
  highlightsEn: string[];
  highlightsHi: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  textHi?: string;
  badgeEn: string;
  badgeHi: string;
  initial: string;
}

export interface GalleryPhoto {
  id: string;
  category: 'vehicles' | 'groups' | 'destinations';
  src: string;
  titleEn: string;
  titleHi: string;
  storyEn?: string;
  storyHi?: string;
  metaEn?: string;
}

export interface FaqItem {
  id: string;
  questionEn: string;
  questionHi: string;
  answerEn: string;
  answerHi: string;
}

export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/CITY+CAB+SERVICE/@22.6924827,75.7455053,13z/data=!4m10!1m2!2m1!1scity+cab+services+indore!3m6!1s0x3962fdc22c9c9e2b:0xa0b9b599c8eb9a27!8m2!3d22.6924827!4d75.821723!15sChhjaXR5IGNhYiBzZXJ2aWNlcyBpbmRvcmVaGiIYY2l0eSBjYWIgc2VydmljZXMgaW5kb3JlkgEMdGF4aV9zZXJ2aWNl4AEA!16s%2Fg%2F11rc9n5rpj?entry=ttu';

export const BUSINESS_DATA = {
  name: 'City Cab Service',
  nameHi: 'सिटी कैब सर्विस',
  tagline: 'Reliable Cab Service in Indore & Pilgrimage Tours',
  taglineHi: 'इंदौर में विश्वसनीय कैब सर्विस एवं तीर्थ दर्शन यात्रा',
  phone: '099933 36703',
  phoneRaw: '09993336703',
  phoneInternational: '+919993336703',
  whatsappNumber: '919993336703',
  address: '35E, Prajapat Nagar, Indore, Madhya Pradesh 452009',
  addressHi: '35E, प्रजापत नगर, इंदौर, मध्य प्रदेश 452009',
  googleRating: 5.0,
  googleReviewCount: 28,
  googleMapsUrl: GOOGLE_MAPS_URL,
  workingHours: 'Open 24 Hours • 7 Days a Week • 365 Days a Year',
  workingHoursHi: '24 घंटे खुला • सातों दिन सेवा उपलब्ध',
  permitBadge: 'Commercial MP-09 Permit',
  permitBadgeHi: 'कमर्शियल MP-09 परमिट',
  logoUrl: '/city-cab-logo.png',
  logoIconUrl: '/city-cab-logo.png',

  // Real vehicle data with exact uploaded images and registration numbers
  vehicles: [
    {
      id: 'dzire',
      name: 'Maruti Suzuki Dzire',
      category: 'Economy Sedan',
      regNumber: 'MP09TB5877',
      seats: '1–4 Seats',
      luggage: '2 Large Bags',
      acType: 'Chilled AC',
      ratePerKm: 11,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvzFWeO4g4-qjL_VtmibUYB8zI0BbpuDbrT_klxe4LyiLIqXXgVEA19M86GM9XJK-c_5yYPCrzcGenHppdRh0YkWdh3L8BiK5h8Np9PL1eyvE26pn9AgGKj82gfJeRVUZ079JHDHb08sVYlgnAU0DKgeSxMo662ze5Mw9tJ7ZtsdeIMcJ5H5qdN7HBIYH0pdC_r8xOZGcuhbNPcWYygHHO5JqtGNLigVjs-W1VsVIMT8Oa0_o1wkoC',
      descEn: 'Pristine compact sedan ideal for quick city navigation, airport transfers, and economical couple trips.',
      descHi: 'साफ-सुथरी कॉम्पैक्ट सेडान जो शहर के सफर, एयरपोर्ट ट्रांसफर और छोटे परिवारों के लिए सबसे किफायती और आरामदायक है।',
      highlightsEn: [
        'Roof luggage carrier installed for extra baggage',
        'Eco-friendly CNG/Petrol dual-mode comfort',
        'Commercial yellow plate with All India Permit',
        'Chilled AC and sanitized cabin'
      ],
      highlightsHi: [
        'अतिरिक्त सामान के लिए रूफ कैरियर की सुविधा',
        'सीएनजी/पेट्रोल डुअल-मोड में आरामदायक ड्राइव',
        'कमर्शियल येलो नंबर प्लेट और सुरक्षित ऑल इंडिया परमिट',
        'फुल एसी और सेनेटाइज्ड स्वच्छ केबिन'
      ],
      bestForEn: 'Couples, Airport drops, Solo travelers, Business meetings',
      bestForHi: 'कपल ट्रिप, एयरपोर्ट ट्रांसफर, सोलो ट्रेवलर्स, बिजनेस मीटिंग'
    },
    {
      id: 'ertiga',
      name: 'Maruti Suzuki Ertiga',
      category: 'Family MPV',
      regNumber: 'MP09WK6994',
      seats: '4–6 Seats',
      luggage: '4 Suitcases',
      acType: 'Rear AC Vents',
      ratePerKm: 14,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv_bdxPigY5kRtGc7VWtgWtg3q0ezUBEaWlkwm-GL2FpFvYipDLyqkZZzXDHepGfwRcimDV88nI6P3KfURgAyjUp01B6UbUNs8xU3Y3zWNdPweum_EfOOUYqOwDWNBvQbCXtusAab_pM1UXYH_En3OR_9Vm3bOxoXe_ArTp0BdqR0FfbVZP2OpoAXRMVY7yfOdK5hy4I6702A4gK55-Nm9BR8p_ueZU0S6kojLR18wOTiVZHi2rQFe',
      descEn: 'Spacious 6-seater MPV with superior ride height, plush interiors, and flexible boot space for outstation family trips.',
      descHi: 'विशाल 6-सीटर एमपीवी जिसमें आरामदायक सीट्स, एक्स्ट्रा लेगरूम और फैमिली दर्शन यात्रा के लिए पर्याप्त बूट स्पेस है।',
      highlightsEn: [
        'Smooth highway suspension ideal for pilgrimage circuits',
        'Dedicated rear air-conditioning vents for all rows',
        'Spacious legroom for senior citizens & children',
        'Commercial MP09 registration with complete safety record'
      ],
      highlightsHi: [
        'लंबी हाईवे यात्राओं के लिए बेहतरीन आरामदायक सस्पेंशन',
        'सभी पंक्तियों के लिए अलग से रियर एसी वेंट्स',
        'बुजुर्गों और बच्चों के लिए आरामदायक लेगरूम',
        'कमर्शियल MP09 रजिस्ट्रेशन और सुरक्षित ड्राइवर'
      ],
      bestForEn: 'Families of 4-6, Ujjain & Omkareshwar Darshan, Long weekend tours',
      bestForHi: '4 से 6 सदस्यों का परिवार, उज्जैन एवं ओंकारेश्वर दर्शन, लंबी यात्राएं'
    },
    {
      id: 'tempo',
      name: 'Force Tempo Traveller',
      category: 'Luxury Group Cruiser',
      regNumber: 'MP09 Traveller',
      seats: '12–26 Pax',
      luggage: 'Massive Boot',
      acType: 'Dual Duct AC',
      ratePerKm: 24,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA_xiEcMALLauxcbuisTZ9Mjku8drqC6AhjarN6CKbvEab5ucipFN1w_2btC6eTXsw-8e-Zp-n5cAz8fNnLjCpgkL_c6a6jH_LjLzpdGiu-3T8rpRHjOU-hDKk6xbYCDfva_dNa41jIwaTaRAmfVAy54bltOjT331eqk3rIC5z_rMcKc6NhQIpblQreU_T1LCwtecOdelCIswyrnfwk81Gmo0RGzHS42kM1OLwBY-Ur9QbNBoVhp-k',
      descEn: 'Premier high-roof passenger cruiser equipped with individual pushback seats, wide aisle, and dedicated sound system.',
      descHi: 'बड़े परिवारों और तीर्थ मंडलों के लिए 12 से 26 सीटर पुशबैक टेम्पो ट्रेवलर, जिसमें पूरा परिवार एक साथ यात्रा कर सकता है।',
      highlightsEn: [
        'Pushback recliner seats with ample leg stretch',
        'Experienced hill and highway tour captain',
        'Overhead parcel racks plus large rear baggage chamber',
        'All-India Tourist Permit with legal passenger permits'
      ],
      highlightsHi: [
        'पुशबैक रिक्लाइनर सीट्स जिससे बुजुर्ग आराम से सफर कर सकें',
        'तीर्थ यात्राओं और पहाड़ी रास्तों के अनुभवी ड्राइवर',
        'अतिरिक्त सामान के लिए विशाल बूट स्पेस और ओवरहेड रैक',
        'ऑल इंडिया टूरिस्ट परमिट और पूर्ण कानूनी सुरक्षा'
      ],
      bestForEn: 'Joint family yatras, Ladies groups, Wedding guest transfers, Corporate teams',
      bestForHi: 'संयुक्त परिवार, महिला मंडल, विवाह समारोह, कॉर्पोरेट टूर'
    }
  ] as Vehicle[],

  // Services exactly matching design
  services: [
    {
      id: 'local',
      titleEn: 'Local Cab Service',
      titleHi: 'इंदौर लोकल कैब सर्विस',
      icon: 'location_city',
      descEn: 'Flexible hourly rental packages (4h/40km, 8h/80km) for shopping, client meetings, temple visits, and hospital appointments in Indore.',
      descHi: 'इंदौर शहर में खरीदारी, ऑफिस मीटिंग, मंदिर दर्शन और डॉक्टर विजिट के लिए 4 घंटे/40 किमी एवं 8 घंटे/80 किमी के सुविधाजनक पैकेज।',
      featuresEn: ['Doorstep pickup anywhere in Indore', 'Clean sanitized car with chilled AC', 'No surge pricing in peak hours'],
      featuresHi: ['इंदौर में कहीं से भी पिकअप', 'फुल एसी व साफ-सुथरी गाड़ी', 'पीक ऑवर्स में कोई सरचार्ज नहीं'],
      startingFareEn: 'Starting ₹1,799 / 8 hrs',
      startingFareHi: 'शुरुआती ₹1,799 / 8 घंटे'
    },
    {
      id: 'airport',
      titleEn: 'Airport Transfer',
      titleHi: 'एयरपोर्ट ट्रांसफर (पिकअप/ड्रॉप)',
      icon: 'flight_takeoff',
      descEn: 'Punctual Devi Ahilya Bai Holkar Airport (IDR) pickups & drops. Guaranteed on-time arrival with real-time flight tracking.',
      descHi: 'देवी अहिल्याबाई होल्कर एयरपोर्ट इंदौर के लिए 24 घंटे समय पर पिकअप और ड्रॉप। फ्लाइट डिले पर ड्राइवर का धैर्यपूर्वक इंतजार।',
      featuresEn: ['Dedicated parking meet & greet', 'Zero delay guarantee for early flights', 'Direct drop to Ujjain or Omkareshwar available'],
      featuresHi: ['एयरपोर्ट टर्मिनल पर ड्राइवर की उपस्थिति', 'सुबह की फ्लाइट्स के लिए समय से 15 मिनट पूर्व रिपोर्ट', 'सीधे उज्जैन या ओंकारेश्वर के लिए भी उपलब्ध'],
      startingFareEn: 'Fixed starting ₹699',
      startingFareHi: 'शुरुआती ₹699 फिक्स्ड'
    },
    {
      id: 'railway',
      titleEn: 'Railway Station Transfer',
      titleHi: 'रेलवे स्टेशन टैक्सी सर्विस',
      icon: 'train',
      descEn: 'Seamless pickups from Indore Junction & Laxmibai Nagar Station directly to your hotel, home, or pilgrimage destination.',
      descHi: 'इंदौर जंक्शन व लक्ष्मीबाई नगर रेलवे स्टेशन से आपके होटल या घर तक सुरक्षित एवं सुविधाजनक टैक्सी पिकअप।',
      featuresEn: ['Platform exit assistance with luggage', 'Pre-booked clean vehicle on arrival', 'Round the clock availability'],
      featuresHi: ['सामान में ड्राइवर की मदद', 'पहुंचने पर तुरंत तैयार गाड़ी', '24 घंटे किसी भी ट्रेन के समय सेवा'],
      startingFareEn: 'Fixed starting ₹499',
      startingFareHi: 'शुरुआती ₹499 फिक्स्ड'
    },
    {
      id: 'outstation',
      titleEn: 'Outstation Cab',
      titleHi: 'आउटस्टेशन कैब सर्विस',
      icon: 'commute',
      descEn: 'Intercity travel across Madhya Pradesh, Rajasthan, Maharashtra, and Gujarat with verified yellow-plate commercial cabs.',
      descHi: 'मध्य प्रदेश, राजस्थान, महाराष्ट्र व गुजरात के सभी शहरों के लिए सुरक्षित हाईवे कैब सर्विस।',
      featuresEn: ['Transparent per km calculation', 'Experienced long-distance highway chauffeurs', 'Commercial yellow number plate MP09'],
      featuresHi: ['पारदर्शी प्रति किमी बिलिंग', 'अनुभवी हाईवे ड्राइवर', 'कमर्शियल MP09 येलो प्लेट गाड़ियां'],
      startingFareEn: 'Starting ₹11 / km',
      startingFareHi: 'शुरुआती ₹11 / किमी'
    },
    {
      id: 'oneway',
      titleEn: 'One Way Taxi',
      titleHi: 'वन वे टैक्सी (एकतरफा)',
      icon: 'east',
      descEn: 'Pay only one-way fares to Ujjain, Bhopal, Ratlam, Dewas, or Omkareshwar without any return empty km charges.',
      descHi: 'उज्जैन, भोपाल, रतलाम, देवास या ओंकारेश्वर के लिए केवल एक तरफ का किराया दें। बिना रिटर्न चार्ज के किफायती सफर।',
      featuresEn: ['Pay only for distance traveled', 'All tolls & parking clearly itemized', 'Immediate confirmed booking'],
      featuresHi: ['सिर्फ एक तरफ का भुगतान', 'टोल और पार्किंग का स्पष्ट हिसाब', 'तत्काल कन्फर्म बुकिंग'],
      startingFareEn: 'Indore → Ujjain ₹1,499',
      startingFareHi: 'इंदौर → उज्जैन ₹1,499'
    },
    {
      id: 'roundtrip',
      titleEn: 'Round Trip',
      titleHi: 'राउंड ट्रिप (आना-जाना)',
      icon: 'cached',
      descEn: 'Same-day and multi-day round trips with vehicle dedicated solely to your family for waiting, sightseeing, and stopovers.',
      descHi: 'एक ही दिन या कई दिनों की राउंड ट्रिप जिसमें गाड़ी पूरे समय आपके और आपके परिवार के साथ उपलब्ध रहती है।',
      featuresEn: ['Vehicle stays at your service all day', 'Flexible halts at clean dhabas & sights', 'Fixed package with zero surprise fees'],
      featuresHi: ['गाड़ी पूरे समय आपके साथ रहेगी', 'रास्ते में मनपसंद रुकने की आज़ादी', 'फिक्स्ड पैकेज और कोई अप्रत्याशित चार्ज नहीं'],
      startingFareEn: 'Custom Round Trip packages',
      startingFareHi: 'किफायती राउंड ट्रिप पैकेज'
    },
    {
      id: 'darshan',
      titleEn: 'Family & Darshan Tours',
      titleHi: 'पारिवारिक एवं तीर्थ दर्शन यात्रा',
      icon: 'temple_hindu',
      descEn: 'Tailored pilgrimage circuits for Mahakaleshwar Jyotirlinga, Mamleshwar Omkareshwar, Maheshwar, and Mandu historical forts.',
      descHi: 'महाकालेश्वर उज्जैन, ममलेश्वर ओंकारेश्वर, महेश्वर अहिल्या घाट और मांडू के लिए विशेष पारिवारिक दर्शन यात्रा।',
      featuresEn: ['3 AM Bhasma Aarti pickup support', 'Driver knows temple gates & VIP entries', 'Senior citizen friendly assistance'],
      featuresHi: ['अलसुबह 3 बजे भस्म आरती हेतु पिकअप', 'मंदिर के सही गेट और पार्किंग की जानकारी', 'बुजुर्गों के लिए विशेष सम्मान व सहायता'],
      startingFareEn: 'Packages from ₹1,899',
      startingFareHi: 'पैकेज ₹1,899 से शुरू'
    },
    {
      id: 'tempo',
      titleEn: 'Tempo Traveller',
      titleHi: 'टेम्पो ट्रेवलर ग्रुप टूर',
      icon: 'airport_shuttle',
      descEn: 'Spacious 12 to 26 seater luxury vans with pushback seats, dual AC, large luggage boots, and All India Tourist Permits.',
      descHi: '12 से 26 सीटर लग्जरी टेम्पो ट्रेवलर जिसमें पुशबैक सीट्स, डुअल एसी और पूरे परिवार का एक साथ आनंदमय सफर।',
      featuresEn: ['12 to 26 passenger capacity', 'Pushback seats & wide center aisle', 'All India Tourist Permit for group yatras'],
      featuresHi: ['12 से 26 यात्रियों की क्षमता', 'पुशबैक आरामदायक सीट्स', 'ऑल इंडिया टूरिस्ट परमिट'],
      startingFareEn: 'Starting ₹24 / km',
      startingFareHi: 'शुरुआती ₹24 / किमी'
    }
  ] as ServiceItem[],

  // Destinations & Tour packages
  destinations: [
    {
      id: 'ujjain',
      nameEn: 'Mahakaleshwar Ujjain',
      nameHi: 'महाकालेश्वर उज्जैन',
      distanceEn: '55 km from Indore • 1.2 hrs',
      distanceHi: 'इंदौर से 55 किमी • 1.2 घंटे',
      tagEn: 'Jyotirlinga #1',
      tagHi: 'ज्योतिर्लिंग #1',
      image: '/images/mahakaleshwar-ujjain.jpg',
      descEn: 'Home of Mahakal Jyotirlinga, Shree Mahakal Lok corridor, Harsiddhi Mata, Kal Bhairav, and holy Ram Ghat evening Aarti.',
      descHi: 'विश्व प्रसिद्ध महाकालेश्वर ज्योतिर्लिंग, भव्य श्री महाकाल लोक कॉरिडोर, हरसिद्धि माता, काल भैरव और रामघाट संध्या आरती।',
      chipsEn: ['Bhasma Aarti pickup 3 AM', 'Mahakal Lok Tour', 'Kal Bhairav Darshan'],
      chipsHi: ['भस्म आरती हेतु रात्रि 3 बजे पिकअप', 'महाकाल लोक दर्शन', 'काल भैरव मंदिर दर्शन']
    },
    {
      id: 'omkareshwar',
      nameEn: 'Omkareshwar & Mamleshwar',
      nameHi: 'ओंकारेश्वर एवं ममलेश्वर',
      distanceEn: '78 km from Indore • 2.2 hrs',
      distanceHi: 'इंदौर से 78 किमी • 2.2 घंटे',
      tagEn: 'Jyotirlinga #2',
      tagHi: 'ज्योतिर्लिंग #2',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz6pKttUJOXPU7x1Jk76FCxRc7e-bet5lp7s8XKZX0tjO33y5Va_x-z3yMVtj4GekKMG05XCw92UZ2ly-RnL4ApLdPfr_nWH7_2khdtnO1boJchV2sDLv9AEmSrr_hf2LCcrtkNsi4oEsckZSoGOcBWFLqozzTiej83wrRKHe2LYKeDtIy-3jFpREodnOmFBdIlV7j9vHK93Sc6vKbMDAWBFy4qclE3SOU5t0OcTpiZtvD8AjOO3BC',
      descEn: "Sacred island shaped like the divine symbol 'OM' on the holy Narmada river. Includes Mamleshwar Jyotirlinga, Parikrama path, and boat rides.",
      descHi: 'पवित्र नर्मदा नदी के तट पर ॐ आकार के द्वीप पर स्थित ओंकारेश्वर एवं ममलेश्वर ज्योतिर्लिंग, नौका विहार व एकात्मता की प्रतिमा।',
      chipsEn: ['Narmada Boat Ghats', 'Statue of Oneness', 'Mamleshwar Temple'],
      chipsHi: ['नर्मदा बोट घाट', 'स्टैच्यू ऑफ वननेस', 'ममलेश्वर मंदिर']
    },
    {
      id: 'maheshwar',
      nameEn: 'Maheshwar Ahilya Fort',
      nameHi: 'महेश्वर अहिल्या किला एवं घाट',
      distanceEn: '91 km from Indore • 2.5 hrs',
      distanceHi: 'इंदौर से 91 किमी • 2.5 घंटे',
      tagEn: 'Heritage & Textiles',
      tagHi: 'ऐतिहासिक धरोहर एवं साड़ियां',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmua5rRF9ZWSbhcU94vnuV6ylFk6JYiH2V4mImbSCjMpcbfe6GE_WQcqMV8z97sJ3k5p6NXF2_tMnixFqZRhJEMvRcvxTE4SoHCvZeg2b16STOdhSefj_1HBHh-sMBaoqAH4towqqhqvYPN9xU3uxxggE7mXiQFo-9AOHCUd6EyckD9t1noLbCmokSa6SelHH1iiCa3EGC_99UodRT3rHbYay6FbYSLj6J4NYrjP0',
      descEn: 'The glorious capital of Rajmata Ahilyabai Holkar. Grand stone carvings, serene Narmada ghats, and royal Maheshwari saree weaving looms.',
      descHi: 'राजमाता अहिल्याबाई होल्कर की ऐतिहासिक राजधानी। नर्मदा तट के भव्य पाषाण घाट, राजवाड़ा और प्रामाणिक माहेश्वरी साड़ी हैंडलूम।',
      chipsEn: ['Ahilya Fort & Chhatris', 'Handloom Markets', 'Narmada Sunset Boating'],
      chipsHi: ['अहिल्या फोर्ट एवं छतरियां', 'हैंडलूम साड़ी बाजार', 'नर्मदा सूर्यास्त नौकायन']
    },
    {
      id: 'mandu',
      nameEn: 'Mandu / Mandavgarh',
      nameHi: 'मांडू / मांडवगढ़ (सिटी ऑफ जॉय)',
      distanceEn: '98 km from Indore • 2.5 hrs',
      distanceHi: 'इंदौर से 98 किमी • 2.5 घंटे',
      tagEn: 'City of Joy',
      tagHi: 'सिटी ऑफ जॉय',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXT47fLtOtEKaOSO0Djo7dhWFsZAG2YOnyR5fA24VY51YgnXH8wlVHBJDPb2pFPngVPfEWy34BxnWfy-TB5aYi3cdVBypifQJNZiIl6uUsg2jRo2Trda3NcgtxfFPjIz9P7xyTpl5YJN6FZloCX0AGkGZfGjU0tFWOCTnUtCVi8hIddzXOvJGLHs8-_fgBbGb4ISN8sXN7MEXhxXAFfA4pWw4vWld7W3oxhdDeYDI',
      descEn: 'Romantic ancient citadel featuring Jahaz Mahal, Hindola Mahal, Rani Roopmati Pavilion with Narmada view, and Baz Bahadur Palace.',
      descHi: 'मध्य प्रदेश का ऐतिहासिक गढ़ जहाज़ महल, हिंडोला महल, रानी रूपमती मंडप (नर्मदा दर्शन) और बाज़ बहादुर महल।',
      chipsEn: ['Jahaz Mahal', 'Roopmati Pavilion', 'Echo Point'],
      chipsHi: ['जहाज महल', 'रानी रूपमती मंडप', 'इको पॉइंट']
    },
    {
      id: 'patalpani',
      nameEn: 'Patalpani & Choral Valley',
      nameHi: 'पातालपानी झरना एवं चोरल डैम',
      distanceEn: '35 km from Indore • 1 hr',
      distanceHi: 'इंदौर से 35 किमी • 1 घंटा',
      tagEn: 'Nature & Hills',
      tagHi: 'प्रकृति एवं पहाड़ियां',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf0CYLQsZY_-l5mNZcu26_L0i-ICNDB2WLiK6VUvj4mqK7HC8Q3GN-AjcnpHAlNt40r7bSvTj8o-zgDZk79ArQeS5cxuEkuRomh2aIBnXE0nJ0UEfbbAxudfM1kP0Teb7ah8OgWYSqLzNz_Q1yT__RSA2WQ8gFiT_FVN5KjbpawSBg3CCpwD3ocKCRAG-vqEQPJeyImiIz2zgI4T_kYsdFIpCh9FxhkNQo1gIbO9pcX17y3-vDrDWG',
      descEn: 'Spectacular 300-foot gorge waterfall, heritage railway line, Tincha Falls, and serene Choral Dam backwaters for family picnics.',
      descHi: '300 फीट गहरा रोमांचक पातालपानी झरना, हेरिटेज रेलवे ट्रैक, तिंछा वॉटरफॉल और चोरल डैम का शांत प्राकृतिक वातावरण।',
      chipsEn: ['Waterfall Excursion', 'Choral Dam Boating', 'Heritage Rail View'],
      chipsHi: ['झरना व व्यू पॉइंट', 'चोरल डैम बोटिंग', 'हेरिटेज ट्रेन ट्रैक']
    },
    {
      id: 'indore-city',
      nameEn: 'Indore City Sightseeing',
      nameHi: 'इंदौर लोकल सिटी टूर',
      distanceEn: 'Indore City Circuit • 8 Hours',
      distanceHi: 'इंदौर सिटी सर्किट • 8 घंटे',
      tagEn: 'Food & Culture',
      tagHi: 'संस्कृति एवं खान-पान',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo0Iu3Klkf7T09IqH4xr-6VcI16ZHY_EEaMhmlAfLagGDb5jKv8-J5bk09maa3Vm2uKdfHEbe9Z7Ob-UHiiQ0YRnVtGuuLOIM_VKb4VkkPSUKO0HXPdR7NBdfQYvG3LuNCBJ2QvhdyX_yPvwrvSi5ir2_oOY16lDSQ7CvgZRTDw5H-tdl-5_gjo_BiTDRldnLOT5q11tnEcR_KGf1dBF0M9j4v63-MpDpS9vWOerQ',
      descEn: 'Explore Rajwada Palace, Lal Bagh Palace, historic Khajrana Ganesh Mandir, followed by culinary feasts at 56 Dukan and Sarafa Night Bazar.',
      descHi: 'होल्कर राजप्रासाद राजवाड़ा, लालबाग पैलेस, प्रसिद्ध खजराना गणेश मंदिर दर्शन, और 56 दुकान व सराफा चौपाटी का लजीज जायका।',
      chipsEn: ['Khajrana Ganesh Darshan', 'Sarafa Food Trail', 'Rajwada Palace'],
      chipsHi: ['खजराना गणेश दर्शन', 'सराफा नाईट बाजार', 'राजवाड़ा पैलेस']
    }
  ],

  // Tour packages with exact pricing from design
  packages: [
    {
      id: 'pkg-ujjain',
      titleEn: 'Indore → Mahakal Ujjain',
      titleHi: 'इंदौर → महाकाल उज्जैन',
      badgeEn: 'Same Day Darshan',
      badgeHi: 'समीप दर्शन (सेम डे)',
      durationEn: 'Approx 8-10 Hours',
      durationHi: 'लगभग 8-10 घंटे',
      distanceEn: '120 km Round Trip',
      distanceHi: '120 किमी राउंड ट्रिप',
      descEn: 'Mahakaleshwar Temple, Shree Mahakal Lok, Kal Bhairav, Mangalnath, Ramghat evening Aarti.',
      descHi: 'महाकालेश्वर ज्योतिर्लिंग, महाकाल लोक, काल भैरव, मंगलनाथ, हरसिद्धि माता व रामघाट संध्या आरती।',
      image: '/images/mahakaleshwar-ujjain.jpg',
      rates: {
        dzire: 1899,
        ertiga: 2699,
        tempo: 5499
      },
      highlightsEn: ['Toll & Parking included', 'Flexible 3 AM Bhasma aarti timing', 'Dedicated wait time at temple'],
      highlightsHi: ['टोल व पार्किंग शामिल', 'सुबह 3 बजे भस्म आरती सुविधा', 'मंदिर पर पर्याप्त प्रतीक्षा समय']
    },
    {
      id: 'pkg-omkareshwar',
      titleEn: 'Indore → Omkareshwar',
      titleHi: 'इंदौर → ओंकारेश्वर ज्योतिर्लिंग',
      badgeEn: 'Sacred Narmada',
      badgeHi: 'पवित्र नर्मदा दर्शन',
      durationEn: 'Approx 9-11 Hours',
      durationHi: 'लगभग 9-11 घंटे',
      distanceEn: '160 km Round Trip',
      distanceHi: '160 किमी राउंड ट्रिप',
      descEn: 'Omkareshwar & Mamleshwar Jyotirlinga, Narmada boat crossing, and Adi Shankaracharya statue.',
      descHi: 'ओंकारेश्वर व ममलेश्वर दोनों ज्योतिर्लिंग दर्शन, पवित्र नर्मदा नौकायन व आदि शंकराचार्य प्रतिमा।',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz6pKttUJOXPU7x1Jk76FCxRc7e-bet5lp7s8XKZX0tjO33y5Va_x-z3yMVtj4GekKMG05XCw92UZ2ly-RnL4ApLdPfr_nWH7_2khdtnO1boJchV2sDLv9AEmSrr_hf2LCcrtkNsi4oEsckZSoGOcBWFLqozzTiej83wrRKHe2LYKeDtIy-3jFpREodnOmFBdIlV7j9vHK93Sc6vKbMDAWBFy4qclE3SOU5t0OcTpiZtvD8AjOO3BC',
      rates: {
        dzire: 2499,
        ertiga: 3499,
        tempo: 6499
      },
      highlightsEn: ['Narmada Ghat drop & wait', 'Ghat boat assistance', 'Clean AC return travel'],
      highlightsHi: ['नर्मदा घाट तक ड्रॉप व वेटिंग', 'बोटिंग व घाट गाइडेंस', 'आरामदायक एसी वापसी']
    },
    {
      id: 'pkg-dual-jyotirlinga',
      titleEn: 'Ujjain + Omkareshwar Circuit',
      titleHi: 'उज्जैन + ओंकारेश्वर 2 ज्योतिर्लिंग यात्रा',
      badgeEn: '2 Days / 1 Night',
      badgeHi: '2 दिन / 1 रात',
      durationEn: 'Bestseller Yatra',
      durationHi: 'सर्वाधिक लोकप्रिय',
      distanceEn: '320 km Complete Circuit',
      distanceHi: '320 किमी संपूर्ण सर्किट',
      descEn: 'Complete darshan of both revered Jyotirlingas with overnight stay in Ujjain or Indore.',
      descHi: 'मध्य प्रदेश के दोनों पावन ज्योतिर्लिंगों के दर्शन। उज्जैन महाकाल भस्म आरती एवं ओंकारेश्वर ममलेश्वर पूजन।',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASE0wqMIp7mSzL5L6T_9dqHVDY-1vwY7qxEJpOkRfAMcHwazFCXuwcWNsYllkvILlorQMfnakbMdmdmbq31NWZlnyEOPisAqzCWcq4xCImegBxH-eE8TYxYOY29orbS0LqxsHPBZEBbOx4b_pOa6iELgFVBLiQRI49un9rKRAdm3nhLn30KmrdJ5pQ20NYkIMbsajQ92zYKX9swe123mDV41V2CT7GOAyuTGIGw-K1GkGyExOJoBhp',
      rates: {
        dzire: 4899,
        ertiga: 6699,
        tempo: 12999
      },
      highlightsEn: ['Driver night allowance included', 'Full freedom to attend Bhasma Aarti', 'All major temples covered'],
      highlightsHi: ['ड्राइवर नाइट अलाउंस शामिल', 'भस्म आरती में शामिल होने की पूरी सुविधा', 'सभी प्रमुख मंदिर दर्शन']
    },
    {
      id: 'pkg-mandu-maheshwar',
      titleEn: 'Mandu + Maheshwar Tour',
      titleHi: 'मांडू + महेश्वर हेरिटेज टूर',
      badgeEn: 'Heritage Special',
      badgeHi: 'धरोहर स्पेशल',
      durationEn: 'Full Day',
      durationHi: 'पूरा दिन',
      distanceEn: '210 km Circuit',
      distanceHi: '210 किमी सर्किट',
      descEn: 'Jahaz Mahal, Roopmati Pavilion, Ahilya Fort, Narmada boating & handloom saree shopping.',
      descHi: 'मांडू का जहाज़ महल, रूपमती मंडप, महेश्वर अहिल्या फोर्ट, नर्मदा नौकायन और प्रसिद्ध साड़ी खरीददारी।',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmua5rRF9ZWSbhcU94vnuV6ylFk6JYiH2V4mImbSCjMpcbfe6GE_WQcqMV8z97sJ3k5p6NXF2_tMnixFqZRhJEMvRcvxTE4SoHCvZeg2b16STOdhSefj_1HBHh-sMBaoqAH4towqqhqvYPN9xU3uxxggE7mXiQFo-9AOHCUd6EyckD9t1noLbCmokSa6SelHH1iiCa3EGC_99UodRT3rHbYay6FbYSLj6J4NYrjP0',
      rates: {
        dzire: 3199,
        ertiga: 4299
      },
      highlightsEn: ['Historical monuments tour', 'Saree showroom stops', 'Sunset at Maheshwar Ghat'],
      highlightsHi: ['ऐतिहासिक स्मारक भ्रमण', 'हैंडलूम शोरूम विजिट', 'महेश्वर घाट पर मनमोहक सूर्यास्त']
    },
    {
      id: 'pkg-indore-food',
      titleEn: 'Indore City & Food Walk',
      titleHi: 'इंदौर सिटी एवं फूड वॉक',
      badgeEn: 'Local City 8H/80K',
      badgeHi: 'लोकल सिटी 8घं/80किमी',
      durationEn: 'Flexible Timing',
      durationHi: 'सुविधानुसार समय',
      distanceEn: '80 km within Indore',
      distanceHi: '80 किमी इंदौर शहर',
      descEn: 'Rajwada, Lalbagh, Khajrana Ganesh, Annapurna Mandir, 56 Dukan & Sarafa Night Market.',
      descHi: 'राजवाड़ा, लालबाग, खजराना गणेश मंदिर, अन्नपूर्णा मंदिर, 56 दुकान और रात्रि सराफा चाट बाजार।',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo0Iu3Klkf7T09IqH4xr-6VcI16ZHY_EEaMhmlAfLagGDb5jKv8-J5bk09maa3Vm2uKdfHEbe9Z7Ob-UHiiQ0YRnVtGuuLOIM_VKb4VkkPSUKO0HXPdR7NBdfQYvG3LuNCBJ2QvhdyX_yPvwrvSi5ir2_oOY16lDSQ7CvgZRTDw5H-tdl-5_gjo_BiTDRldnLOT5q11tnEcR_KGf1dBF0M9j4v63-MpDpS9vWOerQ',
      rates: {
        dzire: 1799,
        ertiga: 2399
      },
      highlightsEn: ['Doorstep hotel pickup & drop', '8 hours dedicated car at disposal', 'Driver knows best food spots'],
      highlightsHi: ['होटल से पिकअप व ड्रॉप', '8 घंटे गाड़ी आपके उपयोग हेतु', 'ड्राइवर प्रसिद्ध फूड स्पॉट्स से वाकिफ']
    },
    {
      id: 'pkg-custom-mp',
      titleEn: 'All MP & Jyotirlinga Yatra',
      titleHi: 'संपूर्ण मध्य प्रदेश तीर्थ यात्रा',
      badgeEn: 'Multi-Day Custom',
      badgeHi: 'मल्टी-डे कस्टम टूर',
      durationEn: 'Any Destination',
      durationHi: 'आपकी पसंद के अनुसार',
      distanceEn: 'Customized Route',
      distanceHi: 'कस्टमाइज्ड रूट',
      descEn: 'Customized circuits covering Sanchi, Pachmarhi, Bhopal, Somnath, or Dwarka extended yatras.',
      descHi: 'सांची, पचमढ़ी, भोपाल, सोमनाथ या द्वारका हेतु विशेष पारिवारिक अथवा ग्रुप यात्रा योजना।',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrK2fhB5wN6vscqT7L34Zuv011XSB01m36LitCbbnkc0yUzE_dVci60q6rSBB0M2DLGNF28XQLhWSmo98B-9XeAlNhHgpBMUUAbNpLxxjVvn58c6QZ7R8W6btgU8fvZWeZ09HoRvEh4nfnHhZaDuKSfwHwI6jqCDID2wdGLk5WaXnCgPCGfjnIVJa4EOl5LTiFFIpmLLMTP2BqJvv9hymF1z3jhfDheWWx5Ze5TNzDsREZdZPjGx7l',
      rates: {
        dzire: 11,
        ertiga: 14,
        tempo: 24
      },
      highlightsEn: ['Per kilometer transparent rate', 'Commercial MP09 yellow plate', 'Experienced tour captain'],
      highlightsHi: ['प्रति किमी पारदर्शी बिलिंग', 'कमर्शियल MP09 येलो प्लेट', 'अनुभवी हाईवे टूर कैप्टन']
    }
  ] as TourPackage[],

  // Exact real reviews required by prompt
  reviews: [
    {
      id: 'rev-1',
      author: 'Vishal Soni',
      rating: 5,
      text: 'Best services in Indore and outstation, nice drivers, the cab is very clean, and best prices.',
      textHi: 'इंदौर और बाहर जाने के लिए सबसे बढ़िया सर्विस, अच्छे ड्राइवर, कैब बिल्कुल साफ और सबसे सही रेट।',
      badgeEn: 'Verified Google Review • Indore',
      badgeHi: 'सत्यापित गूगल समीक्षा • इंदौर',
      initial: 'V'
    },
    {
      id: 'rev-2',
      author: 'Bulbul Kumar',
      rating: 5,
      text: 'Bunty Bhaiya is the best cab driver in Indore. He is an excellent driver and drives very safely. The cab is also very clean and well maintained. I was a solo female traveller and felt so safe going to Mandav and Ujjain with him.',
      textHi: 'बंटी भैया इंदौर के सबसे बेहतरीन कैब ड्राइवर हैं। वो बहुत सुरक्षित गाड़ी चलाते हैं। कैब बहुत साफ-सुथरी और मेंटेन रहती है। मैं सोलो फीमेल ट्रेवलर थी और उनके साथ मांडव और उज्जैन जाते हुए मुझे बेहद सुरक्षित महसूस हुआ।',
      badgeEn: 'Local Guide • Solo Female Traveler',
      badgeHi: 'लोकल गाइड • सोलो महिला यात्री',
      initial: 'B'
    },
    {
      id: 'rev-3',
      author: 'Shubham Rathore',
      rating: 5,
      text: 'Very good service and cheap price.',
      textHi: 'बहुत अच्छी सर्विस और बहुत ही वाजिब कीमत।',
      badgeEn: 'Verified Google Review • Airport to Ujjain',
      badgeHi: 'सत्यापित गूगल समीक्षा • एयरपोर्ट से उज्जैन',
      initial: 'S'
    }
  ] as ReviewItem[],

  // Exact uploaded photos for the gallery
  gallery: [
    {
      id: 'gal-1',
      category: 'vehicles',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvzFWeO4g4-qjL_VtmibUYB8zI0BbpuDbrT_klxe4LyiLIqXXgVEA19M86GM9XJK-c_5yYPCrzcGenHppdRh0YkWdh3L8BiK5h8Np9PL1eyvE26pn9AgGKj82gfJeRVUZ079JHDHb08sVYlgnAU0DKgeSxMo662ze5Mw9tJ7ZtsdeIMcJ5H5qdN7HBIYH0pdC_r8xOZGcuhbNPcWYygHHO5JqtGNLigVjs-W1VsVIMT8Oa0_o1wkoC',
      titleEn: 'Maruti Suzuki Dzire Sedan (MP09TB5877)',
      titleHi: 'मारुति सुजुकी डिजायर सेडान (MP09TB5877)',
      storyEn: 'Our spotless Maruti Dzire sedan parked at Indore office ready for immediate airport and Ujjain dispatch.',
      storyHi: 'हमारी साफ-सुथरी मारुति डिजायर सेडान, एयरपोर्ट और उज्जैन यात्रा के लिए हमेशा तैयार।',
      metaEn: 'Reg: MP09TB5877 • AC Sedan'
    },
    {
      id: 'gal-2',
      category: 'vehicles',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv_bdxPigY5kRtGc7VWtgWtg3q0ezUBEaWlkwm-GL2FpFvYipDLyqkZZzXDHepGfwRcimDV88nI6P3KfURgAyjUp01B6UbUNs8xU3Y3zWNdPweum_EfOOUYqOwDWNBvQbCXtusAab_pM1UXYH_En3OR_9Vm3bOxoXe_ArTp0BdqR0FfbVZP2OpoAXRMVY7yfOdK5hy4I6702A4gK55-Nm9BR8p_ueZU0S6kojLR18wOTiVZHi2rQFe',
      titleEn: 'Maruti Suzuki Ertiga 6-Seater MPV (MP09WK6994)',
      titleHi: 'मारुति सुजुकी अर्टिगा 6-सीटर एमपीवी (MP09WK6994)',
      storyEn: 'Comfortable 6-seater family Ertiga MPV with dedicated rear air conditioning and commercial yellow plate.',
      storyHi: '6-सीटर पारिवारिक अर्टिगा एमपीवी, रियर एसी और कमर्शियल येलो प्लेट सुरक्षा के साथ।',
      metaEn: 'Reg: MP09WK6994 • Family MPV'
    },
    {
      id: 'gal-3',
      category: 'vehicles',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABWE_etdSilvbf2VvTCdDFETklmTFBGJe94QOGeNh_danqklYK4c7B22QcYokeOJCD_jc88EsMRwWQaVwqg8LBzeqvxF5Qlld7lShcL6-upcWgic6rzN1WU1ucPCStUL5En9JskczGl6EoOcKmrX5w6yawitDSyUHSCTTn_YsLiSiTjwpEhHmbmmNOcPtK0UfwzJAq7E1d7kZIY6STpmq15yDyE_KkHv-itmPb1i0O85Mjwp_ppEOt',
      titleEn: 'Force Tempo Traveller Tourist Van (White Urbania)',
      titleHi: 'फ़ोर्स टेम्पो ट्रेवलर टूरिस्ट वैन',
      storyEn: 'Force luxury passenger cruiser with high roof, pushback seats, and dual AC for joint family yatras.',
      storyHi: 'हाई रूफ, पुशबैक सीट्स और डुअल एसी से सुसज्जित फ़ोर्स टेम्पो ट्रेवलर।',
      metaEn: '12–26 Seater • All India Permit'
    },
    {
      id: 'gal-4',
      category: 'groups',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASE0wqMIp7mSzL5L6T_9dqHVDY-1vwY7qxEJpOkRfAMcHwazFCXuwcWNsYllkvILlorQMfnakbMdmdmbq31NWZlnyEOPisAqzCWcq4xCImegBxH-eE8TYxYOY29orbS0LqxsHPBZEBbOx4b_pOa6iELgFVBLiQRI49un9rKRAdm3nhLn30KmrdJ5pQ20NYkIMbsajQ92zYKX9swe123mDV41V2CT7GOAyuTGIGw-K1GkGyExOJoBhp',
      titleEn: 'Mahila Mandal Pilgrimage Tour with Tempo Traveller',
      titleHi: 'महिला मंडल तीर्थ दर्शन यात्रा (टेम्पो ट्रेवलर)',
      storyEn: '12-member Mahila Mandal group from Indore to Omkareshwar and Ujjain Mahakal Jyotirlinga enjoying a punctual, safe pilgrimage.',
      storyHi: 'इंदौर से ओंकारेश्वर एवं उज्जैन महाकाल ज्योतिर्लिंग दर्शन पर गई 12 सदस्यीय महिला मंडल टोली।',
      metaEn: 'Verified Pilgrimage Group • Ujjain & Omkareshwar'
    },
    {
      id: 'gal-5',
      category: 'groups',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyA19gJpnFfHDnlbpHGXkMb6bS2gDzD2rgZuLLNYuVZ6iNMP9i22KDbEg4oZJTpQy9MML4CM-whKFkczJAHzIqd39RaKwLBewtUdb4jO944gTDl1Nizje5S5Z_raH2hL42ZMTcl1C6-wNjWE40k__1DOcYyY-rp_bU3-nmJSD_I6SnhwvcpnX4mm2PQuNPriMBu-G9lv-UUAD3wJm8fnTGxNS7_OchG9cMf2WloM4vklfshaVpLg7R',
      titleEn: 'Pilgrims in Sacred Red Stoles - Night Jyotirlinga Departure',
      titleHi: 'लाल दुपट्टा धारी श्रद्धालु - रात्रि भस्म आरती रवानगी',
      storyEn: 'Devotee group departing early morning from Indore hotel for Ujjain Mahakal Bhasma Aarti darshan with driver on standby.',
      storyHi: 'महाकाल भस्म आरती हेतु तड़के इंदौर से रवाना होते हुए प्रसन्न श्रद्धालु।',
      metaEn: 'Night Departure • 3:00 AM Aarti'
    },
    {
      id: 'gal-6',
      category: 'groups',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrK2fhB5wN6vscqT7L34Zuv011XSB01m36LitCbbnkc0yUzE_dVci60q6rSBB0M2DLGNF28XQLhWSmo98B-9XeAlNhHgpBMUUAbNpLxxjVvn58c6QZ7R8W6btgU8fvZWeZ09HoRvEh4nfnHhZaDuKSfwHwI6jqCDID2wdGLk5WaXnCgPCGfjnIVJa4EOl5LTiFFIpmLLMTP2BqJvv9hymF1z3jhfDheWWx5Ze5TNzDsREZdZPjGx7l',
      titleEn: 'Sri Venkateswara Jyotirlingalu Large Coach Group',
      titleHi: 'श्री वेंकटेश्वर ज्योतिर्लिंग दर्शन समूह',
      storyEn: 'Extended intercity pilgrim party travelling on 5 Dwaraka and Jyotirlinga circuits assisted by City Cab Service Indore.',
      storyHi: '5 द्वारका एवं ज्योतिर्लिंग दर्शन यात्रा हेतु समूह।',
      metaEn: 'Multi-Day Circuit • Devotee Party'
    },
    {
      id: 'gal-7',
      category: 'destinations',
      src: '/images/mahakaleshwar-ujjain.jpg',
      titleEn: 'Mahakaleshwar Jyotirlinga Temple, Ujjain',
      titleHi: 'श्री महाकालेश्वर ज्योतिर्लिंग मंदिर, उज्जैन',
      storyEn: 'Iconic sanctum spire, sacred shikhara with red flag, and ancient stone mandapa at world-renowned Mahakaleshwar Jyotirlinga.',
      storyHi: 'विश्व प्रसिद्ध श्री महाकालेश्वर ज्योतिर्लिंग का भव्य शिखर, लाल ध्वज एवं नयनाभिराम मंदिर परिसर।',
      metaEn: '55 km from Indore • Jyotirlinga #1'
    },
    {
      id: 'gal-8',
      category: 'destinations',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz6pKttUJOXPU7x1Jk76FCxRc7e-bet5lp7s8XKZX0tjO33y5Va_x-z3yMVtj4GekKMG05XCw92UZ2ly-RnL4ApLdPfr_nWH7_2khdtnO1boJchV2sDLv9AEmSrr_hf2LCcrtkNsi4oEsckZSoGOcBWFLqozzTiej83wrRKHe2LYKeDtIy-3jFpREodnOmFBdIlV7j9vHK93Sc6vKbMDAWBFy4qclE3SOU5t0OcTpiZtvD8AjOO3BC',
      titleEn: 'Omkareshwar Temple on Holy Narmada River Ghats',
      titleHi: 'पवित्र नर्मदा तट पर ओंकारेश्वर मंदिर',
      storyEn: 'Scenic view of colourful pilgrim boats and the timeless temple shikhara at holy Omkareshwar Jyotirlinga.',
      storyHi: 'पवित्र ओंकारेश्वर ज्योतिर्लिंग का विहंगम दृश्य और नर्मदा नदी पर रंग-बिरंगी नावें।',
      metaEn: '78 km from Indore • Holy Narmada'
    },
    {
      id: 'gal-9',
      category: 'destinations',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf0CYLQsZY_-l5mNZcu26_L0i-ICNDB2WLiK6VUvj4mqK7HC8Q3GN-AjcnpHAlNt40r7bSvTj8o-zgDZk79ArQeS5cxuEkuRomh2aIBnXE0nJ0UEfbbAxudfM1kP0Teb7ah8OgWYSqLzNz_Q1yT__RSA2WQ8gFiT_FVN5KjbpawSBg3CCpwD3ocKCRAG-vqEQPJeyImiIz2zgI4T_kYsdFIpCh9FxhkNQo1gIbO9pcX17y3-vDrDWG',
      titleEn: 'Patalpani Waterfall Gorge Near Indore',
      titleHi: 'इंदौर के निकट पातालपानी वॉटरफॉल',
      storyEn: 'Majestic 300-foot monsoon waterfall and lush green gorge just 35 km from Indore city center.',
      storyHi: 'इंदौर से मात्र 35 किमी दूरी पर 300 फीट ऊंचा पातालपानी जलप्रपात।',
      metaEn: '35 km from Indore • Nature Excursion'
    }
  ] as GalleryPhoto[],

  // FAQs
  faqs: [
    {
      id: 'faq-1',
      questionEn: 'Do you provide outstation taxi service from Indore?',
      questionHi: 'क्या आप इंदौर से बाहर (आउटस्टेशन) टैक्सी सेवा प्रदान करते हैं?',
      answerEn: 'Yes, we provide outstation cabs from Indore to all destinations across Madhya Pradesh, Rajasthan, Maharashtra, and Gujarat including Ujjain, Omkareshwar, Bhopal, Mandu, Maheshwar, Pachmarhi, Kota, and Ahmedabad.',
      answerHi: 'हाँ, हम इंदौर से मध्य प्रदेश, राजस्थान, महाराष्ट्र और गुजरात के सभी शहरों जैसे उज्जैन, ओंकारेश्वर, भोपाल, मांडू, महेश्वर, पचमढ़ी, कोटा आदि के लिए 24 घंटे आउटस्टेशन कैब उपलब्ध कराते हैं।'
    },
    {
      id: 'faq-2',
      questionEn: 'Do you offer one-way taxi drops without charging return fares?',
      questionHi: 'क्या आप रिटर्न किराया लिए बिना वन-वे (एक तरफा) टैक्सी ड्रॉप देते हैं?',
      answerEn: 'Yes, we offer economical one-way cab drops on popular routes like Indore to Ujjain, Indore to Bhopal, Indore to Dewas, and Indore to Omkareshwar where you only pay for the one-way distance traveled.',
      answerHi: 'हाँ, इंदौर से उज्जैन, भोपाल, देवास और ओंकारेश्वर जैसे लोकप्रिय मार्गों पर हम वन-वे टैक्सी सेवा प्रदान करते हैं जिसमें आपसे वापसी का खाली किराया नहीं लिया जाता।'
    },
    {
      id: 'faq-3',
      questionEn: 'Can I book a cab for Devi Ahilya Bai Holkar Airport Indore?',
      questionHi: 'क्या देवी अहिल्याबाई होल्कर एयरपोर्ट इंदौर के लिए कैब बुक कर सकते हैं?',
      answerEn: 'Yes, we operate 24/7 airport taxi transfers. We can pick you up directly from Indore Airport arrivals terminal and drive you anywhere in Indore or directly to Ujjain / Omkareshwar without any wait time.',
      answerHi: 'हाँ, हमारी एयरपोर्ट टैक्सी सेवा 24 घंटे उपलब्ध है। हम आपको इंदौर एयरपोर्ट अराइवल से सीधे पिकअप करके शहर में या सीधे उज्जैन/ओंकारेश्वर ले जा सकते हैं।'
    },
    {
      id: 'faq-4',
      questionEn: 'Can I book a Tempo Traveller for large family or pilgrimage tours?',
      questionHi: 'क्या संयुक्त परिवार या तीर्थ यात्रा के लिए टेम्पो ट्रेवलर बुक किया जा सकता है?',
      answerEn: 'Yes! We have well-maintained 12-seater, 17-seater, 20-seater, and 26-seater Force Tempo Travellers with luxury pushback seats, dual AC, and All India Tourist Permits—ideal for joint families and temple groups.',
      answerHi: 'हाँ! हमारे पास 12, 17, 20 और 26 सीटर फ़ोर्स टेम्पो ट्रेवलर हैं जिनमें आरामदायक पुशबैक सीट्स, डुअल एसी और ऑल इंडिया टूरिस्ट परमिट उपलब्ध हैं।'
    },
    {
      id: 'faq-5',
      questionEn: 'What are the options for local sightseeing in Indore?',
      questionHi: 'इंदौर में लोकल घूमने (साइटसीइंग) के लिए क्या विकल्प हैं?',
      answerEn: 'We provide local rental packages including 4 hours / 40 km and 8 hours / 80 km covering Rajwada Palace, Lalbagh Palace, Khajrana Ganesh Mandir, Annapurna Mandir, 56 Dukan, and Sarafa night market.',
      answerHi: 'हम 4 घंटे / 40 किमी और 8 घंटे / 80 किमी के लोकल पैकेज देते हैं जिसमें राजवाड़ा, लालबाग पैलेस, खजराना गणेश, 56 दुकान और सराफा बाजार शामिल हैं।'
    },
    {
      id: 'faq-6',
      questionEn: 'Can our driver wait while we attend Mahakal Bhasma Aarti?',
      questionHi: 'क्या महाकाल भस्म आरती के दौरान ड्राइवर गाड़ी के साथ इंतजार करेगा?',
      answerEn: 'Absolutely. For Ujjain Mahakal Bhasma Aarti (early morning 3:00 AM - 6:00 AM), our cab can depart Indore at 1:30 AM, wait at the temple parking during your darshan, and bring you safely back or continue to Omkareshwar.',
      answerHi: 'बिल्कुल। उज्जैन महाकाल भस्म आरती (सुबह 3:00 से 6:00 बजे) के लिए हमारी कैब इंदौर से रात 1:30 बजे रवाना होकर दर्शन समाप्ति तक मंदिर पार्किंग में इंतजार करती है।'
    },
    {
      id: 'faq-7',
      questionEn: 'How can I contact City Cab Service for an instant booking?',
      questionHi: 'तुरंत बुकिंग के लिए सिटी कैब सर्विस से कैसे संपर्क करें?',
      answerEn: 'You can call us directly 24/7 at 099933 36703, send a WhatsApp message, or fill our booking form to receive an instant confirmed quote.',
      answerHi: 'आप हमें सीधे 24 घंटे 099933 36703 पर कॉल कर सकते हैं, व्हाट्सएप मैसेज भेज सकते हैं, या हमारी वेबसाइट फॉर्म से तुरंत कोटेशन प्राप्त कर सकते हैं।'
    }
  ] as FaqItem[]
};
