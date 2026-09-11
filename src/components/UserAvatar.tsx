import React from 'react';
import { User } from 'lucide-react';

interface UserAvatarProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isDark?: boolean;
  className?: string;
  showIcon?: boolean;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  name,
  size = 'md',
  isDark = false,
  className = '',
  showIcon = false,
}) => {
  const getInitials = (n: string) => {
    if (!n) return 'U';
    const parts = n.trim().split(' ').filter(Boolean);
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`;
    if (parts.length === 1 && parts[0].length >= 2) return parts[0].slice(0, 2);
    return n.slice(0, 2) || 'U';
  };

  const sizeMap = {
    xs: 'w-7 h-7 text-[10px]',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-xs sm:text-sm',
    lg: 'w-12 h-12 text-sm sm:text-base',
    xl: 'w-16 h-16 text-lg sm:text-xl',
  };

  const initials = getInitials(name);

  return (
    <div
      className={`${sizeMap[size]} rounded-full flex items-center justify-center font-bold tracking-wider shrink-0 transition-all select-none shadow-2xs border ${
        isDark
          ? 'bg-emerald-900 text-white border-emerald-600/60'
          : 'bg-[#005B41]/10 text-[#005B41] border-[#005B41]/20'
      } ${className}`}
      title={name}
    >
      {showIcon ? (
        <User className={size === 'xs' ? 'w-3.5 h-3.5' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};
