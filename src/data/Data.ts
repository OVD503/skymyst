import { Destination, FAQItem, Property, TeamMember, Testimonial } from '../types';

export const PROPERTIES: Property[] = [
  {
    id: 'bhimsarovar',
    name: 'Bhimsarovar Kumaoni Stay',
    location: 'Bhimtal',
    state: 'Uttrakhand',
    propertyType: '2-Bedroom Budget-Friendly Homestay',
    guestCapacityText: 'Accommodates a maximum of 6 guests',
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
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    ],
    description:
      'A highly budget-friendly, welcoming retreat designed to give guests a taste of authentic Kumaon life. It operates as a peaceful homestay experience featuring amazing 360-degree mountain and valley views.',
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
      { name: 'Bhimtal Lake (2 Km)', driveTime: '5 Mins' },
      { name: 'Sattal (5 Km)', driveTime: '10 Mins' },
      { name: 'Naukuchiatal (8 Km)', driveTime: '16 Mins' },
      { name: 'Bell Temple (10 Km)', driveTime: '25 Mins' },
      { name: 'Kainchi Dham (15 Km)', driveTime: '35 Mins' },
      { name: 'Nainital Lake (20 Km)', driveTime: '45 Mins' },
      { name: 'Mukteshwar (35 Km)', driveTime: '60 Mins' },
    ],
    servicesAndDining: [
      'Home-cooked local meal service (separate menu, charged extra)',
      '24/7 Property Manager / Support Assistant on site',
      'Power backup via inverter for continuous lights during power cuts',
      'Private bonfire & BBQ sessions arranged upon request (chargeable)',
    ],
    highlights: [
      { icon: 'sunset', title: '360° Mountain Views', desc: 'Panoramas across Bhimtal valley.' },
      { icon: 'heart', title: 'Pet-Friendly', desc: 'Furry friends completely welcome.' },
      { icon: 'coffee', title: 'Home-Cooked Food', desc: 'Authentic local Pahari meals served.' },
      { icon: 'map-pin', title: 'Central Location', desc: '2-3 mins drive from main Bhimtal market.' },
    ],
    amenities: {
      facilities: ['Free High-Speed Wi-Fi', 'Television', 'Pets Allowed', 'Tea/Coffee Kettle', 'Power Backup Inverter'],
      foodAndDrinks: ['In-House Meal Service', 'Local Kumaoni Dining', 'Tea & Coffee Essentials'],
      general: ['2 Attached Bathrooms with Hot Water', 'Quilts & Pillows', 'Fans & Heaters', '24/7 On-Site Manager'],
      social: ['Outdoor Garden Swing', 'Dedicated Viewing Terrace', 'Private Bonfire & BBQ'],
      notIncluded: ['Commercial Hotel Room Service', 'Direct Roadside Parking (3-4 min uphill walk)'],
    },
    rooms: [
      {
        name: 'Master Bedroom 1',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
        details: 'King bed · Attached bath · Mountain view',
      },
      {
        name: 'Bedroom 2',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
        details: 'King bed · Attached bath · Valley view',
      },
    ],
  },
  {
    id: 'sukoon',
    name: 'Sukoon Stay & Mountain View (Managed by SKYMYST – Digital Partner)',
    location: 'Pandeygoan, Almora',
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
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    ],
    description:
      'A highly aesthetic and beautifully designed home perfect for families looking to unwind amidst breathtaking mountains and starry skies. Every detail of the home is thoughtfully designed for relaxation and connection.',
    accessibility: {
      locationDetail: 'Situated in the serene area of Pandeygoan, Almora.',
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
        name: 'Master Bedroom',
        image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80',
        details: 'Queen bed · Back support mattress · Mountain view',
      },
      {
        name: 'Bedroom 2',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
        details: 'Double bed · Back support mattress · Garden view',
      },
    ],
  },
  {
    id: 'sunlight',
    name: 'The Sunlit Homestay',
    location: 'Ghorakhal, Bhowali',
    state: 'Uttrakhand',
    propertyType: '3BHK Independent Hillside Cottage (Managed by SKYMYST)',
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
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    ],
    description:
      'A cozy 3BHK hillside cottage offering the ultimate nature retreat. Nestled in Leeswal Gaon (Ghorakhal), 2km from Bhowali market and 9km from Kainchi Dham, it provides pristine air quality, quiet residential peace, and full privacy.',
    accessibility: {
      locationDetail: 'Ghorakhal Village (Leeswal Gaon), 2 km from Bhowali main market & 9 km from Kainchi Dham.',
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
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
        details: 'King bed · Attached bath · Ground floor access',
      },
      {
        name: 'First Floor Balcony Room',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80',
        details: 'King bed · Attached bath · Private balcony & terrace access',
      },
      {
        name: 'First Floor Room 3',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
        details: 'King bed · Attached bath · Hill view',
      },
    ],
  },
  {
    id: 'silvara',
    name: 'Silvara',
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
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    ],
    description:
      'A luxury 4-bedroom boutique hilltop villa featuring expansive 180° mountain and sky views. Designed with step-free ground floor access, themed bedrooms, a dedicated cook & caretaker, and landscaped lawn patio.',
    accessibility: {
      locationDetail: 'Silvara, Devi Mandir Road, Patti Pandeygaon, Bhimtal, Uttarakhand 263136 (Near Saraswati School). 2-3 min drive to market.',
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
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
        details: 'Ground floor step-free · King bed · 55" Smart TV · Attached bath',
      },
      {
        name: 'Forget-Me-Not Room (Blue Theme)',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
        details: 'First floor · King bed · 55" Smart TV · Mountain window · Attached bath',
      },
      {
        name: 'Crimson Pine Room (Red Theme)',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
        details: 'First floor · Panoramic dual windows · Private balcony · Attached bath',
      },
      {
        name: 'Wild Orchid Room (Purple Theme)',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
        details: 'First floor luxury · Dual view windows · Private balcony · Attached bath',
      },
    ],
  },
  {
    id: 'woodwalk',
    name: 'WoodWalk Nature Stay (Digital Partner)',
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
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
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
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
        details: '2 Double beds · Attached bath · Private balcony with village views',
      },
      {
        name: 'Garden Room (Ground Floor)',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
        details: 'King bed · Attached bath · Located outside facing garden',
      },
      {
        name: 'Classic Room (Ground Floor)',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
        details: 'King bed · Attached bath · Nature view',
      },
      {
        name: 'Cozy Room (Ground Floor)',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
        details: 'Double bed · Attached bath · Mountain view',
      },
    ],
  },
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'uttrakhand',
    name: 'Uttrakhand',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80',
    available: true,
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    available: true,
  },
  {
    id: 'kerala',
    name: 'Kerala',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80',
    badge: 'Coming Soon',
    available: false,
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=400&q=80',
    badge: 'Coming Soon',
    available: false,
  },
  {
    id: 'goa',
    name: 'Goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80',
    badge: 'Coming Soon',
    available: false,
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80',
    badge: 'Coming Soon',
    available: false,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Jatin Singh Mehra',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Nikita Wadhawan',
    role: 'Operations',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Vinay Kumar',
    role: 'Media Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'David Lee',
    title: 'Professor',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
    quote:
      'Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave.',
  },
  {
    name: 'Sarah Machillie',
    title: 'Doctor',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80',
    quote:
      'Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world.',
  },
  {
    name: 'David Lee',
    title: 'Professor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
    quote:
      'Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave.',
  },
  {
    name: 'Sarah Machillie',
    title: 'Doctor',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80',
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
