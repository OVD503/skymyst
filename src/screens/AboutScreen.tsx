import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TEAM_MEMBERS, TESTIMONIALS, FAQS } from '../data/Data';

interface AboutScreenProps {
  onOpenStory: () => void;
  onOpenContact: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onOpenStory, onOpenContact }) => {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div className="w-full">
      {/* 1. Header & Team Members (Image 3) */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-2">
            Who are we
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl text-stone-900 font-normal">
            Meet our expert teams
          </h1>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-8 mb-10 sm:mb-16">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-lg transition flex flex-col"
            >
              <div className="aspect-[4/5] sm:aspect-[4/5] overflow-hidden bg-stone-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 sm:p-5 text-center">
                <h3 className="font-serif text-sm sm:text-lg font-semibold text-stone-900">{member.name}</h3>
                <p className="text-xs text-stone-500 mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Story trigger banner */}
        <div className="bg-[#FAF7F2] p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-stone-200 text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <h3 className="font-serif text-2xl text-stone-900">How Skymyst Began</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
            Three years ago, a group of travelers decided that mountain sanctuaries and surf shores
            deserved authentic, heartfelt management rather than clinical algorithms.
          </p>
          <button
            onClick={onOpenStory}
            id="about-read-story-btn"
            className="px-6 py-2.5 rounded-full bg-[#004030] hover:bg-[#002f23] text-white text-xs font-medium transition shadow-sm active:scale-95"
          >
            Read Our Full Backstory
          </button>
        </div>

        {/* GDPR Notice Paragraph (Image 3) */}
        <div className="mt-8 sm:mt-14 p-4 sm:p-6 md:p-8 bg-stone-100/70 rounded-xl sm:rounded-2xl border border-stone-200/60 max-w-4xl mx-auto">
          <p className="text-xs text-stone-500 leading-relaxed font-light text-center">
            please read this subpage carefully. it contains important information we are required
            by the general data protection regulation (&quot;gdpr&quot;) and, in some cases other
            laws, to disclose, including (i) legal bases, (ii) your legal rights, (iii) safeguards
            we rely on for transferring your personal information outside the european economic
            area (&quot;eea&quot;) and (v) the contact details of the data protection officer. if you
            have any questions,
          </p>
        </div>
      </section>

      {/* 2. Testimonials (Why Choose Us / We've planned everything for you:) (Image 3) */}
      <section className="bg-[#FAF7F2] py-10 sm:py-16 md:py-24 border-y border-stone-200/70">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-1">
              Why Choose Us
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 font-normal">
              We&apos;ve planned everything for you:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-stone-200 shadow-xs space-y-3 sm:space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900">{t.name}</h4>
                    <p className="text-xs text-stone-500">{t.title}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  {t.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ Accordion (Image 3) */}
      <section className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-semibold text-stone-500 uppercase tracking-widest block mb-1">
            FAQ
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
