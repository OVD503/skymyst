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
  currentPage,
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

  const isLightMode = currentPage === 'search' || currentPage === 'about' || currentPage === 'partner' || currentPage === 'property';

  if (isLightMode) {
    return (
      <header className="sticky top-0 z-40 bg-white border-b border-stone-200/60 shadow-xs font-sans w-full">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-4 sm:py-6 flex items-center justify-between min-h-[80px] sm:min-h-[133px]">
          {/* Left Side: Dark Skymyst Logo */}
          <div className="flex items-center">
            <SkymystLogo
              variant="dark"
              onClick={() => onNavigate('home')}
              size="md"
            />
          </div>

          {/* Right Side Buttons: Book a call, Become a partner, Hamburger menu */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <button
              id="nav-book-a-call-btn"
              onClick={onOpenContact}
              className="inline-flex items-center justify-center h-[48px] px-6 rounded-full bg-[#015E47] hover:bg-[#004d3a] text-white text-caption-bold transition-all shadow-md active:scale-95 shrink-0"
            >
              Book a call
            </button>

            <button
              id="nav-become-a-partner-btn"
              onClick={() => onNavigate('partner')}
              className="hidden sm:inline-flex items-center justify-center h-[48px] px-6 rounded-full bg-white hover:bg-stone-50 text-[#042E23] border border-[#042E23] text-caption-bold transition-all shadow-xs active:scale-95 shrink-0"
            >
              Become a partner
            </button>

            <button
              id="nav-hamburger-menu-btn"
              onClick={onOpenMenu}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-stone-100 hover:bg-stone-200 border border-stone-200 flex items-center justify-center text-stone-900 transition-all active:scale-95 shrink-0"
              aria-label="Open navigation menu"
            >
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-stone-900" />
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-40 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-stone-950/90 backdrop-blur-md border-b border-white/10 py-2 sm:py-3 md:py-4 shadow-xl'
          : 'bg-gradient-to-b from-black/35 via-transparent to-transparent py-2.5 sm:py-4 md:py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-2 sm:py-4 flex items-center justify-between">
        {/* Left Side: White Skymyst Logo */}
        <div className="flex items-center">
          <SkymystLogo
            variant="light"
            onClick={() => onNavigate('home')}
            size="md"
          />
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-1.5 sm:space-x-3 md:space-x-4">
          <button
            id="nav-book-a-call-btn"
            onClick={onOpenContact}
            className="inline-flex items-center justify-center h-[48px] px-6 rounded-full bg-[#015E47] hover:bg-[#004d3a] text-white text-caption-bold transition-all shadow-md active:scale-95 shrink-0"
          >
            Book a call
          </button>

          <button
            id="nav-become-a-partner-btn"
            onClick={() => onNavigate('partner')}
            className="hidden sm:inline-flex items-center justify-center h-[48px] px-6 rounded-full bg-white hover:bg-stone-50 text-[#042E23] border border-[#042E23] text-caption-bold transition-all shadow-md active:scale-95 shrink-0"
          >
            Become a partner
          </button>

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
