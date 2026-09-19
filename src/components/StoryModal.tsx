import React from 'react';
import { X } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="story-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="story-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-[32px] sm:rounded-[56px] md:rounded-[88px] max-w-[1139px] w-full md:min-h-[664px] p-6 sm:p-8 md:p-[32px] shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 overflow-hidden max-h-[92vh] md:max-h-[90vh] overflow-y-auto md:overflow-visible"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          id="close-story-modal-btn"
          aria-label="Close dialog"
          className="absolute top-6 right-6 md:top-8 md:right-8 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 stroke-[2]" />
        </button>

        {/* Left Side: Cheerful group photo */}
        <div className="w-full md:w-1/2 flex-shrink-0 h-[280px] sm:h-[360px] md:h-auto md:min-h-[600px] relative">
          <img
            src="/assets/our story.png"
            alt="Skymyst community"
            className="w-full h-full object-cover rounded-[24px] sm:rounded-[40px] md:rounded-[56px]"
          />
        </div>

        {/* Right Side: Text content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-2 sm:py-4 md:py-6 md:pr-6 md:pl-2">
          <span className="font-sans font-normal text-[16px] leading-[100%] tracking-normal text-[#1E1E1E] mb-2 sm:mb-3">
            About Us
          </span>
          <h2 className="font-lustria font-normal text-[32px] sm:text-[40px] leading-[100%] tracking-normal text-[#000000] mb-6 sm:mb-8">
            Our Experience
          </h2>

          <div className="space-y-4 sm:space-y-6 max-w-[463px]">
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[24px] tracking-[0.02em] text-[#676767]">
              We joke that none of us planned to end up here. Kaspars came to &quot;find himself,&quot;
              Noah was escaping burnout. Marcus was running from a bad breakup. Sofia and Kristina
              came for a month and never left. We all just... stayed. We met randomly – at surf
              breaks, beach bars, one at a full moon party. Started hanging out, helping each other
              with gigs here and there. Eventually we realized we worked well together and had the
              same crazy idea: why not start a surf camp? That was three years ago.
            </p>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[24px] tracking-[0.02em] text-[#1E1E1E]">
              Now we&apos;re on our 20th camp, and we just want you to experience the same thing that
              made us all stay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

