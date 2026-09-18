import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="contact-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-[32px] sm:rounded-[44px] md:rounded-[48px] max-w-[1107px] w-full h-auto md:h-[632px] max-h-[95vh] overflow-y-auto md:overflow-hidden shadow-2xl flex flex-col md:flex-row p-3 sm:p-4 gap-4 md:gap-8 border border-stone-100"
      >
        {/* Left Side: Alpine Landscape Image */}
        <div className="w-full md:w-1/2 h-[240px] sm:h-[320px] md:h-full relative shrink-0">
          <div className="w-full h-full rounded-[24px] sm:rounded-[32px] md:rounded-[38px] overflow-hidden relative">
            <img
              src="/assets/contact.png"
              alt="Mountain valley with alpine lake and wildflowers"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Side: Form & Info */}
        <div className="w-full md:w-1/2 pt-2 pb-4 px-3 sm:px-6 md:py-6 md:pr-8 flex flex-col justify-between relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            id="close-contact-modal-btn"
            aria-label="Close dialog"
            className="absolute top-2 right-2 md:top-4 md:right-4 z-10 w-9 h-9 rounded-full bg-[#EFEFEF] hover:bg-stone-200 text-stone-700 flex items-center justify-center transition active:scale-95"
          >
            <X className="w-4 h-4 stroke-[2]" />
          </button>

          <div>
            <span className="text-sm sm:text-base text-[#2C4035] font-normal block mb-1">
              Contact Us
            </span>
            <h2 className="font-lustria text-3xl sm:text-4xl md:text-[42px] text-[#042E23] font-normal leading-[1.15] tracking-[-0.01em] max-w-[463px] mb-6 sm:mb-8">
              Allow us to find you.
            </h2>

            {isSubmitted ? (
              <div className="p-6 bg-emerald-50/80 rounded-2xl border border-emerald-200/80 text-center space-y-2 my-4">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h4 className="font-serif text-xl text-emerald-950 font-medium">
                  We received your message
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed font-light">
                  Our hospitality advisor will reach out to {email || phone} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-[463px]">
                <div>
                  <label className="block text-sm font-medium text-[#2C4035] mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#F2F2F2] text-stone-800 placeholder-stone-400 focus:bg-white focus:ring-2 focus:ring-[#042E23] focus:outline-none text-sm transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2C4035] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#F2F2F2] text-stone-800 placeholder-stone-400 focus:bg-white focus:ring-2 focus:ring-[#042E23] focus:outline-none text-sm transition"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="px-8 py-3 rounded-full bg-[#00523C] hover:bg-[#004030] text-white text-sm font-medium transition-all shadow-sm active:scale-95"
                  >
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="pt-6 space-y-3 max-w-[463px]">
            <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed font-normal">
              Hear how Skymyst Group helps Edwardian Hotels London to reach higher-value travellers across our global market from Commercial Director Hasnain Alloo.
            </p>

            <div>
              <a
                href="tel:+919876543210"
                className="font-sans text-lg sm:text-2xl font-semibold text-[#042E23] underline decoration-[#042E23] underline-offset-4 tracking-tight inline-block hover:opacity-90 transition"
              >
                Connect Us : +91 987 6543 210
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
