import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Home, Building2, Sprout } from 'lucide-react';
import { FAQS } from '../data/Data';

interface PartnerScreenProps {
  onOpenContact: () => void;
}

export const PartnerScreen: React.FC<PartnerScreenProps> = ({ onOpenContact }) => {
  // All FAQs open by default
  const [openFaqs, setOpenFaqs] = useState<number[]>(FAQS.map((_, i) => i));

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="w-full bg-white font-sans antialiased text-stone-800">
      {/* 1. Hero Banner Section */}
      <section className="relative h-[65vh] sm:h-[75vh] md:h-[80vh] min-h-[440px] sm:min-h-[540px] flex items-center justify-center overflow-hidden">
        {/* Background image: warm homestay lounge/dining window view with hanging lights */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/bg.png"
            alt="Warm atmospheric boutique homestay interior"
            className="w-full h-full object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4 pt-12">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-tight tracking-tight">
            List Your Property on Skymyst Group
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            When you list with Skymyst Group, you&apos;ll enjoy extended reach that can lead to more diverse travellers and more opportunity for your business.
          </p>
        </div>
      </section>

      {/* 2. Three Value Propositions Section */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#EAE3D2]">
        <div className="max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6 text-center">
          <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2926] font-normal tracking-tight mb-3">
              Bring the right guests within reach
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-sans leading-relaxed max-w-xl mx-auto font-light">
              Connect with millions of people whose purpose, taste and budget make your property the perfect place to stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200/80 items-start">
            {/* Column 1 */}
            <div className="py-6 md:py-0 md:px-8 flex flex-col items-center text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#D2F1E4] flex items-center justify-center text-[#005B41] mb-2">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#2C2926] font-sans">
                Reach a wealth of travellers
              </h3>
              <p className="text-xs text-stone-500 font-sans leading-relaxed max-w-xs font-light">
                Access guests who stay longer, cancel less, and spend more across our travel brands and global B2B distribution network.
              </p>
            </div>

            {/* Column 2 */}
            <div className="py-6 md:py-0 md:px-8 flex flex-col items-center text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#D2F1E4] flex items-center justify-center text-[#005B41] mb-2">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#2C2926] font-sans">
                Drive bookings year round
              </h3>
              <p className="text-xs text-stone-500 font-sans leading-relaxed max-w-xs font-light">
                Target travellers who book weekend getaways, travel mid-week for work, or fill your shoulder-season rooms.
              </p>
            </div>

            {/* Column 3 */}
            <div className="py-6 md:py-0 md:px-8 flex flex-col items-center text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#D2F1E4] flex items-center justify-center text-[#005B41] mb-2">
                <Sprout className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#2C2926] font-sans">
                Grow your business
              </h3>
              <p className="text-xs text-stone-500 font-sans leading-relaxed max-w-xs font-light">
                Leverage data from our pricing and visibility tools to help capture valuable guests and maximize revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Partner Spotlight Section */}
      <section className="bg-[#FFF9E8] py-16 sm:py-24 border-b border-[#EAE3D2]">
        <div className="max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6 text-center">
          <div className="max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2926] font-normal tracking-tight mb-3">
              Drive demand like our hotel partners
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed max-w-xl mx-auto font-light">
              Hear how Skymyst Group helps Edwardian Hotels London to reach higher-value travellers across our global market from Commercial Director Hasnain Alloo.
            </p>
          </div>

          {/* Centered Image Card */}
          <div className="mb-8 max-w-lg mx-auto">
            <img
              src=""
              className="rounded-[28px] w-full h-64 sm:h-80 object-cover shadow-sm"
            />
          </div>

          {/* Contact Us + Book a Call Button below image */}
          <div className="max-w-lg mx-auto flex items-center justify-between pt-2">
            <div className="text-left">
              <span className="text-xs text-stone-500 font-sans block mb-0.5">Contact Us</span>
              <a
                href="tel:+919876543210"
                className="text-xl sm:text-2xl font-serif text-[#2C2926] font-normal hover:underline"
              >
                +91 987 6543 210
              </a>
            </div>
            <div>
              <button
                onClick={onOpenContact}
                className="bg-[#00704A] hover:bg-[#00583A] text-white px-7 py-3 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm active:scale-95"
              >
                Book a call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section id="faq-section" className="bg-white py-16 sm:py-24">
        <div className="max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Header Column */}
            <div className="md:col-span-5 lg:col-span-4">
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2926] font-normal leading-[1.15] tracking-tight">
                Frequently<br />Asked Questions
              </h2>
            </div>

            {/* Right Accordion Column */}
            <div className="md:col-span-7 lg:col-span-8 border-t-2 border-[#CFC5AF]">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqs.includes(idx);
                return (
                  <div
                    key={idx}
                    className={`border-b-2 transition-colors ${
                      isOpen ? 'border-[#00704A]' : 'border-[#CFC5AF]'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-5 sm:py-6 text-left flex items-center justify-between group"
                    >
                      <span className="font-bold text-xs sm:text-sm text-[#2C2926] font-sans pr-4 leading-snug">
                        {faq.question}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#EFE9D8] group-hover:bg-[#E7E0CE] flex items-center justify-center shrink-0 text-stone-600 transition-colors">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="pb-5 sm:pb-6 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

