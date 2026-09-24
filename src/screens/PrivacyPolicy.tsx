import React, { useState } from 'react';
import { ScreenPage } from '../types';
import { Lock, Search, Mail, Phone, MapPin, ChevronRight, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigate: (page: ScreenPage) => void;
  onOpenContact: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const privacySections = [
    {
      id: 1,
      title: '1. Information We May Collect',
      subtitle: 'Depending on how you interact with SKYMYST, we may collect:',
      subsections: [
        {
          heading: 'Personal details',
          items: ['Name', 'Mobile number', 'Email address', 'Address, where required', 'Age or date of birth where relevant', 'Number and details of accompanying guests']
        },
        {
          heading: 'Booking information',
          items: ['Property selected', 'Check-in and check-out dates', 'Number of guests', 'Booking amount', 'Special requests', 'Additional services selected', 'Booking and payment history']
        },
        {
          heading: 'Identification information',
          items: [
            'For guest registration, security, or legal requirements, we may request valid government-issued identification.',
            'For international guests, passport, visa, nationality, or other information may be collected where required by applicable law.'
          ]
        },
        {
          heading: 'Payment information',
          items: [
            'We may receive information relating to payments, including: payment amount, payment status, transaction/reference number, selected payment method.',
            'Where payments are processed through third-party banks, payment gateways, or OTAs, SKYMYST may not receive or store complete debit/credit card information.'
          ]
        },
        {
          heading: 'Communications',
          items: [
            'We may retain communications exchanged through: WhatsApp, email, telephone/support interactions, website enquiry forms, social media, OTA messaging platforms.',
            'This helps us manage reservations, resolve complaints, maintain booking records, and improve guest support.'
          ]
        }
      ]
    },
    {
      id: 2,
      title: '2. Website & Technical Information',
      text: 'When you visit our website, certain technical information may be collected automatically, such as:',
      items: ['IP address', 'browser type', 'device type', 'operating system', 'pages visited', 'referring source', 'approximate location', 'time spent on the website', 'booking or enquiry activity'],
      note: 'This information may be collected through cookies, analytics tools, or similar technologies.'
    },
    {
      id: 3,
      title: '3. CCTV & Property Security',
      text: 'Certain SKYMYST-managed properties may use CCTV cameras for safety and security. Cameras may be installed in appropriate areas such as:',
      items: ['entrances', 'parking areas', 'gates', 'external/common-access areas'],
      note: 'CCTV will not intentionally be installed in private guest spaces such as bedrooms or bathrooms. CCTV recordings may be accessed where reasonably required for security, property protection, investigation of incidents, or legal requirements.'
    },
    {
      id: 4,
      title: '4. Why We Use Your Information',
      text: 'SKYMYST may use personal information to:',
      items: [
        'process and confirm reservations',
        'communicate booking information',
        'coordinate check-in and checkout',
        'provide requested accommodation and services',
        'manage payments',
        'provide customer support',
        'verify guest identity where required',
        'maintain guest registration records',
        'coordinate food, activities, transport, or additional services',
        'respond to complaints or disputes',
        'process cancellations and refunds',
        'prevent fraud, misuse, or property damage',
        'maintain property safety',
        'improve our website and services',
        'understand booking patterns and guest preferences',
        'maintain accounting and transaction records',
        'comply with legal or regulatory obligations',
        'send marketing communications where permitted'
      ],
      note: 'We aim to collect and use personal information only for legitimate and appropriate business purposes.'
    },
    {
      id: 5,
      title: '5. Booking Through Third-Party Platforms',
      text: 'SKYMYST properties may also be available through platforms such as:',
      items: ['Airbnb', 'Booking.com', 'Agoda', 'MakeMyTrip', 'Goibibo', 'Expedia', 'other OTA or travel platforms'],
      note: 'When you book through these services, the respective platform may independently collect and process your personal information according to its own privacy policy. SKYMYST may receive booking information from these platforms to manage your reservation and stay. Their privacy practices are not controlled by SKYMYST.'
    },
    {
      id: 6,
      title: '6. Sharing of Information',
      text: 'SKYMYST does not sell guest personal information to advertisers or unrelated third parties. Information may be shared only when reasonably necessary with parties such as:',
      items: [
        'the relevant property owner',
        'authorised property managers',
        'caretakers and operational staff',
        'payment processors',
        'booking platforms',
        'technology/service providers',
        'accountants or professional advisers',
        'transport/activity vendors requested by the guest',
        'government or regulatory authorities where legally required'
      ],
      note: 'Only information reasonably necessary for the relevant purpose should be shared.'
    },
    {
      id: 7,
      title: '7. Property Owners & Staff',
      text: 'Because SKYMYST manages properties on behalf of different property owners, certain booking information may be shared with the relevant property owner for:',
      items: ['reservation records', 'occupancy information', 'financial reconciliation', 'guest-related property issues', 'statutory or operational requirements'],
      note: 'On-ground staff may receive only the information required to manage the guest\'s stay, such as guest name, arrival details, number of guests, and relevant requirements.'
    },
    {
      id: 8,
      title: '8. Marketing Communications',
      text: 'With appropriate permission or where otherwise permitted, we may use your contact information to share:',
      items: ['property offers', 'seasonal promotions', 'new property launches', 'travel packages', 'SKYMYST updates', 'repeat-guest offers'],
      note: 'Guests may request to stop receiving promotional communication at any time. Transactional messages relating to an active booking may still be sent when required to fulfil the reservation.'
    },
    {
      id: 9,
      title: '9. Cookies',
      text: 'The SKYMYST website may use cookies and similar technologies to:',
      items: ['remember preferences', 'understand website usage', 'improve website performance', 'measure advertising effectiveness', 'support booking functionality', 'analyse visitor behaviour'],
      note: 'Where required, visitors will be provided appropriate choices regarding optional cookies. You can also control cookies through your browser settings.'
    },
    {
      id: 10,
      title: '10. Google, Meta & Analytics Services',
      text: 'Our website or advertising systems may use services provided by organisations such as:',
      items: ['Google', 'Meta', 'analytics providers', 'advertising platforms', 'website hosting providers'],
      note: 'These services may collect certain device, browsing, advertising, or interaction information according to their respective privacy policies. Where legally required, advertising or non-essential tracking technologies should operate only after obtaining appropriate user choice or consent.'
    },
    {
      id: 11,
      title: '11. Data Security',
      text: 'SKYMYST takes reasonable organisational and technical measures to protect information against:',
      items: ['unauthorised access', 'accidental loss', 'misuse', 'alteration', 'disclosure', 'destruction'],
      note: 'Access to personal information should be limited to authorised persons who reasonably require it for their responsibilities. However, no online or electronic system can guarantee absolute security.'
    },
    {
      id: 12,
      title: '12. How Long We Keep Information',
      text: 'Personal information will be retained only for as long as reasonably necessary for:',
      items: ['fulfilling bookings', 'accounting and taxation', 'dispute resolution', 'fraud prevention', 'legal compliance', 'operational records', 'legitimate business requirements'],
      note: 'Information that is no longer required should be deleted, anonymised, or securely archived in accordance with applicable requirements and internal retention practices.'
    },
    {
      id: 13,
      title: '13. Government Identification Documents',
      text: 'Government-issued identification collected for check-in or legal compliance will be handled with additional care. Such documents should not be used for unrelated marketing purposes.',
      note: 'Access should be limited to authorised personnel and retained only for as long as reasonably necessary or legally required.'
    },
    {
      id: 14,
      title: "14. Children's Information",
      text: 'SKYMYST properties may accommodate families and children. Information about children may be collected where necessary for:',
      items: ['reservation occupancy', 'age-based pricing', 'safety', 'legal or guest registration requirements'],
      note: "Where required, such information should be provided or authorised by the child's parent or legal guardian. SKYMYST does not intentionally use children's personal information for targeted marketing."
    },
    {
      id: 15,
      title: '15. Your Privacy Choices & Rights',
      text: 'Subject to applicable law, individuals may contact SKYMYST regarding their personal information and request matters such as:',
      items: ['confirmation regarding information held about them', 'correction of inaccurate information', 'updating incomplete information', 'deletion/erasure where applicable', 'withdrawal of consent where processing depends on consent', 'stopping marketing communications', 'raising a grievance regarding use of personal information'],
      note: 'The DPDP Act provides individuals with rights relating to access to information, correction, erasure, grievance redressal and other matters once the relevant provisions become applicable. We may need to verify your identity before acting on certain requests.'
    },
    {
      id: 16,
      title: '16. Withdrawal of Consent',
      text: 'Where personal information is processed based on consent, you may request to withdraw that consent. Withdrawal will not affect processing already lawfully carried out before the withdrawal.',
      items: ['fulfil an existing booking', 'maintain transaction records', 'satisfy legal obligations', 'resolve disputes', 'protect legitimate rights'],
      note: 'In some situations, certain information may still need to be retained or processed to satisfy the above purposes.'
    },
    {
      id: 17,
      title: '17. Data Breach & Security Incidents',
      text: 'If SKYMYST becomes aware of a significant security incident involving personal information, appropriate steps will be taken to:',
      items: ['investigate the incident', 'contain the issue', 'protect affected information', 'fulfil applicable notification or regulatory obligations']
    },
    {
      id: 18,
      title: '18. Third-Party Services',
      text: 'Guests may request SKYMYST to assist with services such as:',
      items: ['taxis', 'activities', 'guides', 'sightseeing', 'catering', 'photographers', 'celebrations', 'adventure activities'],
      note: 'Where these are provided by independent third parties, the third party may independently collect information necessary to provide its service. SKYMYST is not responsible for the independent privacy practices of those providers.'
    },
    {
      id: 19,
      title: '19. External Links',
      text: 'The SKYMYST website may contain links to external websites, maps, payment platforms, social networks, or booking services.',
      note: 'Once you leave the SKYMYST website, the privacy practices of the external service will apply. Guests are encouraged to review the relevant third-party privacy policy where appropriate.'
    },
    {
      id: 20,
      title: '20. International Technology Providers',
      text: 'Some technology providers used for website hosting, analytics, communications, cloud storage, reservation management, or payment processing may process information using infrastructure located outside India.',
      note: 'Where applicable, SKYMYST will use such providers subject to applicable legal requirements and appropriate contractual or technical safeguards.'
    },
    {
      id: 21,
      title: '21. Offline & WhatsApp Bookings',
      text: 'This Privacy Policy also applies where a reservation is made directly through:',
      items: ['WhatsApp', 'telephone', 'email', 'social media', 'bank transfer', 'UPI', 'offline communication'],
      note: "Information provided through these channels may be recorded in SKYMYST's reservation, accounting, property-management, or guest-management systems."
    },
    {
      id: 22,
      title: '22. Property-Specific Information',
      text: 'Individual SKYMYST-managed properties may require additional information due to:',
      items: ['local registration requirements', 'property rules', 'security procedures', 'specific services or activities'],
      note: 'Where materially different privacy practices apply, additional information may be provided to guests.'
    },
    {
      id: 23,
      title: '23. Changes to This Privacy Policy',
      text: 'SKYMYST may update this Privacy Policy periodically to reflect:',
      items: ['changes in our services', 'technology changes', 'new properties', 'legal or regulatory developments', 'changes in data-processing practices'],
      note: 'The latest version will be displayed on the SKYMYST website with the updated date.'
    },
    {
      id: 24,
      title: '24. Contact & Grievances',
      text: 'For questions, corrections, privacy requests, or grievances relating to personal information, please contact:',
      contactDetails: {
        company: 'SKYMYST - Vacation Rental & Property Management',
        email: 'support@skymyst.com',
        phone: '+91 982111 5633',
        address: '1500F - Devika Tower, Nehru Place, New Delhi 110019',
        instruction: 'Please mention "Privacy Request" in the subject/message so the request can be directed appropriately.'
      }
    }
  ];

  const filteredSections = privacySections.filter((sec) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      sec.title.toLowerCase().includes(q) ||
      (sec.text && sec.text.toLowerCase().includes(q)) ||
      (sec.items && sec.items.some((i) => i.toLowerCase().includes(q))) ||
      (sec.note && sec.note.toLowerCase().includes(q))
    );
  });

  return (
    <div className="w-full bg-[#FAF9F5] font-sans antialiased text-stone-800 min-h-screen">
      {/* 1. Header Hero */}
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
            SKYMYST – Privacy Policy
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-emerald-100 font-light leading-relaxed">
            SKYMYST respects the privacy of our guests, website visitors, property owners, partners, and other individuals who interact with us.
          </p>
          <p className="text-xs sm:text-sm lg:text-base text-stone-200 max-w-2xl leading-relaxed">
            This Privacy Policy explains what personal information we may collect, why we collect it, how we use it, when it may be shared, and the choices available to you.
          </p>
        </div>
      </section>

      {/* Scope banner */}
      <div className="bg-[#004D37] text-white py-4 px-6 border-b border-[#007052]">
        <div className="max-w-[1200px] mx-auto text-xs sm:text-sm font-medium flex flex-wrap items-center justify-center gap-2 text-stone-200 text-center">
          <span className="text-[#FFED25] uppercase tracking-wider font-semibold">Policy Applies To:</span>
          <span>SKYMYST website</span> •
          <span>Direct &amp; offline bookings</span> •
          <span>WhatsApp &amp; phone enquiries</span> •
          <span>Email &amp; social media</span> •
          <span>Check-in &amp; guest registration</span>
        </div>
      </div>



      {/* Main Content Area */}
      <div className="max-w-[1200px] mx-auto py-10 px-4 sm:px-8 space-y-6">

        {filteredSections.map((sec) => (
          <div
            key={sec.id}
            id={`privacy-sec-${sec.id}`}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-lustria text-lg sm:text-xl font-semibold text-[#005B41] mb-4 border-b border-stone-100 pb-3 flex items-center justify-between">
              <span>{sec.title}</span>
              <span className="text-xs font-sans font-normal text-stone-400 bg-stone-100 px-3 py-1 rounded-full uppercase">
                Section {sec.id}
              </span>
            </h3>

            {sec.text && (
              <p className="font-sans text-sm sm:text-base text-stone-700 mb-3 leading-relaxed">
                {sec.text}
              </p>
            )}

            {/* Subsections if present (Section 1) */}
            {sec.subsections && (
              <div className="space-y-4 my-3">
                {sec.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className="bg-stone-50 p-4 rounded-xl border border-stone-100">
                    <h4 className="font-semibold text-stone-900 text-sm mb-2">{sub.heading}</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                      {sub.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#005B41] shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* List items if present */}
            {sec.items && !sec.subsections && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-700 mb-3">
                {sec.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#005B41] shrink-0 mt-2" />
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

            {/* Contact details for Section 24 */}
            {sec.contactDetails && (
              <div className="mt-4 bg-stone-50 text-stone-800 p-6 sm:p-8 rounded-xl border border-stone-200 space-y-4">
                <p className="font-semibold text-lg sm:text-xl text-stone-900">{sec.contactDetails.company}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm sm:text-base font-medium">
                  <div className="flex items-center space-x-2.5">
                    <Mail className="w-5 h-5 text-[#005B41] shrink-0" />
                    <a href={`mailto:${sec.contactDetails.email}`} className="hover:underline hover:text-[#005B41] font-medium">{sec.contactDetails.email}</a>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Phone className="w-5 h-5 text-[#005B41] shrink-0" />
                    <a href={`tel:${sec.contactDetails.phone}`} className="hover:underline hover:text-[#005B41] font-medium">{sec.contactDetails.phone}</a>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <MapPin className="w-5 h-5 text-[#005B41] shrink-0" />
                    <span>{sec.contactDetails.address}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-stone-700 border-t border-stone-200 pt-4 font-medium">
                  {sec.contactDetails.instruction}
                </p>
              </div>
            )}
          </div>
        ))}

        {/* Footer Navigation Box */}
        <div className="bg-white text-stone-900 rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-200/80">
          <div>
            <h4 className="font-lustria font-semibold text-lg text-stone-900 mb-1">Related Legal Documents</h4>
            <p className="text-xs sm:text-sm text-stone-600">Review our Terms &amp; Conditions and Refund Policy.</p>
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
              onClick={() => onNavigate('refund')}
              className="px-5 py-2.5 rounded-full bg-[#005B41] hover:bg-[#004D37] text-white text-xs sm:text-sm font-medium transition cursor-pointer flex items-center space-x-1 shadow-sm"
            >
              <span>Refund Policy</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
