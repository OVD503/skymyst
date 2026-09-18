import React, { useState } from 'react';
import { Property, ScreenPage } from '../types';

interface SearchScreenProps {
  properties: Property[];
  onNavigate: (page: ScreenPage) => void;
  onSelectProperty: (id: string) => void;
}

export const SearchScreen: React.FC<SearchScreenProps> = ({
  properties,
  onNavigate,
  onSelectProperty,
}) => {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>('bhimsarovar');

  return (
    <div className="w-full bg-white font-sans antialiased text-stone-800 pt-16 sm:pt-20 pb-16 sm:pb-24">
      {/* 1. Main Page Title Header */}
      <div className="text-center py-6 sm:py-10">
        <h1 className="text-display-2 text-stone-900 font-semibold tracking-tight font-sans">
          Over 1,000 homes within map area
        </h1>
      </div>

      {/* 2. Main Split Content: Property Cards List + Interactive Map */}
      <div className="max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Property Listings (6 cols) */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-10">
            {properties.map((prop) => (
              <div
                key={prop.id}
                id={`property-listing-${prop.id}`}
                onClick={() => {
                  setSelectedPropertyId(prop.id);
                  onSelectProperty(prop.id);
                  onNavigate('property');
                }}
                className="group cursor-pointer flex flex-col sm:flex-row gap-5 items-start transition"
              >
                {/* Property Image with rounded corners and 30% off badge */}
                <div className="relative w-full sm:w-64 h-48 sm:h-44 shrink-0 rounded-[24px] overflow-hidden bg-stone-100 shadow-xs">
                  <img
                    src={prop.images[0]}
                    alt={prop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Property Details */}
                <div className="flex-1 flex flex-col justify-between h-full py-0.5 space-y-2">
                  <div>
                    <h3 className="font-sans font-medium text-[16px] leading-[20px] tracking-[0.02em] text-[#042E23] group-hover:text-[#00704A] transition leading-snug">
                      {prop.name}
                    </h3>
                    <p className="text-caption-light text-stone-500 font-sans mt-1">
                      {prop.guests} guests · {prop.bedrooms} bedrooms · {prop.beds} beds · {prop.bathrooms} bathrooms
                    </p>

                    {/* Rating Badge */}
                    <div className="flex items-center space-x-1.5 mt-2">
                      <span className="bg-[#00704A] text-white font-bold text-caption-bold px-1.5 py-0.5 rounded-md">
                        {prop.rating.toFixed(1)}
                      </span>
                      <span className="text-caption-bold text-stone-900">Wonderful</span>
                      <span className="text-caption-light text-stone-500">({prop.reviewsCount} reviews)</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="pt-2">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-body-1 font-bold text-stone-900 font-sans">
                        ₹{prop.pricePerNight.toLocaleString()}
                      </span>
                      {prop.originalPricePerNight && (
                        <span className="text-caption-light text-stone-400 line-through">
                          ₹{prop.originalPricePerNight.toLocaleString()}
                        </span>
                      )}
                      <span className="text-caption-light text-stone-500">per night</span>
                    </div>
                    <p className="text-caption-light text-stone-500 mt-0.5">
                      ₹{prop.totalPrice.toLocaleString()} total
                    </p>
                    <p className="text-caption-light text-stone-400">
                      includes taxes & fees
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Topographic Interactive Map View (6 cols) */}
          <div className="lg:col-span-6 sticky top-24 h-[500px] sm:h-[600px] rounded-[36px] sm:rounded-[44px] overflow-hidden border border-stone-200/80 shadow-sm relative bg-[#DDF0E6]">
            {/* Map Topography Background SVG */}
            <div className="absolute inset-0 z-0">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 600 700"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                {/* Landmass background */}
                <rect width="600" height="700" fill="#E2F4EB" />

                {/* Light green forest patches */}
                <path d="M0,0 Q200,120 380,80 T600,150 L600,0 Z" fill="#CBEADA" opacity="0.9" />
                <path d="M150,280 Q380,200 550,290 L600,700 L250,700 Z" fill="#D4EFE1" opacity="0.8" />
                <path d="M0,450 Q180,380 300,490 L120,700 L0,700 Z" fill="#CEEAD8" opacity="0.75" />

                {/* Roads / Highways */}
                <path d="M0,220 Q220,200 380,340 T600,430" stroke="#FFFFFF" strokeWidth="6" fill="none" />
                <path d="M0,220 Q220,200 380,340 T600,430" stroke="#E1CEA1" strokeWidth="3" fill="none" />

                <path d="M300,0 Q340,240 260,450 T380,700" stroke="#FFFFFF" strokeWidth="5" fill="none" />
                <path d="M300,0 Q340,240 260,450 T380,700" stroke="#E1CEA1" strokeWidth="2.5" fill="none" />

                {/* Secondary roads */}
                <path d="M120,60 Q180,220 260,320 T200,550" stroke="#FFFFFF" strokeWidth="3.5" strokeDasharray="5 3" fill="none" />

                {/* Road Shields & Labels */}
                <rect x="420" y="220" width="18" height="14" rx="3" fill="#60B075" />
                <text x="425" y="231" fill="#FFF" fontSize="9" fontWeight="700">6</text>

                <rect x="190" y="110" width="22" height="14" rx="3" fill="#FFFFFF" stroke="#666" strokeWidth="1" />
                <text x="194" y="121" fill="#333" fontSize="9" fontWeight="700">20</text>

                <rect x="540" y="320" width="22" height="14" rx="3" fill="#60B075" />
                <text x="544" y="331" fill="#FFF" fontSize="9" fontWeight="700">55</text>

                <text x="440" y="170" fill="#7A8E82" fontSize="10" fontWeight="600">Villa Dolores</text>
                <text x="365" y="490" fill="#7A8E82" fontSize="10" fontWeight="600">Tilisarao</text>
                <text x="290" y="295" fill="#7A8E82" fontSize="10" fontWeight="600">Quines</text>
                <text x="240" y="340" fill="#7A8E82" fontSize="10" fontWeight="600">Luján</text>
              </svg>
            </div>

            {/* Price Pins floating on map matching reference screenshot */}
            <div className="absolute top-[26%] left-[30%] z-10">
              <button
                onClick={() => {
                  setSelectedPropertyId('bhimsarovar');
                  onSelectProperty('bhimsarovar');
                  onNavigate('property');
                }}
                className="bg-white hover:bg-stone-50 text-stone-900 font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-md transition active:scale-95 border border-stone-200"
              >
                ₹12,320
              </button>
            </div>

            <div className="absolute top-[28%] right-[25%] z-10">
              <button
                onClick={() => {
                  setSelectedPropertyId('sunlight');
                  onSelectProperty('sunlight');
                  onNavigate('property');
                }}
                className="bg-white hover:bg-stone-50 text-stone-900 font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-md transition active:scale-95 border border-stone-200"
              >
                ₹16,290
              </button>
            </div>

            <div className="absolute top-[44%] left-[22%] z-10">
              <button
                onClick={() => {
                  setSelectedPropertyId('sukoon');
                  onSelectProperty('sukoon');
                  onNavigate('property');
                }}
                className="bg-[#004030] text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-md transition active:scale-95"
              >
                ₹11,020
              </button>
            </div>

            <div className="absolute top-[43%] left-[44%] z-10">
              <button
                onClick={() => {
                  setSelectedPropertyId('bhimsarovar');
                  onSelectProperty('bhimsarovar');
                  onNavigate('property');
                }}
                className="bg-white hover:bg-stone-50 text-stone-900 font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-md transition active:scale-95 border border-stone-200"
              >
                ₹17,990
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
