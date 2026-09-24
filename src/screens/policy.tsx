import React, { useState } from 'react';
import { ScreenPage } from '../types';
import { PrivacyPolicy } from './PrivacyPolicy';
import { RefundPolicy } from './RefundPolicy';

interface PolicyProps {
  onNavigate: (page: ScreenPage) => void;
  onOpenContact: () => void;
  initialTab?: 'privacy' | 'refund';
}

export const PolicyScreen: React.FC<PolicyProps> = ({
  onNavigate,
  onOpenContact,
  initialTab = 'privacy',
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'refund'>(initialTab);

  return (
    <div className="w-full">
      {/* Policy switcher banner bar */}
      <div className="bg-[#004D37] border-b border-[#007052] py-3 px-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-center space-x-4">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-[#FFED25] text-[#004D37] font-semibold shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('refund')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
              activeTab === 'refund'
                ? 'bg-[#FFED25] text-[#004D37] font-semibold shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Refund &amp; Cancellation Policy
          </button>
        </div>
      </div>

      {activeTab === 'privacy' ? (
        <PrivacyPolicy onNavigate={onNavigate} onOpenContact={onOpenContact} />
      ) : (
        <RefundPolicy onNavigate={onNavigate} onOpenContact={onOpenContact} />
      )}
    </div>
  );
};

export default PolicyScreen;
