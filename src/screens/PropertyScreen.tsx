import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
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
import { Property } from '../types';
import { PROPERTIES } from '../data/Data';

interface PropertyScreenProps {
  propertyId?: string;
  onOpenContact: () => void;
  onOpenGallery: () => void;
}

export const PropertyScreen: React.FC<PropertyScreenProps> = ({
  propertyId = 'bhimsarovar',
  onOpenContact,
  onOpenGallery,
}) => {
  const property: Property =
    PROPERTIES.find((p) => p.id === propertyId) || PROPERTIES[0];

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

  return (
    <div className="w-full bg-white font-sans antialiased text-stone-800 pt-16 sm:pt-20 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-6">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C2926] font-normal tracking-tight">
            {property.name}
          </h1>
        </div>

        {/* 5-Photo Gallery Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 rounded-[28px] overflow-hidden mb-8 h-[240px] sm:h-[380px] md:h-[480px]">
          {/* Main Large Photo (Left 7 cols) */}
          <div
            onClick={onOpenGallery}
            className="md:col-span-7 h-full cursor-pointer relative group overflow-hidden"
          >
            <img
              src={property.images[0]}
              alt={property.name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* 4 Small Photos Grid (Right 5 cols) */}
          <div className="hidden md:grid md:col-span-5 grid-cols-2 gap-3 h-full">
            <div
              onClick={onOpenGallery}
              className="cursor-pointer relative group overflow-hidden rounded-2xl h-full"
            >
              <img
                src={property.images[1] || property.images[0]}
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
                src={property.images[2] || property.images[0]}
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
                src={property.images[3] || property.images[0]}
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
                src={property.images[4] || property.images[0]}
                alt="Bathroom/Balcony"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 flex items-center justify-center transition">
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                  +12 photos
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

                <div className="flex items-center space-x-2">
                  <span className="bg-[#EAB308] text-stone-950 text-xs font-bold px-3 py-1 rounded-md flex items-center space-x-1">
                    ★ Premium
                  </span>
                </div>
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
                4 highlights for your 2-night stay
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0 text-[#00704A]">
                    <Sun className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 font-sans">
                      Glittering Night View
                    </h4>
                    <p className="text-xs text-stone-500 font-sans font-light mt-0.5">
                      Spectacular night view of Almora city after sunset
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0 text-[#00704A]">
                    <Heart className="w-4 h-4 fill-[#00704A]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 font-sans">
                      Aesthetic Family Vibe
                    </h4>
                    <p className="text-xs text-stone-500 font-sans font-light mt-0.5">
                      Designed for unwinding under mountain skies
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0 text-[#00704A]">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 font-sans">
                      Self Check-In & Private Garden
                    </h4>
                    <p className="text-xs text-stone-500 font-sans font-light mt-0.5">
                      Lockbox check-in & private outdoor garden
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0 text-[#00704A]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 font-sans">
                      Cultural Neighborhood
                    </h4>
                    <p className="text-xs text-stone-500 font-sans font-light mt-0.5">
                      Surrounded by traditional Kumaoni houses
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Amenities */}
            <div id="property-amenities-section" className="border-t border-[#E7E0CE] pt-8 space-y-6">
              <h3 className="font-serif text-2xl text-[#2C2926] font-normal">Popular Amenities</h3>

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
                    <div className="flex items-center space-x-2.5">
                      <Wifi className="w-4 h-4 text-[#00704A]" />
                      <span>Wifi</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Tv className="w-4 h-4 text-stone-700" />
                      <span>Television</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Dog className="w-4 h-4 text-amber-700" />
                      <span>Pets Allowed</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Briefcase className="w-4 h-4 text-sky-600" />
                      <span>Work Space</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Flame className="w-4 h-4 text-rose-600" />
                      <span>Bonfire</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Gamepad2 className="w-4 h-4 text-red-600" />
                      <span>Table Tennis</span>
                    </div>
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
              <h3 className="font-serif text-2xl text-[#2C2926] font-normal">Rooms</h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { name: 'Master Bedroom', details: 'Queen bed · Back support mattress · Mountain view' },
                  { name: 'Bedroom 2', details: 'Double bed · Back support mattress · Garden view' },
                  { name: 'Living Area', details: 'Spacious hall · Sofa cum bed · Valley view' },
                  { name: 'Rooftop Patio', details: 'Outdoor seating · Starry night view' },
                ].map((room, idx) => (
                  <div
                    key={idx}
                    onClick={onOpenGallery}
                    className="cursor-pointer group flex flex-col space-y-2"
                  >
                    <div className="aspect-[4/3] rounded-[22px] overflow-hidden bg-[#EFECE6] border border-stone-200/80 flex flex-col items-center justify-center text-stone-400 font-sans shadow-xs group-hover:bg-[#E7E3DB] transition">
                      <span className="text-xs font-semibold text-stone-600">Room {idx + 1}</span>
                      <span className="text-[10px] text-stone-400">Image Placeholder</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900 font-sans">{room.name}</h4>
                      <p className="text-[11px] text-stone-500 truncate font-light mt-0.5">{room.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies Section */}
            <div id="property-policies-section" className="border-t border-[#E7E0CE] pt-8 space-y-6">
              <h3 className="font-serif text-2xl text-[#2C2926] font-normal">Policies</h3>

              {/* House Rules */}
              <div className="border border-[#E7E0CE] rounded-2xl overflow-hidden">
                <button
                  onClick={() => togglePolicy('rules')}
                  className="w-full p-4 text-left flex items-center justify-between font-bold text-sm text-stone-900 bg-stone-50/40 hover:bg-stone-50 transition"
                >
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold">House Rules & Operational Guidelines</h4>
                      <p className="text-[11px] text-stone-500 font-normal">
                        Check-in policy, quiet hours, vehicle restrictions & property care
                      </p>
                    </div>
                  </div>
                  {expandedPolicies.rules ? (
                    <ChevronUp className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  )}
                </button>

                {expandedPolicies.rules && (
                  <div className="p-5 border-t border-[#E7E0CE] bg-white space-y-2 text-xs text-stone-700 leading-relaxed font-light">
                    <p>• Check-in: 1:00 pm – 9:00 pm, Checkout before 10:00 am</p>
                    <p>• Quiet hours after 10:00 pm</p>
                    <p>• Respect local community & property guidelines</p>
                  </div>
                )}
              </div>

              {/* Cancellation Policy (Expanded by default matching screenshot) */}
              <div className="border-b-2 border-[#00704A] border border-[#E7E0CE] rounded-2xl overflow-hidden">
                <button
                  onClick={() => togglePolicy('cancellation')}
                  className="w-full p-4 text-left flex items-center justify-between font-bold text-sm text-stone-900 bg-stone-50/40 hover:bg-stone-50 transition"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 rounded-md bg-[#00704A] text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold">Cancellation policy</h4>
                      <p className="text-[11px] text-stone-500 font-normal">
                        Free cancellation before 1 August. After that, the reservation is non-refundable.
                      </p>
                    </div>
                  </div>
                  {expandedPolicies.cancellation ? (
                    <ChevronUp className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  )}
                </button>

                {expandedPolicies.cancellation && (
                  <div className="p-6 border-t border-[#E7E0CE] bg-white space-y-3 text-xs text-stone-600 leading-relaxed font-light">
                    <p className="font-bold text-stone-800">• Cancellation policy : Strict</p>
                    <p>
                      • In case a Guest has booked online on the website without any assistance from the Call Center, he/she is entitled to a 12 hours FREE Cancellation policy from time of booking. Refunds into your bank accounts usually take 5-7 working days.
                    </p>
                    <p>
                      • After this 12 hour window passes, bookings for Homes that have the Strict Cancellation Policy cannot be cancelled, rescheduled, and are non-refundable.
                    </p>
                    <p>
                      • If the Guest has made a partial payment, he/she is not entitled to any refund whatsoever.
                    </p>
                    <p>
                      • Cancellation for peak dates, including Independence Day (14th–15th August 2026), Diwali (6th–10th November 2026), Christmas & New Year (24th December 2026–2nd January 2027), Republic Day (26th January 2027), and Holi (20th–22nd March 2027), will not be accepted.
                    </p>
                  </div>
                )}
              </div>

              {/* Safety & Property */}
              <div className="border border-[#E7E0CE] rounded-2xl overflow-hidden">
                <button
                  onClick={() => togglePolicy('safety')}
                  className="w-full p-4 text-left flex items-center justify-between font-bold text-sm text-stone-900 bg-stone-50/40 hover:bg-stone-50 transition"
                >
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="w-4 h-4 text-[#00704A]" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold">Safety & property</h4>
                      <p className="text-[11px] text-stone-500 font-normal">
                        Smoke detectors, fire extinguishers, and emergency contacts on site
                      </p>
                    </div>
                  </div>
                  {expandedPolicies.safety ? (
                    <ChevronUp className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  )}
                </button>

                {expandedPolicies.safety && (
                  <div className="p-5 border-t border-[#E7E0CE] bg-white space-y-2 text-xs text-stone-700 leading-relaxed font-light">
                    <p>• Smoke detector & first aid kit available</p>
                    <p>• On-site caretaker & 24/7 security support</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Widget + Explore the Area (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sticky top-24">
            {/* Booking Card Widget */}
            <div className="bg-white rounded-[28px] p-6 border border-stone-200/80 shadow-md space-y-5">
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

            {/* Explore the Area Widget */}
            <div className="bg-white rounded-[28px] p-6 border border-stone-200/80 shadow-md space-y-4">
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
    </div>
  );
};

