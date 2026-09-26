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
    id: 'silvara',
    name: 'Silvara Stay Bhimtal',
    category: 'Premium Management',
    isPremium: true,
    location: 'Bhimtal',
    state: 'Uttarakhand',
    propertyType: 'Entire Private Villa',
    guestCapacityText: 'Up to 12 guests',
    guests: 12,
    bedrooms: 4,
    beds: 4,
    bathrooms: 4,
    rating: 9.6,
    ratingLabel: 'Exceptional',
    reviewsCount: 18,
    pricePerNight: 14000,
    originalPricePerNight: 21000,
    totalPrice: 32000,
    discountBadge: '30% off',
    googleMapsUrl: 'https://share.google/0JZK0laQpAZe49FUg',
    coordinates: { x: 42, y: 35, label: '₹14,000', lat: 29.3520, lng: 79.5550 },
    images: [
      '/cover/silvara.jpeg',
      createPlaceholderImage('Silvara Stay Bhimtal', 'Lawn Patio'),
      createPlaceholderImage('Silvara Stay Bhimtal', 'Family Lounge'),
      createPlaceholderImage('Silvara Stay Bhimtal', '180° Balcony View'),
    ],
    description:
      'Silvara Stay is a peaceful 4BHK private villa in Bhimtal, designed for families and groups looking for a comfortable hill getaway. Surrounded by greenery and calm mountain surroundings, the property offers spacious rooms, common areas, home-cooked food, and a relaxed stay experience with easy access to Bhimtal and nearby attractions.',
    accessibility: {
      locationDetail: 'Devi Mandir Road, Bhimtal, Uttarakhand 263136 (Near Saraswati School). 2-3 min drive to market.',
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
        bedrooms: '4 bedrooms: Bedroom 1, Bedroom 2, Bedroom 3, Bedroom 4.',
        bathroom: '4 private attached bathrooms with hot water geysers & premium basic toiletries.',
      },
      kitchenAndDining: {
        kitchen: 'Staff-managed main kitchen preparing fresh home-style meals.',
        dining: '6-seater dining table with mountain-view window.',
      },
      outdoors: {
        garden: 'Landscaped lawn patio with dedicated seating for morning tea & bonfires.',
        relaxation: 'Common balcony with 180° valley views.',
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
      { name: 'Kathgodam Railway Station (28 Km)', driveTime: '70 Mins' },
      { name: 'Ramnagar Railway Station (75 Km)', driveTime: '2 Hrs' },
      { name: 'Pantnagar Airport (50 Km)', driveTime: '70 Mins' },
    ],
    highlights: [
      { icon: '👨‍👩‍👧‍👦', title: 'Ideal for Groups', desc: 'Comfortable accommodation for up to 12 guests.' },
      { icon: '🍲', title: 'Home-Cooked Food', desc: 'In-house meals with Indian, Pahadi and comfort-food options.' },
      { icon: '⛰️', title: 'Peaceful Hilltop Setting', desc: 'Surrounded by greenery with a calm hill-stay atmosphere.' },
      { icon: '📍', title: 'Prime Bhowali Location', desc: 'Conveniently located for exploring Kainchi Dham, Bhimtal, Sattal, Nainital and nearby attractions.' },
    ],
    amenities: {
      facilities: ['Wi-Fi', 'In-house Home-Cooked Meals', 'Attached Bathrooms', 'Spacious Living Area', 'Dining Area', 'Private Parking', 'Outdoor Sitting Area', 'Mountain & Green Surroundings', 'Room Heaters', 'Television', 'Hot Water / Geysers', 'Fresh Linen & Towels', 'Housekeeping & Caretaker Assistance', 'Power Backup'],
      foodAndDrinks: ['In-house Home-Cooked Meals', 'Pahadi Dining', 'Tea & Coffee Essentials'],
      general: ['4 Attached Private Bathrooms', 'Step-Free Ground Floor', '24/7 Caretaker Assistance'],
      social: ['Landscaped Lawn Patio', '180° Valley View Balcony', 'Outdoor Sitting Area'],
      notIncluded: ['Guest Self-Cooking in Main Kitchen', 'Smoking inside bedrooms'],
    },
    rooms: [
      { name: 'Bedroom 1', image: '/cover/silvara.jpeg', details: 'Ground floor step-free · King bed · Attached bath' },
      { name: 'Bedroom 2', image: createPlaceholderImage('Bedroom 2', 'King bed'), details: 'First floor · King bed · Mountain view' },
      { name: 'Bedroom 3', image: createPlaceholderImage('Bedroom 3', 'King bed'), details: 'First floor · King bed · Attached bath' },
      { name: 'Bedroom 4', image: createPlaceholderImage('Bedroom 4', 'King bed'), details: 'First floor · King bed · Attached bath' },
      { name: 'Living Area', image: createPlaceholderImage('Living Area', 'Family Lounge'), details: 'Ground floor Family Lounge with sofa' },
      { name: 'Dining Area', image: createPlaceholderImage('Dining Area', '6-Seater Table'), details: 'Dining table with mountain window view' },
      { name: 'Outdoor / Balcony', image: createPlaceholderImage('Outdoor / Balcony', '180° Valley View'), details: 'Landscaped lawn patio & viewing balcony' },
      { name: 'Common Area', image: createPlaceholderImage('Common Area', 'Social Corner'), details: '1st floor photo corner & lounge' },
    ],
  },
  {
    id: 'raindrop',
    name: 'Raindrop Stay Bhowali',
    category: 'Premium Management',
    isPremium: true,
    location: 'Bhowali',
    state: 'Uttarakhand',
    propertyType: 'Entire Premium Private Villa',
    guestCapacityText: 'Up to 9 guests',
    guests: 9,
    bedrooms: 3,
    beds: 3,
    bathrooms: 3,
    rating: 9.7,
    ratingLabel: 'Exceptional',
    reviewsCount: 15,
    pricePerNight: 14000,
    originalPricePerNight: 20000,
    totalPrice: 30000,
    discountBadge: '30% off',
    googleMapsUrl: 'https://maps.app.goo.gl/FKvKaBnSk3xYkVF19',
    coordinates: { x: 55, y: 40, label: '₹14,000', lat: 29.3800, lng: 79.5200 },
    images: [
      '/cover/sunlit.jpeg',
      createPlaceholderImage('Raindrop Stay Bhowali', 'Exterior View'),
      createPlaceholderImage('Raindrop Stay Bhowali', 'Living & Dining Area'),
      createPlaceholderImage('Raindrop Stay Bhowali', 'Terrace View'),
    ],
    description:
      'Raindrop Stay is a premium 3BHK private villa in Bhowali, designed for families and small groups looking for a comfortable and peaceful hill stay. The property features three well-appointed bedrooms, a spacious living and dining area, a functional kitchen, terrace, outdoor sitting space and private car parking. Guests can enjoy beautiful valley and Bhimtal Lake views, modern amenities and a relaxed premium atmosphere. Its location also makes it a convenient base for exploring Kainchi Dham, Bhimtal, Sattal, Nainital and nearby attractions.',
    accessibility: {
      locationDetail: 'Bhowali, Uttarakhand',
      checkInProcess: 'Check-in: 1:00 PM / Checkout: 10:00 AM • Self check-in',
    },
    highlights: [
      { icon: '✨', title: 'Premium 3BHK Private Villa', desc: 'Comfortable and stylish stay ideal for families and small groups.' },
      { icon: '🌄', title: 'Valley & Bhimtal Lake Views', desc: 'Beautiful scenic views from the property for a peaceful hill experience.' },
      { icon: '🏡', title: 'Comfortable Homely Setup', desc: 'Living area, dining space, kitchen access and essential amenities for a relaxed stay.' },
      { icon: '📍', title: 'Prime Bhowali Location', desc: 'Conveniently located for exploring Kainchi Dham 20mins, Bhimtal, Sattal, Nainital and nearby attractions.' },
    ],
    amenities: {
      facilities: ['Wi-Fi', 'Kitchen', 'Parking', 'Terrace', 'Lake View', 'Smart TV', 'Heaters', 'Hot Water', 'Housekeeping', 'Bonfire', 'Living Area', 'Dining Area', 'Power Backup', 'Caretaker Assistance'],
      foodAndDrinks: ['Kitchen Access', 'Dining Area'],
      general: ['Heaters', 'Hot Water', 'Power Backup', 'Caretaker Assistance'],
      social: ['Terrace', 'Bonfire', 'Living Area'],
      notIncluded: ['Commercial Hotel Room Service'],
    },
    rooms: [
      { name: 'Bedroom 1', image: '/cover/sunlit.jpeg', details: 'Well-appointed bedroom · King bed' },
      { name: 'Bedroom 2', image: createPlaceholderImage('Bedroom 2', 'Comfortable bed'), details: 'Well-appointed bedroom · King bed' },
      { name: 'Bedroom 3', image: createPlaceholderImage('Bedroom 3', 'Comfortable bed'), details: 'Well-appointed bedroom · King bed' },
      { name: 'Living Area', image: createPlaceholderImage('Living Area', 'Spacious Seating'), details: 'Spacious living & lounge space' },
      { name: 'Dining Area', image: createPlaceholderImage('Dining Area', 'Dining Table'), details: 'Dedicated dining area' },
      { name: 'Terrace / Balcony', image: createPlaceholderImage('Terrace / Balcony', 'Valley Views'), details: 'Scenic terrace with valley views' },
      { name: 'Common Area', image: createPlaceholderImage('Common Area', 'Indoor Lounge'), details: 'Common sitting area' },
      { name: 'Outdoor Area', image: createPlaceholderImage('Outdoor Area', 'Garden Sitting'), details: 'Outdoor sitting space' },
      { name: 'Kitchen', image: createPlaceholderImage('Kitchen', 'Functional Kitchen'), details: 'Functional kitchen access' },
    ],
    nearbyAttractions: [
      { name: 'Kainchi Dham (9 Km)', driveTime: '20 Mins' },
      { name: 'Bell Temple (4 Km)', driveTime: '10 Mins' },
      { name: 'Bhimtal Lake (9 Km)', driveTime: '20 Mins' },
      { name: 'Sattal (7 Km)', driveTime: '15 Mins' },
      { name: 'Naukuchiatal (10 Km)', driveTime: '22 Mins' },
      { name: 'Nainital Lake (15 Km)', driveTime: '45 Mins' },
      { name: 'Mukteshwar (35 Km)', driveTime: '60 Mins' },
      { name: 'Kathgodam Railway Station (24 Km)', driveTime: '50 Mins' },
      { name: 'Ramnagar Railway Station (75 Km)', driveTime: '2 Hrs' },
      { name: 'Pantnagar Airport (55 Km)', driveTime: '90 Mins' },
    ],
  },
  {
    id: 'sunlight',
    name: 'Sunlit Stay Bhowali',
    category: 'Digital Partner',
    isPremium: false,
    location: 'Bhowali',
    state: 'Uttarakhand',
    propertyType: 'Entire Private Villa',
    guestCapacityText: 'Up to 6 guests',
    guests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 3,
    rating: 9.2,
    ratingLabel: 'Exceptional',
    reviewsCount: 14,
    pricePerNight: 10000,
    originalPricePerNight: 14000,
    totalPrice: 22000,
    discountBadge: '30% off',
    googleMapsUrl: 'https://www.google.com/maps?q=29.38075,79.53747',
    coordinates: { x: 58, y: 42, label: '₹10,000', lat: 29.38075, lng: 79.53747 },
    images: [
      '/cover/sunlit.jpeg',
      createPlaceholderImage('Sunlit Stay Bhowali', 'First Floor Balcony'),
      createPlaceholderImage('Sunlit Stay Bhowali', 'Covered Terrace View'),
    ],
    description:
      'Sunlit Stay Bhowali is a private 3BHK holiday home designed for families and small groups looking for a comfortable and peaceful stay in the hills. The property accommodates up to 6 guests and offers a simple, homely setup with essential amenities and the convenience of self check-in. Its Bhowali location makes it a practical base for exploring nearby attractions such as Kainchi Dham, Bhimtal, Sattal and Nainital while enjoying a relaxed stay away from crowded tourist areas.',
    accessibility: {
      locationDetail: 'Bhowali, Uttarakhand (29°22\'50.7"N 79°32\'14.9"E)',
      checkInProcess: 'Check-in: 1:00 PM / Checkout: 10:00 AM • Self check-in',
    },
    highlights: [
      { icon: '🏡', title: 'Private 3BHK Stay', desc: 'Comfortable setup ideal for families and small groups of up to 6 guests.' },
      { icon: '🔑', title: 'Self Check-in Convenience', desc: 'Easy and flexible arrival experience for guests.' },
      { icon: '⛰️', title: 'Peaceful Hill Stay', desc: 'A calm hill stay with convenient access to Kainchi Dham, Bhimtal, Sattal and Nainital.' },
      { icon: '📍', title: 'Prime Bhowali Location', desc: 'Conveniently located for exploring Kainchi Dham 20mins, Bhimtal, Sattal, Nainital and nearby attractions.' },
    ],
    amenities: {
      facilities: ['Wi-Fi', 'Self Check-in', 'Attached Bathrooms', 'Living / Common Area', 'Dining Area', 'Kitchen', 'Hot Water / Geysers', 'Fresh Linen & Towels', 'Toiletries', 'Room Heaters', 'Housekeeping', 'Parking', 'Power backup', 'Family-Friendly Stay'],
      foodAndDrinks: ['Self-Catering Kitchen', 'Dining Area'],
      general: ['Attached Bathrooms', 'Room Heaters', 'Hot Water / Geysers', 'Power backup'],
      social: ['Living / Common Area', 'Terrace / Balcony', 'Outdoor Area'],
      notIncluded: ['Commercial Hotel Room Service'],
    },
    rooms: [
      { name: 'Bedroom 1', image: '/cover/sunlit.jpeg', details: 'King bed · Attached bath' },
      { name: 'Bedroom 2', image: createPlaceholderImage('Bedroom 2', 'Attached bath'), details: 'King bed · Attached bath' },
      { name: 'Bedroom 3', image: createPlaceholderImage('Bedroom 3', 'Attached bath'), details: 'King bed · Attached bath' },
      { name: 'Living Area', image: createPlaceholderImage('Living Area', 'Common Living'), details: 'Homely living / common area' },
      { name: 'Dining Area', image: createPlaceholderImage('Dining Area', 'Dining Table'), details: 'Dining area' },
      { name: 'Terrace / Balcony', image: createPlaceholderImage('Terrace / Balcony', 'Mountain View'), details: 'Covered terrace & balcony' },
      { name: 'Common Area', image: createPlaceholderImage('Common Area', 'Relaxation Corner'), details: 'Common sitting area' },
      { name: 'Outdoor Area', image: createPlaceholderImage('Outdoor Area', 'Garden Area'), details: 'Outdoor sitting space' },
      { name: 'Kitchen', image: createPlaceholderImage('Kitchen', 'Self-Catering Kitchen'), details: 'Kitchen with essential amenities' },
    ],
    nearbyAttractions: [
      { name: 'Kainchi Dham (9 Km)', driveTime: '20 Mins' },
      { name: 'Bell Temple (4 Km)', driveTime: '10 Mins' },
      { name: 'Bhimtal Lake (9 Km)', driveTime: '20 Mins' },
      { name: 'Sattal (7 Km)', driveTime: '15 Mins' },
      { name: 'Naukuchiatal (10 Km)', driveTime: '22 Mins' },
      { name: 'Nainital Lake (15 Km)', driveTime: '45 Mins' },
      { name: 'Mukteshwar (35 Km)', driveTime: '60 Mins' },
      { name: 'Kathgodam Railway Station (24 Km)', driveTime: '50 Mins' },
      { name: 'Ramnagar Railway Station (75 Km)', driveTime: '2 Hrs' },
      { name: 'Pantnagar Airport (55 Km)', driveTime: '90 Mins' },
    ],
  },
  {
    id: 'woodwalk',
    name: 'WoodWalk Nature Cottage Bhimtal',
    category: 'Digital Partner',
    isPremium: false,
    location: 'Bhimtal',
    state: 'Uttarakhand',
    propertyType: 'Entire Private Cottage / Villa',
    guestCapacityText: 'Up to 12 guests',
    guests: 12,
    bedrooms: 4,
    beds: 5,
    bathrooms: 4,
    rating: 9.5,
    ratingLabel: 'Exceptional',
    reviewsCount: 12,
    pricePerNight: 8000,
    originalPricePerNight: 12000,
    totalPrice: 19000,
    discountBadge: '30% off',
    googleMapsUrl: 'https://www.google.com/maps?q=29.363028,79.539250',
    coordinates: { x: 48, y: 38, label: '₹8,000', lat: 29.363028, lng: 79.539250 },
    images: [
      '/cover/woodwalk.jpg',
      createPlaceholderImage('WoodWalk Nature Cottage', 'Garden Sitting Area'),
      createPlaceholderImage('WoodWalk Nature Cottage', 'Covered Terrace'),
    ],
    description:
      'WoodWalk Nature Stay Bhimtal is a private 4BHK nature-focused stay designed for families and groups looking for a peaceful break surrounded by greenery. The property offers comfortable bedrooms, common living spaces, essential amenities, and a relaxed hill environment away from the usual crowd. Its Bhimtal location makes it a convenient base for exploring nearby lakes and tourist spots while enjoying a quieter, more natural stay experience with family or friends.',
    accessibility: {
      locationDetail: 'House No.43, Ward 9, Chauria, Mehragaon, Bhimtal, Uttarakhand 263136 (29°21\'46.9"N 79°32\'21.3"E).',
      accessHike: 'Short 5-6 minute nature walk through greenery.',
      checkInProcess: 'Check-in: 1:00 PM / Checkout: 10:00 AM',
    },
    highlights: [
      { icon: '🌿', title: 'Private 4BHK Nature Stay', desc: 'Comfortable accommodation for families and groups in a peaceful Bhimtal setting.' },
      { icon: '🌳', title: 'Surrounded by Greenery', desc: 'A calm stay experience with a natural hill atmosphere away from the busy tourist areas.' },
      { icon: '🚶‍♂️', title: '5–6 Minute Nature Walk', desc: 'Guests can enjoy a short and refreshing walk through the surrounding natural area.' },
      { icon: '📍', title: 'Convenient Bhimtal Base', desc: 'Well suited for exploring Bhimtal, Sattal and other nearby attractions while staying in a quieter location.' },
    ],
    amenities: {
      facilities: ['Wi-Fi', 'Private 4BHK Stay', 'Attached Bathrooms', 'Dining Area', 'Television', 'Hot Water / Geysers', 'Basic Toiletries', 'Room Heaters', 'Parking', 'Housekeeping', 'Caretaker Assistance', 'Outdoor Sitting Area', 'Nature / Green Surroundings', 'Family-Friendly Stay', 'Group-Friendly Accommodation'],
      foodAndDrinks: ['Dining Area', 'Basic Toiletries'],
      general: ['Attached Bathrooms', 'Hot Water / Geysers', 'Room Heaters', 'Caretaker Assistance'],
      social: ['Outdoor Sitting Area', 'Nature / Green Surroundings', 'Garden Area'],
      notIncluded: ['Commercial Hotel Room Service'],
    },
    rooms: [
      { name: 'Bedroom 1', image: '/cover/woodwalk.jpg', details: 'Bedroom 1 · Attached bath' },
      { name: 'Bedroom 2', image: createPlaceholderImage('Bedroom 2', 'Attached bath'), details: 'Bedroom 2 · Attached bath' },
      { name: 'Bedroom 3', image: createPlaceholderImage('Bedroom 3', 'Attached bath'), details: 'Bedroom 3 · Attached bath' },
      { name: 'Bedroom 4', image: createPlaceholderImage('Bedroom 4', 'Attached bath'), details: 'Bedroom 4 · Attached bath' },
      { name: 'Dining Area', image: createPlaceholderImage('Dining Area', 'Cottage Dining'), details: 'Dining area' },
      { name: 'Terrace / Balcony', image: createPlaceholderImage('Terrace / Balcony', 'Greenery View'), details: 'Covered terrace & balcony' },
      { name: 'Garden Area', image: createPlaceholderImage('Garden Area', 'Lawn & Trees'), details: 'Garden sitting area' },
      { name: 'Outdoor Area', image: createPlaceholderImage('Outdoor Area', 'Nature Walk'), details: 'Outdoor sitting area & nature path' },
    ],
    nearbyAttractions: [
      { name: 'Bhimtal Lake (2 Km)', driveTime: '5 Mins' },
      { name: 'Sattal (5 Km)', driveTime: '10 Mins' },
      { name: 'Naukuchiatal (8 Km)', driveTime: '16 Mins' },
      { name: 'Bell Temple (10 Km)', driveTime: '25 Mins' },
      { name: 'Kainchi Dham (15 Km)', driveTime: '35 Mins' },
      { name: 'Nainital Lake (20 Km)', driveTime: '45 Mins' },
      { name: 'Mukteshwar (35 Km)', driveTime: '60 Mins' },
      { name: 'Kathgodam Railway Station (28 Km)', driveTime: '70 Mins' },
      { name: 'Ramnagar Railway Station (75 Km)', driveTime: '2 Hrs' },
      { name: 'Pantnagar Airport (50 Km)', driveTime: '70 Mins' },
    ],
  },

  {
    id: 'bhimsarovar',
    name: 'Bhimsarovar Kumaoni Homestay',
    category: 'Digital Partner',
    isPremium: false,
    location: 'Bhimtal',
    state: 'Uttarakhand',
    propertyType: '2-Bedroom Budget-Friendly Homestay',
    guestCapacityText: 'Up to 6 guests',
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
    googleMapsUrl: 'https://maps.google.com/?q=Bhimtal,Uttarakhand',
    coordinates: { x: 38, y: 32, label: '₹12,320', lat: 29.3500, lng: 79.5530 },
    images: [
      '/cover/bhimsarowar.JPG',
      createPlaceholderImage('Bhimsarovar Homestay', 'Exterior & Garden'),
      createPlaceholderImage('Bhimsarovar Homestay', 'Living Room Hall'),
    ],
    description:
      'Authentic, budget-friendly Kumaoni homestay retreat designed for peaceful living with 360-degree mountain & valley views near Bhimtal Lake.',
    accessibility: {
      locationDetail: 'Ward 9, Chauria, Mehragaon, Bhimtal, District Nainital, Uttarakhand 263136 (2-3 min drive from main market).',
      accessHike: 'Short, refreshing 3-4 minute uphill walk from the car parking area to reach the property.',
      parkingDetails: 'Private, secure car parking near main road (accommodates up to 3-4 cars).',
      checkInProcess: 'Dedicated property manager/assistant available 24/7 for guest reception.',
    },
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
      { name: 'Bedroom 1', image: '/cover/bhimsarowar.JPG', details: 'King bed · Attached bath' },
      { name: 'Bedroom 2', image: createPlaceholderImage('Bedroom 2', 'Attached bath'), details: 'King bed · Attached bath' },
      { name: 'Living Area', image: createPlaceholderImage('Living Area', 'Kumaoni Hall'), details: 'Living room hall' },
      { name: 'Rooftop Terrace', image: createPlaceholderImage('Rooftop Terrace', '360° Valley Views'), details: 'Rooftop viewing terrace' },
      { name: 'Outdoor Garden', image: createPlaceholderImage('Outdoor Garden', 'Garden Swing'), details: 'Garden swing & bonfire area' },
    ],
    nearbyAttractions: [
      { name: 'Bhimtal Lake (2 Km)', driveTime: '5 Mins' },
      { name: 'Sattal (5 Km)', driveTime: '10 Mins' },
      { name: 'Naukuchiatal (8 Km)', driveTime: '16 Mins' },
      { name: 'Bell Temple (10 Km)', driveTime: '25 Mins' },
      { name: 'Kainchi Dham (15 Km)', driveTime: '35 Mins' },
      { name: 'Nainital Lake (20 Km)', driveTime: '45 Mins' },
      { name: 'Mukteshwar (35 Km)', driveTime: '60 Mins' },
      { name: 'Kathgodam Railway Station (28 Km)', driveTime: '70 Mins' },
      { name: 'Ramnagar Railway Station (75 Km)', driveTime: '2 Hrs' },
      { name: 'Pantnagar Airport (50 Km)', driveTime: '70 Mins' },
    ],
  },
  {
    id: 'sukoon',
    name: 'Sukoon Stay Almora',
    category: 'Digital Partner',
    isPremium: false,
    location: 'Almora',
    state: 'Uttarakhand',
    propertyType: 'Private Stay (2 BHK)',
    guestCapacityText: 'Up to 12 guests',
    guests: 12,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    rating: 9.8,
    ratingLabel: 'Exceptional',
    reviewsCount: 6,
    pricePerNight: 8000,
    originalPricePerNight: 12000,
    totalPrice: 18000,
    discountBadge: '',
    googleMapsUrl: 'https://www.google.com/maps?q=29.610933,79.648011',
    coordinates: { x: 24, y: 62, label: '₹8,000', lat: 29.610933, lng: 79.648011 },
    images: [
      '/cover/sukoonstay.jpg',
      createPlaceholderImage('Sukoon Stay Almora', 'Exterior View'),
      createPlaceholderImage('Sukoon Stay Almora', 'Living Space'),
    ],
    description:
      'Sukoon Stay Almora is a cozy 2BHK private stay designed for couples, small families, and travellers looking for a peaceful mountain escape. The property offers two comfortable bedrooms, a living area, basic kitchen facilities, essential amenities, and a relaxed homely atmosphere. Set in the calm surroundings of Almora, it is ideal for guests who want privacy, comfort, scenic hill surroundings, and a simple stay experience away from crowded tourist areas.',
    accessibility: {
      locationDetail: 'Almora, Uttarakhand (29.610933, 79.648011)',
      checkInProcess: 'Check-in: 1:00 PM / Checkout: 10:00 AM',
    },
    highlights: [
      { icon: '🏡', title: 'Private 2BHK Stay', desc: 'Comfortable and peaceful setup for couples and small families.' },
      { icon: '⛰️', title: 'Calm Almora Setting', desc: 'Ideal for guests looking to relax away from crowded tourist areas.' },
      { icon: '🍳', title: 'Homely & Comfortable', desc: 'Living space, basic kitchen facilities and essential stay amenities.' },
      { icon: '✨', title: 'Perfect for Short Getaways', desc: 'A simple, cozy base for exploring Almora and nearby hill attractions.' },
    ],
    amenities: {
      facilities: ['Wi-Fi', 'Private 2 BHK Stay', 'Attached Bathrooms', 'Dining Area', 'Television', 'Hot Water / Geysers', 'Basic Toiletries', 'Room Heaters', 'Parking', 'Housekeeping', 'Caretaker Assistance', 'Outdoor Sitting Area', 'Nature / Green Surroundings', 'Family-Friendly Stay', 'Group-Friendly Accommodation'],
      foodAndDrinks: ['Dining Area', 'Basic Kitchen Facilities'],
      general: ['Attached Bathrooms', 'Hot Water / Geysers', 'Room Heaters', 'Caretaker Assistance'],
      social: ['Outdoor Sitting Area', 'Nature / Green Surroundings'],
      notIncluded: ['Commercial Hotel Room Service'],
    },
    rooms: [
      { name: 'Bedroom 1', image: '/cover/sukoonstay.jpg', details: 'Comfortable bedroom' },
      { name: 'Bedroom 2', image: createPlaceholderImage('Bedroom 2', 'Comfortable bed'), details: 'Comfortable bedroom' },
      { name: 'Living Area', image: createPlaceholderImage('Living Area', 'Homely Lounge'), details: 'Living area & basic kitchen' },
      { name: 'Outdoor Area', image: createPlaceholderImage('Outdoor Area', 'Scenic Mountain View'), details: 'Outdoor sitting space' },
    ],
    nearbyAttractions: [
      { name: 'Almora Mall Road (1 Km)', driveTime: '5 Mins' },
      { name: 'Kasar Devi Temple (6 Km)', driveTime: '15 Mins' },
      { name: 'Chitai Golu Devta Temple (12 Km)', driveTime: '25 Mins' },
      { name: 'Katarmal Sun Temple (10 Km)', driveTime: '30 Mins' },
      { name: 'Binsar Wildlife Sanctuary (25 Km)', driveTime: '45 Mins' },
      { name: 'Jageshwar Dham (38 Km)', driveTime: '60 Mins' },
      { name: 'Kainchi Dham (45 Km)', driveTime: '75 Mins' },
      { name: 'Mukteshwar (40 Km)', driveTime: '90 Mins' },
      { name: 'Kathgodam Railway Station (90 Km)', driveTime: '3 Hrs' },
      { name: 'Haldwani Railway Station (95 Km)', driveTime: '3.5 Hrs' },
      { name: 'Pantnagar Airport (125 Km)', driveTime: '4 Hrs' },
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

