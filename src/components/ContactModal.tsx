import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [agreedToMarketing, setAgreedToMarketing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToPrivacy) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="contact-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-[24px] sm:rounded-[36px] md:rounded-[48px] max-w-[1107px] w-full h-auto max-h-[94vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row p-3 sm:p-5 md:p-8 gap-4 md:gap-8 border border-stone-100"
      >
        {/* Close Button at top-right of dialog */}
        <button
          onClick={onClose}
          id="close-contact-modal-btn"
          aria-label="Close dialog"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-6 md:right-8 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/85 md:bg-[#EFEFEF] hover:bg-stone-200 text-stone-700 backdrop-blur-md shadow-md md:shadow-none flex items-center justify-center transition active:scale-95 border border-stone-200/50 md:border-none cursor-pointer"
        >
          <X className="w-4 h-4 stroke-[2]" />
        </button>

        {/* Left Side: Alpine Landscape Image */}
        <div className="w-full md:w-1/2 min-h-[160px] sm:min-h-[220px] md:min-h-[540px] relative shrink-0">
          <div className="w-full h-full rounded-[16px] sm:rounded-[28px] md:rounded-[38px] overflow-hidden relative">
            <img
              src="/assets/contact.png"
              alt="Mountain valley with alpine lake and wildflowers"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Side: Form & Info */}
        <div className="w-full md:w-1/2 pt-1 pb-2 px-1 sm:px-4 md:py-2 md:pr-4 flex flex-col justify-between relative">
          <div>
            <span className="text-xs sm:text-sm text-[#2C4035] font-medium block mb-0.5 sm:mb-1">
              Contact Us
            </span>
            <h2 className="font-lustria text-xl sm:text-2xl md:text-[34px] text-[#042E23] font-normal leading-[1.2] tracking-[-0.01em] max-w-[463px] mb-3 sm:mb-4">
              Allow us to find you.
            </h2>

            {isSubmitted ? (
              <div className="p-4 sm:p-6 bg-emerald-50/80 rounded-xl sm:rounded-2xl border border-emerald-200/80 text-center space-y-1.5 sm:space-y-2 my-2 sm:my-4">
                <CheckCircle2 className="w-7 h-7 sm:w-10 sm:h-10 text-emerald-700 mx-auto" />
                <h4 className="font-serif text-base sm:text-xl text-emerald-950 font-medium">
                  We received your message
                </h4>
                <p className="text-[11px] sm:text-xs text-emerald-800 leading-relaxed font-light">
                  Our hospitality advisor will reach out to {email || phone} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 max-w-[463px]">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-[#2C4035] mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#F2F2F2] text-stone-800 placeholder-stone-400 focus:bg-white focus:ring-2 focus:ring-[#042E23] focus:outline-none text-xs sm:text-sm transition"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-[#2C4035] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#F2F2F2] text-stone-800 placeholder-stone-400 focus:bg-white focus:ring-2 focus:ring-[#042E23] focus:outline-none text-xs sm:text-sm transition"
                  />
                </div>

                {/* Privacy Notice Box */}
                <div className="bg-[#F8F6F0] border border-[#E7E0CE] rounded-xl p-3 text-[11px] sm:text-[12px] text-[#4E4E4E] leading-relaxed">
                  <p>
                    <span className="font-semibold text-[#042E23]">Privacy:</span> We collect the information required to process your enquiry, reservation, payment, check-in and guest services. Your information may be shared with the relevant property team and trusted service providers only where necessary to fulfil your booking or comply with applicable requirements. We do not sell your personal information. Please review our full{' '}
                    <span className="font-semibold text-[#00523C] underline cursor-pointer">
                      Privacy Policy
                    </span>{' '}
                    for details.
                  </p>
                </div>

                {/* Checkbox 1 (Mandatory) */}
                <label className="flex items-start gap-2.5 cursor-pointer text-xs sm:text-[12px] text-[#2C4035] leading-snug font-normal select-none">
                  <input
                    type="checkbox"
                    required
                    checked={agreedToPrivacy}
                    onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-stone-300 text-[#00523C] focus:ring-[#00523C] cursor-pointer shrink-0 accent-[#00523C]"
                  />
                  <span>
                    I agree to the <span className="font-semibold">Privacy Policy</span> and consent to <span className="font-semibold">SKYMYST</span> using my information to respond to my enquiry.
                  </span>
                </label>

                {/* Checkbox 2 (Optional Marketing) */}
                <label className="flex items-start gap-2.5 cursor-pointer text-xs sm:text-[12px] text-[#2C4035] leading-snug font-normal select-none">
                  <input
                    type="checkbox"
                    checked={agreedToMarketing}
                    onChange={(e) => setAgreedToMarketing(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-stone-300 text-[#00523C] focus:ring-[#00523C] cursor-pointer shrink-0 accent-[#00523C]"
                  />
                  <span>
                    I would like to receive offers and updates from <span className="font-semibold">SKYMYST</span>.
                  </span>
                </label>

                <div className="pt-1">
                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-[#00523C] hover:bg-[#004030] text-white text-xs sm:text-sm font-medium transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="pt-3 sm:pt-4 space-y-1 sm:space-y-2 max-w-[463px]">
            <div>
              <a
                href="tel:+919876543210"
                className="font-sans text-sm sm:text-xl font-semibold text-[#042E23] underline decoration-[#042E23] underline-offset-4 tracking-tight inline-block hover:opacity-90 transition"
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
