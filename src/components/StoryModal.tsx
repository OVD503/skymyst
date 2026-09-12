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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="story-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-t-[20px] sm:rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row border border-stone-100"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          id="close-story-modal-btn"
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Side: Cheerful group photo (Image 8) */}
        <div className="md:w-1/2 p-2.5 sm:p-3 md:p-4">
          <div className="relative h-40 sm:h-56 md:h-full min-h-[160px] sm:min-h-[280px] md:min-h-[380px] rounded-xl sm:rounded-2xl overflow-hidden shadow-inner">
            <img
              src="/assets/bonfire.png"
              alt="Skymyst community bonfire"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text content */}
        <div className="md:w-1/2 p-4 sm:p-6 md:p-10 flex flex-col justify-center">
          <span className="text-xs font-semibold text-stone-500 tracking-wider uppercase mb-1">
            About Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 mb-4 sm:mb-6 font-normal">
            Our Experience
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <p>
              We joke that none of us planned to end up here. Kaspars came to &apos;find himself,&apos;
              Noah was escaping burnout, Marcus was running from a bad breakup. Sofia and Kristina
              came for a month and never left. We all just... stayed. We met randomly – at surf
              breaks, beach bars, one at a full moon party. Started hanging out, helping each other
              with gigs here and there. Eventually we realized we worked well together and had the
              same crazy idea: why not start a surf camp? That was three years ago.
            </p>
            <p>
              Now we&apos;re on our 20th camp, and we just want you to experience the same thing that
              made us all stay.
            </p>
          </div>

          <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-stone-100 flex items-center justify-between">
            <div className="text-xs text-stone-400">
              Waveyu & Skymyst Community
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium transition"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
