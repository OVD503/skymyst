import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const SkymystLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  onClick,
}) => {
  // Increased sizes: sm -> 48px, md -> 64px-80px, lg -> 96px
  const heightClass =
    size === 'sm'
      ? 'h-10 sm:h-12'
      : size === 'lg'
      ? 'h-20 sm:h-24'
      : 'h-14 sm:h-16 md:h-20';

  return (
    <div
      id="skymyst-brand-logo"
      onClick={onClick}
      className={`inline-flex items-center select-none cursor-pointer transition-all hover:scale-105 active:scale-95 ${className}`}
    >
      <img
        src="/assets/logo.png"
        alt="Skymyst Logo"
        className={`${heightClass} w-auto object-contain filter brightness-0 invert drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]`}
      />
    </div>
  );
};
