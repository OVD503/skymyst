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
    <div className="w-full bg-white font-sans antialiased text-stone-800 pt-4 sm:pt-6">
      {/* 1. Header & Team Members Section */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[148px] pt-12 md:pt-[96px] pb-12 md:pb-[96px] flex flex-col gap-[45px]">
        <div className="text-center max-w-2xl mx-auto">
          <span className="!font-sans font-normal text-[16px] leading-[140%] tracking-normal text-[#1E1E1E] text-center block mb-1.5">
            Who are we
          </span>
          <h1 className="font-lustria font-normal text-[28px] sm:text-[36px] md:text-[40px] leading-[110%] tracking-[-0.01em] text-[#1E1E1E]">
            Meet our expert teams
          </h1>
        </div>

        {/* Team Members Grid (with Image Placeholders + Avatar) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="flex flex-col space-y-3">
              {/* Team Member Image */}
              <div className="w-full sm:w-[354.67px] h-[272px] rounded-[32px] overflow-hidden relative shadow-xs bg-[#E4CCCC]">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover ${member.imagePosition || 'object-center'}`}
                />
              </div>
              <div className="text-center sm:text-left pt-1">
                <h3 className="!font-sans font-medium text-[16px] leading-[20px] tracking-[0.02em] text-[#042E23]">
                  {member.name}
                </h3>
                <p className="!font-sans font-normal text-[16px] leading-[140%] tracking-normal text-[#4E4E4E] mt-0.5">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* GDPR Notice Paragraph */}
        <div className="max-w-[1139px] mx-auto text-center px-4">
          <p className="!font-sans font-medium text-[16px] leading-[24px] tracking-normal text-[#747474] text-center">
            Please read this Subpage carefully. It contains important information we are required by the General Data Protection Regulation (&quot;GDPR&quot;) and, in some cases other laws, to disclose, including (i) legal bases, (ii) your legal rights, (iii) safeguards we rely on for transferring your personal information outside the European Economic Area (&quot;EEA&quot;) and (v) the contact details of the Data Protection Officer. If you have any questions,
          </p>
        </div>
      </section>

      {/* 2. Testimonials (Why Choose Us / We've planned everything for you:) */}
      <section className="bg-[#FFFFFF] min-h-[900px] h-[900px] overflow-hidden relative border-t border-stone-100 flex items-center justify-center">
        <div className="w-full max-w-[1440px] h-[900px] mx-auto px-4 sm:px-8 lg:px-[80px] relative overflow-hidden">

          {/* Absolute Positioned Header (Floats over top cards matching Figma spec) */}
          <div className="absolute top-[64px] left-1/2 -translate-x-1/2 z-30 text-center w-auto px-4 pointer-events-none flex flex-col items-center gap-[16px]">
            <span className="font-sans font-normal text-[16px] leading-[20px] tracking-normal text-[#1E1E1E] h-[20px] whitespace-nowrap">
              Why Choose Us
            </span>
            <h2 className="font-lustria font-normal text-[24px] sm:text-[32px] lg:text-[40px] leading-[110%] tracking-[-0.01em] text-[#1E1E1E] whitespace-nowrap">
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

