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
      className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-300 font-sans"
    >
      {/* Dark moody mountain sunset background matching Image 2 */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/bg.png"
          alt="Atmospheric mountain sunset backdrop"
          className="w-full h-full object-cover brightness-[0.35] contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-10 lg:px-16 py-8 flex flex-col justify-between text-white">
        {/* Top bar: CLOSE button on far right */}
        <div className="flex justify-end">
          <button
            id="close-fullscreen-menu-btn"
            onClick={onClose}
            className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-stone-300 hover:text-white transition py-2 px-3 hover:bg-white/10 rounded-full"
          >
            CLOSE
          </button>
        </div>

        {/* Middle Section: Left GDPR Info & Right Massive Underlined Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto items-center">
          {/* Left Column: ABOUT US text */}
          <div className="md:col-span-6 space-y-4 max-w-lg">
            <span className="text-xs uppercase tracking-[0.25em] text-stone-400 font-semibold block">
              ABOUT US
            </span>
            <div className="space-y-3 text-xs sm:text-sm text-stone-200/90 leading-relaxed font-light">
              <p>
                At our homestay, we believe that travel is not just about visiting a destination — it’s about feeling at home wherever you go. Nestled in a peaceful setting, our property offers a perfect blend of comfort, warmth, and authentic hospitality.
              </p>
              <p>
                Every room is thoughtfully designed to provide a relaxing and memorable stay, while our personalized service ensures that each guest feels welcomed like family. Whether you are seeking a quiet retreat, a nature escape, or a getaway with loved ones, we strive to create experiences that are both comfortable and meaningful.
              </p>
              <p>
                From cozy accommodations to local experiences, we are dedicated to making every stay special. Our goal is simple: to offer a home away from home where guests can relax, reconnect, and create lasting memories.
              </p>
              <p className="text-stone-100 font-medium">
                We look forward to welcoming you and sharing the warmth of our hospitality.
              </p>
            </div>
          </div>

          {/* Right Column: Prominent Underlined Links */}
          <div className="md:col-span-6 flex flex-col items-start md:items-end space-y-5 sm:space-y-7">
            <button
              id="menu-link-book-a-call"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-white hover:text-emerald-300 transition underline underline-offset-8 decoration-2"
            >
              Book a Call
            </button>

            <button
              id="menu-link-become-partner"
              onClick={() => {
                onNavigate('partner');
                onClose();
              }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-white hover:text-emerald-300 transition underline underline-offset-8 decoration-2"
            >
              Become a Partner
            </button>

            <button
              id="menu-link-about-us"
              onClick={() => {
                onNavigate('about');
                onClose();
              }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-white hover:text-emerald-300 transition underline underline-offset-8 decoration-2"
            >
              About Us
            </button>

            <button
              id="menu-link-explore-map"
              onClick={() => {
                onNavigate('search');
                onClose();
              }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-white hover:text-emerald-300 transition underline underline-offset-8 decoration-2"
            >
              Explore Stays & Map
            </button>
          </div>
        </div>

        {/* Bottom Bar: Socials (Left) and Copyright / Legal (Right) */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          {/* Social Links with Circle Icon + Underlined text */}
          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 text-stone-200 hover:text-white group"
            >
              <span className="w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition">
                <Instagram className="w-4 h-4" />
              </span>
              <span className="text-sm font-medium underline underline-offset-4">Instagram</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 text-stone-200 hover:text-white group"
            >
              <span className="w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition">
                <Facebook className="w-4 h-4" />
              </span>
              <span className="text-sm font-medium underline underline-offset-4">Facebook</span>
            </a>
          </div>

          {/* Legal and copyright */}
          <div className="flex items-center space-x-3 text-stone-300 text-xs sm:text-sm font-light">
            <span>© Skymyst 2026, Inc</span>
            <span className="text-stone-500 font-normal">Terms</span>
            <span className="text-stone-500">|</span>
            <span className="text-stone-500 font-normal">Privacy</span>
            <span className="text-stone-500">|</span>
            <span className="text-stone-500 font-normal">Refund policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
