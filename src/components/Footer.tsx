import React, { useState } from 'react';
import { ChevronRight, Instagram, Facebook, Check } from 'lucide-react';
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
    <footer id="main-footer" className="bg-[#005B41] text-white font-sans w-full min-h-[535px] flex flex-col justify-between">
      <div className="w-full max-w-[1440px] mx-auto p-[24px] sm:p-[32px] pb-6 sm:pb-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-10 sm:pb-16 border-b border-[#004D37]">
          {/* Left Column (Brand, Contact info, Address) */}
          <div className="lg:col-span-6 flex flex-col justify-start items-center lg:items-start text-center lg:text-left">
            <div className="w-full max-w-[355px] flex flex-col items-center lg:items-start gap-4 lg:gap-6">
              {/* 1. Logo */}
              <div
                onClick={() => onNavigate('home')}
                className="inline-flex cursor-pointer transition-transform hover:scale-105"
              >
                <img
                  src="/assets/logo.png"
                  alt="Skymyst Logo"
                  className="w-[260px] sm:w-[320px] h-[105px] sm:h-[130px] object-contain filter brightness-0 invert drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]"
                />
              </div>

              {/* 2. Phone & Email (Top on mobile, matching screenshot) */}
              <div className="space-y-1 font-sans text-center lg:text-left w-full">
                <p>
                  <a
                    href="tel:+919876543210"
                    className="font-sans text-[20px] font-normal text-[#FFED25] leading-[26px] tracking-[0.02em] hover:underline block"
                  >
                    +91 987 6543 210
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:contactskymyst@gmail.com"
                    className="font-sans text-[20px] font-normal text-[#FFED25] leading-[26px] tracking-[0.02em] hover:underline block"
                  >
                    contactskymyst@gmail.com
                  </a>
                </p>
              </div>

              {/* 3. Address */}
              <div className="font-sans text-[15px] sm:text-[16px] font-normal text-white/90 leading-[23px] tracking-[-0.02em] max-w-[320px] w-full text-center lg:text-left">
                <p>Waveyu Surf Camp</p>
                <p>Jalan Pantai Batu Bolong No. 27,</p>
                <p>Canggu, Kuta Utara, Badung, Bali 80361, Indonesia</p>
              </div>
            </div>
          </div>

          {/* Right Column: Subscribe & Links */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="text-left">
              <h3 className="font-lustria text-[28px] sm:text-[36px] text-white mb-4 sm:mb-6 font-normal">
                Subscribe
              </h3>

              {/* Newsletter form exact to reference image */}
              <form onSubmit={handleSubscribe} className="relative">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="flex-1 rounded-full bg-[#006E50] border border-[#005B41] px-5 py-3.5 flex items-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Sign up to our newsletter"
                      required
                      className="w-full bg-transparent text-sm sm:text-base text-white placeholder:text-white/80 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 sm:px-8 py-3.5 rounded-full bg-[#053225] hover:bg-[#03241A] text-white text-sm sm:text-base font-semibold tracking-wide transition shrink-0 cursor-pointer shadow-md active:scale-95"
                  >
                    {subscribed ? (
                      <span className="flex items-center space-x-1.5 text-[#FFED25]">
                        <Check className="w-5 h-5" />
                        <span>Subscribed</span>
                      </span>
                    ) : (
                      'Sign Up'
                    )}
                  </button>
                </div>
                {subscribed && (
                  <p className="text-sm text-[#FFED25] mt-2 font-medium">
                    Thank you for subscribing to Skymyst updates!
                  </p>
                )}
              </form>
            </div>

            {/* Quick Navigation Links exact match to screenshot */}
            <div className="border-t border-[#007052] pt-1">
              <button
                onClick={() => onNavigate('about')}
                className="w-full flex items-center justify-between py-3.5 font-sans text-[16px] font-normal text-white hover:text-[#FFED25] group border-b border-[#007052] text-left transition cursor-pointer leading-[140%] tracking-normal"
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
                className="w-full flex items-center justify-between py-3.5 font-sans text-[16px] font-normal text-white hover:text-[#FFED25] group border-b border-[#007052] text-left transition cursor-pointer leading-[140%] tracking-normal"
              >
                <span>FAQ</span>
                <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('partner')}
                className="w-full flex items-center justify-between py-3.5 font-sans text-[16px] font-normal text-white hover:text-[#FFED25] group border-b border-[#007052] text-left transition cursor-pointer leading-[140%] tracking-normal"
              >
                <span>Become a partner</span>
                <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="w-full flex items-center justify-between py-3.5 font-sans text-[16px] font-normal text-white hover:text-[#FFED25] group border-b border-[#007052] text-left transition cursor-pointer leading-[140%] tracking-normal"
              >
                <span>Testimonials</span>
                <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Social Strip */}
      <div className="w-full bg-[#00000026] py-6 min-h-[96px] flex items-center">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 text-center lg:text-left">
          {/* Left Info: Copyright & Legal links */}
          <div className="flex flex-col lg:flex-row items-center gap-2 sm:gap-3 lg:gap-8 text-center lg:text-left">
            <span className="font-sans text-[18px] sm:text-[20px] lg:text-[16px] font-normal text-white leading-[100%]">
              © Skymyst 2026, Inc
            </span>
            <div className="flex items-center space-x-3 text-[16px] sm:text-[18px] lg:text-[15px] font-normal text-white leading-[100%]">
              <button onClick={() => alert('Terms of Service')} className="hover:text-[#FFED25] hover:underline transition cursor-pointer">
                Terms
              </button>
              <span className="text-white/60">|</span>
              <button onClick={() => alert('Privacy Policy')} className="hover:text-[#FFED25] hover:underline transition cursor-pointer">
                Privacy
              </button>
              <span className="text-white/60">|</span>
              <button onClick={() => alert('Refund Policy')} className="hover:text-[#FFED25] hover:underline transition cursor-pointer">
                Refund policy
              </button>
            </div>
          </div>

          {/* Right Social Icons */}
          <div className="flex items-center justify-center space-x-3 pt-2 lg:pt-0">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
            >
              <Facebook className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
