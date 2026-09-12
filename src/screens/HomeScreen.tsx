import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, ChevronRight, ChevronLeft, Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { ScreenPage } from '../types';
import { DESTINATIONS } from '../data/Data';
import { UserAvatar } from '../components/UserAvatar';

interface HomeScreenProps {
  properties: import('../types').Property[];
  onNavigate: (page: ScreenPage) => void;
  onSelectProperty: (propertyId: string) => void;
  onOpenContact: () => void;
  onOpenStory: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  properties,
  onNavigate,
  onSelectProperty,
  onOpenContact,
  onOpenStory,
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('Add Destination');
  const [selectedProperty, setSelectedProperty] = useState<string>('all');
  const [selectedDayStart, setSelectedDayStart] = useState<number>(0);
  const [selectedDayEnd, setSelectedDayEnd] = useState<number>(0);
  const [checkInDate, setCheckInDate] = useState<string>('');
  const [checkOutDate, setCheckOutDate] = useState<string>('');
  const [guestsCount, setGuestsCount] = useState<number>(0);
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
    <div className="w-full bg-[#FFF9E8] font-sans antialiased text-stone-800">
      {/* 1. Hero Section (Uses bg.png background image with curved bottom edges) */}
      <section className="relative h-[95vh] min-h-[580px] max-h-[850px] w-full flex items-center justify-center overflow-hidden rounded-b-[45px] sm:rounded-b-[75px] md:rounded-b-[110px] shadow-sm">
        {/* Background Image bg.png */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-b-[45px] sm:rounded-b-[75px] md:rounded-b-[110px]">
          <img
            src="/assets/bg.png"
            alt="Skymyst Mountain Stays"
            className="w-full h-full object-cover object-center brightness-[0.80]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        {/* Hero Title - Exact match from image */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4 -mt-16 sm:-mt-12">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[84px] text-white font-normal tracking-tight leading-[1.12] drop-shadow-md">
            Exceptional Stays.
            <br />
            Seamlessly managed.
          </h1>
        </div>

        {/* Floating Search Bar (Exact pill style matching image) */}
        <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-0 right-0 z-30 px-3 sm:px-6">
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-4xl mx-auto bg-white rounded-2xl md:rounded-full shadow-2xl p-2 sm:p-2.5 pl-6 sm:pl-8 flex flex-col md:flex-row items-center justify-between border border-stone-200/80 transition-all gap-3 md:gap-0"
          >
            {/* 1. Add Destination */}
            <div className="flex-1 w-full md:w-auto py-1 md:py-0 pr-4 border-b md:border-b-0 md:border-r border-stone-200 flex items-center">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full text-stone-600 font-normal text-sm sm:text-base bg-transparent focus:outline-none cursor-pointer appearance-none"
              >
                <option value="Add Destination">Add Destination</option>
                <option value="Almora">Almora, Uttarakhand</option>
                <option value="Bhimtal">Bhimtal, Uttarakhand</option>
                <option value="Bhowali">Bhowali, Uttarakhand</option>
                <option value="Mukteshwar">Mukteshwar, Uttarakhand</option>
              </select>
            </div>

            {/* 2. Add Dates */}
            <div className="flex-1 w-full md:w-auto py-1 md:py-0 px-4 md:px-6 border-b md:border-b-0 md:border-r border-stone-200 relative flex items-center">
              <button
                type="button"
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="w-full text-left text-stone-600 font-normal text-sm sm:text-base focus:outline-none bg-transparent truncate"
              >
                {checkInDate ? (checkOutDate ? `${checkInDate} - ${checkOutDate}` : checkInDate) : 'Add Dates'}
              </button>

              {/* Date Picker Dropdown */}
              {showDatePicker && (
                <div className="absolute bottom-full left-0 md:-left-12 mb-3 bg-white rounded-2xl shadow-2xl border border-stone-200 p-5 z-50 w-80 sm:w-96 text-stone-900 animate-in fade-in zoom-in-95 duration-150">
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

                  <div className="flex items-center justify-between mb-3 px-1">
                    <button type="button" className="p-1 rounded-md text-stone-400 hover:text-stone-700">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                      October 2026
                    </span>
                    <button type="button" className="p-1 rounded-md text-stone-400 hover:text-stone-700">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold text-stone-400 uppercase mb-1">
                    <span>Su</span>
                    <span>Mo</span>
                    <span>Tu</span>
                    <span>We</span>
                    <span>Th</span>
                    <span>Fr</span>
                    <span>Sa</span>
                  </div>

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
                          className={`h-8 w-8 rounded-full flex items-center justify-center font-medium transition text-xs mx-auto ${isStart || isEnd
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

            {/* 3. Add Guests */}
            <div className="flex-1 w-full md:w-auto py-1 md:py-0 px-4 md:px-6 flex items-center">
              <select
                value={guestsCount === 0 ? '' : guestsCount}
                onChange={(e) => setGuestsCount(Number(e.target.value))}
                className="w-full text-stone-600 font-normal text-sm sm:text-base bg-transparent focus:outline-none cursor-pointer appearance-none"
              >
                <option value="">Add Guests</option>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Action Button */}
            <div className="w-full md:w-auto pl-0 md:pl-2">
              <button
                type="submit"
                id="hero-find-trip-btn"
                className="w-full md:w-auto px-6 sm:px-7 py-3 rounded-full bg-[#005B41] hover:bg-[#004030] text-white flex items-center justify-center space-x-2.5 text-sm sm:text-base font-medium transition shrink-0 shadow-sm active:scale-95"
              >
                <Search className="w-4 sm:w-4.5 h-4 sm:h-4.5 stroke-[2.5]" />
                <span>Find Trip Now</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 2. Featured Properties Section */}
      <section className="max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6 pt-10 sm:pt-14 md:pt-16 pb-3 sm:pb-4 md:pb-6">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <span className="text-sm font-medium text-stone-500 block mb-1">
              Featured Properties
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal">
              Handpick stays, just for you.
            </h2>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                const container = document.getElementById('featured-properties-slider');
                if (container) container.scrollBy({ left: -320, behavior: 'smooth' });
              }}
              className="p-2.5 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-900 hover:text-white transition"
              aria-label="Previous properties"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const container = document.getElementById('featured-properties-slider');
                if (container) container.scrollBy({ left: 320, behavior: 'smooth' });
              }}
              className="p-2.5 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-900 hover:text-white transition"
              aria-label="Next properties"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('search')}
              className="px-6 py-2.5 rounded-full border border-stone-700 text-stone-800 text-xs sm:text-sm font-medium hover:bg-stone-900 hover:text-white transition shrink-0"
            >
              See All
            </button>
          </div>
        </div>

        {/* Property Cards Slider */}
        <div
          id="featured-properties-slider"
          className="flex overflow-x-auto gap-6 pb-2 pt-2 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {properties.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => {
                onSelectProperty(prop.id);
                onNavigate('property');
              }}
              className="group cursor-pointer flex flex-col justify-between w-[250px] sm:w-[280px] lg:w-[290px] shrink-0 snap-start"
            >
              <div>
                <div className="relative aspect-[4/3] rounded-[22px] overflow-hidden bg-stone-100 mb-3 shadow-xs group-hover:shadow-md transition">
                  <img
                    src={prop.images[0]}
                    alt={prop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-semibold text-sm sm:text-base text-[#005B41] group-hover:underline transition line-clamp-1">
                    {prop.name}
                  </h3>
                  <p className="text-xs text-stone-600 flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-[#005B41]" />
                    <span>{prop.location}, {prop.state}</span>
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
      <section className="bg-[#FFF9E8] pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 border-y border-stone-200/60">
        <div className="max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-8 sm:mb-10">
            <div>
              <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest block mb-1">
                Curated Collection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal">
                Stays for every kind of gateway
              </h2>
            </div>

            {/* Right side slider controls */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => {
                  const container = document.getElementById('curated-collection-slider');
                  if (container) container.scrollBy({ left: -480, behavior: 'smooth' });
                }}
                className="p-2.5 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-900 hover:text-white transition cursor-pointer"
                aria-label="Previous collection"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const container = document.getElementById('curated-collection-slider');
                  if (container) container.scrollBy({ left: 480, behavior: 'smooth' });
                }}
                className="p-2.5 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-900 hover:text-white transition cursor-pointer"
                aria-label="Next collection"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            id="curated-collection-slider"
            className="flex overflow-x-auto gap-5 sm:gap-6 pb-6 pt-2 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {/* Card 1: Bonfire Nights */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              onClick={() => onNavigate('search')}
              className="group relative w-[320px] sm:w-[480px] md:w-[560px] lg:w-[620px] shrink-0 snap-start h-72 sm:h-96 md:h-[440px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src="/assets/bonfire.png"
                alt="Bonfire Nights with friends playing guitar"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <h3 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-medium text-amber-200">
                  Bonfire Nights
                </h3>
                <p className="text-xs sm:text-sm text-stone-200/90 max-w-md leading-relaxed font-light">
                  Every morning begins the same. Somewhere along the way, silence became a luxury.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Romantic Honeymoon */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              onClick={() => onNavigate('search')}
              className="group relative w-[280px] sm:w-[420px] md:w-[480px] lg:w-[520px] shrink-0 snap-start h-72 sm:h-96 md:h-[440px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnhL5sBR68yyc6vGRzcfaYfmMGzZGhO152h5jSNRHOM7ekG_euwp6KlTa&s=10"
                alt="Romantic honeymoon couple"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <h3 className="font-serif text-3xl sm:text-4xl font-medium text-amber-200">
                  Romantic Honeymoon
                </h3>
                <p className="text-xs sm:text-sm text-stone-200/90 max-w-md leading-relaxed font-light">
                  Every vibration asks for your attention. Waves never ask anything from you. They
                  simply arrive.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Chasing Sunsets */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              onClick={() => onNavigate('search')}
              className="group relative w-[300px] sm:w-[450px] md:w-[520px] lg:w-[560px] shrink-0 snap-start h-72 sm:h-96 md:h-[440px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYsVh-BGVtNNag0oxnusHdsrWflJ7IV4l8ZBTeVl2yUmuukoedBjUw_ll&s=10"
                alt="Chasing Sunsets"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <h3 className="font-serif text-3xl sm:text-4xl font-medium text-amber-200">
                  Chasing Sunsets
                </h3>
                <p className="text-xs sm:text-sm text-stone-200/90 max-w-md leading-relaxed font-light">
                  Golden hour over serene mountain peaks. Watch the horizon fade into starlit nights.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Moonlit Escapes */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              onClick={() => onNavigate('search')}
              className="group relative w-[300px] sm:w-[450px] md:w-[520px] lg:w-[560px] shrink-0 snap-start h-72 sm:h-96 md:h-[440px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
                alt="Moonlit Escapes"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <h3 className="font-serif text-3xl sm:text-4xl font-medium text-amber-200">
                  Moonlit Escapes
                </h3>
                <p className="text-xs sm:text-sm text-stone-200/90 max-w-md leading-relaxed font-light">
                  Quiet starry skies, cozy fireplaces, and late night conversations under the moonlight.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Explore by Destination (Uses sky.png background image) */}
      <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
        {/* Background Image sky.png */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/sky.png"
            alt="Sky background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#FFF9E8]/20" />
        </div>

        <div className="relative z-10 max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6">
          <div className="text-left text-white mb-6 sm:mb-10">
            <span className="text-sm font-semibold text-white/80 uppercase tracking-widest block mb-1">
              Destinations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal drop-shadow-sm">
              Explore by destination
            </h2>
          </div>

          <div className="flex overflow-x-auto gap-3.5 pb-4 pt-1 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible lg:pb-0 lg:pt-0">
            {DESTINATIONS.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => dest.available && onNavigate('search')}
                className={`relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md group w-[165px] sm:w-[200px] lg:w-full shrink-0 lg:shrink snap-start ${dest.available ? 'cursor-pointer' : 'cursor-default'
                  }`}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                {dest.badge && (
                  <span className="absolute top-2.5 right-2.5 bg-red-600 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
                    {dest.badge}
                  </span>
                )}

                <div className="absolute bottom-3 left-2 right-2 text-center">
                  <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                    {dest.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Guest Stories (Exact match to reference image) */}
      <section className="w-full bg-[#FFF9E8] py-12 sm:py-16 md:py-24">
        <div className="max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
            {/* Left Column: Heading, Body, and Button */}
            <div className="lg:col-span-4 flex flex-col justify-between py-2 space-y-6">
              <div>
                <span className="text-sm sm:text-base font-medium text-[#6C6656] block mb-3">
                  Guest Stories
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-[50px] text-[#2D281E] font-normal leading-[1.15]">
                  Loved by many of
                  <br />
                  travellers
                  <br />
                  — Bali
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#4C4638] leading-[1.7] max-w-sm">
                Bali has drawn surfers since the 70s: a legendary destination with waves for every
                level. Surf every day, explore the island, and connect with people from all around the
                world. This is the kind of trip that stays with you long after you leave.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="px-7 py-3 rounded-full bg-[#005B41] hover:bg-[#004030] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-95"
                >
                  Book a Call
                </button>
              </div>
            </div>

            {/* Middle Column: Tall Story Card */}
            <div className="lg:col-span-4">
              <div className="relative h-[380px] sm:h-[460px] lg:h-[540px] rounded-[32px] overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src="/assets/trip.png"
                  alt="Discover Bali tropical mountains"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <span className="absolute top-5 left-5 bg-white/20 backdrop-blur-md text-white text-[10px] font-normal px-3 py-1 rounded-full uppercase tracking-wider border border-white/25">
                  trip highlights
                </span>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <h3 className="font-serif text-3xl sm:text-4xl font-normal leading-tight drop-shadow-sm">
                    Discover the
                    <br />
                    Island&apos;s Secrets
                  </h3>
                  <p className="text-xs text-stone-200/90 font-light drop-shadow-xs">
                    Waterfalls, temples, jungles and more
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Metadata List & White Quote Card */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              {/* Top: Metadata List (Borderless dividers exact to image) */}
              <div className="space-y-0 px-1 py-2">
                <div className="flex items-center justify-between py-3 border-b border-[#EAE3D2]">
                  <span className="text-xs sm:text-sm text-[#9C9585] font-normal">Where</span>
                  <span className="text-xs sm:text-sm font-bold text-[#2D281E]">Almora, Uttrakhand</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[#EAE3D2]">
                  <span className="text-xs sm:text-sm text-[#9C9585] font-normal">When</span>
                  <span className="text-xs sm:text-sm font-bold text-[#2D281E]">Summer Season</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-xs sm:text-sm text-[#9C9585] font-normal">Purpose</span>
                  <span className="text-xs sm:text-sm font-bold text-[#2D281E]">Family Trip</span>
                </div>
              </div>

              {/* Bottom: White Quote Card */}
              <div className="bg-white p-6 sm:p-8 rounded-[28px] border border-stone-100/80 shadow-xs space-y-6 flex-1 flex flex-col justify-between">
                <div className="flex items-center space-x-3">
                  <UserAvatar name="Guest Traveller" size="lg" />
                </div>

                <p className="text-xs sm:text-sm md:text-base font-semibold text-[#004030] leading-snug tracking-tight">
                  It started as a trip.
                  <br />
                  It became a movement. Now we&apos;re building a community of surfers who choose authentic experiences over everything else.
                </p>

                <button
                  onClick={onOpenStory}
                  className="w-full flex items-center justify-between pt-2 group cursor-pointer border-t border-stone-100"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#2D281E] group-hover:text-[#005B41] transition">
                    Read Our Story
                  </span>
                  <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-[#005B41] text-stone-500 group-hover:text-white flex items-center justify-center transition-colors">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Guest Reviews Cards Section (Exact match to reference screenshot with top & bottom fade mask) */}
      <section className="bg-[#FFFFFF] py-12 sm:py-16 md:py-24 border-t border-stone-200/70 relative">
        <div className="max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 relative z-30">
            <span className="text-sm sm:text-base font-semibold text-[#6C6656] uppercase tracking-wider block mb-1">
              Why Choose Us
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2D281E] font-normal tracking-tight">
              We&apos;ve planned everything for you:
            </h2>
          </div>

          {/* Fading Cards Grid Container */}
          <div className="relative overflow-hidden max-h-[620px] sm:max-h-[700px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)]">
            {/* Top Fade Gradient Overlay */}
            <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#FFF9E8] via-[#FFF9E8]/75 to-transparent z-20 pointer-events-none" />

            {/* Bottom Fade Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#FFF9E8] via-[#FFF9E8]/75 to-transparent z-20 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 pt-4 pb-4">
              {/* Column 1 */}
              <div className="space-y-5">
                <div className="bg-[#F8F6F0] p-6 sm:p-7 rounded-[28px] border border-[#ECE7DA] space-y-3">
                  <div className="flex items-center space-x-3">
                    <UserAvatar name="David Lee" size="lg" />
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#004030]">David Lee</h4>
                      <p className="text-xs text-[#6C6656]">Professor</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4C4638] leading-[1.65] font-light">
                    Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave.
                  </p>
                </div>

                <div className="bg-[#F8F6F0] p-6 sm:p-7 rounded-[28px] border border-[#ECE7DA] space-y-3">
                  <div className="flex items-center space-x-3">
                    <UserAvatar name="David Lee" size="lg" />
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#004030]">David Lee</h4>
                      <p className="text-xs text-[#6C6656]">Professor</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4C4638] leading-[1.65] font-light">
                    Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave. Bali has drawn surfers since the 70s: a legendary destination with waves for every level, and connect with people from all around the world.
                  </p>
                </div>

                <div className="bg-[#F8F6F0] p-6 sm:p-7 rounded-[28px] border border-[#ECE7DA] space-y-3">
                  <div className="flex items-center space-x-3">
                    <UserAvatar name="Sarah Machillie" size="lg" />
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#004030]">Sarah Machillie</h4>
                      <p className="text-xs text-[#6C6656]">Doctor</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4C4638] leading-[1.65] font-light">
                    Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island.
                  </p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-5 pt-6 sm:pt-10">
                <div className="bg-[#F8F6F0] p-6 sm:p-7 rounded-[28px] border border-[#ECE7DA] space-y-3">
                  <div className="flex items-center space-x-3">
                    <UserAvatar name="David Lee" size="lg" />
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#004030]">David Lee</h4>
                      <p className="text-xs text-[#6C6656]">Professor</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4C4638] leading-[1.65] font-light">
                    Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave.
                  </p>
                </div>

                <div className="bg-[#F8F6F0] p-6 sm:p-7 rounded-[28px] border border-[#ECE7DA] space-y-3">
                  <div className="flex items-center space-x-3">
                    <UserAvatar name="Sarah Machillie" size="lg" />
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#004030]">Sarah Machillie</h4>
                      <p className="text-xs text-[#6C6656]">Doctor</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4C4638] leading-[1.65] font-light">
                    Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world.
                  </p>
                </div>

                <div className="bg-[#F8F6F0] p-6 sm:p-7 rounded-[28px] border border-[#ECE7DA] space-y-3">
                  <div className="flex items-center space-x-3">
                    <UserAvatar name="Sarah Machillie" size="lg" />
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#004030]">Sarah Machillie</h4>
                      <p className="text-xs text-[#6C6656]">Doctor</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4C4638] leading-[1.65] font-light">
                    Bali has drawn surfers since the 70s: a legendary destination with waves for every level.
                  </p>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-5">
                <div className="bg-[#F8F6F0] p-6 sm:p-7 rounded-[28px] border border-[#ECE7DA] space-y-3">
                  <div className="flex items-center space-x-3">
                    <UserAvatar name="David Lee" size="lg" />
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#004030]">David Lee</h4>
                      <p className="text-xs text-[#6C6656]">Professor</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4C4638] leading-[1.65] font-light">
                    Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world.
                  </p>
                </div>

                <div className="bg-[#F8F6F0] p-6 sm:p-7 rounded-[28px] border border-[#ECE7DA] space-y-3">
                  <div className="flex items-center space-x-3">
                    <UserAvatar name="David Lee" size="lg" />
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#004030]">David Lee</h4>
                      <p className="text-xs text-[#6C6656]">Professor</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4C4638] leading-[1.65] font-light">
                    Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave. Bali has drawn surfers since the 70s: a legendary destination with waves for every level.
                  </p>
                </div>

                <div className="bg-[#F8F6F0] p-6 sm:p-7 rounded-[28px] border border-[#ECE7DA] space-y-3">
                  <div className="flex items-center space-x-3">
                    <UserAvatar name="Sarah Machillie" size="lg" />
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#004030]">Sarah Machillie</h4>
                      <p className="text-xs text-[#6C6656]">Doctor</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4C4638] leading-[1.65] font-light">
                    Bali has drawn surfers since the 70s: a legendary destination with waves for every level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us Accordion (We've planned everything for you:) */}
      <section className="relative bg-[#FFF9E8] py-12 sm:py-16 md:py-24 border-t border-[#EAE3D2]">
        <div className="relative max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6">
          <div className="mb-8 sm:mb-10 text-left">
            <span className="text-sm font-semibold text-stone-500 uppercase tracking-widest block mb-1.5">
              WHY CHOOSE US
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2926] font-normal tracking-tight">
              We&apos;ve planned everything for you:
            </h2>
          </div>

          {/* Accordion List with full width prominent divider lines */}
          <div className="border-t-2 border-[#CFC5AF]">
            {/* Step 1 */}
            <div className="border-b-2 border-[#CFC5AF] py-5 sm:py-6">
              <button
                onClick={() => setExpandedStep(expandedStep === 1 ? 0 : 1)}
                className="w-full flex items-center justify-between text-left group cursor-pointer"
              >
                <div>
                  <span className="text-xs text-stone-500 font-normal block mb-1">Step 1</span>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2C2926] font-normal">
                    Arrival and Meet the Crew
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#EFE9D8] group-hover:bg-[#E7E0CE] flex items-center justify-center shrink-0 text-stone-600 transition-colors">
                  {expandedStep === 1 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>
              {expandedStep === 1 && (
                <div className="mt-4 text-xs sm:text-sm text-[#4E4A43] leading-relaxed font-sans max-w-2xl">
                  Personal airport pickup and scenic mountain transfer to our homestay estate. Meet the community managers and get settled into your private suite with warm local refreshments.
                </div>
              )}
            </div>

            {/* Step 2 (Expanded state matching reference screenshot) */}
            <div className="border-b-2 border-[#CFC5AF] py-5 sm:py-6">
              <button
                onClick={() => setExpandedStep(expandedStep === 2 ? 0 : 2)}
                className="w-full flex items-center justify-between text-left group cursor-pointer"
              >
                <div>
                  <span className="text-xs text-stone-500 font-normal block mb-1">Step 2</span>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2C2926] font-normal">
                    Check in and Hospitality
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#EFE9D8] group-hover:bg-[#E7E0CE] flex items-center justify-center shrink-0 text-stone-600 transition-colors">
                  {expandedStep === 2 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {expandedStep === 2 && (
                <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                  {/* Left content area */}
                  <div className="lg:col-span-7 flex flex-col justify-between py-1">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10">
                      <span className="text-xs sm:text-sm text-stone-800 font-medium underline underline-offset-4 decoration-stone-400 shrink-0 pt-0.5">
                        Description
                      </span>
                      <p className="text-xs sm:text-sm text-[#4E4A43] leading-relaxed font-sans">
                        Morning surf session focusing on technique — pop-ups, positioning, reading waves. You&apos;ll already feel more confident than yesterday. In the afternoon, we&apos;re heading to one of Canggu&apos;s famous beach clubs for lunch, drinks, and good vibes. It&apos;s the perfect mid-week energy — sun, music, ocean views, and your new best friends.
                      </p>
                    </div>

                    <div className="pt-4 sm:pt-0 sm:pl-[118px]">
                      <button
                        onClick={onOpenContact}
                        className="bg-[#00704A] hover:bg-[#00583A] text-white px-7 py-3 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm active:scale-95 cursor-pointer"
                      >
                        Book a Call
                      </button>
                    </div>
                  </div>

                  {/* Right landscape image */}
                  <div className="lg:col-span-5 relative h-[260px] sm:h-[320px] md:h-[360px]">
                    <img
                      src="/assets/1.png"
                      alt="Lush green mountain landscape"
                      className="rounded-[32px] w-full h-full object-cover shadow-sm"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Step 3 */}
            <div className="border-b-2 border-[#CFC5AF] py-5 sm:py-6">
              <button
                onClick={() => setExpandedStep(expandedStep === 3 ? 0 : 3)}
                className="w-full flex items-center justify-between text-left group cursor-pointer"
              >
                <div>
                  <span className="text-xs text-stone-500 font-normal block mb-1">Step 3</span>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2C2926] font-normal">
                    First Waves & Mountain Vibes
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#EFE9D8] group-hover:bg-[#E7E0CE] flex items-center justify-center shrink-0 text-stone-600 transition-colors">
                  {expandedStep === 3 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {expandedStep === 3 && (
                <div className="mt-4 text-xs sm:text-sm text-[#4E4A43] leading-relaxed font-sans max-w-2xl">
                  Guided morning treks, panoramic sunrise breakfasts, and afternoon excursions immersing in local culture and heritage workshops.
                </div>
              )}
            </div>

            {/* Step 4 */}
            <div className="border-b-2 border-[#CFC5AF] py-5 sm:py-6">
              <button
                onClick={() => setExpandedStep(expandedStep === 4 ? 0 : 4)}
                className="w-full flex items-center justify-between text-left group cursor-pointer"
              >
                <div>
                  <span className="text-xs text-stone-500 font-normal block mb-1">Step 4</span>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2C2926] font-normal">
                    Final Meet and Check Out
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#EFE9D8] group-hover:bg-[#E7E0CE] flex items-center justify-center shrink-0 text-stone-600 transition-colors">
                  {expandedStep === 4 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {expandedStep === 4 && (
                <div className="mt-4 text-xs sm:text-sm text-[#4E4A43] leading-relaxed font-sans max-w-2xl">
                  Farewell brunch with handcrafted souvenirs, memories capture session, and seamless concierge transfer onwards.
                </div>
              )}
            </div>
          </div>

          {/* Floating tilted campfire card peeking at bottom center */}
          <div className="absolute left-[54%] -translate-x-1/2 bottom-[-15px] sm:bottom-[-25px] md:bottom-[-35px] z-30 pointer-events-none transform -rotate-[14deg]">
            <div className="w-32 sm:w-44 md:w-52 h-44 sm:h-60 md:h-72 rounded-[28px] overflow-hidden shadow-2xl border-4 border-[#FFF9E8]">
              <img
                src="/assets/2.png"
                alt="Bonfire camping under trees"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Body, soul, mind, and connection — we've got it all (Full bleed layout, zero left side gap, zero bottom gap to footer) */}
      <section className="bg-[#FFF9E8] pt-12 sm:pt-16 md:pt-24 pb-0 border-t border-stone-200/70 w-full overflow-hidden">
        <div className="w-full pl-0 pr-3 sm:pr-6 lg:pr-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Column: Mountain View Room Image with Glassmorphism Card Overlay (Touches left edge) */}
            <div className="lg:col-span-7">
              <div className="relative h-full min-h-[380px] sm:min-h-[480px] md:min-h-[580px] rounded-none overflow-hidden shadow-xl">
                <img
                  src="/assets/peace.png"
                  alt="Sunlit mountain view room with glass table and seating"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />

                <div className="absolute top-6 left-6 right-6 sm:top-10 sm:left-10 sm:right-10">
                  <div className="bg-black/35 backdrop-blur-xl border border-white/20 rounded-[24px] p-6 sm:p-8 text-white space-y-3 shadow-2xl">
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-white">
                      Body, soul, mind, and connection — we&apos;ve got it all
                    </h2>
                    <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                      This camp isn&apos;t just about surfing. It&apos;s about the whole experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 3 Stacked White Pill Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 py-1">
              {/* Card 1 */}
              <div className="bg-white p-6 sm:p-7 rounded-[28px] border border-stone-200/70 shadow-2xs space-y-2 relative flex-1">
                <span className="text-[11px] text-stone-400 font-normal block uppercase tracking-wider">
                  for body
                </span>
                <div className="flex items-start justify-between">
                  <div className="space-y-1.5 max-w-sm">
                    <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                      Yoga and Meditation
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed font-light">
                      Stretch out your surf-tired muscles with sunset yoga and start your mornings centered with guided meditation sessions.
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#F59E0B] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <span className="w-3.5 h-3.5 rounded-full bg-white/90" />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 sm:p-7 rounded-[28px] border border-stone-200/70 shadow-2xs space-y-2 relative flex-1">
                <span className="text-[11px] text-stone-400 font-normal block uppercase tracking-wider">
                  for mind
                </span>
                <div className="flex items-start justify-between">
                  <div className="space-y-1.5 max-w-sm">
                    <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                      Culture and Growth
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed font-light">
                      Learn the stories behind the island at local markets and connect over dinners designed for real conversations.
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#EC4899] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <span className="w-3.5 h-3.5 rounded-full bg-white/90" />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 sm:p-7 rounded-[28px] border border-stone-200/70 shadow-2xs space-y-2 relative flex-1">
                <span className="text-[11px] text-stone-400 font-normal block uppercase tracking-wider">
                  for fun
                </span>
                <div className="flex items-start justify-between">
                  <div className="space-y-1.5 max-w-sm">
                    <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                      Adventures Together
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed font-light">
                      Discover hidden beaches on scooters, ask your way through night markets, and stay up late swapping travel stories.
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <span className="w-3.5 h-3.5 rounded-full bg-white/90" />
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
