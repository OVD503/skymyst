import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, ChevronRight, ChevronLeft, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { ScreenPage } from '../types';
import { DESTINATIONS } from '../data/Data';
import { UserAvatar } from '../components/UserAvatar';
import { HomeScreenMobile } from './homepagemobile';
import { CategoryBadge } from '../components/CategoryBadge';

interface HomeScreenProps {
  properties: import('../types').Property[];
  onNavigate: (page: ScreenPage) => void;
  onSelectProperty: (propertyId: string) => void;
  onOpenContact: () => void;
  onOpenStory: () => void;
  onOpenMenu?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
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
    const matchedProp = properties.find(
      (p) => p.id === selectedLocation || p.id.toLowerCase() === selectedLocation.toLowerCase()
    );
    if (matchedProp) {
      onSelectProperty(matchedProp.id);
      onNavigate('property');
    } else if (selectedProperty !== 'all') {
      onSelectProperty(selectedProperty);
      onNavigate('property');
    } else {
      onNavigate('search');
    }
  };

  return (
    <>
      {/* Dedicated Mobile View matching Figma 402px spec */}
      <div className="block sm:hidden w-full bg-[#FAF9F5] py-0">
        <HomeScreenMobile
          properties={properties}
          onNavigate={onNavigate}
          onSelectProperty={onSelectProperty}
          onOpenContact={onOpenContact}
          onOpenStory={onOpenStory}
          onOpenMenu={onOpenMenu}
        />
      </div>

      {/* Desktop & Tablet View */}
      <div className="hidden sm:block w-full bg-[#FFF9E8] font-sans antialiased text-stone-800">
        {/* 1. Hero Section (Uses bg.png background image) */}
        <section className="relative h-[874px] sm:h-[600px] lg:h-[780px] xl:h-[900px] w-full max-w-[1440px] mx-auto flex items-center justify-center overflow-hidden rounded-none sm:rounded-b-[80px] lg:rounded-b-[160px] shadow-sm bg-white">
        {/* Background Image bg.png */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-none sm:rounded-b-[80px] lg:rounded-b-[160px]">
          <img
            src="/assets/bg.jpg"
            alt="Skymyst Mountain Stays"
            className="w-full h-full object-cover object-center brightness-[0.88]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>

        {/* Hero Title - Exact match from Figma spec */}
        <div className="relative z-10 text-center px-4 w-[370px] max-w-full h-[132px] sm:w-full sm:max-w-[650px] sm:min-h-[144px] mx-auto flex items-center justify-center -mt-36 sm:-mt-16 lg:-mt-20">
          <h1 className="font-lustria font-normal text-[32px] sm:text-[44px] lg:text-[56px] leading-[110%] sm:leading-[105%] tracking-normal text-white text-center">
            <span className="block">Exceptional Stays.</span>
            <span className="block sm:inline">Seamlessly </span>
            <span className="block sm:inline">managed.</span>
          </h1>
        </div>

        {/* Floating Search Bar (Exact pill style matching image) */}
        <div className="absolute top-[560px] md:top-auto md:bottom-20 lg:bottom-24 xl:bottom-28 left-0 right-0 z-30 px-4 md:px-6 lg:px-8 flex justify-center">
          <form
            onSubmit={handleSearchSubmit}
            className="w-full max-w-[370px] md:max-w-[854px] h-[266px] md:h-[64px] mx-auto bg-white rounded-[24px] md:rounded-[48px] shadow-2xl pt-[16px] pb-[16px] px-[8px] md:p-2 flex flex-col md:flex-row items-center justify-between border border-stone-200/80 transition-all gap-2 md:gap-0"
          >
            {/* 1. Add Destination / Select Homestay */}
            <div className="flex-1 w-full md:w-auto h-[40px] md:h-full px-3 md:px-6 border-b md:border-b-0 md:border-r border-stone-200 flex items-center">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full text-stone-600 font-normal text-body-2 bg-transparent focus:outline-none cursor-pointer appearance-none"
              >
                <option value="Add Destination">Add Destination / Homestay</option>
                <optgroup label="Destinations">
                  <option value="Bhowali">Bhowali, Uttarakhand</option>
                  <option value="Bhimtal">Bhimtal, Uttarakhand</option>
                  <option value="Almora">Almora, Uttarakhand</option>
                  <option value="Mukteshwar">Mukteshwar, Uttarakhand</option>
                </optgroup>
                <optgroup label="All Homestays">
                  {properties.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — {p.location}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* 2. Add Dates */}
            <div className="flex-1 w-full md:w-auto h-[40px] md:h-full px-3 md:px-6 border-b md:border-b-0 md:border-r border-stone-200 relative flex items-center">
              <button
                type="button"
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="w-full text-left text-stone-600 font-normal text-body-2 focus:outline-none bg-transparent truncate"
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
            <div className="flex-1 w-full md:w-auto h-[40px] md:h-full px-3 md:px-6 flex items-center">
              <select
                value={guestsCount === 0 ? '' : guestsCount}
                onChange={(e) => setGuestsCount(Number(e.target.value))}
                className="w-full text-stone-600 font-normal text-body-2 bg-transparent focus:outline-none cursor-pointer appearance-none"
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
            <div className="w-full md:w-auto h-full flex items-center justify-end">
              <button
                type="submit"
                id="hero-find-trip-btn"
                className="w-full md:w-auto h-[40px] md:h-[48px] px-5 sm:px-7 rounded-full bg-[#005B41] hover:bg-[#004030] text-white flex items-center justify-center space-x-2 text-xs sm:text-sm font-medium transition shrink-0 shadow-sm active:scale-95"
              >
                <Search className="w-4 h-4 stroke-[2.5]" />
                <span>Find Trip Now</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 2. Featured Properties Section */}
      <section className="max-w-[1440px] mx-auto bg-white px-3 sm:px-6 lg:px-8 xl:px-10 pt-4 sm:pt-7 lg:pt-8 xl:pt-10 pb-5 sm:pb-7 lg:pb-8 xl:pb-10 flex flex-col justify-center">
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-2 sm:gap-4 mb-4 sm:mb-7 text-center sm:text-left">
          <div className="w-full sm:w-auto">
            <span className="text-[16px] leading-[140%] font-normal text-[#1E1E1E] tracking-normal block mb-3 sm:mb-4 font-sans">
              Featured Properties
            </span>
            <h2 className="font-lustria text-[26px] sm:text-[40px] leading-[110%] tracking-[-0.01em] font-normal text-[#1E1E1E]">
              Handpick stays, Just for you.
            </h2>
          </div>
          {/* Desktop Controls (See All) */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => onNavigate('search')}
              className="px-6 py-2.5 rounded-full border border-stone-700 text-stone-800 text-body-2 font-medium hover:bg-stone-900 hover:text-white transition shrink-0 cursor-pointer"
            >
              See All
            </button>
          </div>
        </div>

        {/* Property Cards Slider */}
        <div
          id="featured-properties-slider"
          className="flex overflow-x-auto gap-2.5 sm:gap-5 lg:gap-6 pt-5 pb-5 -mt-3 -mb-3 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
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
              className="group cursor-pointer flex flex-col justify-between w-[220px] sm:w-[260px] md:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-4.5rem)/4)] shrink-0 snap-start"
            >
              <div>
                <div className="relative aspect-[4/3] rounded-[9px] sm:rounded-[18px] overflow-hidden bg-stone-100 mb-1.5 sm:mb-3 shadow-xs group-hover:shadow-md transition">
                  <img
                    src={prop.images[0]}
                    alt={prop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <CategoryBadge category={prop.category} isPremium={prop.isPremium} />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-sans font-medium text-[16px] leading-[20px] tracking-[0.02em] text-[#042E23] group-hover:underline transition line-clamp-1">
                    {prop.name}
                  </h3>
                  <p className="font-sans font-normal text-[16px] leading-[140%] tracking-normal text-[#4E4E4E] flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-[#4E4E4E] shrink-0" />
                    <span>{prop.location}, {prop.state}</span>
                  </p>

                  <div className="flex items-center space-x-0.5 sm:space-x-1.5 pt-0.5 sm:pt-1 text-caption-light">
                    <span className="bg-[#005B41] text-white font-bold text-[5px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-xs">
                      {prop.rating.toFixed(1)}
                    </span>
                    <span className="font-bold text-stone-900">{prop.ratingLabel}</span>
                    <span className="text-stone-500">({prop.reviewsCount} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="mt-1.5 sm:mt-3 space-y-0.5">
                <div className="flex items-baseline space-x-1.5">
                  <span className="font-bold text-stone-900 text-body-1">
                    ₹{prop.pricePerNight.toLocaleString()}
                  </span>
                  {prop.originalPricePerNight && (
                    <span className="text-caption-light text-stone-400 line-through">
                      ₹{prop.originalPricePerNight.toLocaleString()}
                    </span>
                  )}
                  <span className="text-caption-light text-stone-600">per night</span>
                </div>
                <p className="font-sans font-normal text-[12px] leading-[130%] tracking-[0.02em] text-[#4E4E4E] mt-1">
                  ₹{prop.totalPrice.toLocaleString()} total
                  <br />
                  includes taxes & fees
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View Bottom See All Button */}
        <div className="flex sm:hidden justify-center mt-4">
          <button
            onClick={() => onNavigate('search')}
            className="px-6 py-2 rounded-full border border-stone-800 text-stone-800 text-body-2 font-medium hover:bg-stone-900 hover:text-white transition shadow-xs cursor-pointer active:scale-95"
          >
            See All
          </button>
        </div>
      </section>

      {/* 3. Curated Collection (Stays for every kind of gateway) */}
      <section className="bg-[#FFF9E8] py-10 lg:py-0 min-h-0 lg:min-h-[821px] lg:h-[821px] flex flex-col justify-center border-y border-stone-200/60 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-[56px]">
          <div className="relative flex flex-col items-center justify-center text-center gap-1.5 sm:gap-3 mb-6 lg:mb-10">
            <div>
              <span className="font-sans font-normal text-[16px] leading-[100%] tracking-normal text-[#042E23] block mb-3 sm:mb-8">
                Curated Collection
              </span>
              <h2 className="font-lustria text-[26px] sm:text-[40px] leading-[100%] tracking-normal font-normal text-[#042E23] whitespace-normal sm:whitespace-nowrap">
                Stays for every kind of gateway
              </h2>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-3.5 sm:gap-6 lg:gap-8 pb-4 pt-1 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:flex-row lg:justify-center lg:overflow-visible w-full px-2 lg:px-0">
            {/* Card 1: Bonfire Nights */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              onClick={() => onNavigate('search')}
              className="group relative w-[273px] sm:w-[380px] lg:w-[780px] shrink-0 h-[281px] sm:h-[440px] lg:h-[530px] rounded-[24px] sm:rounded-[48px] overflow-hidden shadow-lg cursor-pointer bg-white snap-start"
            >
              <img
                src="/assets/bonfire.jpg"
                alt="Bonfire Nights with friends playing guitar"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-[40px] sm:left-[40px] sm:right-[40px] text-white space-y-1 sm:space-y-2 text-center sm:text-left">
                <h3 className="font-lustria text-[20px] sm:text-[32px] font-normal text-[#FFED25] leading-[100%] tracking-normal">
                  Bonfire Nights
                </h3>
                <p className="font-sans text-[12px] sm:text-[16px] font-normal text-white leading-[135%] tracking-normal max-w-[579px] mx-auto sm:mx-0 w-full">
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
              className="group relative w-[273px] sm:w-[380px] lg:w-[530px] shrink-0 h-[281px] sm:h-[440px] lg:h-[530px] rounded-[24px] sm:rounded-[48px] overflow-hidden shadow-lg cursor-pointer bg-white snap-start"
            >
              <img
                src="/assets/romantic.jpg"
                alt="Romantic honeymoon couple"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-[40px] sm:left-[40px] sm:right-[40px] text-white space-y-1 sm:space-y-2 text-center sm:text-left">
                <h3 className="font-lustria text-[20px] sm:text-[32px] font-normal text-[#FFED25] leading-[100%] tracking-normal">
                  Romantic Honeymoon
                </h3>
                <p className="font-sans text-[12px] sm:text-[16px] font-normal text-white leading-[135%] tracking-normal max-w-[579px] mx-auto sm:mx-0 w-full">
                  Every vibration asks for your attention. Waves never ask anything from you. They simply arrive.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Explore by Destination (Uses sky.png background image) */}
      <section className="relative py-7 sm:py-14 lg:py-20 overflow-hidden">
        {/* Background Image sky.png */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/explore the destination.jpg"
            alt="Sky background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#FFF9E8]/20" />
        </div>

        <div className="relative z-10 max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center text-white mb-5 sm:mb-10">
            <span className="font-sans font-normal text-[16px] leading-[100%] tracking-normal text-white text-center max-w-[649px] mx-auto min-h-[20px] flex items-center justify-center block mb-2">
              Destinations
            </span>
            <h2 className="font-lustria font-normal text-[28px] sm:text-[42px] md:text-[56px] leading-[100%] tracking-normal text-center max-w-[649px] mx-auto min-h-[72px] flex items-center justify-center drop-shadow-sm">
              Explore by destination
            </h2>
          </div>

          <div className="flex overflow-x-auto gap-3 sm:gap-4 pt-5 pb-5 -mt-3 -mb-3 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible lg:pb-0 lg:pt-0">
            {DESTINATIONS.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => dest.available && onNavigate('search')}
                className={`relative w-[213px] sm:w-[180px] lg:w-full h-[200px] rounded-[24px] overflow-hidden shadow-md group shrink-0 lg:shrink snap-start ${dest.available ? 'cursor-pointer' : 'cursor-default'
                  }`}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                {dest.badge && (
                  <div className="absolute top-[16px] left-1/2 -translate-x-1/2 inline-flex items-center justify-center h-[31px] px-3.5 rounded-[48px] bg-[#FF3E3E] gap-[8px] z-10 shadow-xs">
                    <span className="font-sans font-medium text-[12px] leading-[100%] tracking-normal text-white whitespace-nowrap">
                      {dest.badge}
                    </span>
                  </div>
                )}

                <div className="absolute top-[168px] left-0 right-0 flex items-center justify-center px-2">
                  <h4 className="font-sans font-medium text-[16px] leading-[100%] tracking-normal text-white text-center">
                    {dest.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Guest Stories (Exact match to reference image) */}
      <section className="w-full bg-[#FFF9E8] py-10 lg:py-16 min-h-0 lg:min-h-[900px] flex items-center justify-center">
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
            {/* Left Column: Heading, Body, and Button */}
            <div className="lg:col-span-4 flex flex-col justify-between py-1 text-center lg:text-left items-center lg:items-start h-full min-h-0 lg:min-h-[704px]">
              <div className="space-y-6">
                <div>
                  <span className="font-sans font-normal text-[16px] leading-[100%] tracking-normal text-[#1E1E1E] block mb-1.5 sm:mb-3 min-h-[20px] flex items-center justify-center lg:justify-start">
                    Guest Stories
                  </span>
                  <h2 className="font-lustria font-normal text-[#1E1E1E] max-w-[432px]">
                    <span className="lg:hidden block whitespace-nowrap text-[24px] leading-[30px] tracking-normal text-center w-[370px] max-w-full h-[30px] mx-auto">
                      Loved by many of travalers - Bali
                    </span>
                    <span className="hidden lg:inline text-[40px] leading-[110%] tracking-[-0.01em]">
                      Loved by many of
                      <br />
                      travellers
                      <br />
                      — Bali
                    </span>
                  </h2>
                </div>

                <p className="font-sans font-normal text-[16px] leading-[28px] tracking-[0.01em] text-[#333333] w-full max-w-[432px] min-h-[139px] mx-auto lg:mx-0">
                  Bali has drawn surfers since the 70s: a legendary destination with waves for every
                  level. Surf every day, explore the island, and connect with people from all around the
                  world. This is the kind of trip that stays with you long after you leave.
                </p>
              </div>

              <div className="pt-6 lg:pt-0 flex justify-center lg:justify-start w-full mt-auto">
                <button
                  onClick={onOpenContact}
                  className="w-[148px] h-[56px] px-[32px] py-[16px] gap-[16px] rounded-[104px] bg-[#007C4D] hover:bg-[#00633D] text-[#F7FFE1] transition-all shadow-xs active:scale-95 cursor-pointer inline-flex flex-row items-center justify-center"
                >
                  <span className="font-sans font-medium text-[16px] leading-[100%] tracking-normal whitespace-nowrap">
                    Book a Call
                  </span>
                </button>
              </div>
            </div>

            {/* Middle Column: Tall Story Card (Figma Specs: Width 370px, Height 607px, Radius 40px on mobile) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-[370px] max-w-full lg:max-w-[432px] h-[607px] lg:h-[704px] rounded-[40px] overflow-hidden shadow-lg group cursor-pointer bg-[#DFDBCB]">
                <img
                  src="/assets/guest stories.png"
                  alt="Discover Bali tropical mountains"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Frame 28 - Horizontal flow, Hug 116px x 39px, Top 24px, Left 24px, Radius 48px, Padding 12px 16px, Gap 8px, Bg #FFFFFF 10% */}
                <div className="absolute top-6 left-6 inline-flex flex-row items-center justify-center gap-[8px] w-[116px] h-[39px] px-4 py-3 rounded-[48px] bg-white/10 backdrop-blur-md border border-white/20">
                  <span className="font-sans font-medium text-[12px] leading-[100%] tracking-normal text-white">
                    trip highlights
                  </span>
                </div>

                {/* Frame 29 - Vertical flow, Fixed 271px, Hug 102px */}
                <div className="absolute bottom-[24px] left-[24px] text-white flex flex-col w-[271px] h-[102px] justify-between [filter:drop-shadow(0px_0px_4px_rgba(0,0,0,0.10))] z-10 pointer-events-none">
                  <h3 className="font-lustria font-normal text-[32px] leading-[100%] tracking-normal text-white w-full">
                    Discover the<br />Island&apos;s Secrets
                  </h3>
                  <p className="font-sans font-normal text-[14px] sm:text-[16px] leading-[100%] tracking-normal text-white whitespace-nowrap">
                    Waterfalls, temples, jungles and more
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Metadata List & White Quote Card */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-6">
              {/* Top: Metadata List (Frame 27 - Fixed 432px, Hug 204px) */}
              <div className="flex flex-col w-full max-w-[432px] min-h-[204px] justify-between divide-y divide-[#E7E0CE] px-1">
                <div className="flex items-center justify-between py-4 sm:py-5">
                  <span className="font-sans font-normal text-[16px] text-[#015E47] leading-[140%] tracking-normal">Where</span>
                  <span className="font-sans font-semibold text-[16px] text-[#1E1E1E] leading-[100%] tracking-normal text-right min-h-[20px] flex items-center justify-end">Almora, Uttrakhand</span>
                </div>
                <div className="flex items-center justify-between py-4 sm:py-5">
                  <span className="font-sans font-normal text-[16px] text-[#015E47] leading-[140%] tracking-normal">When</span>
                  <span className="font-sans font-semibold text-[16px] text-[#1E1E1E] leading-[100%] tracking-normal text-right min-h-[20px] flex items-center justify-end">Summer Season</span>
                </div>
                <div className="flex items-center justify-between py-4 sm:py-5">
                  <span className="font-sans font-normal text-[16px] text-[#015E47] leading-[140%] tracking-normal">Purpose</span>
                  <span className="font-sans font-semibold text-[16px] text-[#1E1E1E] leading-[100%] tracking-normal text-right min-h-[20px] flex items-center justify-end">Family Trip</span>
                </div>
              </div>

              {/* Bottom: White Quote Card */}
              <div className="bg-white p-6 sm:p-8 rounded-[28px] border border-stone-100/80 shadow-xs flex-1 flex flex-col justify-between w-[370px] max-w-full min-h-[320px] mx-auto">
                <div className="flex items-center space-x-3">
                  <UserAvatar name="Guest Traveller" size="lg" />
                </div>

                <p className="font-sans font-normal text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] tracking-normal text-[#042E23] my-4">
                  It started as a trip. It became a movement. Now we&apos;re building a community of surfers who choose authentic experiences over everything else.
                </p>

                <button
                  onClick={onOpenStory}
                  className="w-full flex items-center justify-between group cursor-pointer"
                >
                  <span className="font-sans font-medium text-[16px] leading-[24px] tracking-normal text-[#042E23] group-hover:text-[#005B41] transition">
                    Read Our Story
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#F4EFEA] group-hover:bg-[#005B41] text-[#042E23] group-hover:text-white flex items-center justify-center transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Guest Reviews Cards Section (Figma Specs: Width 1440px, Height 900px, Bg #FFFFFF) */}
      <section className="bg-[#FFFFFF] min-h-[900px] h-[900px] overflow-hidden relative border-t border-stone-100 flex items-center justify-center">
        <div className="w-full max-w-[1440px] h-[900px] mx-auto px-4 sm:px-8 lg:px-[80px] relative overflow-hidden">

          {/* Absolute Positioned Header (Floats over top cards matching Figma spec) */}
          <div className="absolute top-[64px] left-1/2 -translate-x-1/2 z-30 text-center w-full max-w-[369px] sm:max-w-none px-4 pointer-events-none flex flex-col items-center gap-[16px]">
            <span className="font-sans font-normal text-[16px] leading-[20px] tracking-normal text-[#1E1E1E] h-[20px] whitespace-nowrap">
              Why Choose Us
            </span>
            <h2 className="font-lustria font-normal text-[24px] sm:text-[32px] lg:text-[40px] leading-[30px] sm:leading-[110%] lg:leading-[110%] tracking-normal lg:tracking-[-0.01em] text-[#1E1E1E] text-center w-[369px] lg:w-[631px] max-w-full h-[60px] lg:h-[44px] sm:h-auto flex items-center justify-center">
              We&apos;ve planned everything for you:
            </h2>
          </div>

          {/* Top Fade Gradient Overlay (Rectangle 2: 231px height) */}
          <div
            className="absolute top-0 left-0 right-0 h-[231px] z-20 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, #FFFFFF 30.95%, rgba(255, 255, 255, 0) 130.74%)' }}
          />

          {/* Bottom Fade Gradient Overlay (Rectangle 3: 135px height) */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[135px] z-20 pointer-events-none"
            style={{ background: 'linear-gradient(0deg, #FFFFFF 30.95%, rgba(255, 255, 255, 0) 130.74%)' }}
          />

          {/* Fading Cards Grid Container (Starts at top 0, filling section) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 justify-items-center h-full w-full relative z-10 pt-4">
            {/* Column 1 (Frame 97: Top -119px offset) */}
            <div className="space-y-4 lg:-mt-[119px] w-full max-w-[420px]">
              {/* Card 1 (iPhone 17 - 8: Opacity 0.5, Bg rgba(246,245,241,0.9)) */}
              <div className="bg-[#F6F5F1]/90 opacity-50 p-[32px] rounded-[40px] flex flex-col gap-[32px] w-full max-w-[420px] shadow-xs">
                <div className="flex flex-col gap-[16px] w-full max-w-[356px]">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden shrink-0 bg-[#D9D9D9]">
                    <UserAvatar name="David Lee" image="/assets/avatar.png" size="lg" />
                  </div>
                  <div className="flex flex-col gap-[4px] w-full max-w-[356px]">
                    <h4 className="font-sans font-medium text-[24px] leading-[30px] text-[#042E23]">David Lee</h4>
                    <p className="font-sans font-medium text-[16px] leading-[20px] text-[#4E4E4E]">Professor</p>
                  </div>
                </div>
                <p className="font-sans font-medium text-[16px] leading-[24px] text-[#747474] max-w-[356px]">
                  Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave.
                </p>
              </div>

              {/* Card 2 (iPhone 17 - 4: Standard Bg #F6F5F1, Height 486px) */}
              <div className="bg-[#F6F5F1] p-[32px] rounded-[40px] flex flex-col gap-[32px] w-full max-w-[420px] shadow-xs">
                <div className="flex flex-col gap-[16px] w-full max-w-[356px]">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden shrink-0 bg-[#D9D9D9]">
                    <UserAvatar name="David Lee" image="/assets/avatar.png" size="lg" />
                  </div>
                  <div className="flex flex-col gap-[4px] w-full max-w-[356px]">
                    <h4 className="font-sans font-medium text-[24px] leading-[30px] text-[#042E23]">David Lee</h4>
                    <p className="font-sans font-medium text-[16px] leading-[20px] text-[#4E4E4E]">Professor</p>
                  </div>
                </div>
                <p className="font-sans font-medium text-[16px] leading-[24px] text-[#747474] max-w-[356px]">
                  Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave. Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave.
                </p>
              </div>

              {/* Card 3 (iPhone 17 - 5: Standard Bg #F6F5F1, Height 366px) */}
              <div className="bg-[#F6F5F1] p-[32px] rounded-[40px] flex flex-col gap-[32px] w-full max-w-[420px] shadow-xs">
                <div className="flex flex-col gap-[16px] w-full max-w-[356px]">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden shrink-0 bg-[#D9D9D9]">
                    <UserAvatar name="Sarah Machillie" image="/assets/avatar.png" size="lg" />
                  </div>
                  <div className="flex flex-col gap-[4px] w-full max-w-[356px]">
                    <h4 className="font-sans font-medium text-[24px] leading-[30px] text-[#042E23]">Sarah Machillie</h4>
                    <p className="font-sans font-medium text-[16px] leading-[20px] text-[#4E4E4E]">Doctor</p>
                  </div>
                </div>
                <p className="font-sans font-medium text-[16px] leading-[24px] text-[#747474] max-w-[356px]">
                  Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave.
                </p>
              </div>
            </div>

            {/* Column 2 (Frame 99: Top -183px offset) */}
            <div className="space-y-4 lg:-mt-[183px] w-full max-w-[420px]">
              {/* Card 1 (iPhone 17 - 9: Opacity 0.5, Bg rgba(246,245,241,0.9)) */}
              <div className="bg-[#F6F5F1]/90 opacity-50 p-[32px] rounded-[40px] flex flex-col gap-[32px] w-full max-w-[420px] shadow-xs">
                <div className="flex flex-col gap-[16px] w-full max-w-[356px]">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden shrink-0 bg-[#D9D9D9]">
                    <UserAvatar name="David Lee" image="/assets/avatar.png" size="lg" />
                  </div>
                  <div className="flex flex-col gap-[4px] w-full max-w-[356px]">
                    <h4 className="font-sans font-medium text-[24px] leading-[30px] text-[#042E23]">David Lee</h4>
                    <p className="font-sans font-medium text-[16px] leading-[20px] text-[#4E4E4E]">Professor</p>
                  </div>
                </div>
                <p className="font-sans font-medium text-[16px] leading-[24px] text-[#747474] max-w-[356px]">
                  Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave.
                </p>
              </div>

              {/* Card 2 (iPhone 17 - 2: Standard Bg #F6F5F1, Height 366px) */}
              <div className="bg-[#F6F5F1] p-[32px] rounded-[40px] flex flex-col gap-[32px] w-full max-w-[420px] shadow-xs">
                <div className="flex flex-col gap-[16px] w-full max-w-[356px]">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden shrink-0 bg-[#D9D9D9]">
                    <UserAvatar name="David Lee" image="/assets/avatar.png" size="lg" />
                  </div>
                  <div className="flex flex-col gap-[4px] w-full max-w-[356px]">
                    <h4 className="font-sans font-medium text-[24px] leading-[30px] text-[#042E23]">David Lee</h4>
                    <p className="font-sans font-medium text-[16px] leading-[20px] text-[#4E4E4E]">Professor</p>
                  </div>
                </div>
                <p className="font-sans font-medium text-[16px] leading-[24px] text-[#747474] max-w-[356px]">
                  Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave.
                </p>
              </div>

              {/* Card 3 (iPhone 17 - 3: Standard Bg #F6F5F1, Height 366px) */}
              <div className="bg-[#F6F5F1] p-[32px] rounded-[40px] flex flex-col gap-[32px] w-full max-w-[420px] shadow-xs">
                <div className="flex flex-col gap-[16px] w-full max-w-[356px]">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden shrink-0 bg-[#D9D9D9]">
                    <UserAvatar name="Sarah Machillie" image="/assets/avatar.png" size="lg" />
                  </div>
                  <div className="flex flex-col gap-[4px] w-full max-w-[356px]">
                    <h4 className="font-sans font-medium text-[24px] leading-[30px] text-[#042E23]">Sarah Machillie</h4>
                    <p className="font-sans font-medium text-[16px] leading-[20px] text-[#4E4E4E]">Doctor</p>
                  </div>
                </div>
                <p className="font-sans font-medium text-[16px] leading-[24px] text-[#747474] max-w-[356px]">
                  Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave.
                </p>
              </div>
            </div>

            {/* Column 3 (Frame 98: Top -119px offset) */}
            <div className="space-y-4 lg:-mt-[119px] w-full max-w-[420px]">
              {/* Card 1 (iPhone 17 - 10: Opacity 0.5, Bg rgba(246,245,241,0.9)) */}
              <div className="bg-[#F6F5F1]/90 opacity-50 p-[32px] rounded-[40px] flex flex-col gap-[32px] w-full max-w-[420px] shadow-xs">
                <div className="flex flex-col gap-[16px] w-full max-w-[356px]">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden shrink-0 bg-[#D9D9D9]">
                    <UserAvatar name="David Lee" image="/assets/avatar.png" size="lg" />
                  </div>
                  <div className="flex flex-col gap-[4px] w-full max-w-[356px]">
                    <h4 className="font-sans font-medium text-[24px] leading-[30px] text-[#042E23]">David Lee</h4>
                    <p className="font-sans font-medium text-[16px] leading-[20px] text-[#4E4E4E]">Professor</p>
                  </div>
                </div>
                <p className="font-sans font-medium text-[16px] leading-[24px] text-[#747474] max-w-[356px]">
                  Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave.
                </p>
              </div>

              {/* Card 2 (iPhone 17 - 6: Standard Bg #F6F5F1, Height 414px) */}
              <div className="bg-[#F6F5F1] p-[32px] rounded-[40px] flex flex-col gap-[32px] w-full max-w-[420px] shadow-xs">
                <div className="flex flex-col gap-[16px] w-full max-w-[356px]">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden shrink-0 bg-[#D9D9D9]">
                    <UserAvatar name="David Lee" image="/assets/avatar.png" size="lg" />
                  </div>
                  <div className="flex flex-col gap-[4px] w-full max-w-[356px]">
                    <h4 className="font-sans font-medium text-[24px] leading-[30px] text-[#042E23]">David Lee</h4>
                    <p className="font-sans font-medium text-[16px] leading-[20px] text-[#4E4E4E]">Professor</p>
                  </div>
                </div>
                <p className="font-sans font-medium text-[16px] leading-[24px] text-[#747474] max-w-[356px]">
                  Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave. Bali has drawn surfers since the 70s: a legendary destination with waves for every level.
                </p>
              </div>

              {/* Card 3 (iPhone 17 - 7: Standard Bg #F6F5F1, Height 366px) */}
              <div className="bg-[#F6F5F1] p-[32px] rounded-[40px] flex flex-col gap-[32px] w-full max-w-[420px] shadow-xs">
                <div className="flex flex-col gap-[16px] w-full max-w-[356px]">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden shrink-0 bg-[#D9D9D9]">
                    <UserAvatar name="Sarah Machillie" image="/assets/avatar.png" size="lg" />
                  </div>
                  <div className="flex flex-col gap-[4px] w-full max-w-[356px]">
                    <h4 className="font-sans font-medium text-[24px] leading-[30px] text-[#042E23]">Sarah Machillie</h4>
                    <p className="font-sans font-medium text-[16px] leading-[20px] text-[#4E4E4E]">Doctor</p>
                  </div>
                </div>
                <p className="font-sans font-medium text-[16px] leading-[24px] text-[#747474] max-w-[356px]">
                  Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us Accordion (We've planned everything for you:) */}
      <section className="relative bg-[#FFF9E8] py-12 sm:py-16 md:py-24 border-t border-[#EAE3D2]">
        <div className="relative max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6">
          <div className="mb-8 sm:mb-10 text-center sm:text-left">
            <span className="font-sans font-normal text-[16px] leading-[100%] tracking-normal text-[#1E1E1E] block mb-6 sm:mb-8">
              Why Choose Us
            </span>
            <h2 className="font-lustria font-normal text-[28px] sm:text-[36px] lg:text-[40px] leading-[110%] tracking-[-0.01em] text-[#1E1E1E] max-w-[631px] min-h-[44px]">
              We&apos;ve planned everything for you:
            </h2>
          </div>

          {/* Accordion List (Width Fill 1,328px, 32px Top/Bottom Padding, 3px Bottom Border #007C4D on Step 3) */}
          <div className="border-t border-[#CECECE] max-w-[1328px] mx-auto w-full">
            {/* Step 1 */}
            <div className="border-b border-[#CECECE] py-[32px]">
              <div className="w-full flex items-center justify-between text-left">
                <div>
                  <span className="font-sans font-normal text-[16px] leading-[100%] tracking-normal text-[#1E1E1E] block mb-2 lg:mb-4">Step 1</span>
                  <h3 className="font-lustria font-normal text-[22px] sm:text-[26px] md:text-[32px] leading-[28px] sm:leading-[100%] tracking-normal text-[#1E1E1E] max-w-[294px] sm:max-w-none">
                    Arrival and Meet the Crew
                  </h3>
                </div>
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#EFE9D8] flex items-center justify-center shrink-0 text-stone-600">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Step 2 (Always open state) */}
            <div className="border-b border-[#CECECE] py-[32px]">
              <div className="w-full flex items-center justify-between text-left">
                <div>
                  <span className="font-sans font-normal text-[16px] leading-[100%] tracking-normal text-[#1E1E1E] block mb-2 lg:mb-4">Step 2</span>
                  <h3 className="font-lustria font-normal text-[22px] sm:text-[26px] md:text-[32px] leading-[28px] sm:leading-[100%] tracking-normal text-[#1E1E1E] max-w-[294px] sm:max-w-none">
                    Check in and Hospitality
                  </h3>
                </div>
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#EFE9D8] flex items-center justify-center shrink-0 text-stone-600">
                  <ChevronUp className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-4 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-stretch">
                {/* Left content area */}
                <div className="lg:col-span-7 flex flex-col justify-between py-1">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-16 lg:gap-32 text-center sm:text-left">
                    <span className="font-sans font-normal text-[16px] leading-[100%] tracking-normal text-[#1E1E1E] underline underline-offset-4 shrink-0 pt-0.5 block text-center sm:text-left">
                      Description
                    </span>

                    {/* Frame 56 Container (Vertical Flow, Width 463px, Height 447px, Justify space-between) */}
                    <div className="flex flex-col justify-between w-full max-w-[463px] lg:h-[447px] space-y-6 lg:space-y-0">
                      <p className="font-sans font-normal text-[16px] leading-[24px] tracking-[0.02em] text-[#1E1E1E] text-center sm:text-left">
                        Morning surf session focusing on technique — pop-ups, positioning, reading waves. You&apos;ll already feel more confident than yesterday. In the afternoon, we&apos;re heading to one of Canggu&apos;s famous beach clubs for lunch, drinks, and good vibes. It&apos;s the perfect mid-week energy — sun, music, ocean views, and your new best friends.
                      </p>

                      <div className="flex justify-center sm:justify-start">
                        <button
                          onClick={onOpenContact}
                          className="bg-[#00704A] hover:bg-[#00583A] px-6 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all shadow-sm active:scale-95 cursor-pointer flex items-center justify-center"
                        >
                          <span className="font-sans font-medium text-[16px] leading-[100%] tracking-normal bg-gradient-to-r from-[#8FDCFF] to-[#F7FFE1] bg-clip-text text-transparent">
                            Book a Call
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right landscape image (Figma Specs: Radius 56px, Height 447px, Width 463px) */}
                <div className="lg:col-span-5 relative w-full max-w-[463px] h-[260px] sm:h-[360px] lg:h-[447px] justify-self-center lg:justify-self-end">
                  <img
                    src="/assets/check in hospitality.jpg"
                    alt="Lush green mountain landscape"
                    className="rounded-[28px] sm:rounded-[56px] w-full h-full object-cover shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Step 3 (Has green 3px bottom border #007C4D per Figma specs) */}
            <div className="border-b-[3px] border-[#007C4D] py-[32px]">
              <div className="w-full flex items-center justify-between text-left">
                <div>
                  <span className="font-sans font-normal text-[16px] leading-[100%] tracking-normal text-[#1E1E1E] block mb-2 lg:mb-4">Step 3</span>
                  <h3 className="font-lustria font-normal text-[22px] sm:text-[26px] md:text-[32px] leading-[28px] sm:leading-[100%] tracking-normal text-[#1E1E1E] max-w-[294px] sm:max-w-none">
                    First Waves & Mountain Vibes
                  </h3>
                </div>
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#EFE9D8] flex items-center justify-center shrink-0 text-stone-600">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="border-b border-[#CECECE] py-[32px]">
              <div className="w-full flex items-center justify-between text-left">
                <div>
                  <span className="font-sans font-normal text-[16px] leading-[100%] tracking-normal text-[#1E1E1E] block mb-2 lg:mb-4">Step 4</span>
                  <h3 className="font-lustria font-normal text-[22px] sm:text-[26px] md:text-[32px] leading-[28px] sm:leading-[100%] tracking-normal text-[#1E1E1E] max-w-[294px] sm:max-w-none">
                    Final Meet and Check Out
                  </h3>
                </div>
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#EFE9D8] flex items-center justify-center shrink-0 text-stone-600">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating tilted campfire card peeking at bottom center (Hidden on mobile view) */}
          <div className="hidden sm:block absolute left-[54%] -translate-x-1/2 bottom-[-20px] md:bottom-[-30px] z-30 pointer-events-none transform -rotate-[14deg]">
            <div className="w-32 sm:w-44 md:w-52 h-44 sm:h-60 md:h-72 rounded-[28px] overflow-hidden shadow-2xl border-4 border-[#FFF9E8]">
              <img
                src="/assets/6ef4c49d8d2aa571c145a4e55935fb0b654af60e.jpg"
                alt="Bonfire camping under trees"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Body, soul, mind, and connection — we've got it all (Full bleed layout, zero left side gap, zero bottom gap to footer) */}
      <section className="bg-[#FFF9E8] pt-7 sm:pt-14 lg:pt-20 pb-0 border-t border-stone-200/70 w-full overflow-hidden">
        <div className="w-full pl-0 pr-3 sm:pr-6 lg:pr-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Column: Mountain View Room Image with Glassmorphism Card Overlay (Touches left edge) */}
            <div className="lg:col-span-7 w-full max-w-[720px]">
              <div className="relative h-[329px] sm:h-[480px] lg:h-[749px] rounded-none overflow-hidden shadow-xl bg-white">
                <img
                  src="/assets/purple room.jpg"
                  alt="Sunlit mountain view room with glass table and seating"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 right-4 sm:top-[32px] sm:left-[24px] sm:right-auto z-10 w-auto sm:w-full max-w-[672px]">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/25 rounded-[24px] sm:rounded-[32px] p-4 sm:px-[24px] sm:py-[40px] text-white flex flex-col gap-2.5 sm:gap-[20px] shadow-2xl">
                    <h2 className="font-lustria text-[20px] sm:text-[32px] lg:text-[40px] font-normal text-white leading-[115%] sm:leading-[110%] tracking-[-0.01em] max-w-[624px] w-full">
                      Body, soul, mind, and connection — we&apos;ve got it all
                    </h2>
                    <p className="font-sans text-[13px] sm:text-[18px] lg:text-[20px] font-normal text-white/90 leading-[130%] sm:leading-[100%] tracking-normal max-w-[624px] w-full">
                      This camp isn&apos;t just about surfing. It&apos;s about the whole experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 3 Stacked White Pill Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-5 py-1">
              {/* Card 1 */}
              <div className="bg-white p-[24px] rounded-[32px] border border-stone-100/80 shadow-[0_0_8px_rgba(146,146,146,0.08)] space-y-2 relative flex-1 min-h-[216px] flex flex-col justify-center">
                <span className="font-sans text-[12px] font-normal text-[#686868] leading-[24px] tracking-[0.01em] block">
                  for body
                </span>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 max-w-[361px] w-full">
                    <h3 className="font-lustria text-[24px] font-normal text-[#042E23] leading-[30px] tracking-normal">
                      Yoga and Meditation
                    </h3>
                    <p className="font-sans text-[14px] font-normal text-[#686868] leading-[24px] tracking-[0.01em]">
                      Stretch out your surf-tired muscles with sunset yoga and start your mornings centered with guided meditation sessions.
                    </p>
                  </div>
                </div>
                <div
                  className="absolute top-[16px] right-[24px] w-[48px] h-[48px] rounded-full flex items-center justify-center shrink-0 text-[26px] leading-none select-none shadow-xs"
                  style={{ background: 'radial-gradient(circle at center, #FFEF44 0%, #FFB133 100%)' }}
                >
                  🧘‍♀️
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-[24px] rounded-[32px] border border-stone-100/80 shadow-[0_0_8px_rgba(146,146,146,0.08)] space-y-2 relative flex-1 min-h-[216px] flex flex-col justify-center">
                <span className="font-sans text-[12px] font-normal text-[#686868] leading-[24px] tracking-[0.01em] block">
                  for mind
                </span>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 max-w-[361px] w-full">
                    <h3 className="font-lustria text-[24px] font-normal text-[#042E23] leading-[30px] tracking-normal">
                      Culture and Growth
                    </h3>
                    <p className="font-sans text-[14px] font-normal text-[#686868] leading-[24px] tracking-[0.01em]">
                      Learn the stories behind the island at local markets and connect over dinners designed for real conversations.
                    </p>
                  </div>
                </div>
                <div
                  className="absolute top-[16px] right-[24px] w-[48px] h-[48px] rounded-full flex items-center justify-center shrink-0 text-[26px] leading-none select-none shadow-xs"
                  style={{ background: 'radial-gradient(circle at center, #FFE6E6 0%, #FFB2C4 100%)' }}
                >
                  🧠
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-[24px] rounded-[32px] border border-stone-100/80 shadow-[0_0_8px_rgba(146,146,146,0.08)] space-y-2 relative flex-1 min-h-[216px] flex flex-col justify-center">
                <span className="font-sans text-[12px] font-normal text-[#686868] leading-[24px] tracking-[0.01em] block">
                  for fun
                </span>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 max-w-[361px] w-full">
                    <h3 className="font-lustria text-[24px] font-normal text-[#042E23] leading-[30px] tracking-normal">
                      Adventures Together
                    </h3>
                    <p className="font-sans text-[14px] font-normal text-[#686868] leading-[24px] tracking-[0.01em]">
                      Discover hidden beaches on scooters, ask your way through night markets, and stay up late swapping travel stories.
                    </p>
                  </div>
                </div>
                <div
                  className="absolute top-[16px] right-[24px] w-[48px] h-[48px] rounded-full flex items-center justify-center shrink-0 text-[26px] leading-none select-none shadow-xs"
                  style={{ background: 'radial-gradient(circle at center, #C6FFE5 0%, #007C4D 100%)' }}
                >
                  🚴
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};
