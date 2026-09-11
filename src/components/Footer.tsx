import React, { useState } from 'react';
import { ChevronRight, Instagram, Facebook, Check } from 'lucide-react';
import { SkymystLogo } from './SkymystLogo';
import { ScreenPage } from '../types';

interface FooterProps {
  onNavigate: (page: ScreenPage) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
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
    <footer id="main-footer" className="bg-[#003B2B] text-stone-200 pt-16 pb-10 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-emerald-900/60">
          {/* Left Column: Brand & Contact info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-start">
              <SkymystLogo variant="light" onClick={() => onNavigate('home')} />
            </div>

            <div className="text-sm leading-relaxed text-stone-300/90 max-w-sm">
              <p className="font-medium text-white mb-1">Waveyu Surf Camp</p>
              <p>Jalan Pantai Batu Bolong No. 27,</p>
              <p>Canggu, Kuta Utara, Badung, Bali 80361,</p>
              <p>Indonesia</p>
            </div>

            <div className="pt-2 space-y-1 text-sm font-medium">
              <p>
                <a
                  href="tel:+919876543210"
                  className="text-[#d8f95c] hover:underline tracking-wide text-base font-semibold block"
                >
                  +91 987 6543 210
                </a>
              </p>
              <p>
                <a
                  href="mailto:contactskymyst@gmail.com"
                  className="text-[#d8f95c] hover:underline block"
                >
                  contactskymyst@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Subscribe & Links */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-white mb-4">Subscribe</h3>

              {/* Newsletter form */}
              <form onSubmit={handleSubscribe} className="relative max-w-md">
                <div className="flex items-center rounded-full bg-[#002f22] border border-emerald-800/80 p-1.5 focus-within:border-emerald-500 transition">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Sign up to our newsletter"
                    required
                    className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-emerald-300/60 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold tracking-wide uppercase transition shrink-0"
                  >
                    {subscribed ? (
                      <span className="flex items-center space-x-1 text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                        <span>Done</span>
                      </span>
                    ) : (
                      'Sign Up'
                    )}
                  </button>
                </div>
                {subscribed && (
                  <p className="text-xs text-[#d8f95c] mt-2">
                    Thank you for subscribing to Skymyst updates!
                  </p>
                )}
              </form>
            </div>

            {/* Quick Navigation Links */}
            <div className="space-y-3 pt-4 border-t border-emerald-900/50">
              <button
                onClick={() => onNavigate('about')}
                className="w-full flex items-center justify-between py-2 text-sm text-stone-200 hover:text-white group border-b border-emerald-900/40 text-left transition"
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  onNavigate('partner');
                  const faqSection = document.getElementById('faq-section');
                  if (faqSection) faqSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-between py-2 text-sm text-stone-200 hover:text-white group border-b border-emerald-900/40 text-left transition"
              >
                <span>FAQ</span>
                <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('partner')}
                className="w-full flex items-center justify-between py-2 text-sm text-stone-200 hover:text-white group border-b border-emerald-900/40 text-left transition"
              >
                <span>Become a partner</span>
                <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="w-full flex items-center justify-between py-2 text-sm text-stone-200 hover:text-white group text-left transition"
              >
                <span>Testimonials</span>
                <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© Skymyst 2026, Inc</span>
            <span className="text-emerald-800">|</span>
            <button onClick={() => alert('Terms of Service: Skymyst homestay terms & partner agreements apply.')} className="hover:text-white transition">
              Terms
            </button>
            <span className="text-emerald-800">|</span>
            <button onClick={() => alert('Privacy Policy: Skymyst GDPR & CCPA compliant data handling.')} className="hover:text-white transition">
              Privacy
            </button>
            <span className="text-emerald-800">|</span>
            <button onClick={() => alert('Refund Policy: Standard strict and flexible booking cancellation tiers.')} className="hover:text-white transition">
              Refund policy
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-[#002f22] hover:bg-emerald-900 flex items-center justify-center text-stone-300 hover:text-white transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-[#002f22] hover:bg-emerald-900 flex items-center justify-center text-stone-300 hover:text-white transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
