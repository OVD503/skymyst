import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  propertyName: string;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  images,
  propertyName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const safeImages = images.length > 0 ? images : ['/assets/bg.png'];

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % safeImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
  };

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full py-2">
        <div>
          <h3 className="text-sm font-medium tracking-wide">{propertyName}</h3>
          <p className="text-xs text-stone-400">
            Photo {currentIndex + 1} of {safeImages.length}
          </p>
        </div>
        <button
          onClick={onClose}
          id="close-gallery-modal-btn"
          aria-label="Close photo gallery"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Display */}
      <div className="relative flex items-center justify-center flex-1 max-w-5xl mx-auto w-full my-4">
        <button
          onClick={prevImage}
          aria-label="Previous photo"
          className="absolute left-2 sm:left-4 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="w-full h-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl">
          <img
            src={safeImages[currentIndex]}
            alt={`${propertyName} photo ${currentIndex + 1}`}
            className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        <button
          onClick={nextImage}
          aria-label="Next photo"
          className="absolute right-2 sm:right-4 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnail Strip */}
      <div className="max-w-4xl mx-auto w-full overflow-x-auto py-2 flex items-center space-x-3 justify-center">
        {safeImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden shrink-0 border-2 transition ${
              idx === currentIndex
                ? 'border-white scale-105 shadow-md'
                : 'border-transparent opacity-50 hover:opacity-100'
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
