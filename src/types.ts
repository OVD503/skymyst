export type ScreenPage = 'home' | 'property' | 'partner' | 'about' | 'search' | 'terms' | 'privacy' | 'refund';

export type ActiveModal = 'none' | 'contact' | 'menu' | 'story' | 'gallery' | 'bookingConfirmation';

export interface Property {
  id: string;
  name: string;
  location: string;
  state: string;
  propertyType?: string;
  guestCapacityText?: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  rating: number;
  ratingLabel: string;
  reviewsCount: number;
  pricePerNight: number;
  originalPricePerNight: number;
  totalPrice: number;
  discountBadge?: string;
  isPremium?: boolean;
  images: string[];
  description: string;
  coordinates: { x: number; y: number; label: string; lat?: number; lng?: number };
  highlights: { icon: string; title: string; desc: string }[];
  accessibility?: {
    locationDetail?: string;
    accessHike?: string;
    parkingDetails?: string;
    checkInProcess?: string;
  };
  uspsAndVibe?: {
    vibe?: string;
    nightView?: string;
    culturalExperience?: string;
  };
  layoutDetails?: {
    indoors?: {
      livingRoom?: string;
      bedrooms?: string;
      bathroom?: string;
    };
    kitchenAndDining?: {
      kitchen?: string;
      dining?: string;
    };
    outdoors?: {
      garden?: string;
      relaxation?: string;
    };
  };
  nearbyAttractions?: {
    name: string;
    driveTime: string;
  }[];
  houseRulesList?: string[];
  servicesAndDining?: string[];
  amenities: {
    facilities: string[];
    foodAndDrinks: string[];
    general: string[];
    social: string[];
    notIncluded: string[];
  };
  rooms: {
    name: string;
    image: string;
    details: string;
  }[];
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  badge?: string;
  available: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
}

export interface Testimonial {
  name: string;
  title: string;
  avatar: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
