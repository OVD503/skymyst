import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="contact-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-t-[24px] sm:rounded-[32px] max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row border border-stone-200/60"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-contact-modal-btn"
          aria-label="Close dialog"
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-stone-100/80 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition active:scale-95"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Side: Alpine Landscape Image */}
        <div className="md:w-1/2 p-2.5 sm:p-3 md:p-4">
          <div className="relative h-40 sm:h-56 md:h-full min-h-[160px] sm:min-h-[280px] md:min-h-[380px] rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-inner">
            <img
              src="/assets/contact.png"
              alt="Mountain valley with alpine lake and wildflowers"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Side: Form & Contact Details */}
        <div className="md:w-1/2 p-4 sm:p-6 md:p-10 flex flex-col justify-between space-y-4 sm:space-y-6">
          <div>
            <span className="text-[11px] font-semibold text-stone-400 tracking-[0.2em] uppercase block mb-1">
              CONTACT US
            </span>
            <h2 className="font-casiome-impera text-2xl sm:text-3xl md:text-4xl text-[#004030] font-normal leading-tight tracking-tight mb-4 sm:mb-6">
              Allow us to find you.
            </h2>

            {isSubmitted ? (
              <div className="p-6 bg-emerald-50/80 rounded-2xl border border-emerald-200/80 text-center space-y-2.5 my-4">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h4 className="font-serif text-xl text-emerald-950 font-medium">
                  We received your message
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed font-light">
                  Our hospitality advisor will reach out to {email || phone} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200/80 text-stone-800 placeholder-stone-400 focus:bg-white focus:border-[#004030] focus:ring-1 focus:ring-[#004030] focus:outline-none text-xs sm:text-sm transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200/80 text-stone-800 placeholder-stone-400 focus:bg-white focus:border-[#004030] focus:ring-1 focus:ring-[#004030] focus:outline-none text-xs sm:text-sm transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200/80 text-stone-800 placeholder-stone-400 focus:bg-white focus:border-[#004030] focus:ring-1 focus:ring-[#004030] focus:outline-none text-xs sm:text-sm transition"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="px-8 py-3 rounded-full bg-[#004030] hover:bg-[#002f23] text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
                  >
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="pt-3 sm:pt-5 border-t border-stone-100 space-y-2 sm:space-y-3">
            <div className="space-y-1">
              <h4 className="font-serif text-base sm:text-lg text-[#004030] font-semibold tracking-tight">
                Make Yourself at Home
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Have a question, planning your stay, or simply want to know more about us? We’d love to hear from you. Get in touch with us and let’s make your next stay comfortable, memorable, and truly feel like home.
              </p>
            </div>

            <div className="pt-1">
              <a
                href="tel:+919876543210"
                className="font-serif text-lg sm:text-xl font-semibold text-[#004030] hover:text-[#002f23] hover:underline underline-offset-4 tracking-wide inline-flex items-center space-x-2 transition"
              >
                <span>Connect Us : +91 987 6543 210</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
