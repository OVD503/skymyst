import React, { useState } from 'react';
import { ChevronRight, Instagram, Facebook, Check } from 'lucide-react';
import { SkymystLogo } from './SkymystLogo';
import { ScreenPage } from '../types';

interface FooterProps {
  onNavigate: (page: ScreenPage) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer id="main-footer" className="bg-[#004D3A] text-white pt-12 sm:pt-16 pb-8 sm:pb-12 font-sans">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-10 sm:pb-16 border-b border-[#003D2E]">
          {/* Left Column: Brand, Address, Contact info */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 text-center lg:text-left items-center lg:items-start">
            <div className="space-y-6 w-full flex flex-col items-center lg:items-start">
              <div className="flex justify-center lg:justify-start w-full">
                <SkymystLogo variant="light" onClick={() => onNavigate('home')} />
              </div>

              {/* Phone & Email (Top on mobile matching screenshot) */}
              <div className="space-y-1.5 font-sans text-center lg:text-left">
                <p>
                  <a
                    href="tel:+919876543210"
                    className="text-[#EAB308] hover:underline text-xl sm:text-2xl md:text-3xl font-bold tracking-wide block"
                  >
                    +91 987 6543 210
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:contactskymyst@gmail.com"
                    className="text-[#EAB308] hover:underline text-base sm:text-lg font-semibold block"
                  >
                    contactskymyst@gmail.com
                  </a>
                </p>
              </div>

              {/* Address */}
              <div className="text-sm sm:text-base text-stone-100 leading-relaxed font-sans font-normal space-y-1 text-center lg:text-left max-w-sm">
                <p className="font-semibold text-white mb-1">Waveyu Surf Camp</p>
                <p>Jalan Pantai Batu Bolong No. 27,</p>
                <p>Canggu, Kuta Utara, Badung, Bali 80361, Indonesia</p>
              </div>
            </div>
          </div>

          {/* Right Column: Subscribe & Links */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-4xl sm:text-5xl text-white mb-4 sm:mb-6 font-normal">
                Subscribe
              </h3>

              {/* Newsletter form exact to reference image */}
              <form onSubmit={handleSubscribe} className="relative">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="flex-1 rounded-full bg-[#00392B] border border-[#003326] px-6 py-3.5 flex items-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Sign up to our newsletter"
                      required
                      className="w-full bg-transparent text-sm sm:text-base text-white placeholder:text-stone-300/80 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-7 sm:px-8 py-3.5 rounded-full bg-[#00241B] hover:bg-[#001D17] text-white text-sm sm:text-base font-semibold tracking-wide transition shrink-0 cursor-pointer shadow-md active:scale-95"
                  >
                    {subscribed ? (
                      <span className="flex items-center space-x-1.5 text-[#EAB308]">
                        <Check className="w-5 h-5" />
                        <span>Subscribed</span>
                      </span>
                    ) : (
                      'Sign Up'
                    )}
                  </button>
                </div>
                {subscribed && (
                  <p className="text-sm text-[#EAB308] mt-2 font-medium">
                    Thank you for subscribing to Skymyst updates!
                  </p>
                )}
              </form>
            </div>

            {/* Quick Navigation Links exact match to image */}
            <div className="border-t border-[#003B2C] pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="w-full flex items-center justify-between py-4 text-base sm:text-lg md:text-xl text-white hover:text-[#EAB308] group border-b border-[#003B2C] text-left transition cursor-pointer font-medium"
              >
                <span>About Us</span>
                <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  onNavigate('partner');
                  const faqSection = document.getElementById('faq-section');
                  if (faqSection) faqSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-between py-4 text-base sm:text-lg md:text-xl text-white hover:text-[#EAB308] group border-b border-[#003B2C] text-left transition cursor-pointer font-medium"
              >
                <span>FAQ</span>
                <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('partner')}
                className="w-full flex items-center justify-between py-4 text-base sm:text-lg md:text-xl text-white hover:text-[#EAB308] group border-b border-[#003B2C] text-left transition cursor-pointer font-medium"
              >
                <span>Become a partner</span>
                <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="w-full flex items-center justify-between py-4 text-base sm:text-lg md:text-xl text-white hover:text-[#EAB308] group border-b border-[#003B2C] text-left transition cursor-pointer font-medium"
              >
                <span>Testimonials</span>
                <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Socials */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-sm sm:text-base text-stone-100 gap-4 text-center sm:text-left font-medium">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-x-4">
            <span className="block mb-1 sm:mb-0 font-semibold">© Skymyst 2026, Inc</span>
            <div className="flex items-center space-x-3">
              <button onClick={() => alert('Terms of Service: Skymyst homestay terms & partner agreements apply.')} className="hover:text-[#EAB308] transition cursor-pointer">
                Terms
              </button>
              <span className="text-white/40">|</span>
              <button onClick={() => alert('Privacy Policy: Skymyst GDPR & CCPA compliant data handling.')} className="hover:text-[#EAB308] transition cursor-pointer">
                Privacy
              </button>
              <span className="text-white/40">|</span>
              <button onClick={() => alert('Refund Policy: Standard strict and flexible booking cancellation tiers.')} className="hover:text-[#EAB308] transition cursor-pointer">
                Refund policy
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 pt-2 sm:pt-0">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full bg-[#003427] hover:bg-[#002B20] flex items-center justify-center text-white transition cursor-pointer border border-[#004232]"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full bg-[#003427] hover:bg-[#002B20] flex items-center justify-center text-white transition cursor-pointer border border-[#004232]"
            >
              <Facebook className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
