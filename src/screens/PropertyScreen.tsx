import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Menu,
  Wifi,
  Tv,
  Dog,
  Briefcase,
  Flame,
  Gamepad2,
  Clock,
  ShieldCheck,
  Footprints,
  Car,
  KeyRound,
  Utensils,
  Sun,
  Heart,
  Coffee,
  MapPin,
  Star,
  User,
} from 'lucide-react';
import { Property, ScreenPage } from '../types';
import { SkymystLogo } from '../components/SkymystLogo';
import { CategoryBadge } from '../components/CategoryBadge';
import { useReviews } from '../hooks/useReviews';

interface PropertyScreenProps {
  properties: Property[];
  propertyId?: string;
  onOpenContact: () => void;
  onOpenGallery: () => void;
  onNavigate?: (page: ScreenPage) => void;
}

export const PropertyScreen: React.FC<PropertyScreenProps> = ({
  properties,
  propertyId = 'bhimsarovar',
  onOpenContact,
  onOpenGallery,
  onNavigate,
}) => {
  const property: Property =
    properties.find((p) => p.id === propertyId) || properties[0];

  const { reviews } = useReviews(property.id);

  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'rooms' | 'policies'>('overview');
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [expandedAmenities, setExpandedAmenities] = useState<Record<string, boolean>>({

    facilities: true,
    food: false,
    general: false,
    social: false,
    notIncluded: false,
  });
  const [expandedPolicies, setExpandedPolicies] = useState<Record<string, boolean>>({
    rules: false,
    cancellation: true,
    safety: false,
  });

  // Booking widget form state
  const [checkIn, setCheckIn] = useState('2026-10-12');
  const [checkOut, setCheckOut] = useState('2026-10-16');
  const [guestsCount, setGuestsCount] = useState('4 guests');
  const [showAreaDetails, setShowAreaDetails] = useState(false);

  const toggleAmenity = (key: string) => {
    setExpandedAmenities((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const togglePolicy = (key: string) => {
    setExpandedPolicies((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const highlightIcons = {
    sunset: <Sun className="w-4 h-4" />,
    heart: <Heart className="w-4 h-4 fill-[#00704A]" />,
    coffee: <Coffee className="w-4 h-4" />,
    'map-pin': <MapPin className="w-4 h-4" />,
  };
  const getHighlightIcon = (icon: string) =>
    highlightIcons[icon as keyof typeof highlightIcons] || <span className="text-lg leading-none select-none">{icon}</span>;

  const amenityIcons = [Wifi, Tv, Dog, Briefcase, Flame, Gamepad2];

  const getFacilityEmoji = (facility: string): string => {
    const f = facility.toLowerCase();
    if (f.includes('wifi') || f.includes('wi-fi')) return '🛜';
    if (f.includes('television') || f.includes('tv')) return '📺';
    if (f.includes('pet')) return '🐶';
    if (f.includes('work') || f.includes('space')) return '🛋️';
    if (f.includes('bonfire') || f.includes('fire')) return '🔥';
    if (f.includes('tennies') || f.includes('tennis') || f.includes('ping pong')) return '🏓';
    if (f.includes('kettle') || f.includes('tea') || f.includes('coffee')) return '☕';
    if (f.includes('power') || f.includes('inverter') || f.includes('backup')) return '⚡';
    if (f.includes('meal') || f.includes('dining')) return '🍽️';
    if (f.includes('bath') || f.includes('shower') || f.includes('water')) return '🚿';
    if (f.includes('garden') || f.includes('swing')) return '🪴';
    if (f.includes('terrace') || f.includes('view')) return '🌄';
    return '✨';
  };
  const galleryCount = property.images?.length || 0;

  return (
    <div className="w-full bg-white font-sans antialiased text-stone-800 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-24">
      {/* Mobile View Hero Header (Full bleed image under global header) */}
      <div className="md:hidden relative h-[360px] sm:h-[440px] w-full overflow-hidden mb-4">
        <img
          src={property.images[0] || '/assets/bg.png'}
          alt={property.name}
          className="w-full h-full object-cover cursor-pointer"
          onClick={onOpenGallery}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30 pointer-events-none" />

        <div className="absolute top-4 right-4 z-20">
          <CategoryBadge category={property.category} isPremium={property.isPremium} />
        </div>

        {/* Bottom Right: Photo Counter Badge e.g. "1 / 54" */}
        <div
          onClick={onOpenGallery}
          className="absolute bottom-4 right-4 z-20 bg-[#1E2045]/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-xl shadow-lg cursor-pointer flex items-center space-x-1 border border-white/10"
        >
          <span>1 / {galleryCount > 0 ? galleryCount : 54}</span>
        </div>
      </div>

      <div className="max-w-[1145px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Desktop View Title */}
        <div className="hidden md:block">
          <div className="mb-6 max-w-[542px]">
            <h1 className="font-sans text-[24px] sm:text-[32px] font-medium leading-[100%] tracking-normal text-[#000000]">
              {property.name}
            </h1>
          </div>
        </div>

        {/* Desktop 5-Photo Gallery Grid */}
        <div className="hidden md:grid md:grid-cols-12 gap-[8px] w-full h-[400px] rounded-[16px] overflow-hidden mb-8">
          {/* Main Large Photo (Left 6 cols) */}
          <div
            onClick={onOpenGallery}
            className="md:col-span-6 h-[400px] cursor-pointer relative group overflow-hidden rounded-[16px]"
          >
            <img
              src={property.images[0] || '/assets/bg.png'}
              alt={property.name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 right-3 z-10">
              <CategoryBadge category={property.category} isPremium={property.isPremium} />
            </div>
          </div>

          {/* 4 Small Photos Grid (Right 6 cols) */}
          <div className="md:grid md:col-span-6 grid-cols-2 gap-[8px] h-[400px]">
            <div
              onClick={onOpenGallery}
              className="cursor-pointer relative group overflow-hidden rounded-[16px] h-full"
            >
              <img
                src={property.images[1] || property.images[0] || '/assets/bg.png'}
                alt="Bedroom view"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            <div
              onClick={onOpenGallery}
              className="cursor-pointer relative group overflow-hidden rounded-[16px] h-full"
            >
              <img
                src={property.images[2] || property.images[0] || '/assets/bg.png'}
                alt="Mountain terrace twilight"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            <div
              onClick={onOpenGallery}
              className="cursor-pointer relative group overflow-hidden rounded-[16px] h-full"
            >
              <img
                src={property.images[3] || property.images[0] || '/assets/bg.png'}
                alt="Living room area"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            <div
              onClick={onOpenGallery}
              className="cursor-pointer relative group overflow-hidden rounded-[16px] h-full"
            >
              <img
                src={property.images[4] || property.images[0] || '/assets/bg.png'}
                alt="Bathroom/Balcony"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 flex items-center justify-center transition">
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                  {galleryCount > 5 ? `See more ${galleryCount - 5}+` : 'See more'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Subnav Tabs */}
        <div className="flex border-b border-[#E7E0CE] mb-8 space-x-6 sm:space-x-10">
          {(['overview', 'amenities', 'rooms', 'policies'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                const element = document.getElementById(`property-${tab}-section`);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`pb-3.5 capitalize transition relative font-sans text-[16px] font-medium leading-[100%] tracking-[0.02em] cursor-pointer ${activeTab === tab
                ? 'text-[#007C4D] border-b-2 border-[#007C4D]'
                : 'text-stone-500 hover:text-stone-900'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Two-Column Layout: Main Content (Left) + Sticky Widget Sidebar (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Overview Section */}
            <div id="property-overview-section" className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="font-sans text-[24px] font-normal leading-[100%] tracking-[0.02em] text-[#000000]">
                    {property.location}, {property.state}
                  </h2>
                  <p className="font-sans text-[16px] font-normal leading-[100%] tracking-[0.02em] text-[#4E4E4E] mt-2">
                    {property.guests} guests · {property.bedrooms} bedrooms · {property.beds} beds · {property.bathrooms} bathrooms
                  </p>
                </div>

                <CategoryBadge category={property.category} isPremium={property.isPremium} />
              </div>

              {/* Rating Badge */}
              <div className="flex items-center space-x-2 text-xs">
                <span className="bg-[#00704A] text-white font-bold text-xs px-2 py-0.5 rounded-md">
                  {property.rating.toFixed(1)}
                </span>
                <span className="font-bold text-stone-900">{property.ratingLabel}</span>
                <span className="text-stone-500">({property.reviewsCount} reviews)</span>
              </div>

              <div className="pt-2 space-y-2 max-w-[680px]">
                <h3 className="font-sans text-[20px] font-medium leading-[100%] tracking-[0.02em] text-[#000000]">
                  Timeless elegance in {property.state}
                </h3>
                <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0.02em] text-[#4E4E4E]">
                  {property.description}
                </p>
              </div>
            </div>

            {/* Highlights for your stay (4 highlights with circular icons) */}
            <div className="border-t border-[#E7E0CE] pt-8 space-y-5">
              <h3 className="font-sans text-[20px] font-medium leading-[100%] tracking-[0.02em] text-[#000000]">
                Highlights for your 2-night trip
              </h3>

              <div className="space-y-4">
                {property.highlights.map((highlight, idx) => (
                  <div key={`${highlight.title}-${idx}`} className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#D2F1E4] flex items-center justify-center shrink-0 text-[#00704A] mt-0.5">
                      {getHighlightIcon(highlight.icon)}
                    </div>
                    <div>
                      <h4 className="font-sans text-[16px] font-medium leading-[24px] tracking-[0.02em] text-[#232323]">
                        {highlight.title}
                      </h4>
                      <p className="font-sans text-[16px] font-normal leading-[100%] tracking-[0.02em] text-[#4E4E4E] mt-1">
                        {highlight.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Amenities */}
            <div id="property-amenities-section" className="border-t border-[#E7E0CE] pt-8 space-y-4">
              <h3 className="font-sans text-[22px] font-medium leading-[100%] tracking-[0.02em] text-[#000000]">
                Popular Amenities
              </h3>

              {/* Accordion Items Container */}
              <div className="divide-y divide-[#E7E0CE] border-t border-b border-[#E7E0CE]">
                {/* Facilities Accordion */}
                <div>
                  <button
                    onClick={() => toggleAmenity('facilities')}
                    className={`w-full py-4 px-2 text-left flex items-center justify-between transition ${expandedAmenities.facilities ? 'border-b-2 border-[#007C4D]' : ''
                      }`}
                  >
                    <span className="font-sans text-[16px] font-medium leading-[24px] tracking-[0.02em] text-[#000000]">
                      Facilities
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F4F4F4] flex items-center justify-center text-stone-700 shrink-0">
                      {expandedAmenities.facilities ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {expandedAmenities.facilities && (
                    <div className="pt-4 pb-3 px-2 grid grid-cols-2 gap-y-3 gap-x-8 bg-white">
                      {property.amenities.facilities.map((facility, idx) => {
                        return (
                          <div key={`${facility}-${idx}`} className="flex items-center space-x-2.5">
                            <span className="text-[20px] leading-none shrink-0 select-none">
                              {getFacilityEmoji(facility)}
                            </span>
                            <span className="font-sans text-[16px] font-normal leading-[100%] tracking-[0.02em] text-[#25222F]">
                              {facility}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Food and Drinks */}
                <div>
                  <button
                    onClick={() => toggleAmenity('food')}
                    className={`w-full py-4 px-2 text-left flex items-center justify-between transition ${expandedAmenities.food ? 'border-b-2 border-[#007C4D]' : ''
                      }`}
                  >
                    <span className="font-sans text-[16px] font-medium leading-[24px] tracking-[0.02em] text-[#000000]">
                      Food and Drinks
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F4F4F4] flex items-center justify-center text-stone-700 shrink-0">
                      {expandedAmenities.food ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  {expandedAmenities.food && (
                    <div className="pt-4 pb-3 px-2 space-y-2 bg-white">
                      {property.amenities.foodAndDrinks.map((f, i) => (
                        <p key={i} className="font-sans text-[16px] font-normal leading-[100%] tracking-[0.02em] text-[#25222F]">
                          • {f}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* General */}
                <div>
                  <button
                    onClick={() => toggleAmenity('general')}
                    className={`w-full py-4 px-2 text-left flex items-center justify-between transition ${expandedAmenities.general ? 'border-b-2 border-[#007C4D]' : ''
                      }`}
                  >
                    <span className="font-sans text-[16px] font-medium leading-[24px] tracking-[0.02em] text-[#000000]">
                      General
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F4F4F4] flex items-center justify-center text-stone-700 shrink-0">
                      {expandedAmenities.general ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  {expandedAmenities.general && (
                    <div className="pt-4 pb-3 px-2 space-y-2 bg-white">
                      {property.amenities.general.map((f, i) => (
                        <p key={i} className="font-sans text-[16px] font-normal leading-[100%] tracking-[0.02em] text-[#25222F]">
                          • {f}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Social */}
                <div>
                  <button
                    onClick={() => toggleAmenity('social')}
                    className={`w-full py-4 px-2 text-left flex items-center justify-between transition ${expandedAmenities.social ? 'border-b-2 border-[#007C4D]' : ''
                      }`}
                  >
                    <span className="font-sans text-[16px] font-medium leading-[24px] tracking-[0.02em] text-[#000000]">
                      Social
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F4F4F4] flex items-center justify-center text-stone-700 shrink-0">
                      {expandedAmenities.social ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  {expandedAmenities.social && (
                    <div className="pt-4 pb-3 px-2 space-y-2 bg-white">
                      {property.amenities.social.map((f, i) => (
                        <p key={i} className="font-sans text-[16px] font-normal leading-[100%] tracking-[0.02em] text-[#25222F]">
                          • {f}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Not Included */}
                <div>
                  <button
                    onClick={() => toggleAmenity('notIncluded')}
                    className={`w-full py-4 px-2 text-left flex items-center justify-between transition ${expandedAmenities.notIncluded ? 'border-b-2 border-[#007C4D]' : ''
                      }`}
                  >
                    <span className="font-sans text-[16px] font-medium leading-[24px] tracking-[0.02em] text-[#000000]">
                      Not Included
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F4F4F4] flex items-center justify-center text-stone-700 shrink-0">
                      {expandedAmenities.notIncluded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  {expandedAmenities.notIncluded && (
                    <div className="pt-4 pb-3 px-2 space-y-2 bg-white">
                      {property.amenities.notIncluded.map((f, i) => (
                        <p key={i} className="font-sans text-[16px] font-normal leading-[100%] tracking-[0.02em] text-[#25222F]/60 line-through">
                          • {f}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Pink Note Callout Box */}
              <div className="bg-[#FFDFE9] rounded-[16px] py-[24px] px-[16px] flex items-center justify-between gap-[12px] w-full">
                <div className="flex items-center gap-[12px]">
                  <span className="bg-[#FFBFD8] p-2 rounded-full text-[20px] leading-none shrink-0 select-none">🐶</span>
                  <p className="font-sans text-[12px] font-normal leading-[16px] tracking-[0.02em] text-[#885767] max-w-[466px]">
                    <span className="font-medium">Note :</span> You are liable for pet disturbances and any resulting fees; a second incident will require leashing, restricting, or removing your pet.
                  </p>
                </div>
                <button
                  onClick={() => alert('Pet Policy: Well-behaved pets allowed. Owners must leash pets in common areas.')}
                  className="font-sans text-[14px] font-medium leading-[100%] tracking-normal text-[#885767] underline hover:text-[#5f3946] shrink-0"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Rooms Section */}
            <div id="property-rooms-section" className="border-t border-[#E7E0CE] pt-8 space-y-6">
              <h3 className="font-sans text-[22px] font-medium leading-[100%] tracking-[0.02em] text-[#000000]">Rooms & Spaces</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-x-4 sm:gap-y-6 max-w-[680px]">
                {(property.rooms && property.rooms.length > 0
                  ? property.rooms
                  : [
                    { name: 'Bedroom 1', image: property.images?.[0] || '/cover/bhimsarowar.JPG', details: '' },
                    { name: 'Bedroom 2', image: property.images?.[1] || property.images?.[0], details: '' },
                  ]
                ).map((room, idx) => (
                  <div
                    key={`${room.name}-${idx}`}
                    onClick={onOpenGallery}
                    className="cursor-pointer group flex flex-col w-full sm:w-[216px] max-w-full"
                  >
                    <div className="w-full aspect-square sm:aspect-auto sm:w-[216px] sm:h-[160px] max-w-full rounded-[20px] sm:rounded-[24px] overflow-hidden bg-stone-100 mb-2 shrink-0">
                      <img
                        src={room.image || property.images?.[0]}
                        alt={room.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-sans text-[14px] sm:text-[16px] font-medium leading-[20px] sm:leading-[24px] tracking-[0.02em] text-[#232323] w-full sm:w-[216px] max-w-full">
                        {room.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div id="property-reviews-section" className="border-t border-[#E7E0CE] pt-8 space-y-8">
              {/* Header: title + overall score */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="font-sans text-[22px] font-medium leading-[100%] tracking-[0.02em] text-[#000000]">
                  Reviews
                </h3>
                <div className="flex items-center gap-3">
                  <span className="bg-[#00704A] text-white font-bold text-sm px-3 py-1 rounded-lg">
                    {reviews.length > 0
                      ? (reviews.reduce((acc, r) => acc + (r.rating || 5), 0) / reviews.length).toFixed(1)
                      : property.rating.toFixed(1)}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-sans text-[14px] font-semibold text-[#232323] leading-none">
                      {reviews.length > 0 ? (reviews.reduce((acc, r) => acc + (r.rating || 5), 0) / reviews.length >= 4.5 ? 'Exceptional' : 'Wonderful') : property.ratingLabel}
                    </span>
                    <span className="font-sans text-[12px] text-[#7D7C7E] mt-0.5">
                      {reviews.length > 0 ? `${reviews.length} reviews` : `${property.reviewsCount} reviews`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rating Breakdown Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 max-w-[560px]">
                {[
                  { label: 'Cleanliness', score: reviews.length ? (reviews.reduce((a, r) => a + (r.categories?.cleanliness || r.rating || 4.9), 0) / reviews.length).toFixed(1) : 4.9 },
                  { label: 'Accuracy', score: reviews.length ? (reviews.reduce((a, r) => a + (r.categories?.accuracy || r.rating || 4.8), 0) / reviews.length).toFixed(1) : 4.8 },
                  { label: 'Communication', score: reviews.length ? (reviews.reduce((a, r) => a + (r.categories?.communication || r.rating || 5.0), 0) / reviews.length).toFixed(1) : 5.0 },
                  { label: 'Location', score: reviews.length ? (reviews.reduce((a, r) => a + (r.categories?.location || r.rating || 4.9), 0) / reviews.length).toFixed(1) : 4.9 },
                  { label: 'Check-in', score: reviews.length ? (reviews.reduce((a, r) => a + (r.categories?.checkIn || r.rating || 4.7), 0) / reviews.length).toFixed(1) : 4.7 },
                  { label: 'Value', score: reviews.length ? (reviews.reduce((a, r) => a + (r.categories?.value || r.rating || 4.8), 0) / reviews.length).toFixed(1) : 4.8 },
                ].map(({ label, score }) => (
                  <div key={label} className="flex flex-col gap-1.5">
                    <span className="font-sans text-[13px] text-[#4E4E4E] font-medium">{label}</span>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-[#E7E0CE] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#00704A] rounded-full"
                          style={{ width: `${(Number(score) / 5) * 100}%` }}
                        />
                      </div>
                      <span className="font-sans text-[12px] text-[#232323] font-semibold shrink-0">{score}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reviews List or Empty State */}
              {reviews.length === 0 ? (
                /* Empty State — No Reviews Yet */
                <div className="flex flex-col items-center justify-center py-12 px-6 bg-[#F9F8F4] rounded-[24px] border border-[#E7E0CE] text-center max-w-[560px]">
                  <div className="flex items-center justify-center gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-7 h-7 ${star <= 4 ? 'text-[#00704A]' : 'text-[#D2F1E4]'}`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <h4 className="font-serif text-[24px] font-medium text-[#232323] leading-[110%] mb-3">
                    No Reviews Yet
                  </h4>

                  <p className="font-sans text-[15px] text-[#7D7C7E] leading-[22px] max-w-[340px]">
                    Be among the first to experience{' '}
                    <span className="text-[#232323] font-medium">{property.name}</span> and share your
                    story. Every great journey starts with a single step.
                  </p>

                  <div className="flex items-center gap-3 mt-6">
                    <div className="h-px w-14 bg-[#D2F1E4]" />
                    <span className="text-[#00704A] text-[18px] select-none">✦</span>
                    <div className="h-px w-14 bg-[#D2F1E4]" />
                  </div>
                </div>
              ) : (
                /* Reviews List — Clean Normal Layout */
                <div className="space-y-6 max-w-[900px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {(showAllReviews ? reviews : reviews.slice(0, 4)).map((rev) => (
                      <div key={rev.id} className="space-y-3 border-b border-[#F0EBE1] pb-6 last:border-b-0 md:border-b-0 md:pb-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {rev.authorAvatar ? (
                              <img
                                src={rev.authorAvatar}
                                alt={rev.authorName}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-[#00704A] text-white flex items-center justify-center font-bold text-sm select-none">
                                {rev.authorName ? rev.authorName.charAt(0).toUpperCase() : 'G'}
                              </div>
                            )}
                            <div>
                              <h5 className="font-sans font-semibold text-[15px] text-[#232323]">
                                {rev.authorName}
                              </h5>
                              <span className="text-[13px] text-[#7D7C7E]">{rev.date || 'Recent Guest'}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 bg-[#EAF6F0] text-[#00704A] px-2.5 py-1 rounded-full text-xs font-bold">
                            <Star className="w-3.5 h-3.5 fill-[#00704A]" />
                            <span>{Number(rev.rating).toFixed(1)}</span>
                          </div>
                        </div>
                        <p className="font-sans text-[15px] leading-[24px] text-[#232323]">
                          {rev.comment}
                        </p>
                      </div>
                    ))}
                  </div>

                  {reviews.length > 4 && (
                    <div className="pt-4">
                      <button
                        onClick={() => setShowAllReviews(!showAllReviews)}
                        className="px-6 py-2.5 rounded-full border border-[#232323] text-[#232323] font-sans font-medium text-[14px] hover:bg-[#232323] hover:text-white transition cursor-pointer"
                      >
                        {showAllReviews ? 'Show Less' : `Show all ${reviews.length} reviews`}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>


            {/* Policies Section */}
            <div id="property-policies-section" className="border-t border-[#E7E0CE] pt-8 space-y-[32px] w-[680px] max-w-full">
              <h3 className="font-sans text-[22px] font-medium leading-[100%] tracking-[0.02em] text-[#000000]">Policies</h3>

              {/* House Rules */}
              <div className="border-b border-[#CECECE]">
                <div
                  className={`py-[24px] flex items-center justify-between gap-[16px] w-full cursor-pointer transition ${expandedPolicies.rules ? 'border-b-2 border-[#007C4D]' : ''
                    }`}
                  onClick={() => togglePolicy('rules')}
                >
                  <div className="flex items-center gap-[16px]">
                    <div className="w-12 h-12 rounded-full bg-[#D2F1E4] flex items-center justify-center shrink-0 text-[22px] select-none">
                      🔑
                    </div>
                    <div>
                      <h4 className="font-sans text-[16px] font-medium leading-[24px] tracking-[0.02em] text-[#232323] mb-1">
                        House Rules
                      </h4>
                      <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0.02em] text-[#4E4E4E]">
                        Check-in: 1:00 pm, Checkout before 10:00 am<br />
                        12 guests maximum
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePolicy('rules');
                    }}
                    className="w-8 h-8 rounded-full bg-[#F4F4F4] flex items-center justify-center text-stone-700 shrink-0 cursor-pointer"
                    aria-label="Toggle House Rules"
                  >
                    {expandedPolicies.rules ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {expandedPolicies.rules && (
                  <div className="pt-[24px] pb-[24px] space-y-1.5 font-sans text-[14px] text-stone-600 font-normal">
                    {(property.houseRulesList?.length
                      ? property.houseRulesList
                      : ['Check-in: 1:00 pm, Checkout before 10:00 am', '12 guests maximum', 'Quiet hours after 10:00 pm', 'Respect local community & property guidelines']
                    ).map((rule, idx) => (

                      <p key={`rule-${idx}`}>• {rule}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* Cancellation Policy */}
              <div className="border-b border-[#CECECE]">
                <div
                  className={`py-[24px] flex items-center justify-between gap-[16px] w-full cursor-pointer transition ${expandedPolicies.cancellation ? 'border-b-2 border-[#007C4D]' : ''
                    }`}
                  onClick={() => togglePolicy('cancellation')}
                >
                  <div className="flex items-center gap-[16px]">
                    <div className="w-12 h-12 rounded-full bg-[#D2F1E4] flex items-center justify-center shrink-0 text-[18px] font-bold text-[#00704A] select-none">
                      ❎
                    </div>
                    <div>
                      <h4 className="font-sans text-[16px] font-medium leading-[24px] tracking-[0.02em] text-[#232323] mb-1">
                        Cancellation policy
                      </h4>
                      <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0.02em] text-[#4E4E4E]">
                        Free cancellation before 1 August. After that, the reservation is non-refundable. Review this host's full policy for details.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePolicy('cancellation');
                    }}
                    className="w-8 h-8 rounded-full bg-[#F4F4F4] flex items-center justify-center text-stone-700 shrink-0 cursor-pointer"
                    aria-label="Toggle Cancellation policy"
                  >
                    {expandedPolicies.cancellation ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {expandedPolicies.cancellation && (
                  <div className="pt-[24px] pb-[24px] space-y-[16px] font-sans text-[14px] font-normal leading-normal tracking-[0.02em] text-[#7D7C7E] max-w-[616px]">
                    <p className="text-[#7D7C7E]">• Cancellation policy : Strict</p>
                    <p>
                      • In case a Guest has booked online on the website without any assistance from the Call Center, he/ she is entitled to a 12 hours FREE Cancellation policy from time of booking. Refunds into your bank accounts usually take 5-7 working days. This does not apply to a booking where Check-in date is 7 days from the date of confirmation of booking.
                    </p>
                    <p>
                      • After this 12 hour window passes, bookings for Homes that have the Strict Cancellation Policy cannot be cancelled, rescheduled, and are non-refundable.
                    </p>
                    <p>
                      • If the Guest has made a partial payment, he/ she is not entitled to any refund whatsoever.
                    </p>
                    <p>
                      • Cancellation for peak dates, including Independence Day (14th–15th August 2026), Diwali (6th–10th November 2026), Christmas & New Year (24th December 2026–2nd January 2027), Republic Day (26th January 2027), and Holi (20th–22nd March 2027), will not be accepted.
                    </p>
                    <p>
                      • If a guest uses the “NOCANCEL” coupon while booking, all cancellation policies are overridden. The guest is not entitled to any refund and will have to pay a 100% rescheduling fee in the event of the same.
                    </p>
                  </div>
                )}
              </div>

              {/* Safety & Property */}
              <div className="border-b border-[#CECECE]">
                <div
                  className={`py-[24px] flex items-center justify-between gap-[16px] w-full cursor-pointer transition ${expandedPolicies.safety ? 'border-b-2 border-[#007C4D]' : ''
                    }`}
                  onClick={() => togglePolicy('safety')}
                >
                  <div className="flex items-center gap-[16px]">
                    <div className="w-12 h-12 rounded-full bg-[#D2F1E4] flex items-center justify-center shrink-0 text-[22px] select-none">
                      🛡️
                    </div>
                    <div>
                      <h4 className="font-sans text-[16px] font-medium leading-[24px] tracking-[0.02em] text-[#232323] mb-1">
                        Safety & property
                      </h4>
                      <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0.02em] text-[#4E4E4E]">
                        Free cancellation before 1 August. After that, the reservation is non-refundable. Review this host's full policy for details.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePolicy('safety');
                    }}
                    className="w-8 h-8 rounded-full bg-[#F4F4F4] flex items-center justify-center text-stone-700 shrink-0 cursor-pointer"
                    aria-label="Toggle Safety & property policy"
                  >
                    {expandedPolicies.safety ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {expandedPolicies.safety && property.safetyAndProperty && property.safetyAndProperty.length > 0 && (
                  <div className="pt-[24px] pb-[24px] space-y-[16px] font-sans text-[14px] font-normal leading-normal tracking-[0.02em] text-[#7D7C7E] max-w-[616px]">
                    {property.safetyAndProperty.map((item, idx) => (
                      <p key={`safety-${idx}`}>• {item}</p>
                    ))}
                  </div>
                )}


              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Widget + Explore the Area (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sticky top-24">
            {/* Booking Card Widget */}
            <div className="hidden md:flex flex-col w-full md:w-[448px] max-w-[448px] h-[346px] bg-white rounded-[24px] p-[16px] gap-[32px] shadow-[0px_2px_12px_rgba(0,0,0,0.15)] justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-sans text-[16px] font-normal leading-[100%] tracking-[0.02em] text-[#4E4E4E]">
                  Starting from
                </span>
                <div className="flex items-baseline space-x-2">
                  <span className="font-sans text-[32px] font-medium leading-[100%] tracking-normal text-stone-900">
                    ₹{property.pricePerNight.toLocaleString()}
                  </span>
                  <span className="font-sans text-[16px] font-normal leading-[100%] tracking-normal text-stone-900 ml-1.5">
                    / nights
                  </span>
                </div>
              </div>

              {/* Inputs Box */}
              <div className="border border-stone-300 rounded-[16px] overflow-hidden">
                <div className="grid grid-cols-2 border-b border-stone-300">
                  <div className="p-3 border-r border-stone-300">
                    <label className="block font-sans text-[12px] font-normal leading-[100%] tracking-normal text-[#000000] mb-1">
                      Check in
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full font-sans text-[16px] font-normal leading-[100%] tracking-normal text-[#7D7C7E] focus:text-stone-900 focus:outline-none bg-transparent"
                    />
                  </div>
                  <div className="p-3">
                    <label className="block font-sans text-[12px] font-normal leading-[100%] tracking-normal text-[#000000] mb-1">
                      Check out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full font-sans text-[16px] font-normal leading-[100%] tracking-normal text-[#7D7C7E] focus:text-stone-900 focus:outline-none bg-transparent"
                    />
                  </div>
                </div>

                <div className="p-3">
                  <label className="block font-sans text-[12px] font-normal leading-[100%] tracking-normal text-[#000000] mb-1">
                    Guests
                  </label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(e.target.value)}
                    className="w-full font-sans text-[16px] font-normal leading-[100%] tracking-normal text-[#7D7C7E] focus:text-stone-900 focus:outline-none bg-transparent cursor-pointer"
                  >
                    <option value="1 guest">1 guest</option>
                    <option value="2 guests">2 guests</option>
                    <option value="4 guests">4 guests</option>
                    <option value="8 guests">8 guests</option>
                    <option value="12 guests">12 guests (Whole estate)</option>
                  </select>
                </div>
              </div>

              <button
                onClick={onOpenContact}
                id="property-book-a-call-btn"
                className="w-full py-3.5 rounded-full bg-[#00704A] hover:bg-[#00583A] text-white font-sans text-[16px] font-medium leading-[100%] transition active:scale-95 cursor-pointer"
              >
                Book a call
              </button>
            </div>

            {/* Explore the Area Widget */}
            <div className="bg-white rounded-[28px] p-6 border border-stone-200/80 shadow-md space-y-4">
              <h4 className="font-sans text-[24px] font-normal leading-[100%] tracking-[0.02em] text-[#000000] w-full max-w-[416px]">
                Explore the area
              </h4>

              {/* Embedded Real Google Map Container */}
              <div
                onClick={() => {
                  const targetUrl = property.googleMapsUrl || `https://maps.google.com/?q=${property.coordinates?.lat || 29.35},${property.coordinates?.lng || 79.55}`;
                  window.open(targetUrl, '_blank');
                }}
                className="relative h-44 rounded-2xl overflow-hidden border border-stone-200/80 cursor-pointer group shadow-xs hover:shadow-md transition"
                title="Click to open in Google Maps"
              >
                <iframe
                  title={`Google Map for ${property.name}`}
                  src={`https://maps.google.com/maps?q=${property.coordinates?.lat || 29.35},${property.coordinates?.lng || 79.55}&z=14&output=embed`}
                  className="w-full h-full border-0 pointer-events-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full shadow-xs text-[11px] font-bold text-[#00704A] flex items-center space-x-1.5 z-10 pointer-events-none">
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  <span>{property.location}, {property.state}</span>
                  <span className="text-[10px] text-stone-400 font-normal pl-1">· Click to open map</span>
                </div>
              </div>

              {/* Nearby Landmarks list */}
              <div className="space-y-[14px] my-[24px]">
                {property.nearbyAttractions && property.nearbyAttractions.length > 0 ? (
                  property.nearbyAttractions.map((attraction, i) => {
                    const lower = attraction.name.toLowerCase();
                    const isTransport = lower.includes('station') || lower.includes('airport') || lower.includes('railway');

                    return (
                      <div key={i} className={`flex items-center justify-between ${isTransport ? 'pl-3' : ''}`}>
                        <div className="flex items-center gap-[12px]">
                          {isTransport ? (
                            <span className="text-[18px] font-bold text-[#232323] leading-none shrink-0 select-none">•</span>
                          ) : (
                            <span className="text-[16px] leading-[24px] shrink-0 select-none">📍</span>
                          )}
                          <span className="font-sans text-[16px] font-normal leading-[24px] tracking-[0.02em] text-[#232323]">
                            {attraction.name}
                          </span>
                        </div>
                        <span className="font-sans text-[16px] font-normal leading-[24px] tracking-[0.02em] text-[#7D7C7E] shrink-0 ml-2">
                          {attraction.driveTime}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-sm text-stone-500">No nearby location details available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Pricing & Booking Bar right above Footer (Not Sticky) */}
      <div className="md:hidden w-full bg-white border-t border-b border-stone-200/80 px-5 py-6 mt-10 mb-0 flex flex-col space-y-3">
        <div className="flex items-center justify-between font-sans">
          <span className="text-xs text-stone-500 font-normal">Starting from</span>
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-bold text-stone-900">
              ₹{property.pricePerNight.toLocaleString()}
            </span>
            <span className="text-xs text-stone-500 font-normal">/ nights</span>
          </div>
        </div>
        <button
          onClick={onOpenContact}
          id="mobile-check-availability-btn"
          className="w-full py-3.5 rounded-full bg-[#004030] hover:bg-[#002f23] text-white text-sm font-semibold transition active:scale-98 shadow-sm flex items-center justify-center cursor-pointer"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
};
