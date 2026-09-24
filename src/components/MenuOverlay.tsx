import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { ScreenPage } from '../types';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: ScreenPage) => void;
  onOpenContact: () => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="fullscreen-menu-overlay"
      className="fixed inset-0 z-50 overflow-y-auto md:overflow-hidden animate-in fade-in duration-300 font-sans flex items-center justify-center"
    >
      {/* Dark moody mountain sunset background matching Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/bg.jpg"
          alt="Atmospheric mountain sunset backdrop"
          className="w-full h-full object-cover brightness-[0.40] contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-[1534px] h-full min-h-screen md:min-h-0 md:max-h-[1024px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-5 sm:py-8 md:py-10 flex flex-col justify-between text-white">
        {/* Top bar: CLOSE button on far right */}
        <div className="flex justify-end pt-1">
          <button
            id="close-fullscreen-menu-btn"
            onClick={onClose}
            className="text-xs sm:text-sm tracking-[0.2em] uppercase font-medium text-stone-200 hover:text-white transition py-1.5 px-3 rounded-full bg-white/10 md:bg-transparent border border-white/20 md:border-none backdrop-blur-sm cursor-pointer"
          >
            CLOSE
          </button>
        </div>

        {/* Middle Section: Left "ABOUT US", Center GDPR Info, Right Links */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-6 lg:gap-24 my-auto w-full py-4 md:py-0">
          {/* 1. Left Label: ABOUT US */}
          <div className="shrink-0 pt-1 md:mr-8 lg:mr-16 order-1">
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-stone-300 font-semibold block">
              ABOUT US
            </span>
          </div>

          {/* 3. Navigation Links (Shown before GDPR on mobile via order-2 md:order-3) */}
          <div className="flex flex-col items-start md:items-end space-y-3 sm:space-y-4 lg:space-y-6 shrink-0 md:ml-auto order-2 md:order-3 my-2 md:my-0">
            <button
              id="menu-link-book-a-call"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-white hover:text-emerald-300 transition underline underline-offset-8 decoration-1 cursor-pointer"
            >
              Book a Call
            </button>

            <button
              id="menu-link-become-partner"
              onClick={() => {
                onNavigate('partner');
                onClose();
              }}
              className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-white hover:text-emerald-300 transition underline underline-offset-8 decoration-1 cursor-pointer"
            >
              Become a Partner
            </button>

            <button
              id="menu-link-about-us"
              onClick={() => {
                onNavigate('about');
                onClose();
              }}
              className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-white hover:text-emerald-300 transition underline underline-offset-8 decoration-1 cursor-pointer"
            >
              About Us
            </button>
          </div>

          {/* 2. Middle Column: GDPR info text in lowercase (Shown after links on mobile via order-3 md:order-2) */}
          <div className="w-full max-w-[437px] space-y-2 sm:space-y-4 font-sans font-normal text-xs sm:text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed sm:leading-[24px] tracking-normal text-stone-300 md:text-stone-200 lowercase order-3 md:order-2">
            <p>
              please read this subpage carefully. it contains important information we are required by the general data protection regulation (&ldquo;gdpr&rdquo;) and, in some cases other laws, to disclose, including (i) legal bases, (ii) your legal rights, (iii)
            </p>
            <p>
              safeguards we rely on for transferring your personal information outside the european economic area (&ldquo;eea&rdquo;) and (v) the contact details of the data protection officer. if you have any questions,
            </p>
          </div>
        </div>

        {/* Bottom Bar: Socials (Left) and Copyright / Legal (Right) */}
        <div className="pt-4 md:pt-6 pb-2 md:pb-0 flex flex-col md:flex-row items-center md:items-center justify-between text-xs text-stone-300 gap-4 border-t border-white/10 md:border-none">
          {/* Social Links with Circle Icon + Underlined text */}
          <div className="flex items-center space-x-4 sm:space-x-6 w-full md:w-auto justify-start">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 sm:space-x-3 text-white hover:text-emerald-300 group"
            >
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              <span className="text-xs sm:text-base font-normal underline underline-offset-4">Instagram</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 sm:space-x-3 text-white hover:text-emerald-300 group"
            >
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              <span className="text-xs sm:text-base font-normal underline underline-offset-4">Facebook</span>
            </a>
          </div>

          {/* Legal and copyright */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-2 gap-y-1 text-stone-300 text-[11px] sm:text-xs md:text-sm font-light w-full md:w-auto">
            <span>© Skymyst 2026, Inc</span>
            <span className="text-stone-500">|</span>
            <button
              onClick={() => {
                onNavigate('terms');
                onClose();
              }}
              className="text-stone-300 font-normal hover:text-white hover:underline cursor-pointer transition"
            >
              Terms
            </button>
            <span className="text-stone-500">|</span>
            <button
              onClick={() => {
                onNavigate('privacy');
                onClose();
              }}
              className="text-stone-300 font-normal hover:text-white hover:underline cursor-pointer transition"
            >
              Privacy
            </button>
            <span className="text-stone-500">|</span>
            <button
              onClick={() => {
                onNavigate('refund');
                onClose();
              }}
              className="text-stone-300 font-normal hover:text-white hover:underline cursor-pointer transition"
            >
              Refund policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
