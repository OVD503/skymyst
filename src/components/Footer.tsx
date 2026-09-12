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
    <footer id="main-footer" className="bg-[#004D3A] text-white pt-12 sm:pt-16 pb-8 sm:pb-12">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 sm:pb-16 border-b border-[#003D2E]">
          {/* Left Column: Brand, Address, Contact info */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <SkymystLogo variant="light" onClick={() => onNavigate('home')} />
              </div>

              <div className="text-xs sm:text-sm text-stone-200/90 leading-relaxed font-sans font-light space-y-0.5">
                <p className="font-normal text-white mb-1">Waveyu Surf Camp</p>
                <p>Jalan Pantai Batu Bolong No. 27,</p>
                <p>Canggu, Kuta Utara, Badung, Bali 80361,</p>
                <p>Indonesia</p>
              </div>
            </div>

            <div className="space-y-1.5 font-sans">
              <p>
                <a
                  href="tel:+919876543210"
                  className="text-[#C8F231] hover:underline text-lg sm:text-xl font-medium tracking-wide block"
                >
                  +91 987 6543 210
                </a>
              </p>
              <p>
                <a
                  href="mailto:contactskymyst@gmail.com"
                  className="text-[#C8F231] hover:underline text-sm sm:text-base font-normal block"
                >
                  contactskymyst@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Subscribe & Links */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="font-serif text-3xl sm:text-4xl text-white mb-4 sm:mb-6 font-normal">
                Subscribe
              </h3>

              {/* Newsletter form exact to reference image */}
              <form onSubmit={handleSubscribe} className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex-1 rounded-full bg-[#00392B] border border-[#003326] px-5 py-3 flex items-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Sign up to our newsletter"
                      required
                      className="w-full bg-transparent text-sm text-white placeholder:text-stone-300/70 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-7 py-3 rounded-full bg-[#00281F] hover:bg-[#001D17] text-white text-xs sm:text-sm font-medium tracking-wide transition shrink-0 cursor-pointer shadow-md"
                  >
                    {subscribed ? (
                      <span className="flex items-center space-x-1 text-[#C8F231]">
                        <Check className="w-4 h-4" />
                        <span>Subscribed</span>
                      </span>
                    ) : (
                      'Sign Up'
                    )}
                  </button>
                </div>
                {subscribed && (
                  <p className="text-xs text-[#C8F231] mt-2">
                    Thank you for subscribing to Skymyst updates!
                  </p>
                )}
              </form>
            </div>

            {/* Quick Navigation Links exact match to image */}
            <div className="border-t border-[#003B2C]">
              <button
                onClick={() => onNavigate('about')}
                className="w-full flex items-center justify-between py-3.5 text-sm sm:text-base text-white/90 hover:text-white group border-b border-[#003B2C] text-left transition cursor-pointer"
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  onNavigate('partner');
                  const faqSection = document.getElementById('faq-section');
                  if (faqSection) faqSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-between py-3.5 text-sm sm:text-base text-white/90 hover:text-white group border-b border-[#003B2C] text-left transition cursor-pointer"
              >
                <span>FAQ</span>
                <ChevronRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('partner')}
                className="w-full flex items-center justify-between py-3.5 text-sm sm:text-base text-white/90 hover:text-white group border-b border-[#003B2C] text-left transition cursor-pointer"
              >
                <span>Become a partner</span>
                <ChevronRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="w-full flex items-center justify-between py-3.5 text-sm sm:text-base text-white/90 hover:text-white group border-b border-[#003B2C] text-left transition cursor-pointer"
              >
                <span>Testimonials</span>
                <ChevronRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Socials */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-stone-200/90 gap-4">
          <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1">
            <span>© Skymyst 2026, Inc</span>
            <span className="text-white/40">|</span>
            <button onClick={() => alert('Terms of Service: Skymyst homestay terms & partner agreements apply.')} className="hover:text-white transition cursor-pointer">
              Terms
            </button>
            <span className="text-white/40">|</span>
            <button onClick={() => alert('Privacy Policy: Skymyst GDPR & CCPA compliant data handling.')} className="hover:text-white transition cursor-pointer">
              Privacy
            </button>
            <span className="text-white/40">|</span>
            <button onClick={() => alert('Refund Policy: Standard strict and flexible booking cancellation tiers.')} className="hover:text-white transition cursor-pointer">
              Refund policy
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-[#00382B] hover:bg-[#002D22] flex items-center justify-center text-white transition cursor-pointer"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-[#00382B] hover:bg-[#002D22] flex items-center justify-center text-white transition cursor-pointer"
            >
              <Facebook className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
