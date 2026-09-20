import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const SkymystLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  onClick,
}) => {
  // Increased sizes: sm -> 56px, md -> 64px-80px, lg -> 96px
  const heightClass =
    size === 'sm'
      ? 'h-14 sm:h-16'
      : size === 'lg'
      ? 'h-24 sm:h-28'
      : 'h-16 sm:h-20 md:h-24';

  return (
    <div
      id="skymyst-brand-logo"
      onClick={onClick}
      className={`inline-flex items-center select-none cursor-pointer transition-all hover:scale-105 active:scale-95 ${className}`}
    >
      <img
        src="/assets/logo.png"
        alt="Skymyst Logo"
        className={`${heightClass} w-auto object-contain ${
          variant === 'light'
            ? 'filter brightness-0 invert drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]'
            : 'filter brightness-0 drop-shadow-sm'
        }`}
      />
    </div>
  );
};
