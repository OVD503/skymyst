import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Globe, TrendingUp, BarChart3, Phone } from 'lucide-react';
import { FAQS } from '../data/Data';

interface PartnerScreenProps {
  onOpenContact: () => void;
}

export const PartnerScreen: React.FC<PartnerScreenProps> = ({ onOpenContact }) => {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div className="w-full">
      {/* 1. Hero Section (Image 1) */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[420px] sm:min-h-[520px] md:min-h-[680px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=85"
            alt="Warm atmospheric boutique homestay interior"
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
          <h1 className="font-casiome-impera hero-title text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight tracking-tight">
            List Your Property on Skymyst Group
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed font-light">
            When you list with Skymyst Group, you&apos;ll enjoy extended reach that can lead to more
            diverse travellers and more opportunity for your business.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenContact}
              className="px-8 py-3.5 rounded-full bg-[#004030] hover:bg-[#002f23] text-white text-sm font-medium transition shadow-lg active:scale-95"
            >
              Book a call with our team
            </button>
          </div>
        </div>
      </section>

      {/* 2. Three Value Propositions */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-stone-200 shadow-xs space-y-3 sm:space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-[#004030]">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-medium">
              Reach a wealth of travellers
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              Connect with high-value guests looking for curated homestays and memorable retreats
              across India and international destinations.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-stone-200 shadow-xs space-y-3 sm:space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-medium">
              Drive bookings year round
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              Maximize your occupancy with dynamic pricing models, seasonal marketing campaigns,
              and dedicated concierge support.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-stone-200 shadow-xs space-y-3 sm:space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-800">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-medium">
              Grow your business
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              Transparent monthly revenue statements, complete property upkeep SOPs, and actionable
              insights to optimize profitability.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Hotel Partner Spotlight (Image 1) */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="bg-[#003B2B] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            {/* Left Column: Portrait */}
            <div className="md:col-span-5 h-48 sm:h-72 md:h-full min-h-[200px] sm:min-h-[380px] relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85"
                alt="Hasnain Alloo, Commercial Director"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#003B2B]/40 hidden md:block" />
            </div>

            {/* Right Column: Quote & CTA */}
            <div className="md:col-span-7 p-5 sm:p-8 md:p-12 space-y-4 sm:space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#d8f95c] font-semibold">
                Partner Spotlight
              </span>

              <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-normal leading-snug">
                Drive demand like our hotel partners
              </h2>

              <blockquote className="text-xs sm:text-sm text-stone-200 leading-relaxed font-light">
                &quot;Hear how Skymyst Group helps Edwardian Hotels London to reach higher-value
                travellers across our global market from Commercial Director Hasnain Alloo.&quot;
              </blockquote>

              <div className="pt-2 space-y-2">
                <p className="text-xs text-stone-300">Hasnain Alloo — Commercial Director</p>
                <div>
                  <a
                    href="tel:+919876543210"
                    className="text-xl sm:text-2xl font-serif text-[#d8f95c] hover:underline block"
                  >
                    Contact Us : +91 987 6543 210
                  </a>
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenContact}
                  className="px-7 py-3 rounded-full bg-stone-900 hover:bg-black text-white text-xs sm:text-sm font-medium transition shadow-md active:scale-95"
                >
                  Book a call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ Accordion (Image 1) */}
      <section id="faq-section" className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-1">
            Questions
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 font-normal">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs transition"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-4 sm:p-5 md:p-6 text-left flex items-center justify-between hover:bg-stone-50/50 transition"
              >
                <span className="font-serif text-base sm:text-lg text-stone-900 pr-4">
                  {faq.question}
                </span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-stone-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-stone-500 shrink-0" />
                )}
              </button>

              {openFaq === idx && (
                <div className="p-6 pt-0 border-t border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed font-light bg-stone-50/30">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
