import React from 'react';
import { Crown } from 'lucide-react';

interface CategoryBadgeProps {
  category?: 'Premium Management' | 'Digital Partner' | string;
  isPremium?: boolean;
  className?: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  category = 'Digital Partner',
  isPremium = false,
  className = '',
}) => {
  const isPrem = isPremium || category === 'Premium Management';

  if (isPrem) {
    return (
      <div
        style={{
          background: 'linear-gradient(90deg, #EE8B0C 0%, #FCE700 20%, #FCEF00 40%, #F2C702 60%, #FCE700 80%, #EA9A03 100%)',
        }}
        className={`inline-flex flex-row items-center justify-center gap-[2px] h-[22px] px-[5px] py-[4px] rounded-[4px] shadow-xs shrink-0 select-none ${className}`}
      >
        <Crown className="w-3 h-3 text-[#7A2727] fill-[#7A2727] shrink-0" />
        <span className="w-[46px] h-[14px] inline-flex items-center justify-center text-[#7A2727] text-[11px] font-normal font-sans leading-[100%] tracking-[0.02em] text-center">
          Premium
        </span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex flex-row items-center justify-center gap-[2px] h-[22px] px-[5px] py-[4px] rounded-[4px] bg-[#005B41] text-white font-sans font-medium text-[11px] leading-none shadow-xs shrink-0 select-none ${className}`}
    >

      <span className="tracking-tight text-[11px] font-sans font-medium leading-none">Digital Partner</span>
    </div>
  );
};
