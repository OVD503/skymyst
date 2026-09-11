import React, { useState } from 'react';
import {
  Heart,
  Coffee,
  Sun,
  MapPin,
  Wifi,
  Tv,
  Dog,
  Briefcase,
  Flame,
  Gamepad2,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Clock,
  ShieldCheck,
  Calendar,
  Users,
  Footprints,
  Car,
  KeyRound,
  Sparkles,
  Moon,
  Compass,
  Sofa,
  BedDouble,
  Bath,
  Utensils,
  Trees,
  Landmark,
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
    rules: false,
    cancellation: true,
    safety: false,
  });

  // Booking widget form state
  const [checkIn, setCheckIn] = useState('2026-10-12');
  const [checkOut, setCheckOut] = useState('2026-10-14');
  const [guestsCount, setGuestsCount] = useState('1 guest');
  const [showAreaDetails, setShowAreaDetails] = useState(false);

  const toggleAmenity = (key: string) => {
    setExpandedAmenities((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const togglePolicy = (key: string) => {
    setExpandedPolicies((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* Title */}
      <div className="mb-4 sm:mb-6">
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 font-medium">
          {property.name}
        </h1>
      </div>

      {/* Gallery Grid (Image 2) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl overflow-hidden mb-5 sm:mb-8 h-[220px] sm:h-[340px] md:h-[480px]">
        {/* Large featured photo (Left 2 cols) */}
        <div
          onClick={onOpenGallery}
          className="md:col-span-2 h-full cursor-pointer relative group overflow-hidden"
        >
          <img
            src={property.images[0]}
            alt={property.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition" />
        </div>

        {/* Center 2 stacked images (Col 3) */}
        <div className="hidden md:flex flex-col gap-3 h-full">
          <div
            onClick={onOpenGallery}
            className="h-1/2 cursor-pointer relative group overflow-hidden rounded-xl"
          >
            <img
              src={property.images[1]}
              alt="Bedroom view"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div
            onClick={onOpenGallery}
            className="h-1/2 cursor-pointer relative group overflow-hidden rounded-xl"
          >
            <img
              src={property.images[3]}
              alt="Balcony sunlit bedroom"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right 2 stacked images with + See more 20+ (Col 4) */}
        <div className="hidden md:flex flex-col gap-3 h-full">
          <div
            onClick={onOpenGallery}
            className="h-1/2 cursor-pointer relative group overflow-hidden rounded-xl"
          >
            <img
              src={property.images[2]}
              alt="Mountain terrace twilight"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          <div
            onClick={onOpenGallery}
            className="h-1/2 cursor-pointer relative group overflow-hidden rounded-xl"
          >
            <img
              src={property.images[4]}
              alt="Living room area"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              referrerPolicy="no-referrer"
            />
            {/* Overlay button */}
            <div className="absolute inset-0 bg-black/50 hover:bg-black/60 flex items-center justify-center transition">
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide flex items-center space-x-1">
                <span>See more 20+</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subnav Tabs */}
      <div className="flex border-b border-stone-200 mb-5 sm:mb-8 space-x-4 sm:space-x-8 text-xs sm:text-sm font-medium overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {(['overview', 'amenities', 'rooms', 'policies'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              const element = document.getElementById(`property-${tab}-section`);
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`pb-3 capitalize transition relative ${activeTab === tab
                ? 'text-[#004030] font-semibold'
                : 'text-stone-500 hover:text-stone-900'
              }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#004030]" />
            )}
          </button>
        ))}
      </div>

      {/* Two Column Layout: Main Content + Sticky Booking Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-6 sm:space-y-10">
          {/* Overview Section */}
          <div id="property-overview-section" className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-900 font-medium">
                {property.location}, {property.state}
              </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  {property.propertyType && (
                    <span className="font-semibold text-emerald-900 bg-emerald-100/70 px-2 py-0.5 rounded-md mr-2">
                      {property.propertyType}
                    </span>
                  )}
                  {property.guestCapacityText || `${property.guests} guests`} · {property.bedrooms} bedrooms · {property.beds} beds ·{' '}
                  {property.bathrooms} bathroom{property.bathrooms > 1 ? 's' : ''}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                {property.isPremium && (
                  <span className="bg-[#eab308] text-stone-950 text-xs font-bold px-3 py-1 rounded-md flex items-center space-x-1 shadow-xs">
                    <span>★</span>
                    <span>Premium</span>
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs">
              <span className="bg-emerald-800 text-white font-bold text-xs px-2 py-0.5 rounded">
                {property.rating.toFixed(1)}
              </span>
              <span className="font-semibold text-stone-800">{property.ratingLabel}</span>
              <span className="text-stone-500">({property.reviewsCount} reviews)</span>
            </div>

            <div className="pt-2">
              <h3 className="font-serif text-lg text-stone-900 font-medium mb-2">
                Timeless elegance in {property.state}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                {property.description}
              </p>
            </div>
          </div>

          {/* Location & Accessibility */}
          {property.accessibility && (
            <div className="border-t border-stone-200/80 pt-8 space-y-5">
              <h3 className="font-serif text-xl text-stone-900 font-medium">
                1. Location & Accessibility
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.accessibility.locationDetail && (
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-1.5">
                    <div className="flex items-center space-x-2 text-[#004030]">
                      <MapPin className="w-4 h-4 shrink-0 text-red-600" />
                      <span className="font-semibold text-xs sm:text-sm">Location</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {property.accessibility.locationDetail}
                    </p>
                  </div>
                )}

                {property.accessibility.accessHike && (
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-1.5">
                    <div className="flex items-center space-x-2 text-[#004030]">
                      <Footprints className="w-4 h-4 shrink-0 text-emerald-700" />
                      <span className="font-semibold text-xs sm:text-sm">Property Access (Uphill Hike)</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {property.accessibility.accessHike}
                    </p>
                  </div>
                )}

                {property.accessibility.parkingDetails && (
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-1.5">
                    <div className="flex items-center space-x-2 text-[#004030]">
                      <Car className="w-4 h-4 shrink-0 text-amber-700" />
                      <span className="font-semibold text-xs sm:text-sm">Parking Details</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {property.accessibility.parkingDetails}
                    </p>
                  </div>
                )}

                {property.accessibility.checkInProcess && (
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-1.5">
                    <div className="flex items-center space-x-2 text-[#004030]">
                      <KeyRound className="w-4 h-4 shrink-0 text-blue-700" />
                      <span className="font-semibold text-xs sm:text-sm">Check-In Process</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {property.accessibility.checkInProcess}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Core USPs & The Vibe */}
          {property.uspsAndVibe && (
            <div className="border-t border-stone-200/80 pt-8 space-y-5">
              <h3 className="font-serif text-xl text-stone-900 font-medium">
                2. Core USPs & The Vibe
              </h3>
              <div className="space-y-4">
                {property.uspsAndVibe.vibe && (
                  <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-700">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-stone-900">
                        The Vibe
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                        {property.uspsAndVibe.vibe}
                      </p>
                    </div>
                  </div>
                )}

                {property.uspsAndVibe.nightView && (
                  <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200/60">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-700">
                      <Moon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-stone-900">
                        The Night View
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                        {property.uspsAndVibe.nightView}
                      </p>
                    </div>
                  </div>
                )}

                {property.uspsAndVibe.culturalExperience && (
                  <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/60">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-stone-900">
                        Cultural Experience
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                        {property.uspsAndVibe.culturalExperience}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Property Layout & Room Specifications */}
          {property.layoutDetails && (
            <div className="border-t border-stone-200/80 pt-8 space-y-6">
              <div>
                <h3 className="font-serif text-xl text-stone-900 font-medium">
                  3. Property Layout & Room Specifications
                </h3>
                <p className="text-xs text-stone-500 mt-1 font-light">
                  Every detail of the home is thoughtfully designed for relaxation and connection.
                </p>
              </div>

              <div className="space-y-6">
                {/* Indoors */}
                {property.layoutDetails.indoors && (
                  <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-4">
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#004030] flex items-center space-x-2">
                      <Sofa className="w-4 h-4" />
                      <span>Indoors</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-600">
                      {property.layoutDetails.indoors.livingRoom && (
                        <div className="space-y-1 bg-white p-3.5 rounded-xl border border-stone-200/60">
                          <span className="font-semibold text-stone-900 block flex items-center space-x-1.5">
                            <Sofa className="w-3.5 h-3.5 text-amber-700" />
                            <span>Living Room</span>
                          </span>
                          <p className="leading-relaxed text-[11px]">{property.layoutDetails.indoors.livingRoom}</p>
                        </div>
                      )}
                      {property.layoutDetails.indoors.bedrooms && (
                        <div className="space-y-1 bg-white p-3.5 rounded-xl border border-stone-200/60">
                          <span className="font-semibold text-stone-900 block flex items-center space-x-1.5">
                            <BedDouble className="w-3.5 h-3.5 text-blue-700" />
                            <span>Bedrooms (x2)</span>
                          </span>
                          <p className="leading-relaxed text-[11px]">{property.layoutDetails.indoors.bedrooms}</p>
                        </div>
                      )}
                      {property.layoutDetails.indoors.bathroom && (
                        <div className="space-y-1 bg-white p-3.5 rounded-xl border border-stone-200/60">
                          <span className="font-semibold text-stone-900 block flex items-center space-x-1.5">
                            <Bath className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Bathroom (x1)</span>
                          </span>
                          <p className="leading-relaxed text-[11px]">{property.layoutDetails.indoors.bathroom}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Kitchen & Dining */}
                {property.layoutDetails.kitchenAndDining && (
                  <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-4">
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#004030] flex items-center space-x-2">
                      <Utensils className="w-4 h-4" />
                      <span>Kitchen & Dining</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-600">
                      {property.layoutDetails.kitchenAndDining.kitchen && (
                        <div className="space-y-1 bg-white p-3.5 rounded-xl border border-stone-200/60">
                          <span className="font-semibold text-stone-900 block">Separate Kitchen Area</span>
                          <p className="leading-relaxed text-[11px]">{property.layoutDetails.kitchenAndDining.kitchen}</p>
                        </div>
                      )}
                      {property.layoutDetails.kitchenAndDining.dining && (
                        <div className="space-y-1 bg-white p-3.5 rounded-xl border border-stone-200/60">
                          <span className="font-semibold text-stone-900 block">Dining Area</span>
                          <p className="leading-relaxed text-[11px]">{property.layoutDetails.kitchenAndDining.dining}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Outdoors */}
                {property.layoutDetails.outdoors && (
                  <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-4">
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#004030] flex items-center space-x-2">
                      <Trees className="w-4 h-4" />
                      <span>Outdoors</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-600">
                      {property.layoutDetails.outdoors.garden && (
                        <div className="space-y-1 bg-white p-3.5 rounded-xl border border-stone-200/60">
                          <span className="font-semibold text-stone-900 block">Private Garden</span>
                          <p className="leading-relaxed text-[11px]">{property.layoutDetails.outdoors.garden}</p>
                        </div>
                      )}
                      {property.layoutDetails.outdoors.relaxation && (
                        <div className="space-y-1 bg-white p-3.5 rounded-xl border border-stone-200/60">
                          <span className="font-semibold text-stone-900 block">Outdoor Relaxation</span>
                          <p className="leading-relaxed text-[11px]">{property.layoutDetails.outdoors.relaxation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Nearby Tourist Attractions & Temples */}
          {property.nearbyAttractions && property.nearbyAttractions.length > 0 && (
            <div className="border-t border-stone-200/80 pt-8 space-y-5">
              <div>
                <h3 className="font-serif text-xl text-stone-900 font-medium">
                  4. Nearby Tourist Attractions & Temples
                </h3>
                <p className="text-xs text-stone-500 mt-1 font-light">
                  Sukoon Stay is strategically located for those seeking reflection and exploration.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-stone-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-100/80 text-stone-900 font-semibold border-b border-stone-200">
                    <tr>
                      <th className="py-3 px-4">Attraction / Temple</th>
                      <th className="py-3 px-4">Estimated Drive Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 bg-white">
                    {property.nearbyAttractions.map((attraction, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/60 transition">
                        <td className="py-3 px-4 font-medium text-stone-800 flex items-center space-x-2">
                          <Landmark className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                          <span>{attraction.name}</span>
                        </td>
                        <td className="py-3 px-4 text-stone-600">{attraction.driveTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Highlights for your trip */}
          <div className="border-t border-stone-200/80 pt-8 space-y-5">
            <h3 className="font-serif text-xl text-stone-900 font-medium">
              Highlights for your stay
            </h3>

            <div className="space-y-4">
              {property.highlights && property.highlights.length > 0 ? (
                property.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-[#004030]">
                      {item.icon === 'sunset' ? (
                        <Sun className="w-4 h-4" />
                      ) : item.icon === 'heart' ? (
                        <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                      ) : item.icon === 'coffee' ? (
                        <Coffee className="w-4 h-4" />
                      ) : (
                        <MapPin className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-stone-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-stone-900">
                      Easy to get around
                    </h4>
                    <p className="text-xs text-stone-500">
                      Guests love the convenient spot for exploring the area
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Popular Amenities (Image 2) */}
          <div id="property-amenities-section" className="border-t border-stone-200/80 pt-8 space-y-6">
            <h3 className="font-serif text-xl text-stone-900 font-medium">Popular Amenities</h3>

            {/* Facilities Accordion */}
            <div className="border border-stone-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleAmenity('facilities')}
                className="w-full p-4 text-left flex items-center justify-between font-medium text-sm text-stone-900 bg-stone-50/50 hover:bg-stone-50 transition"
              >
                <span>Facilities</span>
                {expandedAmenities.facilities ? (
                  <ChevronUp className="w-4 h-4 text-stone-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-stone-500" />
                )}
              </button>

              {expandedAmenities.facilities && (
                <div className="p-5 grid grid-cols-2 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700 bg-white">
                  <div className="flex items-center space-x-2.5">
                    <Wifi className="w-4 h-4 text-blue-600" />
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
            <div className="border border-stone-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleAmenity('food')}
                className="w-full p-4 text-left flex items-center justify-between font-medium text-sm text-stone-900 bg-stone-50/50 hover:bg-stone-50 transition"
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
            <div className="border border-stone-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleAmenity('general')}
                className="w-full p-4 text-left flex items-center justify-between font-medium text-sm text-stone-900 bg-stone-50/50 hover:bg-stone-50 transition"
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
            <div className="border border-stone-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleAmenity('social')}
                className="w-full p-4 text-left flex items-center justify-between font-medium text-sm text-stone-900 bg-stone-50/50 hover:bg-stone-50 transition"
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
            <div className="border border-stone-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleAmenity('notIncluded')}
                className="w-full p-4 text-left flex items-center justify-between font-medium text-sm text-stone-900 bg-stone-50/50 hover:bg-stone-50 transition"
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
                    <p key={i} className="text-stone-500 line-through">
                      • {f}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Pink Note Warning Callout Box (Image 2) */}
            <div className="bg-[#FDE8E8] border border-[#FCA5A5]/60 rounded-2xl p-4 flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <span className="text-xl">🐶</span>
                <p className="text-xs text-red-900 leading-relaxed">
                  <span className="font-semibold">Note :</span> You are liable for pet disturbances
                  and any resulting fees; a second incident will require leashing, restricting, or
                  removing your pet.
                </p>
              </div>
              <button
                onClick={() => alert('Pet Policy: Well-behaved pets allowed. Owners must leash pets in common areas.')}
                className="text-xs font-semibold text-red-800 underline hover:text-red-950 shrink-0 ml-3"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Rooms Section (Image 2) */}
          <div id="property-rooms-section" className="border-t border-stone-200/80 pt-8 space-y-6">
            <h3 className="font-serif text-xl text-stone-900 font-medium">Rooms</h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {property.rooms.map((room, idx) => (
                <div
                  key={idx}
                  onClick={onOpenGallery}
                  className="cursor-pointer group bg-stone-50 rounded-2xl overflow-hidden border border-stone-200/70 shadow-xs"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="text-xs font-semibold text-stone-900">{room.name}</h4>
                    <p className="text-[10px] text-stone-500 truncate mt-0.5">{room.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Policies Section (Image 2) */}
          <div id="property-policies-section" className="border-t border-stone-200/80 pt-8 space-y-6">
            <h3 className="font-serif text-xl text-stone-900 font-medium">Policies</h3>

            {/* House Rules */}
            <div className="border border-stone-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => togglePolicy('rules')}
                className="w-full p-4 text-left flex items-center justify-between font-medium text-sm text-stone-900 bg-stone-50/50 hover:bg-stone-50 transition"
              >
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold">House Rules & Operational Guidelines</h4>
                    <p className="text-[11px] text-stone-500">
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

              {(expandedPolicies.rules || (property.houseRulesList && property.houseRulesList.length > 0)) && (
                <div className="p-5 border-t border-stone-100 bg-white space-y-2 text-xs text-stone-700 leading-relaxed font-light">
                  {property.houseRulesList && property.houseRulesList.length > 0 ? (
                    property.houseRulesList.map((rule, idx) => (
                      <p key={idx} className="flex items-start space-x-2">
                        <span className="text-amber-700 font-bold">•</span>
                        <span>{rule}</span>
                      </p>
                    ))
                  ) : (
                    <>
                      <p>• Check-in: 1:00 pm – 9:00 pm, Checkout before 10:00 am</p>
                      <p>• Quiet hours after 10:00 pm</p>
                      <p>• Respect local community & property guidelines</p>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Services & Dining (if available) */}
            {property.servicesAndDining && property.servicesAndDining.length > 0 && (
              <div className="border border-stone-200 rounded-2xl overflow-hidden p-5 bg-stone-50/60 space-y-3">
                <h4 className="text-xs sm:text-sm font-bold text-[#004030] uppercase tracking-wider flex items-center space-x-2">
                  <Utensils className="w-4 h-4" />
                  <span>Services & Dining Structure</span>
                </h4>
                <div className="space-y-1.5 text-xs text-stone-700">
                  {property.servicesAndDining.map((service, idx) => (
                    <p key={idx} className="flex items-start space-x-2">
                      <span className="text-emerald-700 font-bold">•</span>
                      <span>{service}</span>
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Cancellation Policy (Expanded by default in Image 2) */}
            <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
              <button
                onClick={() => togglePolicy('cancellation')}
                className="w-full p-4 text-left flex items-center justify-between font-medium text-sm text-stone-900 bg-stone-50/50 hover:bg-stone-50 transition"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-5 rounded-md bg-emerald-700 text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold">Cancellation policy</h4>
                    <p className="text-[11px] text-stone-500">
                      Free cancellation before 1 August. After that, the reservation is
                      non-refundable. Review this host&apos;s full policy for details.
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
                <div className="p-6 border-t border-stone-100 bg-white space-y-3 text-xs text-stone-600 leading-relaxed font-light">
                  <p className="font-semibold text-stone-800">• Cancellation policy : Strict</p>
                  <p>
                    • In case a Guest has booked online on the website without any assistance from
                    the Call Center, he/she is entitled to a 12 hours FREE Cancellation policy from
                    time of booking. Refunds into your bank accounts usually take 5-7 working days.
                    This does not apply to a booking where Check-in date is 7 days from the date of
                    confirmation of booking.
                  </p>
                  <p>
                    • After this 12 hour window passes, bookings for Homes that have the Strict
                    Cancellation Policy cannot be cancelled, rescheduled, and are non-refundable.
                  </p>
                  <p>
                    • If the Guest has made a partial payment, he/she is not entitled to any refund
                    whatsoever.
                  </p>
                  <p>
                    • Cancellation for peak dates, including Independence Day (14th–15th August
                    2026), Diwali (6th–10th November 2026), Christmas & New Year (24th December
                    2026–2nd January 2027), Republic Day (26th January 2027), and Holi (20th–22nd
                    March 2027), will not be accepted.
                  </p>
                  <p>
                    • If a guest uses the &quot;NOCANCEL&quot; coupon while booking, all
                    cancellation policies are overridden. The guest is not entitled to any refund
                    and will have to pay a 100% rescheduling fee in the event of the same.
                  </p>
                </div>
              )}
            </div>

            {/* Safety & property */}
            <div className="border border-stone-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => togglePolicy('safety')}
                className="w-full p-4 text-left flex items-center justify-between font-medium text-sm text-stone-900 bg-stone-50/50 hover:bg-stone-50 transition"
              >
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold">Safety & property</h4>
                    <p className="text-[11px] text-stone-500">
                      Free cancellation before 1 August. After that, the reservation is
                      non-refundable. Review this host&apos;s full policy for details.
                    </p>
                  </div>
                </div>
                {expandedPolicies.safety ? (
                  <ChevronUp className="w-4 h-4 text-stone-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-stone-500" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (Sticky Booking Widget + Explore the Area) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Booking Card */}
          <div className="sticky top-24 sm:top-28 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-stone-200 shadow-lg space-y-4 sm:space-y-5">
            <div>
              <span className="text-xs text-stone-400 font-medium">Starting from</span>
              <div className="flex items-baseline space-x-1 mt-0.5">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">₹{property.pricePerNight.toLocaleString()}</span>
                <span className="text-xs text-stone-500 font-normal">/ night</span>
              </div>
            </div>

            {/* Inputs Box */}
            <div className="border border-stone-200 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2 border-b border-stone-200">
                <div className="p-3 border-r border-stone-200">
                  <label className="block text-[10px] uppercase font-semibold text-stone-400">
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
                  <label className="block text-[10px] uppercase font-semibold text-stone-400">
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
                <label className="block text-[10px] uppercase font-semibold text-stone-400">
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
              className="w-full py-3.5 rounded-full bg-[#004030] hover:bg-[#002f23] text-white text-sm font-medium transition shadow-md active:scale-98"
            >
              Book a call
            </button>

            {/* Explore the area Card (Image 2) */}
            <div className="pt-4 border-t border-stone-100 space-y-4">
              <h4 className="font-serif text-lg text-stone-900 font-medium">Explore the area</h4>

              {/* Map Thumbnail Widget */}
              <div className="relative h-40 rounded-2xl overflow-hidden border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
                  alt="Map location Bhimtal Uttarakhand"
                  className="w-full h-full object-cover brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-950/15" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 px-3 py-1 rounded-full shadow-md text-[11px] font-semibold text-[#004030] flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  <span>{property.location}, {property.state}</span>
                </div>
              </div>

              {/* Landmark Distances */}
              <div className="space-y-2.5 text-xs">
                {property.nearbyAttractions && property.nearbyAttractions.length > 0 ? (
                  property.nearbyAttractions.map((attraction, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-stone-700">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="truncate max-w-[160px]">{attraction.name}</span>
                      </div>
                      <span className="text-stone-500 font-medium shrink-0 ml-2">{attraction.driveTime}</span>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-stone-700">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span>Bhimtaal School</span>
                      </div>
                      <span className="text-stone-500 font-medium">12 min</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-stone-700">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span>Almora Lane</span>
                      </div>
                      <span className="text-stone-500 font-medium">4 min</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-stone-700">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span>Garam Pani</span>
                      </div>
                      <span className="text-stone-500 font-medium">25 min</span>
                    </div>
                  </>
                )}
              </div>

              <button
                onClick={() => setShowAreaDetails(!showAreaDetails)}
                className="w-full py-2.5 rounded-full border border-stone-800 text-xs font-semibold text-stone-800 hover:bg-stone-50 transition"
              >
                {showAreaDetails ? 'Hide area details' : 'Show all about this area'}
              </button>

              {showAreaDetails && (
                <div className="p-3 bg-stone-50 rounded-xl text-[11px] text-stone-600 space-y-1 border border-stone-200">
                  {property.nearbyAttractions && property.nearbyAttractions.length > 0 ? (
                    property.nearbyAttractions.map((attraction, i) => (
                      <p key={i}>• {attraction.name}: {attraction.driveTime}</p>
                    ))
                  ) : (
                    <>
                      <p>• Bhimtal Lake & Island Cafe: 8 mins drive</p>
                      <p>• Victoria Dam & Nature Walk: 15 mins drive</p>
                      <p>• Pantnagar Airport (PGH): 90 mins drive</p>
                      <p>• Kathgodam Railway Junction: 45 mins drive</p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
