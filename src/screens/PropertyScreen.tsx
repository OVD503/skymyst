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
} from 'lucide-react';
import { Property, ScreenPage } from '../types';
import { SkymystLogo } from '../components/SkymystLogo';

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

  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'rooms' | 'policies'>('overview');
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

        {/* Bottom Right: Photo Counter Badge e.g. "1 / 54" */}
        <div
          onClick={onOpenGallery}
          className="absolute bottom-4 right-4 z-20 bg-[#1E2045]/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-xl shadow-lg cursor-pointer flex items-center space-x-1 border border-white/10"
        >
          <span>1 / {galleryCount > 0 ? galleryCount : 54}</span>
        </div>
      </div>

      <div className="max-w-[1145px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Desktop View Back Button & Title */}
        <div className="hidden md:block">
          <div className="mb-4">
            <button
              onClick={() => {
                if (onNavigate) {
                  onNavigate('home');
                } else {
                  window.history.back();
                }
              }}
              className="inline-flex items-center space-x-2 text-stone-600 hover:text-[#005B41] font-medium text-xs sm:text-sm transition group cursor-pointer"
              aria-label="Back to stays"
            >
              <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#005B41] group-hover:text-white flex items-center justify-center transition shadow-xs">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span>Back</span>
            </button>
          </div>

          {/* Title */}
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

                {property.isPremium && (
                  <div className="flex items-center space-x-2">
                    <span className="bg-[#EAB308] text-stone-950 text-xs font-bold px-3 py-1 rounded-md flex items-center space-x-1">
                      ★ Premium
                    </span>
                  </div>
                )}
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
            <div id="property-amenities-section" className="border-t border-[#E7E0CE] pt-8 space-y-6">
              <h3 className="font-sans text-[22px] font-medium leading-[100%] tracking-[0.02em] text-[#000000]">
                Popular Amenities
              </h3>

              {/* Facilities Accordion */}
              <div className="border-b border-[#E7E0CE]">
                <button
                  onClick={() => toggleAmenity('facilities')}
                  className={`w-full py-6 px-2 text-left flex items-center justify-between transition ${expandedAmenities.facilities ? 'border-b-2 border-[#007C4D]' : ''
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
                  <div className="pt-6 pb-4 px-2 grid grid-cols-2 gap-y-4 gap-x-8 bg-white">
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
              <div className="border-b border-[#E7E0CE]">
                <button
                  onClick={() => toggleAmenity('food')}
                  className={`w-full py-6 px-2 text-left flex items-center justify-between transition ${expandedAmenities.food ? 'border-b-2 border-[#007C4D]' : ''
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
                  <div className="pt-6 pb-4 px-2 space-y-3 bg-white">
                    {property.amenities.foodAndDrinks.map((f, i) => (
                      <p key={i} className="font-sans text-[16px] font-normal leading-[100%] tracking-[0.02em] text-[#25222F]">
                        • {f}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* General */}
              <div className="border-b border-[#E7E0CE]">
                <button
                  onClick={() => toggleAmenity('general')}
                  className={`w-full py-6 px-2 text-left flex items-center justify-between transition ${expandedAmenities.general ? 'border-b-2 border-[#007C4D]' : ''
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
                  <div className="pt-6 pb-4 px-2 space-y-3 bg-white">
                    {property.amenities.general.map((f, i) => (
                      <p key={i} className="font-sans text-[16px] font-normal leading-[100%] tracking-[0.02em] text-[#25222F]">
                        • {f}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Social */}
              <div className="border-b border-[#E7E0CE]">
                <button
                  onClick={() => toggleAmenity('social')}
                  className={`w-full py-6 px-2 text-left flex items-center justify-between transition ${expandedAmenities.social ? 'border-b-2 border-[#007C4D]' : ''
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
                  <div className="pt-6 pb-4 px-2 space-y-3 bg-white">
                    {property.amenities.social.map((f, i) => (
                      <p key={i} className="font-sans text-[16px] font-normal leading-[100%] tracking-[0.02em] text-[#25222F]">
                        • {f}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Not Included */}
              <div className="border-b border-[#E7E0CE]">
                <button
                  onClick={() => toggleAmenity('notIncluded')}
                  className={`w-full py-6 px-2 text-left flex items-center justify-between transition ${expandedAmenities.notIncluded ? 'border-b-2 border-[#007C4D]' : ''
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
                  <div className="pt-6 pb-4 px-2 space-y-3 bg-white">
                    {property.amenities.notIncluded.map((f, i) => (
                      <p key={i} className="font-sans text-[16px] font-normal leading-[100%] tracking-[0.02em] text-[#25222F]/60 line-through">
                        • {f}
                      </p>
                    ))}
                  </div>
                )}
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
              <h3 className="font-sans text-[22px] font-medium leading-[100%] tracking-[0.02em] text-[#000000]">Rooms</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-6 max-w-[680px]">
                {[
                  {
                    name: property.rooms?.[0]?.name || 'Bedroom 1',
                    image: property.rooms?.[0]?.image || property.images?.[0] || '/cover/bhimsarowar.JPG',
                  },
                  {
                    name: property.rooms?.[1]?.name || 'Bedroom 2',
                    image: property.rooms?.[1]?.image || property.images?.[1] || property.images?.[0],
                  },
                  {
                    name: 'Living Area',
                    image: property.images?.[2] || property.images?.[0],
                  },
                  {
                    name: 'Rooftop',
                    image: property.images?.[3] || property.images?.[0],
                  },
                ].map((room, idx) => (
                  <div
                    key={`${room.name}-${idx}`}
                    onClick={onOpenGallery}
                    className="cursor-pointer group flex flex-col w-[216px] max-w-full"
                  >
                    <div className="w-[216px] h-[160px] max-w-full rounded-[24px] overflow-hidden bg-stone-100 mb-2 shrink-0">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-sans text-[16px] font-medium leading-[24px] tracking-[0.02em] text-[#232323] w-[216px] max-w-full">
                        {room.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
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
                        Check-in: 1:00 pm – 9:00 pm, Checkout before 10:00 am<br />
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
                      : ['Check-in: 1:00 pm - 9:00 pm, Checkout before 10:00 am', '12 guests maximum', 'Quiet hours after 10:00 pm', 'Respect local community & property guidelines']
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

                {expandedPolicies.safety && (
                  <div className="pt-[24px] pb-[24px] space-y-[16px] font-sans text-[14px] font-normal leading-normal tracking-[0.02em] text-[#7D7C7E] max-w-[616px]">
                    <p>• Carbon monoxide alarm installed on premises.</p>
                    <p>• Smoke alarm installed in main hallway and kitchen area.</p>
                    <p>• First aid kit and emergency contact information available on site.</p>
                    <p>• Security camera present near main entrance gate (exterior only).</p>
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

            {/* Explore the Area Widget (Hidden on mobile, visible on desktop) */}
            <div className="hidden md:block bg-white rounded-[28px] p-6 border border-stone-200/80 shadow-md space-y-4">
              <h4 className="font-sans text-[24px] font-normal leading-[100%] tracking-[0.02em] text-[#000000] w-full max-w-[416px]">
                Explore the area
              </h4>

              {/* Map Preview Image */}
              <div className="relative h-36 rounded-2xl overflow-hidden border border-stone-200/80">
                <img
                  src="/assets/sky.png"
                  alt="Map location preview"
                  className="w-full h-full object-cover brightness-95"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 px-3 py-1 rounded-full shadow-xs text-[11px] font-bold text-[#00704A] flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  <span>{property.location}, {property.state}</span>
                </div>
              </div>

              {/* Nearby Landmarks list */}
              <div className="space-y-[16px] my-[24px]">
                {(property.nearbyAttractions && property.nearbyAttractions.length > 0
                  ? property.nearbyAttractions.slice(0, 3)
                  : [
                      { name: 'Bhimtaal School', driveTime: '12 min' },
                      { name: 'Almora Lane', driveTime: '4 min' },
                      { name: 'Garam Pani', driveTime: '25 min' },
                    ]
                ).map((attraction, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-[12px]">
                      <span className="text-[16px] leading-[24px] shrink-0 select-none">📍</span>
                      <span className="font-sans text-[16px] font-normal leading-[24px] tracking-[0.02em] text-[#232323]">
                        {attraction.name}
                      </span>
                    </div>
                    <span className="font-sans text-[16px] font-normal leading-[24px] tracking-[0.02em] text-[#7D7C7E]">
                      {attraction.driveTime}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowAreaDetails(!showAreaDetails)}
                className="w-full max-w-[416px] h-[48px] rounded-[104px] border border-[#042E23] py-[16px] px-[32px] gap-[16px] font-sans text-[16px] font-medium leading-[100%] text-[#042E23] hover:bg-[#042E23]/5 transition cursor-pointer flex items-center justify-center"
              >
                Show all about this area
              </button>

              {showAreaDetails && (
                <div className="p-3 bg-stone-50 rounded-xl text-[11px] text-stone-600 space-y-1 border border-stone-200">
                  {property.nearbyAttractions?.map((attraction, i) => (
                    <p key={i}>• {attraction.name}: {attraction.driveTime}</p>
                  ))}
                </div>
              )}
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
