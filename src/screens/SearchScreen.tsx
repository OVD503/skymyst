import React, { useState } from 'react';
import { SlidersHorizontal, Plus, Minus, Layers, MapPin } from 'lucide-react';
import { ScreenPage } from '../types';
import { PROPERTIES } from '../data/Data';

interface SearchScreenProps {
  onNavigate: (page: ScreenPage) => void;
  onSelectProperty: (id: string) => void;
}

export const SearchScreen: React.FC<SearchScreenProps> = ({
  onNavigate,
  onSelectProperty,
}) => {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>('bhimsarovar');
  const [zoomLevel, setZoomLevel] = useState<number>(12);
  const [filterDiscountOnly, setFilterDiscountOnly] = useState<boolean>(false);
  const [guestFilter, setGuestFilter] = useState<string>('any');

  const filteredProperties = PROPERTIES.filter((p) => {
    if (filterDiscountOnly && !p.discountBadge) return false;
    if (guestFilter === '4+' && p.guests < 4) return false;
    if (guestFilter === '8+' && p.guests < 8) return false;
    return true;
  });

  return (
    <div className="w-full">
      {/* Top Filter Bar */}
      <div className="bg-white border-b border-stone-200 sticky top-16 sm:top-20 z-30 px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-sm sm:text-base font-semibold text-stone-900">
              Over 1,000 homes within map area
            </h1>
            <p className="text-xs text-stone-500">Bhimtal, Almora & Uttarakhand</p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilterDiscountOnly(!filterDiscountOnly)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition ${filterDiscountOnly
                  ? 'bg-emerald-800 text-white border-emerald-800'
                  : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                }`}
            >
              🏷️ 30% Off Deals
            </button>

            <select
              value={guestFilter}
              onChange={(e) => setGuestFilter(e.target.value)}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-stone-50 text-stone-700 border border-stone-300 hover:bg-stone-100 focus:outline-none cursor-pointer"
            >
              <option value="any">Guests: Any</option>
              <option value="4+">Guests: 4+</option>
              <option value="8+">Guests: 8+</option>
            </select>

            <button
              onClick={() => alert('Filter applied: price range ₹4,000 - ₹35,000')}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-stone-50 text-stone-700 border border-stone-300 hover:bg-stone-100 flex items-center space-x-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Split-Screen Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 min-h-[600px] sm:min-h-[750px]">
          {/* Left Column: Property Listings (Image 6) */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-5">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                id={`property-listing-${prop.id}`}
                onClick={() => {
                  setSelectedPropertyId(prop.id);
                  onSelectProperty(prop.id);
                }}
                className={`group cursor-pointer bg-white rounded-2xl overflow-hidden border transition-all duration-200 flex flex-col sm:flex-row ${selectedPropertyId === prop.id
                    ? 'border-[#004030] ring-2 ring-[#004030]/20 shadow-lg'
                    : 'border-stone-200 hover:border-stone-300 hover:shadow-md'
                  }`}
              >
                {/* Image */}
                <div className="relative sm:w-56 h-36 sm:h-48 md:h-auto shrink-0 overflow-hidden bg-stone-100">
                  <img
                    src={prop.images[0]}
                    alt={prop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {prop.discountBadge && (
                    <span className="absolute top-3 left-3 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {prop.discountBadge}
                    </span>
                  )}
                  {prop.isPremium && (
                    <span className="absolute top-3 right-3 bg-amber-400 text-stone-900 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                      ⭐ Premium
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 md:p-5 flex flex-col justify-between flex-1">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-stone-500 font-medium">
                        {prop.location}, {prop.state}
                      </span>
                      <div className="flex items-center space-x-1 text-xs">
                        <span className="font-bold text-stone-900">{prop.rating.toFixed(1)}</span>
                        <span className="text-stone-500">({prop.reviewsCount})</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-stone-900 group-hover:text-[#004030] transition">
                      {prop.name}
                    </h3>
                    <p className="text-xs text-stone-500">
                      {prop.guests} guests · {prop.bedrooms} bedrooms · {prop.beds} beds ·{' '}
                      {prop.bathrooms} baths
                    </p>
                  </div>

                  <div className="pt-4 mt-2 border-t border-stone-100 flex items-end justify-between">
                    <div>
                      <div className="flex items-baseline space-x-1.5">
                        <span className="font-serif text-base sm:text-lg font-bold text-stone-900">
                          ₹{prop.pricePerNight.toLocaleString()}
                        </span>
                        {prop.originalPricePerNight && (
                          <span className="text-xs text-stone-400 line-through">
                            ₹{prop.originalPricePerNight.toLocaleString()}
                          </span>
                        )}
                        <span className="text-xs text-stone-500">per night</span>
                      </div>
                      <p className="text-[10px] text-stone-400">
                        ₹{prop.totalPrice.toLocaleString()} total includes taxes & fees
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProperty(prop.id);
                        onNavigate('property');
                      }}
                      className="px-4 py-2 rounded-full bg-[#004030] hover:bg-[#002f23] text-white text-xs font-medium transition active:scale-95 shadow-xs"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Interactive Map with Custom Price Pins (Image 6) */}
          <div className="lg:col-span-5 h-[300px] sm:h-[400px] lg:h-auto sticky top-32 sm:top-40 rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200 shadow-md relative bg-[#E5E3DF]">
            {/* Map Canvas Background (Simulated Road / Mountain topography) */}
            <div className="absolute inset-0 z-0">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 600 700"
                preserveAspectRatio="none"
                className="w-full h-full opacity-80"
              >
                {/* Background terrain */}
                <rect width="600" height="700" fill="#E8ECE9" />

                {/* Forest areas */}
                <path
                  d="M0,0 Q180,80 300,50 T600,120 L600,0 Z"
                  fill="#D4E4D7"
                  opacity="0.8"
                />
                <path
                  d="M200,300 Q350,220 500,280 T600,450 L600,700 L300,700 Z"
                  fill="#D8E8DC"
                  opacity="0.7"
                />

                {/* Mountain contours */}
                <path
                  d="M50,150 Q180,240 320,180 T550,260"
                  stroke="#CAD8CE"
                  strokeWidth="32"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M10,480 Q220,400 420,520 T580,620"
                  stroke="#CAD8CE"
                  strokeWidth="28"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Lakes & Water bodies (Bhimtal Lake) */}
                <path
                  d="M220,160 Q270,130 310,170 T260,230 Q210,210 220,160 Z"
                  fill="#99C2DD"
                  opacity="0.9"
                />
                <text x="235" y="195" fill="#3B698C" fontSize="10" fontWeight="600">
                  Bhimtal Lake
                </text>

                {/* Major Roads */}
                <path
                  d="M-20,200 Q200,190 350,320 T620,410"
                  stroke="#FFFFFF"
                  strokeWidth="6"
                  fill="none"
                />
                <path
                  d="M-20,200 Q200,190 350,320 T620,410"
                  stroke="#F3D179"
                  strokeWidth="3.5"
                  fill="none"
                />

                <path
                  d="M280,0 Q320,200 240,400 T340,700"
                  stroke="#FFFFFF"
                  strokeWidth="5"
                  fill="none"
                />
                <path
                  d="M280,0 Q320,200 240,400 T340,700"
                  stroke="#F3D179"
                  strokeWidth="2.5"
                  fill="none"
                />

                {/* Minor trails */}
                <path
                  d="M100,50 Q150,180 220,280 T180,500"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeDasharray="4 2"
                  fill="none"
                />
                <path
                  d="M320,330 Q440,300 520,380"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  fill="none"
                />

                {/* Landmark labels */}
                <text x="40" y="80" fill="#6A7A70" fontSize="11" fontWeight="700">
                  NAINITAL RESERVE
                </text>
                <text x="360" y="90" fill="#6A7A70" fontSize="10" fontWeight="600">
                  BHOWALI
                </text>
                <text x="70" y="440" fill="#6A7A70" fontSize="10" fontWeight="600">
                  ALMORA RANGE
                </text>
              </svg>
            </div>

            {/* Interactive Price Pins Overlay (Matching Image 6) */}
            {PROPERTIES.map((prop) => {
              const isSelected = selectedPropertyId === prop.id;
              return (
                <div
                  key={prop.id}
                  style={{
                    position: 'absolute',
                    left: `${prop.coordinates.x}%`,
                    top: `${prop.coordinates.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="z-10"
                >
                  <button
                    onClick={() => {
                      setSelectedPropertyId(prop.id);
                      const el = document.getElementById(`property-listing-${prop.id}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition shadow-md flex items-center space-x-1 cursor-pointer ${isSelected
                        ? 'bg-stone-950 text-white ring-4 ring-emerald-500/40 scale-110'
                        : 'bg-white text-stone-900 hover:scale-105 border border-stone-300/80 hover:bg-stone-50'
                      }`}
                  >
                    <span>{prop.coordinates.label}</span>
                  </button>
                </div>
              );
            })}

            {/* Map Controls */}
            <div className="absolute right-4 bottom-6 z-20 flex flex-col space-y-2">
              <div className="bg-white rounded-xl shadow-md border border-stone-200 overflow-hidden">
                <button
                  onClick={() => setZoomLevel((z) => Math.min(z + 1, 18))}
                  aria-label="Zoom in"
                  className="p-2 hover:bg-stone-100 flex items-center justify-center text-stone-700 transition"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <div className="h-px bg-stone-200" />
                <button
                  onClick={() => setZoomLevel((z) => Math.max(z - 1, 6))}
                  aria-label="Zoom out"
                  className="p-2 hover:bg-stone-100 flex items-center justify-center text-stone-700 transition"
                >
                  <Minus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => alert(`Map Zoom: ${zoomLevel}x. Layer: Topographic Mountain Mode.`)}
                aria-label="Toggle map layers"
                className="w-9 h-9 rounded-xl bg-white hover:bg-stone-100 shadow-md border border-stone-200 flex items-center justify-center text-stone-700 transition"
              >
                <Layers className="w-4 h-4" />
              </button>
            </div>

            {/* Selected Property Quick Hover Banner */}
            {selectedPropertyId && (
              <div className="absolute bottom-4 left-4 right-20 z-20 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-stone-200 shadow-lg flex items-center space-x-3">
                <img
                  src={
                    PROPERTIES.find((p) => p.id === selectedPropertyId)?.images[0] ||
                    PROPERTIES[0].images[0]
                  }
                  alt="Selected thumbnail"
                  className="w-12 h-12 rounded-xl object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="truncate flex-1">
                  <h4 className="text-xs font-semibold text-stone-900 truncate">
                    {PROPERTIES.find((p) => p.id === selectedPropertyId)?.name}
                  </h4>
                  <p className="text-[11px] text-stone-500">
                    {PROPERTIES.find((p) => p.id === selectedPropertyId)?.location} ·{' '}
                    {PROPERTIES.find((p) => p.id === selectedPropertyId)?.coordinates.label}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onSelectProperty(selectedPropertyId);
                    onNavigate('property');
                  }}
                  className="px-3 py-1.5 rounded-full bg-[#004030] text-white text-[11px] font-medium shrink-0"
                >
                  View
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
