import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, ChevronRight, ChevronLeft, MapPin, Instagram, Facebook, Check, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { ScreenPage, Property } from '../types';
import { DESTINATIONS } from '../data/Data';
import { UserAvatar } from '../components/UserAvatar';
import { SkymystLogo } from '../components/SkymystLogo';

interface HomeScreenMobileProps {
  properties: Property[];
  onNavigate: (page: ScreenPage) => void;
  onSelectProperty: (propertyId: string) => void;
  onOpenContact: () => void;
  onOpenStory: () => void;
  onOpenMenu?: () => void;
}

export const HomeScreenMobile: React.FC<HomeScreenMobileProps> = ({
  properties,
  onNavigate,
  onSelectProperty,
  onOpenContact,
  onOpenStory,
  onOpenMenu,
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('Add Destination');
  const [selectedProperty, setSelectedProperty] = useState<string>('all');
  const [selectedDayStart, setSelectedDayStart] = useState<number>(0);
  const [selectedDayEnd, setSelectedDayEnd] = useState<number>(0);
  const [checkInDate, setCheckInDate] = useState<string>('');
  const [checkOutDate, setCheckOutDate] = useState<string>('');
  const [guestsCount, setGuestsCount] = useState<number>(0);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [openStep, setOpenStep] = useState<number>(2);

  // Footer state
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleDayClick = (d: number) => {
    if (d < selectedDayStart || (selectedDayStart && selectedDayEnd)) {
      setSelectedDayStart(d);
      setSelectedDayEnd(0);
      setCheckInDate(`Oct ${d}, 2026`);
      setCheckOutDate('');
    } else {
      setSelectedDayEnd(d);
      setCheckOutDate(`Oct ${d}, 2026`);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProperty !== 'all') {
      onSelectProperty(selectedProperty);
      onNavigate('property');
    } else {
      onNavigate('search');
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FFF9E8] font-sans text-stone-900 overflow-x-hidden">
      {/* SECTION 1: HERO SECTION & NAVIGATION */}
      <section className="relative w-full h-[840px] bg-white overflow-hidden">
        {/* Background Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/bg.jpg"
            alt="Skymyst Mountain Stay"
            className="w-full h-full object-cover object-center brightness-[0.88]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        </div>

        {/* Floating Top Nav Bar Overlay */}
        <div className="absolute top-0 left-0 right-0 z-30 px-5 py-5 flex items-center justify-between">
          <SkymystLogo variant="light" onClick={() => onNavigate('home')} size="sm" />
          <button
            type="button"
            onClick={onOpenMenu}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition active:scale-95"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Hero Headline */}
        <div className="absolute top-[260px] left-0 right-0 z-10 text-center px-4 flex flex-col items-center">
          <h1 className="font-lustria font-normal text-[36px] sm:text-[40px] leading-[112%] tracking-[-0.01em] text-white text-center drop-shadow-md">
            Exceptional Stays.
            <br />
            Seamlessly
            <br />
            managed.
          </h1>
        </div>

        {/* Primary Filters Form Card */}
        <div className="absolute bottom-[24px] left-4 right-4 bg-white rounded-[28px] p-4 flex flex-col justify-between shadow-2xl z-20 border border-stone-100">
          <form onSubmit={handleSearchSubmit} className="w-full flex flex-col gap-3">
            <div className="flex flex-col justify-center w-full divide-y divide-[#CDCDCD]">
              {/* Item 1: Add Destination */}
              <div className="w-full h-[52px] flex items-center px-2">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full font-sans text-[16px] text-[#3D3E48] bg-transparent focus:outline-none cursor-pointer appearance-none"
                >
                  <option value="Add Destination">Add Destination</option>
                  <option value="Almora">Almora, Uttarakhand</option>
                  <option value="Bhimtal">Bhimtal, Uttarakhand</option>
                  <option value="Bhowali">Bhowali, Uttarakhand</option>
                  <option value="Mukteshwar">Mukteshwar, Uttarakhand</option>
                </select>
              </div>

              {/* Item 2: Add Dates */}
              <div className="w-full h-[52px] flex items-center px-2 relative">
                <button
                  type="button"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  className="w-full text-left font-sans text-[16px] text-[#3D3E48] focus:outline-none bg-transparent truncate"
                >
                  {checkInDate ? (checkOutDate ? `${checkInDate} - ${checkOutDate}` : checkInDate) : 'Add Dates'}
                </button>

                {/* Date Picker Dropdown */}
                {showDatePicker && (
                  <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-2xl shadow-2xl border border-stone-200 p-4 z-50 text-stone-900">
                    <div className="flex justify-between items-center pb-2 border-b border-stone-100 mb-2">
                      <span className="text-xs font-bold text-stone-800">
                        {selectedDayStart ? `Oct ${selectedDayStart}` : 'Select Travel Dates'}{' '}
                        {selectedDayEnd ? `- Oct ${selectedDayEnd}, 2026` : ''}
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowDatePicker(false)}
                        className="text-xs text-stone-500 font-bold"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-xs mb-3">
                      {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => handleDayClick(d)}
                          className={`h-7 w-7 rounded-full flex items-center justify-center text-xs mx-auto ${
                            d === selectedDayStart || d === selectedDayEnd
                              ? 'bg-[#015E47] text-white font-bold'
                              : d > selectedDayStart && d < selectedDayEnd
                              ? 'bg-emerald-100 text-[#015E47]'
                              : 'text-stone-700 hover:bg-stone-100'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Item 3: Add Guests */}
              <div className="w-full h-[52px] flex items-center px-2">
                <select
                  value={guestsCount === 0 ? '' : guestsCount}
                  onChange={(e) => setGuestsCount(Number(e.target.value))}
                  className="w-full font-sans text-[16px] text-[#3D3E48] bg-transparent focus:outline-none cursor-pointer appearance-none"
                >
                  <option value="">Add Guests</option>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action Button */}
            <button
              type="submit"
              className="w-full h-[48px] bg-[#015E47] hover:bg-[#004a37] text-white rounded-full flex items-center justify-center gap-2 transition active:scale-95 shadow-md"
            >
              <Search className="w-5 h-5 text-white" />
              <span className="font-sans text-[16px] font-medium text-white">Find Trip Now</span>
            </button>
          </form>
        </div>
      </section>

      {/* SECTION 2: FEATURED PROPERTIES */}
      <section className="w-full bg-white py-10 px-0 flex flex-col items-center overflow-hidden">
        <div className="text-center mb-6 px-4">
          <span className="font-sans text-[16px] leading-[140%] text-[#1E1E1E] block mb-1">
            Featured Properties
          </span>
          <h2 className="font-lustria text-[24px] sm:text-[28px] leading-[120%] text-[#1E1E1E]">
            Handpick stays, Just for you.
          </h2>
        </div>

        {/* Horizontal Property Cards Slider */}
        <div className="w-full flex overflow-x-auto gap-[20px] pb-4 px-4 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {properties.map((prop) => (
            <div
              key={prop.id}
              onClick={() => {
                onSelectProperty(prop.id);
                onNavigate('property');
              }}
              className="w-[273px] bg-white rounded-[28px] p-2 flex flex-col gap-3 shrink-0 snap-start cursor-pointer border border-stone-100 shadow-sm hover:shadow-md transition"
            >
              {/* Product Image Frame */}
              <div className="relative w-full h-[152px] bg-[#E4CCCC] rounded-[16px] overflow-hidden">
                <img src={prop.images[0]} alt={prop.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 bg-[#007C4D] text-white rounded-[4px] px-2 py-1 text-[12px] font-sans font-medium shadow-xs">
                  30% off
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col gap-2 px-1 pb-1">
                <div>
                  <h3 className="font-sans font-medium text-[16px] leading-[20px] tracking-[0.02em] text-[#042E23] truncate">
                    {prop.name}
                  </h3>
                  <p className="font-sans text-[14px] leading-[140%] text-[#4E4E4E] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#4E4E4E] shrink-0" />
                    <span>{prop.location}, {prop.state}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1.5 pt-0.5">
                  <span className="bg-[#007C4D] text-white text-[12px] px-1.5 py-0.5 rounded-[4px] font-sans font-bold">
                    {prop.rating.toFixed(1)}
                  </span>
                  <span className="font-sans font-bold text-[12px] text-[#042E23]">{prop.ratingLabel}</span>
                  <span className="font-sans text-[12px] text-[#303030]">({prop.reviewsCount} reviews)</span>
                </div>

                <div className="flex flex-col gap-0.5 pt-1 border-t border-stone-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-sans font-medium text-[16px] text-[#042E23]">
                      ₹{prop.pricePerNight.toLocaleString()}
                    </span>
                    {prop.originalPricePerNight && (
                      <span className="font-sans text-[14px] text-[#4E4E4E] line-through">
                        ₹{prop.originalPricePerNight.toLocaleString()}
                      </span>
                    )}
                    <span className="font-sans text-[12px] text-[#4E4E4E]">per night</span>
                  </div>
                  <p className="font-sans text-[12px] text-[#4E4E4E]">
                    ₹{prop.totalPrice.toLocaleString()} total includes taxes & fees
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="w-4 shrink-0 h-full select-none" aria-hidden="true" />
        </div>

        {/* See All Button */}
        <div className="mt-4">
          <button
            onClick={() => onNavigate('search')}
            className="px-8 py-2.5 rounded-full border border-[#042E23] text-[#042E23] font-sans text-[16px] font-medium hover:bg-[#042E23] hover:text-white transition active:scale-95"
          >
            See All
          </button>
        </div>
      </section>

      {/* SECTION 3: CURATED COLLECTIONS */}
      <section className="w-full bg-[#FFF9E8] py-10 px-0 flex flex-col items-center">
        <div className="w-[346px] min-h-[62px] text-center mx-auto mb-8 flex flex-col items-center justify-between">
          <span className="font-sans font-normal text-[16px] leading-[22px] tracking-normal text-[#042E23] block">
            Curated Collection
          </span>
          <h2 className="w-[346px] min-h-[30px] font-lustria font-normal text-[24px] leading-[30px] tracking-normal text-[#042E23] text-center">
            Stays for every kind of gateway
          </h2>
        </div>

        {/* Collections Slider */}
        <div className="w-full flex overflow-x-auto gap-4 pb-4 px-4 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Card 1: Bonfire Nights */}
          <div
            onClick={() => onNavigate('search')}
            className="relative w-[273px] h-[281px] bg-white rounded-[24px] overflow-hidden shrink-0 snap-start cursor-pointer shadow-lg group"
          >
            <img
              src="/assets/bonfire.jpg"
              alt="Bonfire Nights"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute bottom-5 left-4 right-4 text-center text-white">
              <h3 className="font-lustria text-[24px] leading-[30px] text-[#FFED25] mb-2">
                Bonfire Nights
              </h3>
              <p className="font-sans text-[13px] leading-[19px] text-white/90">
                Every morning begins the same. Somewhere along the way, silence became a luxury.
              </p>
            </div>
          </div>

          {/* Card 2: Romantic Gateway */}
          <div
            onClick={() => onNavigate('search')}
            className="relative w-[270px] h-[281px] bg-white rounded-[24px] overflow-hidden shrink-0 snap-start cursor-pointer shadow-lg group"
          >
            <img
              src="/assets/romantic.jpg"
              alt="Romantic Gateway"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute bottom-5 left-4 right-4 text-center text-white">
              <h3 className="font-lustria text-[24px] leading-[30px] text-[#FFED25] mb-2">
                Romantic Gateway
              </h3>
              <p className="font-sans text-[13px] leading-[19px] text-white/90">
                Every morning begins the same. Somewhere along the way, silence remained a luxury.
              </p>
            </div>
          </div>
          <div className="w-4 shrink-0 h-full select-none" aria-hidden="true" />
        </div>
      </section>

      {/* SECTION 4: EXPLORE BY DESTINATION */}
      <section className="relative w-full py-10 px-0 flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/explore the destination.jpg"
            alt="Sky background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-cyan-950/40 to-black/70" />
        </div>

        <div className="relative z-10 w-full text-center text-white mb-6 px-4">
          <span className="font-sans text-[16px] block mb-1">Destinations</span>
          <h2 className="font-lustria text-[24px] sm:text-[28px] leading-[30px]">
            Explore by destination
          </h2>
        </div>

        {/* Destination Cards Horizontal Slider */}
        <div className="relative z-10 w-full flex overflow-x-auto gap-4 pb-4 px-4 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => dest.available && onNavigate('search')}
              className={`relative w-[213px] h-[200px] bg-[#E4CCCC] rounded-[24px] overflow-hidden shrink-0 snap-start shadow-lg group ${
                dest.available ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {dest.badge && (
                <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-[#FF3E3E] text-white rounded-full px-3 py-1 text-[12px] font-sans font-medium whitespace-nowrap shadow-xs">
                  {dest.badge}
                </div>
              )}

              <div className="absolute bottom-3 left-0 right-0 text-center font-sans font-medium text-[16px] text-white px-2">
                {dest.name}
              </div>
            </div>
          ))}
          <div className="w-4 shrink-0 h-full select-none" aria-hidden="true" />
        </div>
      </section>

      {/* SECTION 5: GUEST STORIES INTRO */}
      <section className="w-full bg-[#FFF9E8] pt-10 pb-6 px-4 flex flex-col items-center text-center">
        <span className="font-sans text-[16px] text-[#1E1E1E] block mb-1">Guest Stories</span>
        <h2 className="font-lustria text-[24px] sm:text-[28px] leading-[30px] text-[#1E1E1E] mb-3">
          Loved by many of travalers - Bali
        </h2>
        <p className="font-sans text-[14px] leading-[22px] text-[#042E23] max-w-[340px] mb-6">
          Bali has drawn surfers since the 70s: a legendary destination with waves for every level.
          Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave.
        </p>
        <button
          onClick={onOpenContact}
          className="px-8 py-3.5 bg-[#007C4D] hover:bg-[#00633D] text-white rounded-full font-sans font-medium text-[16px] shadow-sm active:scale-95 transition"
        >
          Book a Call
        </button>
      </section>

      {/* SECTION 6: TALL STORY CARD, SPECS & COMMUNITY CARD */}
      <section className="w-full bg-[#FFF9E8] pb-10 px-4 flex flex-col gap-6 items-center">
        {/* Tall Highlight Card */}
        <div className="relative w-full max-w-[370px] h-[520px] bg-[#DFDBCB] rounded-[36px] overflow-hidden shadow-xl group">
          <img
            src="/assets/guest stories.png"
            alt="Discover Bali"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Trip highlights badge */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
            <span className="font-sans font-medium text-[12px] text-white uppercase tracking-wider">
              trip highlights
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="absolute bottom-8 left-4 right-4 text-center text-white">
            <h3 className="font-lustria text-[32px] leading-[38px] text-white mb-2">
              Discover the
              <br />
              Island&apos;s Secrets
            </h3>
            <p className="font-sans text-[15px] text-white/90">
              Waterfalls, temples, jungles and more
            </p>
          </div>
        </div>

        {/* Metadata List */}
        <div className="w-full max-w-[370px] flex flex-col divide-y divide-[#C5C5C5]">
          <div className="py-4 flex justify-between items-center">
            <span className="font-sans text-[16px] text-[#015E47]">Where</span>
            <span className="font-sans font-semibold text-[16px] text-[#042E23]">Almora, Uttrakhand</span>
          </div>
          <div className="py-4 flex justify-between items-center">
            <span className="font-sans text-[16px] text-[#015E47]">When</span>
            <span className="font-sans font-semibold text-[16px] text-[#042E23]">Summer Season</span>
          </div>
          <div className="py-4 flex justify-between items-center">
            <span className="font-sans text-[16px] text-[#015E47]">Purpose</span>
            <span className="font-sans font-semibold text-[16px] text-[#042E23]">Family Trip</span>
          </div>
        </div>

        {/* Community Story Card */}
        <div className="w-full max-w-[370px] bg-white rounded-[32px] p-6 flex flex-col gap-4 shadow-sm border border-stone-100">
          <div className="w-[52px] h-[52px] rounded-full overflow-hidden bg-[#D9D9D9]">
            <UserAvatar name="Community Member" image="/assets/avatar.png" size="lg" />
          </div>
          <p className="font-sans text-[15px] leading-[22px] text-[#042E23]">
            It started as a trip. It became a movement. Now we&apos;re building a community of surfers who choose authentic experiences over everything else.
          </p>
          <button
            onClick={onOpenStory}
            className="w-full flex items-center justify-between group cursor-pointer pt-2 border-t border-stone-100"
          >
            <span className="font-sans font-medium text-[16px] text-[#042E23] group-hover:text-[#007C4D] transition">
              Read Our Story
            </span>
            <div className="w-8 h-8 rounded-full bg-[#F0ECDB] group-hover:bg-[#007C4D] text-[#747474] group-hover:text-white flex items-center justify-center transition">
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE US - TESTIMONIALS */}
      <section className="w-full bg-white py-10 px-4 flex flex-col items-center">
        <div className="text-center mb-6">
          <span className="font-sans text-[16px] text-[#1E1E1E] block mb-1">Why Choose Us</span>
          <h2 className="font-lustria text-[24px] sm:text-[28px] leading-[30px] text-[#1E1E1E]">
            We’ve planned everything for you:
          </h2>
        </div>

        <div className="w-full max-w-[370px] flex flex-col gap-4">
          {/* Card 1: David Lee */}
          <div className="w-full bg-[#F6F5F1] rounded-[32px] p-6 flex flex-col gap-4 shadow-xs border border-stone-100/80">
            <div className="flex items-center gap-3">
              <div className="w-[52px] h-[52px] rounded-full overflow-hidden shrink-0 bg-[#D9D9D9]">
                <UserAvatar name="David Lee" image="/assets/avatar.png" size="lg" />
              </div>
              <div>
                <h4 className="font-sans font-medium text-[20px] leading-[26px] text-[#042E23]">David Lee</h4>
                <p className="font-sans text-[14px] text-[#4E4E4E]">Professor</p>
              </div>
            </div>
            <p className="font-sans text-[14px] leading-[22px] text-[#747474]">
              Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world.
            </p>
          </div>

          {/* Card 2: Sarah Machillie */}
          <div className="w-full bg-[#F6F5F1] rounded-[32px] p-6 flex flex-col gap-4 shadow-xs border border-stone-100/80">
            <div className="flex items-center gap-3">
              <div className="w-[52px] h-[52px] rounded-full overflow-hidden shrink-0 bg-[#D9D9D9]">
                <UserAvatar name="Sarah Machillie" image="/assets/avatar.png" size="lg" />
              </div>
              <div>
                <h4 className="font-sans font-medium text-[20px] leading-[26px] text-[#042E23]">Sarah Machillie</h4>
                <p className="font-sans text-[14px] text-[#4E4E4E]">Doctor</p>
              </div>
            </div>
            <p className="font-sans text-[14px] leading-[22px] text-[#747474]">
              Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHY CHOOSE US - ACCORDION STEPS */}
      <section className="w-full bg-[#FFF9E8] py-10 px-4 flex flex-col items-center">
        <div className="text-center mb-6">
          <span className="font-sans text-[16px] text-[#1E1E1E] block mb-1">Why Choose Us</span>
          <h2 className="font-lustria text-[24px] sm:text-[28px] leading-[30px] text-[#1E1E1E]">
            We’ve planned everything for you:
          </h2>
        </div>

        <div className="w-full max-w-[370px] flex flex-col divide-y divide-[#CECECE]">
          {/* Step 1 */}
          <div className="py-4">
            <button
              type="button"
              onClick={() => setOpenStep(openStep === 1 ? 0 : 1)}
              className="w-full flex justify-between items-center text-left focus:outline-none"
            >
              <div>
                <span className="font-sans text-[14px] text-[#1E1E1E] block mb-0.5">Step 1</span>
                <h3 className="font-lustria text-[20px] text-[#1E1E1E]">Arrival and Meet the Crew</h3>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#EFE9D8] flex items-center justify-center shrink-0">
                {openStep === 1 ? <ChevronUp className="w-4 h-4 text-[#1E1E1E]" /> : <ChevronDown className="w-4 h-4 text-[#1E1E1E]" />}
              </div>
            </button>

            {openStep === 1 && (
              <div className="mt-6 flex flex-col items-center text-center gap-6 px-1">
                <span className="font-sans font-normal text-[15px] text-[#1E1E1E] underline underline-offset-4 cursor-pointer text-center block">
                  Description
                </span>
                <p className="font-sans text-[15px] leading-[24px] text-[#1E1E1E] text-center max-w-[340px]">
                  Settle into your retreat, meet your hosts and fellow travellers, and kick off your trip with a welcome briefing and sunset dinner surrounded by nature.
                </p>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="px-7 py-3 bg-[#007C4D] hover:bg-[#00633D] text-white rounded-full font-sans font-medium text-[16px] text-center shadow-xs active:scale-95 transition inline-flex items-center justify-center min-w-[148px] h-[48px]"
                >
                  Book a Call
                </button>
              </div>
            )}
          </div>

          {/* Step 2 (Open state matching screenshot) */}
          <div className="py-5">
            <button
              type="button"
              onClick={() => setOpenStep(openStep === 2 ? 0 : 2)}
              className="w-full flex justify-between items-center text-left focus:outline-none"
            >
              <div>
                <span className="font-sans text-[14px] text-[#1E1E1E] block mb-0.5">Step 2</span>
                <h3 className="font-lustria text-[20px] text-[#1E1E1E]">Check in and Hospitality</h3>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#EFE9D8] flex items-center justify-center shrink-0">
                {openStep === 2 ? <ChevronUp className="w-4 h-4 text-[#1E1E1E]" /> : <ChevronDown className="w-4 h-4 text-[#1E1E1E]" />}
              </div>
            </button>

            {openStep === 2 && (
              <div className="mt-6 flex flex-col items-center text-center gap-6 px-1">
                <span className="font-sans font-normal text-[15px] text-[#1E1E1E] underline underline-offset-4 cursor-pointer text-center block">
                  Description
                </span>
                <p className="font-sans text-[15px] leading-[24px] text-[#1E1E1E] text-center max-w-[340px]">
                  Morning surf session focusing on technique — pop-ups, positioning, reading waves. You&apos;ll already feel more confident than yesterday. In the afternoon, we&apos;re heading to one of Canggu&apos;s famous beach clubs for lunch, drinks, and good vibes. It&apos;s the perfect mid-week energy — sun, music, ocean views, and your new best friends.
                </p>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="px-7 py-3 bg-[#007C4D] hover:bg-[#00633D] text-white rounded-full font-sans font-medium text-[16px] text-center shadow-xs active:scale-95 transition inline-flex items-center justify-center min-w-[148px] h-[48px]"
                >
                  Book a Call
                </button>
              </div>
            )}
          </div>

          {/* Step 3 (With green 3px bottom border) */}
          <div className="py-4 border-b-[3px] border-[#007C4D]">
            <button
              type="button"
              onClick={() => setOpenStep(openStep === 3 ? 0 : 3)}
              className="w-full flex justify-between items-center text-left focus:outline-none"
            >
              <div>
                <span className="font-sans text-[14px] text-[#1E1E1E] block mb-0.5">Step 3</span>
                <h3 className="font-lustria text-[20px] text-[#1E1E1E]">First Waves & Mountain Vibes</h3>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#EFE9D8] flex items-center justify-center shrink-0">
                {openStep === 3 ? <ChevronUp className="w-4 h-4 text-[#1E1E1E]" /> : <ChevronDown className="w-4 h-4 text-[#1E1E1E]" />}
              </div>
            </button>

            {openStep === 3 && (
              <div className="mt-6 flex flex-col items-center text-center gap-6 px-1">
                <span className="font-sans font-normal text-[15px] text-[#1E1E1E] underline underline-offset-4 cursor-pointer text-center block">
                  Description
                </span>
                <p className="font-sans text-[15px] leading-[24px] text-[#1E1E1E] text-center max-w-[340px]">
                  Explore pristine mountain landscapes, enjoy guided outdoor treks, and unwind by the campfire with fellow travellers under starry night skies.
                </p>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="px-7 py-3 bg-[#007C4D] hover:bg-[#00633D] text-white rounded-full font-sans font-medium text-[16px] text-center shadow-xs active:scale-95 transition inline-flex items-center justify-center min-w-[148px] h-[48px]"
                >
                  Book a Call
                </button>
              </div>
            )}
          </div>

          {/* Step 4 */}
          <div className="py-4">
            <button
              type="button"
              onClick={() => setOpenStep(openStep === 4 ? 0 : 4)}
              className="w-full flex justify-between items-center text-left focus:outline-none"
            >
              <div>
                <span className="font-sans text-[14px] text-[#1E1E1E] block mb-0.5">Step 4</span>
                <h3 className="font-lustria text-[20px] text-[#1E1E1E]">Final Meet and Check Out</h3>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#EFE9D8] flex items-center justify-center shrink-0">
                {openStep === 4 ? <ChevronUp className="w-4 h-4 text-[#1E1E1E]" /> : <ChevronDown className="w-4 h-4 text-[#1E1E1E]" />}
              </div>
            </button>

            {openStep === 4 && (
              <div className="mt-6 flex flex-col items-center text-center gap-6 px-1">
                <span className="font-sans font-normal text-[15px] text-[#1E1E1E] underline underline-offset-4 cursor-pointer text-center block">
                  Description
                </span>
                <p className="font-sans text-[15px] leading-[24px] text-[#1E1E1E] text-center max-w-[340px]">
                  Wrap up your stay with a farewell breakfast, photo exchange, and easy check-out arrangements for your onward journey.
                </p>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="px-7 py-3 bg-[#007C4D] hover:bg-[#00633D] text-white rounded-full font-sans font-medium text-[16px] text-center shadow-xs active:scale-95 transition inline-flex items-center justify-center min-w-[148px] h-[48px]"
                >
                  Book a Call
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 9: BODY, SOUL, MIND AND CONNECTION */}
      <section className="w-full bg-[#FFF9E8] py-10 px-4 flex flex-col gap-6 items-center">
        {/* Top Image & Glass Overlay Card */}
        <div className="relative w-full max-w-[370px] h-[340px] rounded-[32px] overflow-hidden shadow-xl">
          <img
            src="/assets/purple room.jpg"
            alt="Mountain view room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
          <div className="absolute top-4 left-4 right-4 z-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/25 rounded-[24px] p-5 text-white flex flex-col gap-2 shadow-lg">
              <h3 className="font-lustria text-[22px] font-normal leading-[115%] text-white">
                Body, soul, mind, and connection — we&apos;ve got it all
              </h3>
              <p className="font-sans text-[13px] leading-[18px] text-white/90">
                This camp isn&apos;t just about surfing. It&apos;s about the whole experience.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Stacked White Pill Cards */}
        <div className="w-full max-w-[370px] flex flex-col gap-4">
          {/* Card 1: for body */}
          <div className="bg-white p-5 rounded-[28px] border border-stone-100/80 shadow-xs relative flex flex-col justify-between min-h-[150px]">
            <span className="font-sans text-[12px] font-normal text-[#686868] block mb-1">
              for body
            </span>
            <div className="pr-12">
              <h4 className="font-lustria text-[20px] text-[#042E23] mb-1">Yoga and Meditation</h4>
              <p className="font-sans text-[13px] text-[#686868] leading-[18px]">
                Stretch out your surf-tired muscles with sunset yoga and start your mornings centered with guided meditation sessions.
              </p>
            </div>
            <div
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-xs"
              style={{ background: 'radial-gradient(circle at center, #FFEF44 0%, #FFB133 100%)' }}
            >
              🧘‍♀️
            </div>
          </div>

          {/* Card 2: for mind */}
          <div className="bg-white p-5 rounded-[28px] border border-stone-100/80 shadow-xs relative flex flex-col justify-between min-h-[150px]">
            <span className="font-sans text-[12px] font-normal text-[#686868] block mb-1">
              for mind
            </span>
            <div className="pr-12">
              <h4 className="font-lustria text-[20px] text-[#042E23] mb-1">Culture and Growth</h4>
              <p className="font-sans text-[13px] text-[#686868] leading-[18px]">
                Learn the stories behind the island at local markets and connect over dinners designed for real conversations.
              </p>
            </div>
            <div
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-xs"
              style={{ background: 'radial-gradient(circle at center, #FFE6E6 0%, #FFB2C4 100%)' }}
            >
              🧠
            </div>
          </div>

          {/* Card 3: for fun */}
          <div className="bg-white p-5 rounded-[28px] border border-stone-100/80 shadow-xs relative flex flex-col justify-between min-h-[150px]">
            <span className="font-sans text-[12px] font-normal text-[#686868] block mb-1">
              for fun
            </span>
            <div className="pr-12">
              <h4 className="font-lustria text-[20px] text-[#042E23] mb-1">Adventures Together</h4>
              <p className="font-sans text-[13px] text-[#686868] leading-[18px]">
                Discover hidden beaches on scooters, ask your way through night markets, and stay up late swapping travel stories.
              </p>
            </div>
            <div
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-xs"
              style={{ background: 'radial-gradient(circle at center, #C6FFE5 0%, #007C4D 100%)' }}
            >
              🚴
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: DARK EMERALD MOBILE FOOTER */}
      <footer className="w-full bg-[#005B41] text-white pt-12 pb-8 px-5 flex flex-col justify-between items-center font-sans">
        <div className="w-full max-w-[370px] mx-auto flex flex-col gap-9 items-center">
          {/* 1. Logo & Contact Info */}
          <div className="flex flex-col items-center text-center gap-3">
            <SkymystLogo variant="light" onClick={() => onNavigate('home')} size="lg" />

            <div className="flex flex-col items-center gap-1 mt-3">
              <a href="tel:+919876543210" className="font-sans text-[22px] font-normal text-[#FFED25] tracking-wide hover:underline text-center block">
                +91 987 6543 210
              </a>
              <a href="mailto:contactskymyst@gmail.com" className="font-sans text-[18px] font-normal text-[#FFED25] tracking-normal hover:underline text-center block">
                contactskymyst@gmail.com
              </a>
            </div>

            <div className="font-sans text-[15px] font-normal text-white/90 leading-[22px] text-center max-w-[320px] mt-1">
              <p>Waveyu Surf Camp</p>
              <p>Jalan Pantai Batu Bolong No. 27,</p>
              <p>Canggu, Kuta Utara, Badung, Bali 80361, Indonesia</p>
            </div>
          </div>

          {/* 2. Subscribe Section */}
          <div className="w-full flex flex-col gap-3.5">
            <h3 className="font-lustria font-normal text-[26px] leading-[32px] text-white text-left">
              Subscribe
            </h3>
            <form onSubmit={handleSubscribe} className="w-full flex items-center gap-3">
              <div className="flex-1 h-[50px] rounded-full bg-[#007052] border border-transparent px-5 flex items-center shadow-xs">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Sign up to our newsletter"
                  required
                  className="w-full bg-transparent font-sans text-[13px] font-medium text-white placeholder:text-white/80 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="h-[50px] px-6 rounded-full bg-[#042E23] hover:bg-[#021f17] text-white font-sans text-[15px] font-medium transition active:scale-95 shrink-0 shadow-md flex items-center justify-center"
              >
                {subscribed ? <Check className="w-5 h-5 text-[#FFED25]" /> : 'Sign Up'}
              </button>
            </form>
          </div>

          {/* 3. Navigation Links List */}
          <div className="w-full flex flex-col divide-y divide-[#007052] border-t border-b border-[#007052]">
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="py-4 px-1 flex justify-between items-center font-sans text-[16px] text-white hover:text-[#FFED25] transition text-left cursor-pointer"
            >
              <span>About Us</span>
              <ChevronRight className="w-5 h-5 text-white/90" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('partner')}
              className="py-4 px-1 flex justify-between items-center font-sans text-[16px] text-white hover:text-[#FFED25] transition text-left cursor-pointer"
            >
              <span>FAQ</span>
              <ChevronRight className="w-5 h-5 text-white/90" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('partner')}
              className="py-4 px-1 flex justify-between items-center font-sans text-[16px] text-white hover:text-[#FFED25] transition text-left cursor-pointer"
            >
              <span>Become a partner</span>
              <ChevronRight className="w-5 h-5 text-white/90" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="py-4 px-1 flex justify-between items-center font-sans text-[16px] text-white hover:text-[#FFED25] transition text-left cursor-pointer"
            >
              <span>Testimonials</span>
              <ChevronRight className="w-5 h-5 text-white/90" />
            </button>
          </div>

          {/* 4. Bottom Strip (Copyright, Legal Links, Social Icons) */}
          <div className="w-full flex flex-col items-center gap-4 text-center pt-2">
            <p className="font-sans text-[16px] font-normal text-white">
              © Skymyst 2026, Inc
            </p>

            <div className="flex items-center justify-center space-x-3 text-[15px] font-normal text-white">
              <button type="button" onClick={() => alert('Terms of Service')} className="hover:text-[#FFED25] hover:underline transition cursor-pointer">
                Terms
              </button>
              <span className="text-white/60">|</span>
              <button type="button" onClick={() => alert('Privacy Policy')} className="hover:text-[#FFED25] hover:underline transition cursor-pointer">
                Privacy
              </button>
              <span className="text-white/60">|</span>
              <button type="button" onClick={() => alert('Refund Policy')} className="hover:text-[#FFED25] hover:underline transition cursor-pointer">
                Refund policy
              </button>
            </div>

            <div className="flex items-center justify-center space-x-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
              >
                <Facebook className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeScreenMobile;
