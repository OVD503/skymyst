import React, { useState } from 'react';
import { ScreenPage } from '../types';
import { RotateCcw, Search, ChevronRight, CheckCircle2, ArrowLeft } from 'lucide-react';

interface RefundPolicyProps {
  onNavigate: (page: ScreenPage) => void;
  onOpenContact: () => void;
}

export const RefundPolicy: React.FC<RefundPolicyProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const refundClauses = [
    {
      id: 1,
      title: '1. Standard Cancellation Policy',
      intro: 'For regular booking dates:',
      items: [
        'Cancellation 14 days or more before check-in: 90% of the accommodation amount paid will be refundable.',
        'Cancellation between 7 and 13 days before check-in: 50% of the accommodation amount paid will be refundable.',
        'Cancellation less than 7 days before check-in: Booking amount will be non-refundable.',
        'Cancellation within 48 hours of check-in: No refund or adjustment will normally be provided.',
        'No-show: 100% of the booking amount will be non-refundable.'
      ],
      note: 'Any payment gateway, bank, OTA, or transaction charges already incurred may be deducted from the refundable amount where applicable.'
    },
    {
      id: 2,
      title: '2. Peak Dates / Long Weekends / Festive Bookings',
      intro: 'Bookings made for peak-demand periods may carry stricter cancellation conditions. This may include:',
      items: [
        'long weekends',
        'public holidays',
        'Christmas and New Year',
        'festival periods',
        'high-demand Kainchi Dham dates',
        'special events',
        'selected peak-season dates'
      ],
      note: 'For such dates, SKYMYST may require a non-refundable advance or full non-refundable payment. The applicable condition will be communicated before booking confirmation.'
    },
    {
      id: 3,
      title: '3. Date Modification / Rescheduling',
      intro: 'Where possible, SKYMYST may allow a guest to reschedule the booking instead of cancelling it. Rescheduling is:',
      items: [
        'subject to availability',
        'subject to the applicable tariff for the new dates',
        'normally permitted only when requested at least 7 days before check-in',
        'allowed once per reservation unless otherwise approved'
      ],
      note: 'If the new dates have a higher tariff, the difference must be paid by the guest. If the new dates are cheaper, the difference will normally not be refunded unless specifically approved. Rescheduled bookings may become non-refundable.'
    },
    {
      id: 4,
      title: '4. Early Check-out',
      intro: 'No refund will normally be provided if a guest:',
      items: [
        'checks out before the confirmed departure date',
        'voluntarily shortens the stay',
        'changes travel plans after check-in',
        'chooses not to use one or more confirmed nights'
      ],
      note: 'Once the stay has commenced, the complete reservation is treated as consumed.'
    },
    {
      id: 5,
      title: '5. No-show',
      text: 'If the guest does not arrive on the scheduled check-in date and does not inform SKYMYST in advance, the reservation may be treated as a no-show. No refund will be provided for a no-show. SKYMYST may release the property for another booking after a reasonable period.'
    },
    {
      id: 6,
      title: '6. Late Arrival',
      text: 'Late arrival does not reduce the booking amount. If the guest arrives one or more days after the original check-in date, unused nights will not normally be refundable. Guests should inform the property team if their arrival is delayed.'
    },
    {
      id: 7,
      title: '7. Cancellation by SKYMYST',
      intro: 'In the rare event that SKYMYST is unable to provide the confirmed accommodation due to: serious maintenance issues, safety concerns, property damage, government restrictions, operational emergencies, circumstances that make the property temporarily uninhabitable; SKYMYST may offer, depending on the situation:',
      items: [
        'comparable alternative accommodation',
        'a change of dates',
        'booking credit, or',
        'refund of the accommodation amount paid for the unavailable stay'
      ],
      note: 'Where suitable alternate accommodation is accepted by the guest, no additional refund will normally be payable for the original accommodation.'
    },
    {
      id: 8,
      title: '8. Weather & Hill-Destination Conditions',
      text: 'Most SKYMYST properties are located in mountain destinations. Rain, snowfall, fog, traffic, road repairs, temporary road closures, landslides, weather changes, or difficult driving conditions may occur. Cancellation solely because of normal mountain weather, personal discomfort with hill roads, traffic, or travel delays does not automatically qualify for a refund.',
      note: 'Where official authorities close the only practical access route to the destination or travel becomes genuinely impossible due to exceptional circumstances, SKYMYST will review the situation and may offer rescheduling or booking credit, subject to availability and circumstances.'
    },
    {
      id: 9,
      title: '9. Transport Cancellation',
      intro: 'Cancellation of flights, trains, buses, taxis, private vehicles, or personal travel arrangements does not automatically make the accommodation refundable.',
      note: 'Guests are advised to make travel arrangements considering the cancellation conditions of the property.'
    },
    {
      id: 10,
      title: '10. Medical or Personal Emergencies',
      text: 'Medical emergencies, family emergencies, or other personal circumstances will be reviewed compassionately on a case-by-case basis. However, a refund is not automatically guaranteed. Where appropriate, SKYMYST may offer rescheduling or credit instead of a cash refund. Supporting documentation may be requested in exceptional cases.'
    },
    {
      id: 11,
      title: '11. Guest Dissatisfaction After Check-in',
      text: 'Guests must inform the property team about any concern during the stay as soon as reasonably possible. SKYMYST should be given a reasonable opportunity to inspect and resolve the issue. A guest choosing to leave without giving the property team a reasonable opportunity to resolve a correctable problem does not automatically qualify for a refund. Any refund or adjustment will depend on the nature and seriousness of the issue.'
    },
    {
      id: 12,
      title: '12. Amenities Temporarily Unavailable',
      intro: 'Temporary interruption of services such as Wi-Fi, electricity, mobile network, water supply, television, or individual appliances due to external circumstances or temporary technical faults does not automatically qualify the entire booking for a refund.',
      note: 'The property team will make reasonable efforts to restore the service as quickly as possible.'
    },
    {
      id: 13,
      title: '13. Property Rules Violation',
      intro: 'No refund will be payable where a booking or stay is cancelled/terminated because of serious violation of property rules, including:',
      items: [
        'undeclared additional guests',
        'illegal activity',
        'serious noise disturbance',
        'threatening or abusive behaviour',
        'deliberate property damage',
        'unsafe conduct',
        'unauthorised parties/events',
        'violation of maximum occupancy',
        'repeated refusal to follow property instructions'
      ],
      note: 'Any outstanding damage or additional charges may still remain payable.'
    },
    {
      id: 14,
      title: '14. Group Bookings',
      text: 'Large group, multiple-room, or entire-property bookings may have customised cancellation terms because significant inventory is blocked for the group. Any special terms will be communicated before payment and will override the standard policy for that reservation.'
    },
    {
      id: 15,
      title: '15. Long-Stay Bookings',
      text: 'Reservations involving extended stays may require customised payment and cancellation terms. The terms communicated at the time of confirmation will apply.'
    },
    {
      id: 16,
      title: '16. Food, Activities & Additional Services',
      text: 'Refunds for prepaid food packages, bonfires, activities, transport, décor, celebrations, guides, or other additional services depend on whether the service has already been arranged or costs have been incurred. If vendors, food supplies, transport, staff, or other resources have already been committed, those costs may be non-refundable.'
    },
    {
      id: 17,
      title: '17. Refund Processing Time',
      text: 'Approved refunds will normally be initiated within 7–10 business days. The actual time for the amount to reflect may vary depending on the bank, card issuer, payment gateway, or payment method. Refunds will normally be returned to the original payment method wherever possible.'
    },
    {
      id: 18,
      title: '18. OTA Bookings',
      intro: 'Bookings made through Airbnb, Booking.com, Agoda, MakeMyTrip, Goibibo, Expedia, or another third-party booking platform will primarily follow the cancellation policy displayed on that platform at the time of booking.',
      note: 'Any refund for an OTA booking may need to be processed through the respective OTA. The OTA\'s cancellation and refund rules will take precedence where they control the transaction.'
    },
    {
      id: 19,
      title: '19. Promotional / Non-Refundable Rates',
      text: 'Bookings made under a rate specifically marked Non-Refundable, Special Offer, Early Bird, Last-Minute Deal, or another promotional condition may not qualify for cancellation refund even if the standard cancellation window would otherwise permit one. The applicable condition will be shown before booking confirmation.'
    },
    {
      id: 20,
      title: '20. Refund Calculation',
      intro: 'Refunds are calculated only on eligible accommodation amounts actually received. The following may be excluded where applicable:',
      items: [
        'payment gateway charges',
        'third-party commissions',
        'already consumed services',
        'vendor costs',
        'non-refundable promotional charges',
        'damages or outstanding dues'
      ],
      note: 'A refundable security deposit, if collected, will be handled separately according to the property\'s security deposit terms.'
    },
    {
      id: 21,
      title: '21. Communication of Cancellation',
      text: 'A cancellation will be considered valid only after it has been communicated to SKYMYST through an official communication channel and acknowledged by the reservations team. Simply informing property staff verbally may not be sufficient. Guests should obtain written confirmation of cancellation.'
    },
    {
      id: 22,
      title: '22. Special Exceptions',
      intro: 'SKYMYST may, at its discretion, offer:',
      items: ['rescheduling', 'partial refund', 'booking credit', 'special adjustment'],
      note: 'in exceptional circumstances. Such an exception does not create an obligation to provide the same adjustment for future bookings.'
    },
    {
      id: 23,
      title: '23. Property-Specific Policies',
      intro: 'Individual properties may have different cancellation requirements depending on property type, season, booking value, group size, special dates, owner\'s commercial terms.',
      note: 'Any property-specific cancellation terms communicated before payment will override this policy for that particular reservation.'
    }
  ];

  const filteredClauses = refundClauses.filter((sec) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      sec.title.toLowerCase().includes(q) ||
      (sec.text && sec.text.toLowerCase().includes(q)) ||
      (sec.intro && sec.intro.toLowerCase().includes(q)) ||
      (sec.items && sec.items.some((i) => i.toLowerCase().includes(q))) ||
      (sec.note && sec.note.toLowerCase().includes(q))
    );
  });

  return (
    <div className="w-full bg-[#FAF9F5] font-sans antialiased text-stone-800 min-h-screen">
      {/* 1. Hero Header */}
      <section className="relative w-full bg-[#005B41] text-white py-24 sm:py-36 min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] flex flex-col justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#004D37] via-[#005B41] to-[#007052] opacity-90" />

        {/* Top Back Button */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-12 z-20">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm text-xs sm:text-sm font-medium transition cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto text-center flex flex-col items-center gap-6 sm:gap-8">
          <h1 className="font-lustria font-normal text-3xl sm:text-5xl lg:text-6xl leading-tight">
            SKYMYST – Refund &amp; Cancellation Policy
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-emerald-100 font-light leading-relaxed">
            Applicable to direct bookings made through the SKYMYST website, WhatsApp, telephone, social media, UPI, bank transfer, or other offline/direct booking channels.
          </p>
          <div className="px-6 py-3.5 rounded-full bg-[#004D37] border border-[#007052] text-xs sm:text-sm lg:text-base text-stone-200 max-w-4xl leading-relaxed">
            By confirming a reservation and making payment, the guest agrees to the following cancellation and refund terms.
          </div>
        </div>
      </section>

      {/* 2. Visual Refund Breakdown Cards */}
      <div className="max-w-[1200px] mx-auto pt-10 px-4 sm:px-8">
        <h2 className="font-lustria text-xl sm:text-2xl font-semibold text-[#005B41] mb-6 text-center">
          Standard Cancellation Refund Schedule
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-5 rounded-2xl border-2 border-stone-300 hover:border-black shadow-sm text-center flex flex-col justify-between transition">
            <span className="text-xs uppercase tracking-wider font-semibold text-black bg-stone-100 py-1 px-3 rounded-full inline-block mb-3 border border-stone-300">
              14+ Days Notice
            </span>
            <div className="text-3xl font-bold text-black my-2">90%</div>
            <p className="text-xs text-stone-800">Refundable (accommodation amount)</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border-2 border-stone-300 hover:border-black shadow-sm text-center flex flex-col justify-between transition">
            <span className="text-xs uppercase tracking-wider font-semibold text-black bg-stone-100 py-1 px-3 rounded-full inline-block mb-3 border border-stone-300">
              7–13 Days Notice
            </span>
            <div className="text-3xl font-bold text-black my-2">50%</div>
            <p className="text-xs text-stone-800">Refundable (accommodation amount)</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border-2 border-stone-300 hover:border-black shadow-sm text-center flex flex-col justify-between transition">
            <span className="text-xs uppercase tracking-wider font-semibold text-black bg-stone-100 py-1 px-3 rounded-full inline-block mb-3 border border-stone-300">
              Under 7 Days
            </span>
            <div className="text-2xl font-bold text-black my-2">Non-refundable</div>
            <p className="text-xs text-stone-800">Booking amount retained</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border-2 border-stone-300 hover:border-black shadow-sm text-center flex flex-col justify-between transition">
            <span className="text-xs uppercase tracking-wider font-semibold text-black bg-stone-100 py-1 px-3 rounded-full inline-block mb-3 border border-stone-300">
              No-show / Early Check-out
            </span>
            <div className="text-2xl font-bold text-black my-2">No Refund</div>
            <p className="text-xs text-stone-800">Full booking amount retained</p>
          </div>
        </div>
      </div>



      {/* Main Clauses List */}
      <div className="max-w-[1200px] mx-auto py-10 px-4 sm:px-8 space-y-6">
        {filteredClauses.map((sec) => (
          <div
            key={sec.id}
            id={`refund-sec-${sec.id}`}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-lustria text-lg sm:text-xl font-semibold text-[#005B41] mb-4 border-b border-stone-100 pb-3 flex items-center justify-between">
              <span>{sec.title}</span>
              <span className="text-xs font-sans font-normal text-stone-400 bg-stone-100 px-3 py-1 rounded-full uppercase">
                Clause {sec.id}
              </span>
            </h3>

            {sec.text && (
              <p className="font-sans text-sm sm:text-base text-stone-700 leading-relaxed mb-3">
                {sec.text}
              </p>
            )}

            {sec.intro && (
              <p className="font-sans text-sm sm:text-base text-stone-700 leading-relaxed mb-3">
                {sec.intro}
              </p>
            )}

            {sec.items && (
              <ul className="space-y-2 text-sm text-stone-700 mb-3">
                {sec.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#005B41] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {sec.note && (
              <p className="font-sans text-xs sm:text-sm text-stone-500 italic mt-3 bg-stone-50 p-3 rounded-lg border border-stone-100">
                {sec.note}
              </p>
            )}
          </div>
        ))}

        {/* Footer Navigation Box */}
        <div className="bg-white text-stone-900 rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-200/80">
          <div>
            <h4 className="font-lustria font-semibold text-lg text-stone-900 mb-1">Need help or have questions?</h4>
            <p className="text-xs sm:text-sm text-stone-600">Explore Terms &amp; Conditions or Privacy Policy for more details.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('terms')}
              className="px-5 py-2.5 rounded-full bg-[#005B41] hover:bg-[#004D37] text-white text-xs sm:text-sm font-medium transition cursor-pointer flex items-center space-x-1 shadow-sm"
            >
              <span>Terms &amp; Conditions</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('privacy')}
              className="px-5 py-2.5 rounded-full bg-[#005B41] hover:bg-[#004D37] text-white text-xs sm:text-sm font-medium transition cursor-pointer flex items-center space-x-1 shadow-sm"
            >
              <span>Privacy Policy</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
