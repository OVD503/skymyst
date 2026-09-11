import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TEAM_MEMBERS, TESTIMONIALS, FAQS } from '../data/Data';
import { UserAvatar } from '../components/UserAvatar';

interface AboutScreenProps {
  onOpenStory: () => void;
  onOpenContact: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = () => {
  // All FAQs open by default
  const [openFaqs, setOpenFaqs] = useState<number[]>(FAQS.map((_, i) => i));

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="w-full bg-white font-sans antialiased text-stone-800 pt-16 sm:pt-20">
      {/* 1. Header & Team Members Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-1.5">
            Who are we
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C2926] font-normal tracking-tight">
            Meet our expert teams
          </h1>
        </div>

        {/* Team Members Grid (with Image Placeholders + Avatar) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="flex flex-col space-y-3">
              {/* Image Placeholder container matching reference */}
              <div className="w-full h-64 sm:h-72 bg-[#EFECE6] rounded-[28px] flex flex-col items-center justify-center border border-stone-200/80 overflow-hidden relative shadow-xs">
                <UserAvatar name={member.name} size="xl" className="shadow-md mb-2" />
                <span className="text-[11px] text-stone-400 font-sans tracking-wide">Image Placeholder</span>
              </div>
              <div className="text-left pt-1">
                <h3 className="font-bold text-sm sm:text-base text-[#2C2926] font-sans">{member.name}</h3>
                <p className="text-xs text-stone-500 font-sans font-normal mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* GDPR Notice Paragraph */}
        <div className="max-w-4xl mx-auto text-center mt-12 sm:mt-16 mb-6 px-4">
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-sans font-light">
            Please read this Subpage carefully. It contains important information we are required by the General Data Protection Regulation (&quot;GDPR&quot;) and, in some cases other laws, to disclose, including (i) legal bases, (ii) your legal rights, (iii) safeguards we rely on for transferring your personal information outside the European Economic Area (&quot;EEA&quot;) and (v) the contact details of the Data Protection Officer. If you have any questions,
          </p>
        </div>
      </section>

      {/* 2. Testimonials (Why Choose Us / We've planned everything for you:) */}
      <section className="bg-[#FFF9E8] py-16 sm:py-24 border-t border-b border-[#EAE3D2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-1.5">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C2926] font-normal tracking-tight">
              We&apos;ve planned everything for you:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
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
                  Bali has drawn surfers since the 70s: a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world.
                </p>
              </div>
            </div>

            {/* Column 2 */}
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
                  Bali has drawn surfers since the 70s: a legendary destination with waves for every level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Header Column */}
            <div className="md:col-span-5 lg:col-span-4">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C2926] font-normal leading-[1.15] tracking-tight">
                Frequently<br />Asked Questions
              </h2>
            </div>

            {/* Right Accordion Column */}
            <div className="md:col-span-7 lg:col-span-8 border-t border-[#E7E0CE]">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqs.includes(idx);
                return (
                  <div
                    key={idx}
                    className={`border-b transition-colors ${
                      isOpen ? 'border-b-2 border-[#00704A]' : 'border-[#E7E0CE]'
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

