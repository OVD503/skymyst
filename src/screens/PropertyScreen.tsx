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
    rules: true,
    cancellation: true,
    safety: true,
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
    highlightIcons[icon as keyof typeof highlightIcons] || <Sun className="w-4 h-4" />;

  const amenityIcons = [Wifi, Tv, Dog, Briefcase, Flame, Gamepad2];
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

      <div className="max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6">
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
          <div className="mb-6">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2926] font-normal tracking-tight">
              {property.name}
            </h1>
          </div>
        </div>

        {/* Desktop 5-Photo Gallery Grid */}
        <div className="hidden md:grid md:grid-cols-12 gap-3 rounded-[28px] overflow-hidden mb-8 h-[240px] sm:h-[380px] md:h-[480px]">
          {/* Main Large Photo (Left 7 cols) */}
          <div
            onClick={onOpenGallery}
            className="md:col-span-7 h-full cursor-pointer relative group overflow-hidden"
          >
            <img
              src={property.images[0] || '/assets/bg.png'}
              alt={property.name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* 4 Small Photos Grid (Right 5 cols) */}
          <div className="md:grid md:col-span-5 grid-cols-2 gap-3 h-full">
            <div
              onClick={onOpenGallery}
              className="cursor-pointer relative group overflow-hidden rounded-2xl h-full"
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
              className="cursor-pointer relative group overflow-hidden rounded-2xl h-full"
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
              className="cursor-pointer relative group overflow-hidden rounded-2xl h-full"
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
              className="cursor-pointer relative group overflow-hidden rounded-2xl h-full"
            >
              <img
                src={property.images[4] || property.images[0] || '/assets/bg.png'}
                alt="Bathroom/Balcony"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 flex items-center justify-center transition">
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                  {galleryCount > 5 ? `+${galleryCount - 5} photos` : 'View photos'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Subnav Tabs */}
        <div className="flex border-b border-[#E7E0CE] mb-8 space-x-6 sm:space-x-10 text-xs sm:text-sm font-medium">
          {(['overview', 'amenities', 'rooms', 'policies'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                const element = document.getElementById(`property-${tab}-section`);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`pb-3.5 capitalize transition relative font-sans ${
                activeTab === tab
                  ? 'text-[#00704A] font-bold border-b-2 border-[#00704A]'
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
                  <h2 className="font-bold text-xl sm:text-2xl text-[#2C2926] font-sans">
                    {property.location}, {property.state}
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 font-sans font-light mt-1">
                    {property.guestCapacityText || `${property.guests} guests`} · {property.bedrooms} bedrooms · {property.beds} beds · {property.bathrooms} bathrooms
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

              <div className="pt-2">
                <h3 className="font-bold text-base sm:text-lg text-stone-900 font-sans mb-2">
                  Timeless elegance in {property.state}
                </h3>
                <p className="text-xs sm:text-sm text-[#4E4A43] leading-relaxed font-sans font-light">
                  {property.description}
                </p>
              </div>
            </div>

            {/* Highlights for your stay (4 highlights with circular icons) */}
            <div className="border-t border-[#E7E0CE] pt-8 space-y-5">
              <h3 className="font-bold text-base sm:text-lg text-stone-900 font-sans">
                {property.highlights.length} highlights for your stay
              </h3>

              <div className="space-y-4">
                {property.highlights.map((highlight, idx) => (
                  <div key={`${highlight.title}-${idx}`} className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0 text-[#00704A]">
                      {getHighlightIcon(highlight.icon)}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900 font-sans">
                        {highlight.title}
                      </h4>
                      <p className="text-xs text-stone-500 font-sans font-light mt-0.5">
                        {highlight.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Amenities */}
            <div id="property-amenities-section" className="border-t border-[#E7E0CE] pt-8 space-y-6">
              <h3 className="font-serif text-3xl sm:text-4xl text-[#2C2926] font-normal">Popular Amenities</h3>

              {/* Facilities Accordion */}
              <div className="border border-[#E7E0CE] rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleAmenity('facilities')}
                  className="w-full p-4 text-left flex items-center justify-between font-bold text-sm text-stone-900 bg-stone-50/40 hover:bg-stone-50 transition"
                >
                  <span>Facilities</span>
                  {expandedAmenities.facilities ? (
                    <ChevronUp className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  )}
                </button>

                {expandedAmenities.facilities && (
                  <div className="p-5 grid grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700 bg-white">
                    {property.amenities.facilities.map((facility, idx) => {
                      const AmenityIcon = amenityIcons[idx % amenityIcons.length];
                      return (
                        <div key={`${facility}-${idx}`} className="flex items-center space-x-2.5">
                          <AmenityIcon className="w-4 h-4 text-[#00704A]" />
                          <span>{facility}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Food and Drinks */}
              <div className="border border-[#E7E0CE] rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleAmenity('food')}
                  className="w-full p-4 text-left flex items-center justify-between font-bold text-sm text-stone-900 bg-stone-50/40 hover:bg-stone-50 transition"
                >
                  <span>Food and Drinks</span>
                  {expandedAmenities.food ? (
                    <ChevronUp className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  )}
                </button>
                {expandedAmenities.food && (
                  <div className="p-5 text-xs text-stone-600 space-y-2 bg-white">
                    {property.amenities.foodAndDrinks.map((f, i) => (
                      <p key={i}>• {f}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* General */}
              <div className="border border-[#E7E0CE] rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleAmenity('general')}
                  className="w-full p-4 text-left flex items-center justify-between font-bold text-sm text-stone-900 bg-stone-50/40 hover:bg-stone-50 transition"
                >
                  <span>General</span>
                  {expandedAmenities.general ? (
                    <ChevronUp className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  )}
                </button>
                {expandedAmenities.general && (
                  <div className="p-5 text-xs text-stone-600 space-y-2 bg-white">
                    {property.amenities.general.map((f, i) => (
                      <p key={i}>• {f}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* Social */}
              <div className="border border-[#E7E0CE] rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleAmenity('social')}
                  className="w-full p-4 text-left flex items-center justify-between font-bold text-sm text-stone-900 bg-stone-50/40 hover:bg-stone-50 transition"
                >
                  <span>Social</span>
                  {expandedAmenities.social ? (
                    <ChevronUp className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  )}
                </button>
                {expandedAmenities.social && (
                  <div className="p-5 text-xs text-stone-600 space-y-2 bg-white">
                    {property.amenities.social.map((f, i) => (
                      <p key={i}>• {f}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* Not Included */}
              <div className="border border-[#E7E0CE] rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleAmenity('notIncluded')}
                  className="w-full p-4 text-left flex items-center justify-between font-bold text-sm text-stone-900 bg-stone-50/40 hover:bg-stone-50 transition"
                >
                  <span>Not Included</span>
                  {expandedAmenities.notIncluded ? (
                    <ChevronUp className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  )}
                </button>
                {expandedAmenities.notIncluded && (
                  <div className="p-5 text-xs text-stone-600 space-y-2 bg-white">
                    {property.amenities.notIncluded.map((f, i) => (
                      <p key={i} className="text-stone-400 line-through">• {f}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* Pink Warning Callout Box */}
              <div className="bg-[#FDE8E8] border border-[#FCA5A5]/60 rounded-2xl p-4 flex items-center justify-between space-x-3">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">🐶</span>
                  <p className="text-xs text-red-900 leading-relaxed font-sans font-light">
                    <span className="font-bold">Note :</span> You are liable for pet disturbances and any resulting fees; a second incident will require leashing, restricting, or removing your pet.
                  </p>
                </div>
                <button
                  onClick={() => alert('Pet Policy: Well-behaved pets allowed. Owners must leash pets in common areas.')}
                  className="text-xs font-semibold text-red-800 underline hover:text-red-950 shrink-0"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Rooms Section */}
            <div id="property-rooms-section" className="border-t border-[#E7E0CE] pt-8 space-y-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2045]">Rooms</h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
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
                    className="cursor-pointer group flex flex-col"
                  >
                    <div className="aspect-square rounded-3xl sm:rounded-[28px] overflow-hidden bg-stone-100 border border-stone-200/60 shadow-xs mb-2">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-stone-800 font-sans px-1">{room.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies Section */}
            <div id="property-policies-section" className="border-t border-[#E7E0CE] pt-8 space-y-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2045]">Policies</h3>

              {/* House Rules */}
              <div className="bg-white rounded-2xl border border-stone-200/70 p-4 shadow-2xs space-y-3">
                <div
                  className="flex items-start justify-between space-x-3 cursor-pointer"
                  onClick={() => togglePolicy('rules')}
                >
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E2F7EB] flex items-center justify-center shrink-0 mt-0.5">
                      <KeyRound className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-800 font-sans">House Rules</h4>
                      <p className="text-xs text-stone-500 font-normal leading-relaxed mt-0.5">
                        Check-in: 1:00 pm – 9:00 pm, Checkout before 10:00 am
                      </p>
                      <p className="text-xs text-stone-500 font-normal leading-relaxed">
                        12 guests maximum
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePolicy('rules');
                    }}
                    className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 flex items-center justify-center transition shrink-0 mt-0.5 cursor-pointer"
                    aria-label="Toggle House Rules"
                  >
                    {expandedPolicies.rules ? (
                      <ChevronUp className="w-4 h-4 text-stone-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-600" />
                    )}
                  </button>
                </div>

                {expandedPolicies.rules && (
                  <div className="pt-3 border-t border-stone-100 space-y-1.5 text-xs text-stone-600 leading-relaxed font-light">
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
              <div className="bg-white rounded-2xl border border-stone-200/70 p-4 shadow-2xs space-y-3">
                <div
                  className="flex items-start justify-between space-x-3 cursor-pointer"
                  onClick={() => togglePolicy('cancellation')}
                >
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E2F7EB] flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full bg-[#00704A] text-white flex items-center justify-center text-[10px] font-bold">
                        ✕
                      </div>
                    </div>
                    <div className="pr-1">
                      <h4 className="text-sm sm:text-base font-bold text-slate-800 font-sans">Cancellation policy</h4>
                      <p className="text-xs text-stone-500 font-normal leading-relaxed mt-0.5">
                        Free cancellation before 1 August. After that, the reservation is non-refundable. Review this host's full policy for details.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePolicy('cancellation');
                    }}
                    className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 flex items-center justify-center transition shrink-0 mt-0.5 cursor-pointer"
                    aria-label="Toggle Cancellation policy"
                  >
                    {expandedPolicies.cancellation ? (
                      <ChevronUp className="w-4 h-4 text-stone-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-600" />
                    )}
                  </button>
                </div>

                {expandedPolicies.cancellation && (
                  <div className="pt-3 border-t-2 border-[#00704A] space-y-2 text-xs text-stone-600 leading-relaxed font-light">
                    <p className="font-semibold text-stone-800">• Cancellation policy : Strict</p>
                    <p>
                      • In case a Guest has booked online on the website without any assistance from the Call Center, he/she is entitled to a 12 hours FREE Cancellation policy from time of booking. Refunds into your bank accounts usually take 5-7 working days.
                    </p>
                    <p>
                      • After this 12 hour window passes, bookings for Homes that have the Strict Cancellation Policy cannot be cancelled, rescheduled, and are non-refundable.
                    </p>
                    <p>
                      • If the Guest has made a partial payment, he/she is not entitled to any refund whatsoever.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Widget + Explore the Area (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sticky top-24">
            {/* Booking Card Widget (Hidden on mobile, sticky bottom bar used on mobile) */}
            <div className="hidden md:block bg-white rounded-[28px] p-6 border border-stone-200/80 shadow-md space-y-5">
              <div>
                <span className="text-xs text-stone-500 font-sans">Starting from</span>
                <div className="flex items-baseline space-x-1.5 mt-0.5">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                    ₹{property.pricePerNight.toLocaleString()}
                  </span>
                  <span className="text-xs text-stone-500 font-normal">/ night</span>
                </div>
              </div>

              {/* Inputs Box */}
              <div className="border border-stone-200 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2 border-b border-stone-200">
                  <div className="p-3 border-r border-stone-200">
                    <label className="block text-[10px] uppercase font-bold text-stone-400">
                      Check in
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full text-xs font-medium text-stone-800 focus:outline-none bg-transparent pt-0.5"
                    />
                  </div>
                  <div className="p-3">
                    <label className="block text-[10px] uppercase font-bold text-stone-400">
                      Check out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full text-xs font-medium text-stone-800 focus:outline-none bg-transparent pt-0.5"
                    />
                  </div>
                </div>

                <div className="p-3">
                  <label className="block text-[10px] uppercase font-bold text-stone-400">
                    Guests
                  </label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(e.target.value)}
                    className="w-full text-xs font-medium text-stone-800 focus:outline-none bg-transparent cursor-pointer pt-0.5"
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
                className="w-full py-3.5 rounded-full bg-[#00704A] hover:bg-[#00583A] text-white text-sm font-semibold transition shadow-sm active:scale-95"
              >
                Book a call
              </button>
            </div>

            {/* Explore the Area Widget (Hidden on mobile, visible on desktop) */}
            <div className="hidden md:block bg-white rounded-[28px] p-6 border border-stone-200/80 shadow-md space-y-4">
              <h4 className="font-bold text-base text-stone-900 font-sans">Explore the area</h4>

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
              <div className="space-y-2 text-xs">
                {property.nearbyAttractions && property.nearbyAttractions.length > 0 ? (
                  property.nearbyAttractions.map((attraction, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-stone-700">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="font-sans font-medium">{attraction.name}</span>
                      </div>
                      <span className="text-stone-500 font-light">{attraction.driveTime}</span>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-stone-700">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="font-medium">Kasar Devi Temple</span>
                      </div>
                      <span className="text-stone-500 font-light">20 min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-stone-700">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="font-medium">Chitai Golu Temple</span>
                      </div>
                      <span className="text-stone-500 font-light">20 min</span>
                    </div>
                  </>
                )}
              </div>

              <button
                onClick={() => setShowAreaDetails(!showAreaDetails)}
                className="w-full py-2.5 rounded-full border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold transition"
              >
                {showAreaDetails ? 'Hide locations' : `See all ${property.nearbyAttractions?.length || 4} locations`}
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
