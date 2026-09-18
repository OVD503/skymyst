import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { SkymystLogo } from './SkymystLogo';
import { ScreenPage } from '../types';

interface HeaderProps {
  currentPage: ScreenPage;
  onNavigate: (page: ScreenPage) => void;
  onOpenMenu: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  onOpenMenu,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-40 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-stone-950/90 backdrop-blur-md border-b border-white/10 py-2 sm:py-3 md:py-4 shadow-xl'
          : 'bg-gradient-to-b from-black/35 via-transparent to-transparent py-2.5 sm:py-4 md:py-6'
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6 flex items-center justify-between">
        {/* Left Side: White Skymyst Logo with Arch Emblem */}
        <div className="flex items-center">
          <SkymystLogo
            variant="light"
            onClick={() => onNavigate('home')}
            size="md"
          />
        </div>

        {/* Right Side Buttons: Book a call, Become a partner, Circular Hamburger menu */}
        <div className="flex items-center space-x-1.5 sm:space-x-3 md:space-x-4">
          {/* Book a Call (Teal/Emerald Pill Button) */}
          <button
            id="nav-book-a-call-btn"
            onClick={onOpenContact}
            className="px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-[#004030] hover:bg-[#002f23] text-white text-caption-bold transition-all shadow-md hover:shadow-emerald-950/20 active:scale-95 shrink-0"
          >
            Book a call
          </button>

          {/* Become a Partner (White Pill Button) */}
          <button
            id="nav-become-a-partner-btn"
            onClick={() => onNavigate('partner')}
            className="hidden sm:inline-flex px-4 md:px-6 py-1.5 md:py-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-900 text-caption-bold transition-all shadow-md active:scale-95 shrink-0"
          >
            Become a partner
          </button>

          {/* Circular Hamburger Menu Button */}
          <button
            id="nav-hamburger-menu-btn"
            onClick={onOpenMenu}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all active:scale-95 shrink-0"
            aria-label="Open navigation menu"
          >
            <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};
