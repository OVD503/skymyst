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
          {/* Left Column (Brand, Address, Contact info) */}
          <div className="lg:col-span-6 flex flex-col justify-start items-center lg:items-start text-center lg:text-left">
            <div className="w-full max-w-[355px] lg:w-[355px] lg:h-[354px] flex flex-col items-center lg:items-start justify-between gap-4 lg:gap-0">
              {/* 1. Logo (Top) */}
              <div
                onClick={() => onNavigate('home')}
                className="inline-flex justify-center lg:justify-start cursor-pointer transition-transform hover:scale-105 lg:-ml-[22px] w-full lg:w-auto"
              >
                <img
                  src="/assets/logo.png"
                  alt="Skymyst Logo"
                  className="w-[260px] sm:w-[320px] h-[105px] sm:h-[130px] object-contain object-center lg:object-left filter brightness-0 invert drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]"
                />
              </div>

              {/* 2. Address (Middle) */}
              <div className="font-sans text-[15px] sm:text-[16px] font-normal text-white/90 leading-[23px] tracking-[-0.02em] w-full text-center lg:text-left">
                <p>Waveyu Surf Camp</p>
                <p>Jalan Pantai Batu Bolong No. 27,</p>
                <p>Canggu, Kuta Utara, Badung, Bali 80361,</p>
                <p>Indonesia</p>
              </div>

              {/* 3. Phone & Email (Bottom) */}
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
            </div>
          </div>

          {/* Right Column: Subscribe & Links */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 lg:space-y-0 lg:w-[387px] lg:h-[354px] lg:justify-self-end">
            <div className="text-left w-full max-w-[379px]">
              <h3 className="font-lustria font-normal text-[24px] sm:text-[28px] lg:text-[24px] leading-[32px] lg:leading-[40px] tracking-normal text-white w-full lg:w-[379px] h-[40px] flex items-center mb-3 sm:mb-4">
                Subscribe
              </h3>

              {/* Newsletter form exact to reference image */}
              <form onSubmit={handleSubscribe} className="relative w-full max-w-[373px]">
                <div className="flex items-center gap-2 sm:gap-3 justify-start h-[48px] w-full">
                  <div className="flex-1 h-[48px] rounded-full bg-[#006E50] border border-[#005B41] px-4 sm:px-5 flex items-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Sign up to our newsletter"
                      required
                      className="w-full bg-transparent font-sans font-bold text-[12px] leading-[20px] tracking-[0.02em] text-white placeholder:text-white focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-[105px] h-[48px] rounded-[104px] px-[24px] py-[16px] gap-[8px] bg-[#042E23] hover:bg-[#022018] text-white transition shrink-0 cursor-pointer shadow-md active:scale-95 flex flex-row items-center justify-center"
                  >
                    {subscribed ? (
                      <span className="flex items-center space-x-1.5 text-[#FFED25]">
                        <Check className="w-5 h-5" />
                        <span>Subscribed</span>
                      </span>
                    ) : (
                      <span className="font-sans font-normal text-[16px] leading-[140%] tracking-normal text-white text-center whitespace-nowrap">
                        Sign Up
                      </span>
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

            {/* Quick Navigation Links exact match to screenshot (387px x 224px) */}
            <div className="border-t border-[#007052] w-full max-w-[387px] h-[224px] flex flex-col justify-between">
              <button
                onClick={() => onNavigate('about')}
                className="w-full h-[56px] flex items-center justify-between font-sans text-[16px] font-normal text-white hover:text-[#FFED25] group border-b border-[#007052] text-left transition cursor-pointer leading-[140%] tracking-normal"
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
                className="w-full h-[56px] flex items-center justify-between font-sans text-[16px] font-normal text-white hover:text-[#FFED25] group border-b border-[#007052] text-left transition cursor-pointer leading-[140%] tracking-normal"
              >
                <span>FAQ</span>
                <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('partner')}
                className="w-full h-[56px] flex items-center justify-between font-sans text-[16px] font-normal text-white hover:text-[#FFED25] group border-b border-[#007052] text-left transition cursor-pointer leading-[140%] tracking-normal"
              >
                <span>Become a partner</span>
                <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="w-full h-[56px] flex items-center justify-between font-sans text-[16px] font-normal text-white hover:text-[#FFED25] group border-b border-[#007052] text-left transition cursor-pointer leading-[140%] tracking-normal"
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
              <button onClick={() => onNavigate('terms')} className="hover:text-[#FFED25] hover:underline transition cursor-pointer">
                Terms
              </button>
              <span className="text-white/60">|</span>
              <button onClick={() => onNavigate('privacy')} className="hover:text-[#FFED25] hover:underline transition cursor-pointer">
                Privacy
              </button>
              <span className="text-white/60">|</span>
              <button onClick={() => onNavigate('refund')} className="hover:text-[#FFED25] hover:underline transition cursor-pointer">
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
