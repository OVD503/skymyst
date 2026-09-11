import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, ChevronRight, ChevronLeft, Star, Heart, Calendar, MapPin, Users, Home } from 'lucide-react';
import { motion } from 'motion/react';
import { ScreenPage } from '../types';
import { DESTINATIONS, PROPERTIES, TESTIMONIALS } from '../data/Data';

interface HomeScreenProps {
  onNavigate: (page: ScreenPage) => void;
  onSelectProperty: (propertyId: string) => void;
  onOpenContact: () => void;
  onOpenStory: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectProperty,
  onOpenContact,
  onOpenStory,
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('All Locations');
  const [selectedProperty, setSelectedProperty] = useState<string>('all');
  const [selectedDayStart, setSelectedDayStart] = useState<number>(12);
  const [selectedDayEnd, setSelectedDayEnd] = useState<number>(16);
  const [checkInDate, setCheckInDate] = useState<string>('Oct 12, 2026');
  const [checkOutDate, setCheckOutDate] = useState<string>('Oct 16, 2026');
  const [guestsCount, setGuestsCount] = useState<number>(4);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [expandedStep, setExpandedStep] = useState<number>(2);

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

  return (
    <div className="w-full bg-[#FFF9E8]">
      {/* 1. Hero Section (Image 7) */}
      <section className="relative h-screen min-h-[680px] sm:min-h-[780px] w-full flex items-center justify-center">
        {/* Cinematic background video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-[0.75]"
          >
            <source src="/assets/bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        {/* Hero Title */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4 -mt-16">
          <h1 className="font-casiome-impera hero-title text-4xl sm:text-6xl md:text-7xl text-white font-semibold tracking-tight leading-[1.1]">
            A Place to Stay.
            <br />A Feeling to Keep.
          </h1>
        </div>

        {/* Floating Search Bar (Perfect Rectangle) */}
        <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-30 px-4">
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl p-3 sm:p-4 flex flex-col lg:flex-row items-stretch lg:items-center gap-3 border border-stone-200 relative transition-all"
          >
            {/* 1. LOCATION */}
            <div className="flex-1 px-3 py-1.5 border-b lg:border-b-0 lg:border-r border-stone-200">
              <label className="flex items-center space-x-1.5 text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-0.5">
                <MapPin className="w-3 h-3 text-[#005B41]" />
                <span>Location</span>
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full text-xs sm:text-sm font-semibold text-stone-800 focus:outline-none bg-transparent cursor-pointer"
              >
                <option value="All Locations">All Locations (Uttrakhand)</option>
                <option value="Almora">Almora, Uttrakhand</option>
                <option value="Bhimtal">Bhimtal, Uttrakhand</option>
                <option value="Bhowali">Bhowali, Uttrakhand</option>
              </select>
            </div>

            {/* 2. STAYS (Linked to real data PROPERTIES) */}
            <div className="flex-1 px-3 py-1.5 border-b lg:border-b-0 lg:border-r border-stone-200">
              <label className="flex items-center space-x-1.5 text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-0.5">
                <Home className="w-3 h-3 text-[#005B41]" />
                <span>Stays</span>
              </label>
              <select
                value={selectedProperty}
                onChange={(e) => setSelectedProperty(e.target.value)}
                className="w-full text-xs sm:text-sm font-semibold text-stone-800 focus:outline-none bg-transparent cursor-pointer truncate"
              >
                <option value="all">All Stays (Curated Collection)</option>
                {PROPERTIES.map((prop) => (
                  <option key={prop.id} value={prop.id}>
                    {prop.name} ({prop.location})
                  </option>
                ))}
              </select>
            </div>

            {/* 3. DATES (With Visual Calendar Picker Popup) */}
            <div className="flex-1 px-3 py-1.5 border-b lg:border-b-0 lg:border-r border-stone-200 relative">
              <label className="flex items-center space-x-1.5 text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-0.5">
                <Calendar className="w-3 h-3 text-[#005B41]" />
                <span>Dates</span>
              </label>
              <button
                type="button"
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="w-full text-left text-xs sm:text-sm font-semibold text-stone-800 focus:outline-none bg-transparent flex items-center justify-between"
              >
                <span className="truncate">
                  {checkInDate ? (checkOutDate ? `${checkInDate} - ${checkOutDate}` : checkInDate) : 'Select Dates'}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400 shrink-0 ml-1" />
              </button>

              {/* Visual Calendar Dropdown Popup - Positioned Upwards to Prevent Clipping */}
              {showDatePicker && (
                <div className="absolute bottom-full left-0 sm:left-auto lg:-left-12 mb-3 bg-white rounded-2xl shadow-2xl border border-stone-200 p-5 z-50 w-80 sm:w-96 text-stone-900 animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex justify-between items-center pb-3 border-b border-stone-100 mb-3">
                    <div>
                      <span className="text-xs font-bold text-stone-900 block">Select Travel Dates</span>
                      <span className="text-[11px] text-stone-500 font-normal">
                        {selectedDayStart ? `Oct ${selectedDayStart}` : 'Select Check-in'}{' '}
                        {selectedDayEnd ? `- Oct ${selectedDayEnd}, 2026` : ''}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowDatePicker(false)}
                      className="w-6 h-6 rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 flex items-center justify-center text-xs font-bold"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Month Header */}
                  <div className="flex items-center justify-between mb-3 px-1">
                    <button
                      type="button"
                      className="p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                      October 2026
                    </span>
                    <button
                      type="button"
                      className="p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Day Names Header */}
                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold text-stone-400 uppercase mb-1">
                    <span>Su</span>
                    <span>Mo</span>
                    <span>Tu</span>
                    <span>We</span>
                    <span>Th</span>
                    <span>Fr</span>
                    <span>Sa</span>
                  </div>

                  {/* Days Grid (October 2026 starts on Thursday) */}
                  <div className="grid grid-cols-7 gap-1 text-center text-xs mb-4">
                    <div />
                    <div />
                    <div />
                    <div />
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => {
                      const isStart = d === selectedDayStart;
                      const isEnd = d === selectedDayEnd;
                      const inRange =
                        selectedDayStart &&
                        selectedDayEnd &&
                        d > selectedDayStart &&
                        d < selectedDayEnd;

                      return (
                        <button
                          key={d}
                          type="button"
                          onClick={() => handleDayClick(d)}
                          className={`h-8 w-8 rounded-full flex items-center justify-center font-medium transition text-xs mx-auto ${
                            isStart || isEnd
                              ? 'bg-[#005B41] text-white font-bold shadow-sm'
                              : inRange
                              ? 'bg-emerald-100 text-[#005B41] font-semibold'
                              : 'text-stone-700 hover:bg-stone-100'
                          }`}
                        >
                          {d}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedDayStart(12);
                        setSelectedDayEnd(16);
                        setCheckInDate('Oct 12, 2026');
                        setCheckOutDate('Oct 16, 2026');
                      }}
                      className="text-[11px] font-medium text-stone-500 underline hover:text-stone-900"
                    >
                      Reset Dates
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowDatePicker(false)}
                      className="px-4 py-1.5 bg-[#005B41] hover:bg-[#004030] text-white text-xs font-semibold rounded-lg shadow-sm transition"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 4. GUESTS (Supporting up to 12 Guests) */}
            <div className="flex-1 px-3 py-1.5 flex items-center justify-between">
              <div className="w-full">
                <label className="flex items-center space-x-1.5 text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-0.5">
                  <Users className="w-3 h-3 text-[#005B41]" />
                  <span>Guests</span>
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(Number(e.target.value))}
                  className="w-full text-xs sm:text-sm font-semibold text-stone-800 focus:outline-none bg-transparent cursor-pointer"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'} (up to 12)
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="hero-find-trip-btn"
                className="ml-3 px-6 py-3.5 rounded-xl bg-[#004030] hover:bg-[#002f23] text-white flex items-center space-x-2 text-xs sm:text-sm font-semibold transition shrink-0 shadow-md active:scale-95"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Find Trip Now</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 2. Featured Properties Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-sm font-normal text-stone-700 block mb-1">
              Featured Properties
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
              Handpick stays, Just for you.
            </h2>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                const container = document.getElementById('featured-properties-slider');
                if (container) container.scrollBy({ left: -320, behavior: 'smooth' });
              }}
              className="p-2.5 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition"
              aria-label="Previous properties"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const container = document.getElementById('featured-properties-slider');
                if (container) container.scrollBy({ left: 320, behavior: 'smooth' });
              }}
              className="p-2.5 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition"
              aria-label="Next properties"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('search')}
              id="featured-see-all-btn"
              className="px-6 py-2.5 rounded-full border border-stone-700 text-stone-800 text-sm font-medium hover:bg-stone-900 hover:text-white transition shrink-0"
            >
              See All
            </button>
          </div>
        </div>

        {/* Sliding Row Container for All 5 Cards */}
        <div
          id="featured-properties-slider"
          className="flex overflow-x-auto gap-6 pb-6 pt-2 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {PROPERTIES.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() => {
                onSelectProperty(prop.id);
                onNavigate('property');
              }}
              className="group cursor-pointer flex flex-col justify-between w-[280px] sm:w-[290px] lg:w-[300px] shrink-0 snap-start"
            >
              <div>
                {/* Standalone Rounded Image Container with Badge */}
                <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-stone-100 mb-3 shadow-xs group-hover:shadow-md transition">
                  <img
                    src={prop.images[0]}
                    alt={prop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {prop.discountBadge && (
                    <span className="absolute top-3 right-3 bg-[#005B41] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs">
                      {prop.discountBadge}
                    </span>
                  )}
                  {prop.isPremium && !prop.discountBadge && (
                    <span className="absolute top-3 right-3 bg-[#FFC107] text-stone-900 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center space-x-1">
                      <span>👑</span>
                      <span>Premium</span>
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <h3 className="font-semibold text-base text-[#005B41] group-hover:underline transition line-clamp-1">
                    {prop.name}
                  </h3>
                  <p className="text-xs text-stone-600 font-normal">
                    {prop.location}{prop.state ? `, ${prop.state}` : ''}
                  </p>

                  <div className="flex items-center space-x-1.5 pt-1 text-xs">
                    <span className="bg-[#005B41] text-white font-bold text-[11px] px-1.5 py-0.5 rounded-xs">
                      {prop.rating.toFixed(1)}
                    </span>
                    <span className="font-bold text-stone-900">{prop.ratingLabel}</span>
                    <span className="text-stone-500">({prop.reviewsCount} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="mt-3 space-y-0.5">
                <div className="flex items-baseline space-x-1.5">
                  <span className="font-bold text-stone-900 text-base sm:text-lg">
                    ₹{prop.pricePerNight.toLocaleString()}
                  </span>
                  {prop.originalPricePerNight && (
                    <span className="text-xs text-stone-400 line-through">
                      ₹{prop.originalPricePerNight.toLocaleString()}
                    </span>
                  )}
                  <span className="text-xs text-stone-600">per night</span>
                </div>
                <p className="text-[11px] text-stone-500">
                  ₹{prop.totalPrice.toLocaleString()} total
                </p>
                <p className="text-[11px] text-stone-500">
                  includes taxes & fees
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Curated Collection (Stays for every kind of gateway) */}
      <section className="bg-[#FFF9E8] py-16 sm:py-20 border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-1">
                Curated Collection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
                Stays for every kind of gateway
              </h2>
            </div>
            <button
              onClick={() => onNavigate('search')}
              id="curated-explore-stays-btn"
              className="px-6 py-2.5 rounded-full border border-stone-800 text-stone-800 text-xs sm:text-sm font-medium hover:bg-[#004030] hover:text-white hover:border-[#004030] transition shrink-0 active:scale-95 shadow-2xs"
            >
              Explore Stays
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Bonfire Nights */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative h-96 sm:h-[420px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src="/assets/bonfire.png"
                alt="Bonfire Nights with friends playing guitar"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-amber-200">
                  Bonfire Nights
                </h3>
                <p className="text-xs sm:text-sm text-stone-200/90 max-w-md leading-relaxed font-light">
                  Every morning begins the same. Somewhere along the way, silence became a luxury.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Romantic Honeymoon */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative h-96 sm:h-[420px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=85"
                alt="Romantic honeymoon couple"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-amber-200">
                  Romantic Honeymoon
                </h3>
                <p className="text-xs sm:text-sm text-stone-200/90 max-w-md leading-relaxed font-light">
                  Every vibration asks for your attention. Waves never ask anything from you. They
                  simply arrive.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Explore by Destination */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#7CA4C5] via-[#A1BFD8] to-[#FFF9E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left text-white mb-12">
            <span className="text-xs font-semibold text-white/80 uppercase tracking-widest block mb-1">
              Destinations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal drop-shadow-sm">
              Explore by destination
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {DESTINATIONS.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.07,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => dest.available && onNavigate('search')}
                className={`relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md group ${dest.available ? 'cursor-pointer' : 'cursor-default'
                  }`}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {dest.badge && (
                  <span className="absolute top-2.5 right-2.5 bg-red-600/90 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
                    {dest.badge}
                  </span>
                )}

                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                    {dest.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Guest Stories (Loved by many of travellers — Bali) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">
                Guest Stories
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal leading-tight">
                Loved by many of travellers
                <br />
                — Bali
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Bali has drawn surfers since the 70s: a legendary destination with waves for every
              level. Surf every day, explore the island, and connect with people from all around the
              world. This is the kind of trip that stays with you long after you leave.
            </p>

            <button
              onClick={onOpenContact}
              className="px-6 py-2.5 rounded-full bg-[#004030] hover:bg-[#002f23] text-white text-xs sm:text-sm font-medium transition shadow-sm active:scale-95"
            >
              Book a Call
            </button>
          </div>

          {/* Middle: Tall Story Card */}
          <div className="lg:col-span-4">
            <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=85"
                alt="Discover Bali tropical mountains"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full uppercase tracking-wider">
                trip highlights
              </span>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <h3 className="font-serif text-2xl font-medium leading-snug">
                  Discover the
                  <br />
                  Island&apos;s Secrets
                </h3>
                <p className="text-xs text-stone-300 font-light">
                  Waterfalls, temples, jungles and more
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Story summary & Testimonial quote card */}
          <div className="lg:col-span-4 space-y-4">
            {/* Meta Card */}
            <div className="bg-[#FFF9E8] p-5 rounded-2xl border border-stone-200/80 space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span className="text-stone-500 font-medium">Where</span>
                <span className="font-semibold text-stone-900">Almora, Uttrakhand</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span className="text-stone-500 font-medium">When</span>
                <span className="font-semibold text-stone-900">Summer Season</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-500 font-medium">Purpose</span>
                <span className="font-semibold text-stone-900">Family Trip</span>
              </div>
            </div>

            {/* Testimonial Quote Card (with Read Our Story trigger) */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Guest avatar"
                  className="w-10 h-10 rounded-full object-cover border border-stone-200"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                &quot;It started as a trip. It became a movement. Now we&apos;re building a
                community of surfers who choose authentic experiences over everything else.&quot;
              </p>

              <button
                onClick={onOpenStory}
                id="home-read-our-story-btn"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-stone-900 hover:text-[#004030] transition group pt-2"
              >
                <span>Read Our Story</span>
                <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us (We've planned everything for you:) */}
      <section className="bg-[#FFF9E8] py-16 sm:py-24 border-t border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 text-left">
            <span className="text-xs font-normal text-stone-500 block mb-1">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal tracking-tight">
              We&apos;ve planned everything for you:
            </h2>
          </div>

          {/* Step-by-Step Accordion Stack matching exact design */}
          <div className="max-w-5xl space-y-4 relative">

            {/* Step 1 */}
            <div className="bg-[#FFF9E8] rounded-3xl border border-stone-200/60 overflow-hidden shadow-2xs">
              <button
                onClick={() => setExpandedStep(expandedStep === 1 ? 0 : 1)}
                className="w-full p-6 sm:p-7 text-left flex items-center justify-between hover:bg-stone-100/50 transition"
              >
                <div>
                  <span className="text-[11px] text-stone-400 font-normal block mb-1">
                    Step 1
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                    Arrival and Meet the Crew
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-stone-200/60 flex items-center justify-center shrink-0 text-stone-600">
                  {expandedStep === 1 ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>
              {expandedStep === 1 && (
                <div className="p-7 pt-0 border-t border-stone-200/50 text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  Personal airport pickup and scenic mountain transfer to our homestay estate. Meet
                  the community managers and get settled into your private suite with warm local
                  refreshments.
                </div>
              )}
            </div>

            {/* Step 2 (Expanded by default) */}
            <div className="bg-[#FFF9E8] rounded-3xl border border-stone-200/60 overflow-hidden shadow-xs relative">
              <button
                onClick={() => setExpandedStep(expandedStep === 2 ? 0 : 2)}
                className="w-full p-6 sm:p-7 text-left flex items-center justify-between hover:bg-stone-100/50 transition"
              >
                <div>
                  <span className="text-[11px] text-stone-400 font-normal block mb-1">
                    Step 2
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                    Check in and Hospitality
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-stone-200/60 flex items-center justify-center shrink-0 text-stone-600">
                  {expandedStep === 2 ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              {expandedStep === 2 && (
                <div className="p-7 pt-2 border-t border-stone-200/40 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-6 space-y-5">
                    <span className="text-xs text-stone-400 underline underline-offset-4 font-normal block">
                      Description
                    </span>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light max-w-lg">
                      Morning surf session focusing on technique — pop-ups, positioning, reading
                      waves. You&apos;ll already feel more confident than yesterday. In the
                      afternoon, we&apos;re heading to one of Canggu&apos;s famous beach clubs for
                      lunch, drinks, and good vibes. It&apos;s the perfect mid-week energy — sun,
                      music, ocean views, and your new best friends.
                    </p>
                    <button
                      onClick={onOpenContact}
                      className="px-7 py-3 rounded-full bg-[#005B41] hover:bg-[#004030] text-white text-xs font-semibold tracking-wide transition shadow-sm active:scale-95"
                    >
                      Book a Call
                    </button>
                  </div>

                  <div className="md:col-span-6 relative">
                    <img
                      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=85"
                      alt="Lush green mountain valley landscape"
                      className="rounded-[32px] w-full h-56 sm:h-64 object-cover shadow-md"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Step 3 */}
            <div className="bg-[#FFF9E8] rounded-3xl border-b-2 border-emerald-600/70 overflow-hidden shadow-2xs">
              <button
                onClick={() => setExpandedStep(expandedStep === 3 ? 0 : 3)}
                className="w-full p-6 sm:p-7 text-left flex items-center justify-between hover:bg-stone-100/50 transition"
              >
                <div>
                  <span className="text-[11px] text-stone-400 font-normal block mb-1">
                    Step 3
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                    First Waves & Mountain Vibes
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-stone-200/60 flex items-center justify-center shrink-0 text-stone-600">
                  {expandedStep === 3 ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>
              {expandedStep === 3 && (
                <div className="p-7 pt-0 border-t border-stone-200/50 text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  Guided morning treks, panoramic sunrise breakfasts, and afternoon excursions
                  immersing in local culture and heritage workshops.
                </div>
              )}
            </div>

            {/* Step 4 */}
            <div className="bg-[#FFF9E8] rounded-3xl border border-stone-200/60 overflow-hidden shadow-2xs">
              <button
                onClick={() => setExpandedStep(expandedStep === 4 ? 0 : 4)}
                className="w-full p-6 sm:p-7 text-left flex items-center justify-between hover:bg-stone-100/50 transition"
              >
                <div>
                  <span className="text-[11px] text-stone-400 font-normal block mb-1">
                    Step 4
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                    Final Meet and Check Out
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-stone-200/60 flex items-center justify-center shrink-0 text-stone-600">
                  {expandedStep === 4 ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>
              {expandedStep === 4 && (
                <div className="p-7 pt-0 border-t border-stone-200/50 text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  Farewell brunch with handcrafted souvenirs, memories capture session, and seamless
                  concierge transfer onwards.
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 7. Body, soul, mind, and connection — we've got it all */}
      <section className="bg-[#FFF9E8] py-16 sm:py-24 border-t border-stone-200/60">
        <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

            {/* Left Column: Full-height Sunlit Mountain Room Card with overlay text in transparent card */}
            <div className="lg:col-span-7">
              <div className="relative h-full min-h-[480px] sm:min-h-[560px] rounded-[32px] overflow-hidden shadow-xl">
                <img
                  src="/assets/peace.png"
                  alt="Sunlit mountain view room with glass table and seating"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />

                <div className="absolute top-6 sm:top-8 left-6 sm:left-8 right-6 sm:right-8">
                  <div className="bg-black/35 backdrop-blur-xl border border-white/20 rounded-[28px] p-6 sm:p-8 text-white space-y-4 shadow-2xl">
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.2] text-white tracking-tight">
                      Body, soul, mind, and connection — we&apos;ve got it all
                    </h2>
                    <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed">
                      This camp isn&apos;t just about surfing. It&apos;s about the whole experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 3 White Pill Feature Cards with colorful circular icon buttons */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">

              {/* 1. Yoga and Meditation */}
              <div className="bg-white p-7 sm:p-8 rounded-[32px] border border-stone-100 shadow-xs space-y-3 relative flex-1">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 max-w-md">
                    <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                      Yoga and Meditation
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-light">
                      Stretch out your surf-tired muscles with sunset yoga and start your mornings
                      centered with guided meditation sessions.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#F59E0B] text-white flex items-center justify-center shrink-0 font-bold text-base shadow-sm">

                  </div>
                </div>
              </div>

              {/* 2. Culture and Growth */}
              <div className="bg-white p-7 sm:p-8 rounded-[32px] border border-stone-100 shadow-xs space-y-3 relative flex-1">
                <span className="text-[11px] text-stone-400 font-normal block">
                  for mind
                </span>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 max-w-md">
                    <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                      Culture and Growth
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-light">
                      Learn the stories behind the island at local markets and connect over dinners
                      designed for real conversations.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#EC4899] text-white flex items-center justify-center shrink-0 font-bold text-base shadow-sm">

                  </div>
                </div>
              </div>

              {/* 3. Adventures Together */}
              <div className="bg-white p-7 sm:p-8 rounded-[32px] border border-stone-100 shadow-xs space-y-3 relative flex-1">
                <span className="text-[11px] text-stone-400 font-normal block">
                  for fun
                </span>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 max-w-md">
                    <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                      Adventures Together
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-light">
                      Discover hidden beaches on scooters, ask your way through night markets, and stay
                      up late swapping travel stories.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0 font-bold text-base shadow-sm">

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
