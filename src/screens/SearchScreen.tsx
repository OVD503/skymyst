import React, { useState } from 'react';
import { Property, ScreenPage } from '../types';
import { CategoryBadge } from '../components/CategoryBadge';
import { MapPin, ExternalLink } from 'lucide-react';

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
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>(
    properties[0]?.id || 'bhimsarovar'
  );

  const selectedProp = properties.find((p) => p.id === selectedPropertyId) || properties[0];

  const getMapEmbedUrl = (prop?: Property) => {
    if (prop) {
      const locationQuery = `${prop.name}, ${prop.location || 'Bhimtal'}, ${prop.state || 'Uttarakhand'}`;
      return `https://maps.google.com/maps?q=${encodeURIComponent(locationQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    }
    return `https://maps.google.com/maps?q=${encodeURIComponent('Bhimtal, Uttarakhand')}&t=&z=12&ie=UTF8&iwloc=&output=embed`;
  };

  return (
    <div className="w-full bg-white font-sans antialiased text-stone-800 pt-4 sm:pt-6 pb-16 sm:pb-24">
      {/* 1. Main Page Title Header */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pt-6 sm:pt-10 pb-8 sm:pb-12 text-center">
        <h1 className="!font-sans font-medium text-[24px] sm:text-[32px] leading-[100%] tracking-normal text-black text-center">
          {properties.length} homestays within map area
        </h1>
      </div>

      {/* 2. Main Split Content: Property Cards List + Real Interactive Map */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Property Listings (6 cols) */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-10">
            {properties.map((prop) => {
              const isSelected = prop.id === selectedPropertyId;
              return (
                <div
                  key={prop.id}
                  id={`property-listing-${prop.id}`}
                  onClick={() => {
                    setSelectedPropertyId(prop.id);
                    onSelectProperty(prop.id);
                  }}
                  className={`group cursor-pointer flex flex-col sm:flex-row gap-5 items-start p-3 rounded-[32px] transition ${
                    isSelected ? 'bg-emerald-50/60 ring-2 ring-[#00704A]' : 'hover:bg-stone-50'
                  }`}
                >
                  {/* Property Image */}
                  <div className="relative w-full sm:w-[250px] md:w-[280px] h-[212px] shrink-0 rounded-[28px] overflow-hidden bg-[#E4CCCC] shadow-xs">
                    <img
                      src={prop.images[0]}
                      alt={prop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <CategoryBadge category={prop.category} isPremium={prop.isPremium} />
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="w-full flex-1 min-w-0 h-auto sm:h-[212px] flex flex-col justify-between py-[4px] pr-1">
                    <div>
                      <h3 className="!font-sans font-medium text-[17px] sm:text-[18px] leading-[125%] tracking-normal text-black group-hover:text-[#00704A] transition break-words">
                        {prop.name}
                      </h3>
                      <p className="!font-sans font-normal text-[13px] leading-[140%] tracking-[0.02em] text-[#4E4E4E] mt-1.5 break-words">
                        {prop.guests} guests · {prop.bedrooms} bedrooms · {prop.beds} beds · {prop.bathrooms} bathrooms
                      </p>

                      {/* Rating Badge */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-2">
                        <span className="bg-[#00704A] text-white font-bold text-caption-bold px-1.5 py-0.5 rounded-md text-xs shrink-0">
                          {prop.rating ? prop.rating.toFixed(1) : '5.0'}
                        </span>
                        <span className="text-caption-bold text-stone-900 text-xs">Wonderful</span>
                        <span className="text-caption-light text-stone-500 text-xs">({prop.reviewsCount || 0} reviews)</span>
                      </div>
                    </div>

                    {/* Pricing & Action */}
                    <div className="pt-2">
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span className="text-body-1 font-bold text-stone-900 font-sans">
                          ₹{prop.pricePerNight?.toLocaleString()}
                        </span>
                        {prop.originalPricePerNight && (
                          <span className="!font-sans font-medium text-[14px] leading-[100%] tracking-normal text-[#4E4E4E] line-through">
                            ₹{prop.originalPricePerNight.toLocaleString()}
                          </span>
                        )}
                        <span className="text-caption-light text-stone-500 text-xs">per night</span>
                      </div>
                      <div className="mt-2">
                        <p className="!font-sans font-normal text-[12px] leading-[130%] tracking-[0.02em] text-[#4E4E4E]">
                          <span className="underline underline-offset-2 decoration-[#4E4E4E]">
                            ₹{prop.totalPrice?.toLocaleString()} total
                          </span>
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Real Google Map View (6 cols) */}
          <div className="lg:col-span-6 sticky top-24 w-full max-w-[680px] h-[550px] sm:h-[724px] rounded-[36px] overflow-hidden border border-stone-200 shadow-lg relative bg-stone-100 flex flex-col">
            {/* Real Google Maps Embed iFrame */}
            <iframe
              title="Real Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              loading="lazy"
              allowFullScreen
              src={getMapEmbedUrl(selectedProp)}
            />

            {/* Floating Info Overlay Bar for Selected Real Property */}
            {selectedProp && (
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-stone-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-stone-200 border border-stone-200">
                    <img
                      src={selectedProp.images?.[0]}
                      alt={selectedProp.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-sans font-semibold text-stone-900 text-sm truncate">
                      {selectedProp.name}
                    </h4>
                    <p className="font-sans text-xs text-stone-600 flex items-center gap-1 mt-0.5 truncate">
                      <MapPin size={12} className="text-[#00704A] shrink-0" />
                      {selectedProp.location}, {selectedProp.state}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      onSelectProperty(selectedProp.id);
                      onNavigate('property');
                    }}
                    className="px-4 py-2 bg-[#00704A] text-white text-xs font-bold rounded-xl hover:bg-[#00583a] transition shadow-sm"
                  >
                    View Homestay
                  </button>
                  {selectedProp.googleMapsUrl && (
                    <a
                      href={selectedProp.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-stone-100 text-stone-700 rounded-xl hover:bg-stone-200 transition"
                      title="Open in Google Maps"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
