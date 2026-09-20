import { Destination, FAQItem, Property, TeamMember, Testimonial } from '../types';

const createPlaceholderImage = (title: string, subtitle: string = 'Homestay Photo') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="#F4F1EA"/>
    <rect x="16" y="16" width="768" height="568" rx="20" fill="#EBE6DC" stroke="#DDD6C8" stroke-width="2"/>
    <g transform="translate(400, 270)" text-anchor="middle">
      <path d="M-36 15 L0 -20 L36 15 V50 H-36 Z M-18 50 V25 H18 V50" fill="none" stroke="#005B41" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="0" cy="-40" r="8" fill="#005B41"/>
      <text y="110" font-family="sans-serif" font-size="24" font-weight="600" fill="#2D281E">${title}</text>
      <text y="140" font-family="sans-serif" font-size="16" font-weight="400" fill="#6C6656">${subtitle}</text>
    </g>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const createDestinationPlaceholder = (name: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
    <rect width="600" height="800" fill="#2D3B32"/>
    <rect x="16" y="16" width="568" height="768" rx="20" fill="none" stroke="#4A5D50" stroke-width="2"/>
    <g transform="translate(300, 380)" text-anchor="middle">
      <path d="M-40 30 L0 -30 L40 30 Z M-15 30 L10 -10 L35 30 Z" fill="none" stroke="#9BB5A2" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text y="90" font-family="serif, Georgia, sans-serif" font-size="28" font-weight="600" fill="#FFFFFF">${name}</text>
      <text y="120" font-family="sans-serif" font-size="15" font-weight="400" fill="#B3C7B8">Destination Placeholder</text>
    </g>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const createAvatarPlaceholder = (name: string) => {
  const initials = name.split(' ').map((n) => n[0]).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="100" fill="#005B41"/>
    <text x="100" y="116" font-family="sans-serif" font-size="64" font-weight="700" fill="#FFFFFF" text-anchor="middle">${initials}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const PROPERTIES: Property[] = [
  {
    id: 'bhimsarovar',
    name: 'The Bhimsarovar Kumaoni Stay',
    location: 'Bhimtal',
    state: 'Uttrakhand',
    propertyType: '2-Bedroom Budget-Friendly Homestay',
    guestCapacityText: '6 guests',
    guests: 6,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    rating: 9.0,
    ratingLabel: 'Wonderful',
    reviewsCount: 281,
    pricePerNight: 12320,
    originalPricePerNight: 17500,
    totalPrice: 29680,
    discountBadge: '30% off',
    isPremium: false,
    coordinates: { x: 38, y: 32, label: '₹12,320', lat: 29.3500, lng: 79.5530 },
    images: [
      '/cover/bhimsarowar.JPG',
      createPlaceholderImage('The Bhimsarovar Kumaoni Stay', 'Exterior & Garden'),
      createPlaceholderImage('The Bhimsarovar Kumaoni Stay', 'Living Room Hall'),
      createPlaceholderImage('The Bhimsarovar Kumaoni Stay', 'Mountain View Terrace'),
      createPlaceholderImage('The Bhimsarovar Kumaoni Stay', 'Dining & Outdoor Area'),
    ],
    description:
      'Architecturally significant with period furnishings, marble, tile, and brass, this beautifully restored haveli exudes the charm of old Delhi. Delight in exceptional Indian cuisine and explore the vibrant streets of Chandni Chowk, all while enjoying gracious service and a unique ambiance.',
    accessibility: {
      locationDetail: 'Ward 9, Chauria, Mehragaon, Bhimtal, District Nainital, Uttarakhand 263136 (2-3 min drive from main market).',
      accessHike: 'Short, refreshing 3-4 minute uphill walk from the car parking area to reach the property.',
      parkingDetails: 'Private, secure car parking near main road (accommodates up to 3-4 cars).',
      checkInProcess: 'Dedicated property manager/assistant available 24/7 for guest reception.',
    },
    uspsAndVibe: {
      vibe: 'Authentic, budget-friendly Kumaoni homestay retreat designed for peaceful living.',
      nightView: '360-degree mountain & valley views with star-filled skies.',
      culturalExperience: 'Immerse in local Kumaoni village life and warm hospitality.',
    },
    layoutDetails: {
      indoors: {
        livingRoom: 'Spacious hall with sofa-cum-bed, single bed, and TV for relaxation.',
        bedrooms: '2 private bedrooms with comfortable king-size beds (extra bed available upon request).',
        bathroom: '2 attached sparkling bathrooms with hot water geysers, showers, and basic toiletries.',
      },
      kitchenAndDining: {
        kitchen: 'In-house home-cooked meals available to order from separate menu.',
        dining: 'Dining in hall & outdoor seating area.',
      },
      outdoors: {
        garden: 'Dedicated terrace for 360° mountain views & large outdoor garden with swing.',
        relaxation: 'Private outdoor seating, swing, bonfire & BBQ setups available.',
      },
    },
    nearbyAttractions: [
      { name: 'Bhimtaal School', driveTime: '12 min' },
      { name: 'Almora Lane', driveTime: '4 min' },
      { name: 'Garam Pani', driveTime: '25 min' },
      { name: 'Bhimtal Lake', driveTime: '5 min' },
      { name: 'Sattal Lake', driveTime: '10 min' },
      { name: 'Kainchi Dham', driveTime: '35 min' },
    ],
    servicesAndDining: [
      'Home-cooked local meal service (separate menu, charged extra)',
      '24/7 Property Manager / Support Assistant on site',
      'Power backup via inverter for continuous lights during power cuts',
      'Private bonfire & BBQ sessions arranged upon request (chargeable)',
    ],
    highlights: [
      { icon: '❤️', title: 'Loved by couples', desc: 'This property received multiple 10/10 ratings from couples.' },
      { icon: '☕', title: 'Top rated breakfast', desc: 'Experience delightful mornings with the top rated breakfast.' },
      { icon: '💎', title: 'Rooftop terrace', desc: 'A rare find - enjoy stunning views from the rooftop terrace.' },
      { icon: '👍', title: 'Easy to get around', desc: 'Guests love the convenient spot for exploring the area' },
    ],
    amenities: {
      facilities: ['Wifi', 'Television', 'Pets Allowed', 'Work Space', 'Bonfire', 'Table Tennis'],
      foodAndDrinks: ['In-House Meal Service', 'Local Kumaoni Dining', 'Tea & Coffee Essentials'],
      general: ['2 Attached Bathrooms with Hot Water', 'Quilts & Pillows', 'Fans & Heaters', '24/7 On-Site Manager'],
      social: ['Outdoor Garden Swing', 'Dedicated Viewing Terrace', 'Private Bonfire & BBQ'],
      notIncluded: ['Commercial Hotel Room Service', 'Direct Roadside Parking (3-4 min uphill walk)'],
    },
    rooms: [
      {
        name: 'Bedroom 1',
        image: createPlaceholderImage('Bedroom 1', 'King bed · Attached bath'),
        details: 'King bed · Attached bath · Mountain view',
      },
      {
        name: 'Bedroom 2',
        image: createPlaceholderImage('Bedroom 2', 'King bed · Attached bath'),
        details: 'King bed · Attached bath · Valley view',
      },
    ],
  },
  {
    id: 'sukoon',
    name: 'The Sukoon Stay & Mountain View',
    location: 'Almora',
    state: 'Uttrakhand',
    propertyType: '2-Bedroom Entire Home',
    guestCapacityText: 'Accommodates up to 4 guests',
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    rating: 9.8,
    ratingLabel: 'Exceptional',
    reviewsCount: 6,
    pricePerNight: 4950,
    originalPricePerNight: 9000,
    totalPrice: 10450,
    discountBadge: '',
    isPremium: true,
    coordinates: { x: 24, y: 62, label: '₹4,950', lat: 29.5971, lng: 79.6591 },
    images: [
      '/cover/sukoonstay.jpg',
      createPlaceholderImage('The Sukoon Stay', 'Exterior & Mountain View'),
      createPlaceholderImage('The Sukoon Stay', 'Nature Living Area'),
      createPlaceholderImage('The Sukoon Stay', 'Private Garden'),
      createPlaceholderImage('The Sukoon Stay', 'Almora Valley View'),
      createPlaceholderImage('The Sukoon Stay', 'Kitchen & Dining'),
    ],
    description:
      'A highly aesthetic and beautifully designed home perfect for families looking to unwind amidst breathtaking mountains and starry skies. Every detail of the home is thoughtfully designed for relaxation and connection.',
    accessibility: {
      locationDetail: 'Situated in the serene area of Almora.',
      accessHike: 'The property is a short 3 to 4-minute hike from the main road, making it a peaceful haven completely immersed in nature.',
      parkingDetails: 'The property does not offer reserved parking, but street parking is generally available nearby. Guests can coordinate with the host for parking tips.',
      checkInProcess: 'Features a seamless, independent self check-in experience using a lockbox.',
    },
    uspsAndVibe: {
      vibe: 'A highly aesthetic and beautifully designed home perfect for families looking to unwind amidst breathtaking mountains and starry skies.',
      nightView: 'The true uniqueness of this property is revealed after sunset, offering a glittering, spectacular night view of Almora city.',
      culturalExperience: 'As dusk falls, guests can explore the surrounding Kumaoni traditional houses, offering a unique cultural experience that enriches the journey.',
    },
    layoutDetails: {
      indoors: {
        livingRoom: 'A large, nature-inspired living area where guests can relax on comfortable sofas surrounded by greenery.',
        bedrooms: 'The property features two comfortable bedrooms. These rooms are specifically designed for restful sleep with a focus on back support.',
        bathroom: 'The home includes one well-maintained common bathroom.',
      },
      kitchenAndDining: {
        kitchen: 'A fully equipped private kitchen space where guests can cook like a local and whip up delicious meals with all the essentials provided.',
        dining: 'Features a conversation-sparking dining table designed for enjoying delicious meals and fostering connection with loved ones.',
      },
      outdoors: {
        garden: 'Guests can step outside to a well-maintained private garden that offers breathtaking mountain views.',
        relaxation: 'Guests are encouraged to spread a picnic blanket, enjoy unforgettable evening tea under the stars, and admire the flowers from designated areas.',
      },
    },
    nearbyAttractions: [
      { name: 'Kasar Devi Temple', driveTime: '20-minute scenic drive' },
      { name: 'Chitai Golu Temple', driveTime: '20-minute scenic drive' },
      { name: 'Kainchi Dham', driveTime: '1 hour' },
      { name: 'Jageshwar Dham', driveTime: '1 hour' },
    ],
    highlights: [
      { icon: 'sunset', title: 'Glittering Night View', desc: 'Spectacular night view of Almora city after sunset.' },
      { icon: 'heart', title: 'Aesthetic Family Vibe', desc: 'Designed for unwinding under mountain skies.' },
      { icon: 'coffee', title: 'Self Check-In & Private Garden', desc: 'Lockbox check-in & private outdoor garden.' },
      { icon: 'map-pin', title: 'Cultural Neighborhood', desc: 'Surrounded by traditional Kumaoni houses.' },
    ],
    amenities: {
      facilities: ['Wifi', 'Television', 'Work Space', 'Private Garden', 'Lockbox Self Check-In', 'Equipped Kitchen'],
      foodAndDrinks: ['Private Kitchen Space', 'Dining Area', 'Tea & Coffee Essentials'],
      general: ['Back Support Mattresses', 'Solar Water Heating', 'Nature-Inspired Living Area'],
      social: ['Garden Picnic Area', 'Evening Tea Under the Stars', 'Games & Reading Corner'],
      notIncluded: ['Reserved Parking (Street parking nearby)', 'Direct Roadside Car Parking'],
    },
    rooms: [
      {
        name: 'Bedroom 1',
        image: createPlaceholderImage('Bedroom 1', 'Queen bed · Back support mattress'),
        details: 'Queen bed · Back support mattress · Mountain view',
      },
      {
        name: 'Bedroom 2',
        image: createPlaceholderImage('Bedroom 2', 'Double bed · Back support mattress'),
        details: 'Double bed · Back support mattress · Garden view',
      },
    ],
  },
  {
    id: 'sunlight',
    name: 'The Sunlit Homestay',
    location: 'Bhowali',
    state: 'Uttrakhand',
    propertyType: '3BHK Independent Hillside Cottage',
    guestCapacityText: 'Accommodates up to 6 guests',
    guests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 3,
    rating: 9.2,
    ratingLabel: 'Exceptional',
    reviewsCount: 14,
    pricePerNight: 6299,
    originalPricePerNight: 8999,
    totalPrice: 13229,
    discountBadge: '30% off',
    isPremium: true,
    coordinates: { x: 58, y: 42, label: '₹6,299', lat: 29.3807, lng: 79.5161 },
    images: [
      '/cover/sunlit.jpeg',
      createPlaceholderImage('The Sunlit Homestay', 'First Floor Balcony'),
      createPlaceholderImage('The Sunlit Homestay', 'Covered Terrace View'),
    ],
    description:
      'A cozy 3BHK hillside cottage offering the ultimate nature retreat. Nestled in Leeswal Gaon, 2km from Bhowali market and 9km from Kainchi Dham, it provides pristine air quality, quiet residential peace, and full privacy.',
    accessibility: {
      locationDetail: 'Leeswal Gaon, 2 km from Bhowali main market & 9 km from Kainchi Dham.',
      accessHike: 'Narrow village road access; strictly standard cars (Hatchbacks, Sedans, SUVs). Large buses/Tempo Travelers cannot reach.',
      parkingDetails: 'Dedicated private parking space for exactly two cars.',
      checkInProcess: 'Self check-in with staff member present to hand over keys strictly between 06:00 AM and 05:00 PM cutoff.',
    },
    uspsAndVibe: {
      vibe: 'Peaceful residential hillside cottage designed to disconnect from city noise.',
      nightView: 'Clear mountain starry skies in a quiet non-commercial hamlet.',
      culturalExperience: 'Exclusive 3BHK cottage access with full privacy and zero shared spaces.',
    },
    layoutDetails: {
      indoors: {
        livingRoom: 'Ground floor living area with 7-seater sofa & center table; 1st floor snug reading common area.',
        bedrooms: 'Ground floor Bedroom 1 (attached bath) + First floor Bedrooms 2 & 3 (attached baths, private balcony & covered terrace).',
        bathroom: '3 attached bathrooms equipped with water geysers, soaps, dental kits & towels.',
      },
      kitchenAndDining: {
        kitchen: 'Fully functioning kitchen with gas stove, induction, kettle, toaster, cutlery & crockery (self-catered model).',
        dining: 'Cozy 4-seater dining setup adjacent to living room.',
      },
      outdoors: {
        garden: 'Refreshing entrance garden area welcoming guests with fresh mountain air.',
        relaxation: 'Private balcony connecting to covered terrace with mountain views.',
      },
    },
    nearbyAttractions: [
      { name: 'Bell Temple (2 Km)', driveTime: '5 Mins' },
      { name: 'Kainchi Dham (10 Km)', driveTime: '25 Mins' },
      { name: 'Bhimtal Lake (10 Km)', driveTime: '22 Mins' },
      { name: 'Sattal (11 Km)', driveTime: '24 Mins' },
      { name: 'Naukuchiatal (15 Km)', driveTime: '30 Mins' },
      { name: 'Nainital Lake (15 Km)', driveTime: '35 Mins' },
      { name: 'Mukteshwar (35 Km)', driveTime: '60 Mins' },
    ],
    houseRulesList: [
      'Strict Check-in Window: 06:00 AM to 05:00 PM cutoff (no late-night check-ins).',
      'Vehicle Restriction: Standard cars only; no Tempo Travelers or minibuses.',
      'Quiet Hours: No outdoor sitting or music after 10:00 PM.',
      'Strictly No Parties or Events.',
      'Guests clean kitchen utensils after self-cooking use.',
    ],
    highlights: [
      { icon: 'sunset', title: 'Private 3BHK Hillside Cottage', desc: 'Exclusive entire villa access with garden & terrace.' },
      { icon: 'heart', title: 'Near Kainchi Dham (9 km)', desc: 'Peaceful base for Neem Karoli Baba Ashram visits.' },
      { icon: 'coffee', title: 'Fully Equipped Kitchen', desc: 'Gas, induction, kettle, toaster & crockery.' },
      { icon: 'map-pin', title: '2 Private Car Parking', desc: 'Dedicated parking on premises.' },
    ],
    amenities: {
      facilities: ['High-Speed Wi-Fi', 'Full Kitchen Access', 'Private Garden', 'Power Backup', 'Dedicated 2-Car Parking'],
      foodAndDrinks: ['Self-Catering Kitchen', '4-Seater Dining Setup', 'Local Food Delivery Available'],
      general: ['Geysers in All 3 Bathrooms', 'Basic Toiletries & Dental Kits', 'First Floor Reading Nook'],
      social: ['Covered Mountain View Terrace', 'Private Balcony', 'Entrance Garden'],
      notIncluded: ['Late-night check-ins after 5:00 PM', 'Bus / Large Vehicle Access', 'Outdoor music after 10 PM'],
    },
    rooms: [
      {
        name: 'Ground Floor Room',
        image: createPlaceholderImage('Ground Floor Room', 'King bed · Attached bath'),
        details: 'King bed · Attached bath · Ground floor access',
      },
      {
        name: 'First Floor Balcony Room',
        image: createPlaceholderImage('First Floor Balcony Room', 'King bed · Private balcony'),
        details: 'King bed · Attached bath · Private balcony & terrace access',
      },
      {
        name: 'First Floor Room 3',
        image: createPlaceholderImage('First Floor Room 3', 'King bed · Hill view'),
        details: 'King bed · Attached bath · Hill view',
      },
    ],
  },
  {
    id: 'silvara',
    name: 'The Silvara',
    location: 'Bhimtal',
    state: 'Uttrakhand',
    propertyType: '4-Bedroom Boutique Villa',
    guestCapacityText: 'Accommodates 10-12 guests',
    guests: 12,
    bedrooms: 4,
    beds: 4,
    bathrooms: 4,
    rating: 9.6,
    ratingLabel: 'Exceptional',
    reviewsCount: 18,
    pricePerNight: 14500,
    originalPricePerNight: 21000,
    totalPrice: 32000,
    discountBadge: '30% off',
    isPremium: true,
    coordinates: { x: 42, y: 35, label: '₹14,500', lat: 29.3520, lng: 79.5550 },
    images: [
      '/cover/silvara.jpeg',
      createPlaceholderImage('The Silvara Boutique Villa', 'Lawn Patio'),
      createPlaceholderImage('The Silvara Boutique Villa', 'Family Lounge'),
      createPlaceholderImage('The Silvara Boutique Villa', '180° Balcony View'),
    ],
    description:
      'A luxury 4-bedroom boutique hilltop villa featuring expansive 180° mountain and sky views. Designed with step-free ground floor access, themed bedrooms, a dedicated cook & caretaker, and landscaped lawn patio.',
    accessibility: {
      locationDetail: 'Silvara, Devi Mandir Road, Bhimtal, Uttarakhand 263136 (Near Saraswati School). 2-3 min drive to market.',
      accessHike: 'Smooth paved road up the hill; step-free ground floor for easy senior accessibility.',
      parkingDetails: 'Secure private parking within premises for 3-4 SUVs.',
      checkInProcess: 'Dedicated 24/7 staff & check-in support team on-ground. Valid government ID mandatory.',
    },
    uspsAndVibe: {
      vibe: 'Expansive 180° mountain & sky views from a premium luxury villa.',
      nightView: 'Glittering valley & star-studded sky views from private balconies.',
      culturalExperience: 'Ideal for family get-togethers, friends groups, and mountain workations.',
    },
    layoutDetails: {
      indoors: {
        livingRoom: 'Ground floor Family Lounge with 6-seater sofa & board games; 1st floor social corner with 2-seater sofa & photo area.',
        bedrooms: '4 themed bedrooms: Marigold (Orange, 55" TV), Forget-Me-Not (Blue, 55" TV), Crimson Pine (Red, dual windows & balcony), Wild Orchid (Purple, luxury balcony).',
        bathroom: '4 private attached bathrooms with hot water geysers & premium basic toiletries.',
      },
      kitchenAndDining: {
        kitchen: 'Staff-managed main kitchen preparing fresh home-style meals (kettle & mugs kept outside for guest convenience).',
        dining: '6-seater dining table with mountain-view window.',
      },
      outdoors: {
        garden: 'Landscaped lawn patio with dedicated seating for morning tea, bonfires & lawn games.',
        relaxation: 'Common balcony with 180° valley views + 2 private room balconies.',
      },
    },
    nearbyAttractions: [
      { name: 'Bhimtal Lake (2 Km)', driveTime: '5 Mins' },
      { name: 'Sattal (5 Km)', driveTime: '10 Mins' },
      { name: 'Naukuchiatal (8 Km)', driveTime: '16 Mins' },
      { name: 'Bell Temple (10 Km)', driveTime: '25 Mins' },
      { name: 'Kainchi Dham (15 Km)', driveTime: '35 Mins' },
      { name: 'Nainital Lake (20 Km)', driveTime: '45 Mins' },
      { name: 'Mukteshwar (35 Km)', driveTime: '60 Mins' },
    ],
    houseRulesList: [
      'Government Valid ID (Aadhar/Passport) mandatory at check-in.',
      'Strictly No Smoking inside rooms (₹2,000 fine applies); allowed on balconies & outdoors.',
      'Keep mesh doors closed in evenings to prevent bugs.',
      'Quiet hours: Outdoor loud music off after 10 PM.',
      'Main kitchen is staff-only (no guest self-cooking).',
      'On-site driver accommodation available.',
      'Do not venture outside alone after daylight due to local wildlife.',
    ],
    servicesAndDining: [
      '24/7 On-ground Cook & Caretaker for meal preparation & housekeeping',
      'Home-style fresh meals served in Dining Area or Outdoor Patio upon pre-order',
      'In-room heaters & electric kettles provided for winter comfort',
      'Private Bonfire & BBQ setups available (3-4 hours advance notice required)',
    ],
    highlights: [
      { icon: 'sunset', title: '180° Mountain Views', desc: 'Panoramic sky & mountain vistas.' },
      { icon: 'heart', title: 'Senior Friendly', desc: 'Step-free ground floor access & bedroom.' },
      { icon: 'coffee', title: '24/7 Cook & Caretaker', desc: 'Fresh home-cooked meals on-demand.' },
      { icon: 'map-pin', title: 'Secure SUV Parking', desc: 'Private parking for 3-4 SUVs on site.' },
    ],
    amenities: {
      facilities: ['High-Speed Wi-Fi', '55-inch Smart TVs', 'In-Room Heaters', 'Private Parking (3-4 SUVs)', 'On-Site Driver Room'],
      foodAndDrinks: ['24/7 In-House Cook', 'Fresh Home-Style Meals', 'Scenic Dining Area', 'Kettle & Tea Supplies'],
      general: ['4 Attached Private Bathrooms', 'Step-Free Ground Floor', '24/7 Caretaker Assistance'],
      social: ['Landscaped Lawn Patio', '180° Valley View Balcony', 'Board Games Corner', 'Bonfire & BBQ Setup'],
      notIncluded: ['Guest Self-Cooking in Main Kitchen', 'Room Service (Meals served in dining/patio)', 'Smoking inside bedrooms'],
    },
    rooms: [
      {
        name: 'Marigold Room (Orange Theme)',
        image: createPlaceholderImage('Marigold Room', 'Ground floor · 55" Smart TV'),
        details: 'Ground floor step-free · King bed · 55" Smart TV · Attached bath',
      },
      {
        name: 'Forget-Me-Not Room (Blue Theme)',
        image: createPlaceholderImage('Forget-Me-Not Room', 'First floor · Mountain window'),
        details: 'First floor · King bed · 55" Smart TV · Mountain window · Attached bath',
      },
      {
        name: 'Crimson Pine Room (Red Theme)',
        image: createPlaceholderImage('Crimson Pine Room', 'Private balcony · Dual windows'),
        details: 'First floor · Panoramic dual windows · Private balcony · Attached bath',
      },
      {
        name: 'Wild Orchid Room (Purple Theme)',
        image: createPlaceholderImage('Wild Orchid Room', 'Luxury balcony · Valley view'),
        details: 'First floor luxury · Dual view windows · Private balcony · Attached bath',
      },
    ],
  },
  {
    id: 'woodwalk',
    name: 'The WoodWalk Nature Stay',
    location: 'Bhimtal',
    state: 'Uttrakhand',
    propertyType: '4BHK Traditional Stone Cottage',
    guestCapacityText: 'Accommodates up to 12 guests',
    guests: 12,
    bedrooms: 4,
    beds: 5,
    bathrooms: 4,
    rating: 9.5,
    ratingLabel: 'Exceptional',
    reviewsCount: 12,
    pricePerNight: 8500,
    originalPricePerNight: 12000,
    totalPrice: 19000,
    discountBadge: '30% off',
    isPremium: true,
    coordinates: { x: 48, y: 38, label: '₹8,500', lat: 29.3510, lng: 79.5540 },
    images: [
      '/cover/woodwalk.jpg',
      createPlaceholderImage('The WoodWalk Nature Stay', 'Garden Sitting Area'),
      createPlaceholderImage('The WoodWalk Nature Stay', 'Covered Terrace'),
      createPlaceholderImage('The WoodWalk Nature Stay', 'Village Surroundings'),
    ],
    description:
      'A peaceful 4BHK traditional stone cottage tucked in a mountain village (Chauria, Mehragaon, Bhimtal). Surrounded by green valley views and fresh mountain air, it offers a true nature-stay retreat away from road noise.',
    accessibility: {
      locationDetail: 'House No.43, Ward 9, Chauria, Mehragaon, Bhimtal, Uttarakhand 263136 (Near Sea Hawk Adventure Sports & Camping).',
      accessHike: 'Scenic 4 to 5-minute uphill nature walk ("Woodwalk") through the village from the parking area.',
      parkingDetails: 'Secure dedicated private parking for 2-3 cars near main road, protected by a chain system.',
      checkInProcess: 'On-site caretaker meets guests at parking area to carry all luggage and guide to the cottage. (Note: May be difficult for very elderly or knee problems).',
    },
    uspsAndVibe: {
      vibe: 'Highly peaceful mountain village setting, completely disconnected from city & road noise.',
      nightView: 'Uninterrupted green valley & star-studded mountain sky views.',
      culturalExperience: 'Authentic Pahari traditional stone cottage living with garden & outdoor tea seating.',
    },
    layoutDetails: {
      indoors: {
        livingRoom: 'First floor covered terrace with seating & separate dedicated dining space for the group.',
        bedrooms: 'Ground Floor: Garden Room (outside near garden, attached bath), Cozy Room (left, attached bath), Classic Room (right, attached bath); 1st Floor: Family Suite (large room, 2 double beds, attached bath & balcony).',
        bathroom: '4 attached bathrooms with constant hot water service & essential toiletries.',
      },
      kitchenAndDining: {
        kitchen: 'Staff-only kitchen managed exclusively by in-house cook for a relaxing holiday.',
        dining: 'Fresh home-style meals with home-grown spices on pre-order basis (pocket-friendly prices). Dedicated dining area & outdoor garden tea seating.',
      },
      outdoors: {
        garden: 'Large green garden right in front of the cottage with dedicated outdoor sitting area.',
        relaxation: 'Open covered terrace on 1st floor & garden seating for evening tea in nature.',
      },
    },
    nearbyAttractions: [
      { name: 'Bhimtal Lake (2 Km)', driveTime: '5 Mins' },
      { name: 'Sattal (5 Km)', driveTime: '10 Mins' },
      { name: 'Naukuchiatal (8 Km)', driveTime: '16 Mins' },
      { name: 'Bell Temple (10 Km)', driveTime: '25 Mins' },
      { name: 'Kainchi Dham (15 Km)', driveTime: '35 Mins' },
      { name: 'Nainital Lake (20 Km)', driveTime: '45 Mins' },
      { name: 'Mukteshwar (35 Km)', driveTime: '60 Mins' },
    ],
    houseRulesList: [
      'Nature & Village Life: Cottage is in a real village surrounded by trees. Keep doors & windows closed after sunset to prevent harmless mountain bugs or monkeys entering.',
      'Accessibility Note: 4-5 min uphill nature walk may be difficult for very elderly guests or knee problems.',
      'Main kitchen is staff-only (no guest self-cooking). Share meal orders a few hours in advance.',
      'Exterior security cameras are actively maintained on premises for safety.',
    ],
    servicesAndDining: [
      'On-site Caretaker meets guests at parking to carry all luggage to the house',
      'In-house Cook prepares fresh home-style meals using home-grown spices (pre-order basis)',
      'High-speed Wi-Fi & constant hot water service throughout',
      'Basic Inverter Power Backup for main lights and phone charging points during power cuts',
    ],
    highlights: [
      { icon: 'sunset', title: '4BHK Traditional Stone Cottage', desc: 'Authentic stone architecture surrounded by nature.' },
      { icon: 'heart', title: 'Free Caretaker Luggage Service', desc: 'Caretaker carries all luggage from parking.' },
      { icon: 'coffee', title: 'Fresh Village Home-Cooked Meals', desc: 'Prepared with home-grown spices fresh daily.' },
      { icon: 'map-pin', title: 'Pet-Friendly & Large Garden', desc: 'Furry friends welcome in spacious garden.' },
    ],
    amenities: {
      facilities: ['High-Speed Wi-Fi', 'Power Backup Inverter', 'Private Parking (2-3 Cars)', 'Caretaker Luggage Support', 'Exterior Security Cameras'],
      foodAndDrinks: ['In-House Cook', 'Fresh Home-Cooked Meals', 'Dedicated Dining Space', 'Tea & Coffee Essentials'],
      general: ['4 Attached Bathrooms', 'Constant Hot Water', 'Pet Friendly', '1st Floor Covered Terrace'],
      social: ['Large Outdoor Green Garden', 'Outdoor Tea Sitting Area', 'Private Family Suite Balcony'],
      notIncluded: ['Guest Self-Cooking in Main Kitchen', 'Direct Drive-Up Road Access (4-5 min nature walk)'],
    },
    rooms: [
      {
        name: 'Family Suite (1st Floor)',
        image: createPlaceholderImage('Family Suite (1st Floor)', '2 Double beds · Private balcony'),
        details: '2 Double beds · Attached bath · Private balcony with village views',
      },
      {
        name: 'Garden Room (Ground Floor)',
        image: createPlaceholderImage('Garden Room', 'Ground floor · Garden facing'),
        details: 'King bed · Attached bath · Located outside facing garden',
      },
      {
        name: 'Classic Room (Ground Floor)',
        image: createPlaceholderImage('Classic Room', 'Ground floor · Nature view'),
        details: 'King bed · Attached bath · Nature view',
      },
      {
        name: 'Cozy Room (Ground Floor)',
        image: createPlaceholderImage('Cozy Room', 'Ground floor · Mountain view'),
        details: 'Double bed · Attached bath · Mountain view',
      },
    ],
  },
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'uttrakhand',
    name: 'Uttrakhand',
    image: '/assets/uttrakhand.jpg',
    available: true,
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    image: '/assets/himachal pradesh.jpg',
    available: true,
  },
  {
    id: 'kerala',
    name: 'Kerala',
    image: '/assets/kerela.jpg',
    badge: 'Coming Soon',
    available: false,
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    image: '/assets/rajasthan.jpg',
    badge: 'Coming Soon',
    available: false,
  },
  {
    id: 'goa',
    name: 'Goa',
    image: '/assets/goa.jpg',
    badge: 'Coming Soon',
    available: false,
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    image: '/assets/karnataka.jpg',
    badge: 'Coming Soon',
    available: false,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Jatin Singh Mehra',
    role: 'Founder & CEO',
    image: '/host/jatin.jpg',
    imagePosition: 'object-top',
  },
  {
    name: 'Nikita Wadhawan',
    role: 'Operations',
    image: '/host/nikita.jpg',
    imagePosition: 'object-top',
  },
  {
    name: 'Vinay Kumar',
    role: 'Media Manager',
    image: '/host/vinay.jpg',
    imagePosition: 'object-center',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'David Lee',
    title: 'Professor',
    avatar: '/assets/avatar.png',
    quote:
      'Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave.',
  },
  {
    name: 'Sarah Machillie',
    title: 'Doctor',
    avatar: '/assets/avatar.png',
    quote:
      'Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world.',
  },
  {
    name: 'David Lee',
    title: 'Professor',
    avatar: '/assets/avatar.png',
    quote:
      'Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave.',
  },
  {
    name: 'Sarah Machillie',
    title: 'Doctor',
    avatar: '/assets/avatar.png',
    quote:
      'Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How does SKYMYST handle property maintenance and housekeeping?',
    answer:
      'We coordinate trained caretakers and housekeeping staff using strict Standard Operating Procedures (SOPs). We conduct regular, detailed maintenance checks to ensure your property remains in top-tier condition at all times.',
  },
  {
    question: 'How does the revenue-sharing model work?',
    answer:
      'We operate on a transparent revenue-sharing model tailored to your property. You receive fixed monthly payouts accompanied by a complete, detailed financial breakdown of all bookings. There are no hidden fees.',
  },
  {
    question: 'How do you ensure the quality of guests staying at my property?',
    answer:
      'We implement strict guest screening procedures before approving bookings. By utilizing dynamic pricing, we automatically filter out low-quality inquiries and attract premium travelers who respect your property.',
  },
];

