import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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
      <section className="relative w-full h-[480px] flex items-center justify-center overflow-hidden">
        {/* Background image: warm homestay lounge/dining window view with hanging lights */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/become a partner.jpg"
            alt="Warm atmospheric boutique homestay interior"
            className="w-full h-full object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto h-[480px] flex flex-col justify-center items-center text-center gap-4 py-[48px] px-6 lg:px-[200px]">
          <h1 className="font-lustria font-normal text-[40px] sm:text-[40px] leading-[110%] sm:leading-[100%] tracking-[-0.01em] sm:tracking-normal text-white text-center w-[354px] max-w-full sm:w-[1040px] sm:max-w-full h-[88px] sm:h-[51px] flex items-center justify-center">
            List Your Property on Skymyst Group
          </h1>
          <p className="font-sans font-normal sm:font-medium text-[16px] sm:text-[24px] leading-[140%] sm:leading-[100%] tracking-normal text-white text-center w-[354px] max-w-full sm:w-[1040px] sm:max-w-full h-[88px] sm:h-[60px] flex items-center justify-center">
            When you list with Skymyst Group, you&apos;ll enjoy extended reach that can lead to more diverse travellers and more opportunity for your business.
          </p>
        </div>
      </section>

      {/* 2. Three Value Propositions Section */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#EAE3D2]">
        <div className="max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6 text-center">
          <div className="max-w-[1344px] mx-auto mb-12 sm:mb-16 flex flex-col items-center">
            <h2 className="font-lustria text-[28px] sm:text-[40px] font-normal leading-[1.1] sm:leading-[100%] tracking-normal text-[#1E1E1E] text-center max-w-[1344px] w-full mb-3">
              Bring the right guests within reach
            </h2>
            <p className="font-sans text-sm sm:text-[16px] font-medium leading-[1.3] sm:leading-[100%] tracking-normal text-[#1E1E1E] text-center max-w-[803px] w-full">
              Connect with millions of people whose purpose, taste and budget make your property the perfect place to stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-[#EAE3D2] md:divide-y-0 md:divide-x md:divide-[#919191] items-start max-w-[1344px] mx-auto">
            {/* Column 1 */}
            <div className="py-8 md:py-[24px] px-6 sm:px-[40px] flex flex-col items-center md:items-start text-center md:text-left gap-[18px]">
              <div className="w-16 h-16 rounded-full bg-[#D2F1E4] flex items-center justify-center text-3xl select-none shrink-0">
                🏠
              </div>
              <h3 className="font-lustria text-[22px] md:font-sans md:text-[20px] font-normal md:font-medium leading-[120%] tracking-normal text-[#1E1E1E]">
                Reach a wealth of travellers
              </h3>
              <p className="font-sans text-[15px] sm:text-[16px] font-normal leading-[24px] tracking-[0.02em] text-[#4E4E4E] max-w-[340px] md:max-w-none">
                Access guests who stay longer, cancel less, and spend more across our travel brands and global B2B distribution network.
              </p>
            </div>

            {/* Column 2 */}
            <div className="py-8 md:py-[24px] px-6 sm:px-[40px] flex flex-col items-center md:items-start text-center md:text-left gap-[18px]">
              <div className="w-16 h-16 rounded-full bg-[#D2F1E4] flex items-center justify-center text-3xl select-none shrink-0">
                📅
              </div>
              <h3 className="font-lustria text-[22px] md:font-sans md:text-[20px] font-normal md:font-medium leading-[120%] tracking-normal text-[#1E1E1E]">
                Drive bookings year round
              </h3>
              <p className="font-sans text-[15px] sm:text-[16px] font-normal leading-[24px] tracking-[0.02em] text-[#4E4E4E] max-w-[340px] md:max-w-none">
                Target travellers who book weekend getaways, travel mid-week for work, or fill your shoulder-season rooms.
              </p>
            </div>

            {/* Column 3 */}
            <div className="py-8 md:py-[24px] px-6 sm:px-[40px] flex flex-col items-center md:items-start text-center md:text-left gap-[18px]">
              <div className="w-16 h-16 rounded-full bg-[#D2F1E4] flex items-center justify-center text-3xl select-none shrink-0">
                🌱
              </div>
              <h3 className="font-lustria text-[22px] md:font-sans md:text-[20px] font-normal md:font-medium leading-[120%] tracking-normal text-[#1E1E1E]">
                Grow your business
              </h3>
              <p className="font-sans text-[15px] sm:text-[16px] font-normal leading-[24px] tracking-[0.02em] text-[#4E4E4E] max-w-[340px] md:max-w-none">
                Leverage data from our pricing and visibility tools to help capture valuable guests and maximize revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Partner Spotlight Section */}
      <section className="w-full bg-[#FFF9E8] py-8 sm:py-[48px] border-b border-[#EAE3D2]">
        <div className="max-w-[1440px] mx-auto px-0 sm:px-6 flex flex-col items-center gap-6 sm:gap-[40px] text-center">
          <div className="max-w-[800px] mx-auto flex flex-col items-center gap-3 px-4 sm:px-0">
            <h2 className="font-lustria text-[28px] sm:text-[40px] font-normal leading-[1.15] sm:leading-[100%] tracking-normal text-[#1E1E1E] text-center max-w-[340px] sm:max-w-[800px] w-full">
              Drive demand like our hotel partners
            </h2>
            <p className="font-sans text-sm sm:text-[16px] font-normal leading-[24px] tracking-[0.02em] text-[#4E4E4E] text-center max-w-[800px] w-full">
              Hear how Skymyst Group helps Edwardian Hotels London to reach higher-value travellers across our global market from Commercial Director Hasnain Alloo.
            </p>
          </div>

          {/* Centered Image Card (Full bleed on mobile, rounded on desktop) */}
          <div className="w-full sm:max-w-[564px] mx-auto">
            <img
              src="/host/become a partner.jpg"
              alt="Hotel Partner Spotlight"
              className="rounded-none sm:rounded-[24px] w-full h-[360px] sm:h-[342px] object-cover shadow-sm"
            />
          </div>

          {/* Contact Us + Book a Call Button below image */}
          <div className="w-full max-w-[564px] mx-auto flex flex-col items-center text-center gap-4 sm:flex-row sm:items-center sm:justify-between sm:text-left pt-2 px-4 sm:px-0">
            <div className="flex flex-col items-center sm:items-start">
              <span className="font-sans text-[16px] font-normal leading-[24px] tracking-[0.02em] text-[#4E4E4E] block mb-1">
                Contact Us
              </span>
              <a
                href="tel:+919876543210"
                className="font-lustria text-[32px] sm:text-[40px] font-normal leading-[100%] tracking-normal text-[#1E1E1E] hover:underline block"
              >
                +91 987 6543 210
              </a>
            </div>
            <div className="pt-2 sm:pt-0">
              <button
                onClick={onOpenContact}
                className="bg-[#00704A] hover:bg-[#00583A] text-white px-9 py-3.5 rounded-full font-sans text-[16px] font-medium leading-[100%] tracking-normal transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
              >
                Book a call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="bg-white">
        <div className="max-w-[1440px] w-full min-h-[600px] md:h-[600px] mx-auto px-5 sm:px-8 md:px-[32px] py-[32px] md:py-[48px] flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
          {/* Left Header Column */}
          <div className="w-full md:w-[580px] shrink-0 text-center md:text-left">
            <h2 className="font-lustria font-normal text-[26px] sm:text-[36px] lg:text-[40px] leading-[115%] sm:leading-[100%] tracking-normal text-[#1E1E1E] max-w-[580px] mx-auto md:mx-0">
              <span className="md:hidden">Frequently Asked Questions</span>
              <span className="hidden md:inline">
                Frequently<br />Asked Questions
              </span>
            </h2>
          </div>

          {/* Right Accordion Column */}
          <div className="w-full md:w-[796px] max-w-[796px] flex flex-col gap-6 md:gap-[32px]">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqs.includes(idx);
              return (
                <div
                  key={idx}
                  className={`border-b transition-colors pb-4 sm:pb-5 ${isOpen ? 'border-b-2 border-[#00704A]' : 'border-[#EAE3D2]'
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-start justify-between group gap-4 py-1"
                  >
                    <span className="font-sans font-medium text-[18px] sm:text-[20px] leading-[24px] tracking-[0.02em] text-[#1E1E1E] flex-1 max-w-[620px]">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F4EFEA] group-hover:bg-[#EFE9D8] flex items-center justify-center shrink-0 text-stone-600 transition-colors mt-0.5">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pb-1 font-sans font-normal text-[16px] leading-[24px] tracking-[0.02em] text-[#4E4E4E] max-w-[620px]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

