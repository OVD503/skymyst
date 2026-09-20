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
        className="relative bg-white rounded-[32px] sm:rounded-[48px] md:rounded-[56px] max-w-[940px] w-full md:min-h-[520px] p-5 sm:p-7 md:p-7 shadow-2xl flex flex-col md:flex-row gap-6 md:gap-7 overflow-hidden max-h-[92vh] md:max-h-[88vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          id="close-story-modal-btn"
          aria-label="Close dialog"
          className="absolute top-5 right-5 md:top-6 md:right-6 z-10 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 stroke-[2]" />
        </button>

        {/* Left Side: Cheerful group photo */}
        <div className="w-full md:w-1/2 flex-shrink-0 h-[240px] sm:h-[320px] md:h-auto md:min-h-[460px] relative">
          <img
            src="/assets/our story.png"
            alt="Skymyst community"
            className="w-full h-full object-cover rounded-[20px] sm:rounded-[32px] md:rounded-[40px]"
          />
        </div>

        {/* Right Side: Text content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-2 sm:py-3 md:py-4 md:pr-4 md:pl-2">
          <span className="font-sans font-normal text-[14px] leading-[100%] tracking-normal text-[#1E1E1E] mb-2">
            About Us
          </span>
          <h2 className="font-lustria font-normal text-[26px] sm:text-[32px] md:text-[34px] leading-[110%] tracking-normal text-[#000000] mb-4 sm:mb-5">
            Our Experience
          </h2>

          <div className="space-y-3 sm:space-y-4 max-w-[420px]">
            <p className="font-sans font-normal text-[14px] sm:text-[15px] leading-[22px] tracking-[0.01em] text-[#676767]">
              We joke that none of us planned to end up here. Kaspars came to &quot;find himself,&quot;
              Noah was escaping burnout. Marcus was running from a bad breakup. Sofia and Kristina
              came for a month and never left. We all just... stayed. We met randomly – at surf
              breaks, beach bars, one at a full moon party. Started hanging out, helping each other
              with gigs here and there. Eventually we realized we worked well together and had the
              same crazy idea: why not start a surf camp? That was three years ago.
            </p>
            <p className="font-sans font-normal text-[14px] sm:text-[15px] leading-[22px] tracking-[0.01em] text-[#1E1E1E]">
              Now we&apos;re on our 20th camp, and we just want you to experience the same thing that
              made us all stay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

