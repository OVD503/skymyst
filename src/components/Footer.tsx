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
    <footer id="main-footer" className="bg-[#015E47] text-white p-[24px] sm:p-[32px] font-sans w-full min-h-[535px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-10 sm:pb-16 border-b border-[#014D3A]">
          {/* Left Column (Frame 67): Brand, Address, Contact info */}
          <div className="lg:col-span-6 flex flex-col justify-start items-center lg:items-start">
            <div className="w-full lg:w-[355px] h-auto lg:h-[354px] flex flex-col justify-between items-center lg:items-start text-center lg:text-left gap-6 lg:gap-0">
              {/* 1. Logo (Top) */}
              <div
                onClick={() => onNavigate('home')}
                className="inline-flex cursor-pointer transition-transform hover:scale-105"
              >
                <img
                  src="/assets/logo.png"
                  alt="Skymyst Logo"
                  className="w-[153px] h-[64px] object-contain filter brightness-0 invert"
                />
              </div>

              {/* 2. Address (Middle) */}
              <div className="font-sans text-[16px] font-normal text-white leading-[23px] tracking-[-0.02em] max-w-[302px] w-full text-center lg:text-left">
                <p>Waveyu Surf Camp</p>
                <p>Jalan Pantai Batu Bolong No. 27,</p>
                <p>Canggu, Kuta Utara, Badung, Bali 80361,</p>
                <p>Indonesia</p>
              </div>

              {/* 3. Phone & Email (Bottom) */}
              <div className="space-y-1 font-sans text-center lg:text-left w-full max-w-[355px]">
                <p>
                  <a
                    href="tel:+919876543210"
                    className="font-sans text-[20px] font-normal text-[#FCE700] leading-[24px] tracking-[0.02em] hover:underline block"
                  >
                    +91 987 6543 210
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:contactskymyst@gmail.com"
                    className="font-sans text-[20px] font-normal text-[#FCE700] leading-[24px] tracking-[0.02em] hover:underline block"
                  >
                    contactskymyst@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Subscribe & Links */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-display-2 text-white mb-4 sm:mb-6 font-normal">
                Subscribe
              </h3>

              {/* Newsletter form exact to reference image */}
              <form onSubmit={handleSubscribe} className="relative">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="flex-1 rounded-full bg-[#014B39] border border-[#014232] px-6 py-3.5 flex items-center">
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
                    className="px-7 sm:px-8 py-3.5 rounded-full bg-[#003B2C] hover:bg-[#003024] text-white text-sm sm:text-base font-semibold tracking-wide transition shrink-0 cursor-pointer shadow-md active:scale-95"
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
            <div className="border-t border-[#014D3A] pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="w-full flex items-center justify-between py-3.5 font-sans text-[16px] font-normal text-white hover:text-[#FCE700] group border-b border-[#014D3A] text-left transition cursor-pointer leading-[140%] tracking-normal"
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
                className="w-full flex items-center justify-between py-3.5 font-sans text-[16px] font-normal text-white hover:text-[#FCE700] group border-b border-[#014D3A] text-left transition cursor-pointer leading-[140%] tracking-normal"
              >
                <span>FAQ</span>
                <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('partner')}
                className="w-full flex items-center justify-between py-3.5 font-sans text-[16px] font-normal text-white hover:text-[#FCE700] group border-b border-[#014D3A] text-left transition cursor-pointer leading-[140%] tracking-normal"
              >
                <span>Become a partner</span>
                <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="w-full flex items-center justify-between py-3.5 font-sans text-[16px] font-normal text-white hover:text-[#FCE700] group border-b border-[#014D3A] text-left transition cursor-pointer leading-[140%] tracking-normal"
              >
                <span>Testimonials</span>
                <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Socials */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-x-4">
            <span className="font-sans text-[20px] font-normal text-white leading-[100%] tracking-normal inline-block">
              © Skymyst 2026, Inc
            </span>
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
              className="w-11 h-11 rounded-full bg-[#014B39] hover:bg-[#013B2C] flex items-center justify-center text-white transition cursor-pointer border border-[#01543F]"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full bg-[#014B39] hover:bg-[#013B2C] flex items-center justify-center text-white transition cursor-pointer border border-[#01543F]"
            >
              <Facebook className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
