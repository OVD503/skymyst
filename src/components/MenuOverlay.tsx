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
      className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-300 font-sans flex items-center justify-center"
    >
      {/* Dark moody mountain sunset background matching Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/bg.jpg"
          alt="Atmospheric mountain sunset backdrop"
          className="w-full h-full object-cover brightness-[0.40] contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b " />
      </div>

      <div className="relative z-10 w-full max-w-[1534px] h-full max-h-[1024px] mx-auto px-6 sm:px-12 lg:px-16 py-6 sm:py-10 flex flex-col justify-between text-white">
        {/* Top bar: CLOSE button on far right */}
        <div className="flex justify-end">
          <button
            id="close-fullscreen-menu-btn"
            onClick={onClose}
            className="text-sm tracking-[0.2em] uppercase font-medium text-stone-200 hover:text-white transition py-1 px-3"
          >
            CLOSE
          </button>
        </div>

        {/* Middle Section: Left "ABOUT US", Center GDPR Info, Right Links */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 lg:gap-24 my-auto w-full">
          {/* 1. Left Label: ABOUT US */}
          <div className="shrink-0 pt-1 md:mr-8 lg:mr-16">
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-stone-300 font-semibold block">
              ABOUT US
            </span>
          </div>

          {/* 2. Middle Column: GDPR info text in lowercase */}
          <div className="w-full max-w-[437px] space-y-4 font-sans font-normal text-[15px] sm:text-[18px] lg:text-[20px] leading-[24px] tracking-normal text-stone-200 lowercase">
            <p>
              please read this subpage carefully. it contains important information we are required by the general data protection regulation (&ldquo;gdpr&rdquo;) and, in some cases other laws, to disclose, including (i) legal bases, (ii) your legal rights, (iii)
            </p>
            <p>
              safeguards we rely on for transferring your personal information outside the european economic area (&ldquo;eea&rdquo;) and (v) the contact details of the data protection officer. if you have any questions,
            </p>
          </div>

          {/* 3. Right Column: Prominent Underlined Links */}
          <div className="flex flex-col items-start md:items-end space-y-4 lg:space-y-6 shrink-0 md:ml-auto">
            <button
              id="menu-link-book-a-call"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-white hover:text-emerald-300 transition underline underline-offset-8 decoration-1"
            >
              Book a Call
            </button>

            <button
              id="menu-link-become-partner"
              onClick={() => {
                onNavigate('partner');
                onClose();
              }}
              className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-white hover:text-emerald-300 transition underline underline-offset-8 decoration-1"
            >
              Become a Partner
            </button>

            <button
              id="menu-link-about-us"
              onClick={() => {
                onNavigate('about');
                onClose();
              }}
              className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-white hover:text-emerald-300 transition underline underline-offset-8 decoration-1"
            >
              About Us
            </button>
          </div>
        </div>

        {/* Bottom Bar: Socials (Left) and Copyright / Legal (Right) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-300 gap-4">
          {/* Social Links with Circle Icon + Underlined text */}
          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-3 text-white hover:text-emerald-300 group"
            >
              <span className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition">
                <Instagram className="w-5 h-5" />
              </span>
              <span className="text-base font-normal underline underline-offset-4">Instagram</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-3 text-white hover:text-emerald-300 group"
            >
              <span className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition">
                <Facebook className="w-5 h-5" />
              </span>
              <span className="text-base font-normal underline underline-offset-4">Facebook</span>
            </a>
          </div>

          {/* Legal and copyright */}
          <div className="flex items-center space-x-3 text-stone-300 text-xs sm:text-sm font-light">
            <span>© Skymyst 2026, Inc</span>
            <span className="text-stone-300 font-normal">Terms</span>
            <span className="text-stone-500">|</span>
            <span className="text-stone-300 font-normal">Privacy</span>
            <span className="text-stone-500">|</span>
            <span className="text-stone-300 font-normal">Refund policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
