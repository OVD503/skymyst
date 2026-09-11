import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BackToTopProps {
  threshold?: number;
}

export const BackToTop: React.FC<BackToTopProps> = ({ threshold = 500 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-40"
        >
          <button
            id="back-to-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group relative flex items-center justify-center p-3 sm:px-4 sm:py-3 rounded-full bg-[#004030] hover:bg-[#002f23] text-white shadow-xl shadow-stone-900/20 border border-emerald-700/50 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          >
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span className="hidden sm:inline-block ml-1.5 text-xs font-semibold tracking-wide">
              Top
            </span>

            {/* Subtle glow border effect */}
            <span className="absolute -inset-0.5 rounded-full bg-emerald-400/20 opacity-0 group-hover:opacity-100 blur-xs transition duration-300 pointer-events-none" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
