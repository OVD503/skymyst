import React, { useState } from 'react';
import { ScreenPage } from '../types';
import { ShieldCheck, FileText, ChevronRight, Search, ArrowLeft } from 'lucide-react';

interface TermsAndConditionsProps {
  onNavigate: (page: ScreenPage) => void;
  onOpenContact: () => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'booking' | 'stay' | 'conduct' | 'legal'>('all');

  const termsData = [
    {
      id: 1,
      category: 'booking',
      title: '1. Booking Confirmation',
      points: [
        'A booking is considered confirmed only after the required advance/payment has been received and confirmation has been issued by SKYMYST.',
        'Availability shared over call, WhatsApp, email, or enquiry is temporary until payment is received.',
        'SKYMYST reserves the right to release an unconfirmed booking if payment is not received within the communicated time.'
      ]
    },
    {
      id: 2,
      category: 'booking',
      title: '2. Guest Details & Identification',
      points: [
        'Guests must provide valid government-issued photo identification as required under applicable law and property procedures.',
        'The person making the booking is responsible for providing correct guest information and ensuring that all members of the group follow the property rules.',
        'Foreign nationals may be required to provide passport, visa, and other documentation required under applicable regulations.'
      ]
    },
    {
      id: 3,
      category: 'stay',
      title: '3. Check-in & Check-out',
      points: [
        'Check-in timing will be mentioned in the booking confirmation or individual property information.',
        'Standard check-out time is 10:00 AM unless specifically mentioned otherwise for a property.',
        'Timely checkout is important as our housekeeping team requires sufficient time to clean, prepare, restock, and quality-check the property before the next guest arrives.',
        'Early check-in and late checkout are subject to availability and must be approved in advance by SKYMYST.',
        'Unapproved late checkout may attract additional charges and, where it affects another confirmed reservation, the guest may be responsible for reasonable losses or additional costs arising from the delay.'
      ]
    },
    {
      id: 4,
      category: 'stay',
      title: '4. Maximum Occupancy',
      points: [
        'Only the number of guests confirmed in the reservation may stay at the property.',
        'Additional guests must be disclosed and approved before arrival.',
        'Extra guest or mattress charges may apply depending on the property.',
        'The property may refuse accommodation beyond its approved maximum occupancy for safety and operational reasons.'
      ]
    },
    {
      id: 5,
      category: 'stay',
      title: '5. Visitors',
      points: [
        'Outside visitors are not automatically permitted.',
        'Any visitor must be approved by the property management before entering the premises.',
        'Visitors may not stay overnight unless added to the reservation and applicable charges are paid.'
      ]
    },
    {
      id: 6,
      category: 'booking',
      title: '6. Pricing & Taxes',
      points: [
        'Prices may vary depending on: dates and season, weekday/weekend, number of guests, length of stay, property, demand, special events or holidays.',
        'Rates confirmed at the time of booking will apply to that reservation.',
        'Applicable taxes, additional guest charges, food charges, activities, extra services, or other charges may be added where relevant.'
      ]
    },
    {
      id: 7,
      category: 'booking',
      title: '7. Payments',
      points: [
        'Payment timelines will be communicated at the time of booking.',
        'SKYMYST may require full or partial advance payment depending on the property, dates, booking value, and proximity to check-in.',
        'Any pending balance must be paid within the timeline communicated by the reservations team.',
        'A booking may be cancelled if required payment is not received within the agreed period.'
      ]
    },
    {
      id: 8,
      category: 'booking',
      title: '8. Cancellation & Refunds',
      points: [
        'Cancellation and refund eligibility will be governed by the SKYMYST Cancellation & Refund Policy communicated at the time of booking or displayed on the property page.',
        'Bookings made through Airbnb, Booking.com, Agoda, MakeMyTrip or any other OTA may additionally be governed by the cancellation policy selected on that platform.',
        'For OTA bookings, refunds may need to be processed through the respective platform.',
        'No verbal commitment regarding cancellation or refund will be valid unless confirmed by SKYMYST in writing.'
      ]
    },
    {
      id: 9,
      category: 'booking',
      title: '9. No-Show & Early Departure',
      points: [
        'Failure to arrive on the scheduled check-in date without prior communication may be treated as a no-show.',
        'No refund is normally applicable for: no-shows, unused nights, voluntary early departure, change of travel plans after check-in.',
        'Any exception will be considered according to the applicable cancellation policy and circumstances.'
      ]
    },
    {
      id: 10,
      category: 'conduct',
      title: '10. Property Usage',
      points: [
        'The accommodation is provided for peaceful residential hospitality use only.',
        'Guests must not use the property for any illegal, unsafe, commercial, or unauthorised activity.',
        'Parties, events, shoots, commercial photography, celebrations involving outside guests, or similar activities require prior written permission.',
        'Additional event or cleaning charges may apply.'
      ]
    },
    {
      id: 11,
      category: 'conduct',
      title: '11. Noise & Neighbourhood Conduct',
      points: [
        'Guests are requested to maintain reasonable noise levels, particularly during evening and night hours.',
        'Loud music, shouting, disruptive gatherings, or behaviour causing inconvenience to neighbours, staff, or other guests is not permitted.',
        'SKYMYST reserves the right to intervene where complaints are received or property/community rules are being violated.',
        'Repeated or serious disturbance may result in termination of the stay without refund.'
      ]
    },
    {
      id: 12,
      category: 'conduct',
      title: '12. Smoking & Prohibited Items',
      points: [
        'Smoking is not permitted inside bedrooms or other designated non-smoking indoor areas.',
        'Guests must use only designated smoking areas where available.',
        'Illegal substances, weapons, hazardous materials, or any activity prohibited under law are strictly not permitted.'
      ]
    },
    {
      id: 13,
      category: 'conduct',
      title: '13. Alcohol',
      points: [
        'Where permitted by law and property rules, responsible consumption of alcohol by guests of legal drinking age may be allowed.',
        'Guests remain responsible for their conduct and safety.',
        'SKYMYST does not accept responsibility for incidents resulting from excessive alcohol consumption or unsafe behaviour.'
      ]
    },
    {
      id: 14,
      category: 'conduct',
      title: '14. Children',
      points: [
        'Children must remain under the supervision of their parents or guardians at all times.',
        'Special care should be taken around: balconies, terraces, staircases, gardens, bonfire areas, mountain edges, parking areas, outdoor spaces.',
        'Parents/guardians are responsible for the safety and conduct of minors travelling with them.'
      ]
    },
    {
      id: 15,
      category: 'stay',
      title: '15. Pets',
      points: [
        'Pet acceptance differs by property.',
        'Guests must confirm the pet policy before booking.',
        'Where pets are permitted, additional cleaning charges, restrictions, or a refundable/security deposit may apply.',
        'Guests are responsible for any damage caused by their pets.'
      ]
    },
    {
      id: 16,
      category: 'conduct',
      title: '16. Property Damage',
      points: [
        'Guests are responsible for damage, breakage, staining, burning, loss, or misuse of property assets caused during their stay.',
        'This includes, but is not limited to: furniture, linen, towels, mattresses, appliances, electronics, crockery, décor, fixtures, kitchen equipment, doors/windows, property infrastructure.',
        'Reasonable repair, replacement, additional laundry, or deep-cleaning costs may be charged to the guest.',
        'SKYMYST may request reimbursement directly or through the relevant booking platform.'
      ]
    },
    {
      id: 17,
      category: 'stay',
      title: '17. Excessive Cleaning',
      points: [
        'Normal housekeeping is included as per the property offering.',
        'Additional charges may apply if the property is left in a condition requiring exceptional cleaning, including excessive food waste, stains, smoking indoors, vomiting, excessive garbage, or similar situations.'
      ]
    },
    {
      id: 18,
      category: 'stay',
      title: '18. Food & Beverage',
      points: [
        'Certain SKYMYST properties provide in-house food services while others may provide kitchen access or limited cooking facilities.',
        'Food availability, service timings, menu, and charges vary by property.',
        'Guests should place orders within communicated service hours.',
        'Outside food policies may differ between properties.',
        'Food preferences, allergies, and dietary requirements should be informed in advance. While reasonable care will be taken, allergy-free or completely contamination-free preparation cannot be guaranteed unless specifically confirmed.'
      ]
    },
    {
      id: 19,
      category: 'stay',
      title: '19. Kitchen Use',
      points: [
        'Where a guest kitchen or kitchenette is provided, guests must use appliances responsibly.',
        'Guests will be responsible for damage caused through misuse.',
        'Kitchen equipment and facilities vary between properties and should not be assumed unless specifically listed.'
      ]
    },
    {
      id: 20,
      category: 'stay',
      title: '20. Housekeeping',
      points: [
        'Housekeeping timing and frequency depend on the property and length of stay.',
        'Guests are requested to cooperate with housekeeping schedules.',
        'For privacy and safety, staff may not enter occupied rooms without permission except in an emergency or where necessary to prevent damage.'
      ]
    },
    {
      id: 21,
      category: 'stay',
      title: '21. Linen & Towels',
      points: [
        'Fresh linen and towels are provided according to the property\'s operating standard.',
        'Unusually frequent replacement, excessive staining, damage, or loss may attract additional charges.'
      ]
    },
    {
      id: 22,
      category: 'stay',
      title: '22. Electricity, Water & Internet',
      points: [
        'Hill properties may occasionally experience interruptions in electricity, water supply, mobile network, or internet due to local infrastructure, weather, maintenance, or circumstances outside the property\'s control.',
        'Where available, power backup may support selected essential loads and may not operate every appliance.',
        'SKYMYST will make reasonable efforts to resolve issues quickly but cannot guarantee uninterrupted public utility or telecom services.'
      ]
    },
    {
      id: 23,
      category: 'stay',
      title: '23. Hill Roads, Access & Parking',
      points: [
        'Many SKYMYST properties are located in mountain and tourist areas.',
        'Approach roads may include: uphill sections, narrow roads, bends, slopes, uneven patches, changing road conditions.',
        'Guests travelling in large vehicles such as Travellers, buses, low-ground-clearance vehicles, or vehicles unfamiliar with mountain terrain should inform SKYMYST in advance.',
        'Property staff may provide guidance, but the final responsibility for safe vehicle operation remains with the driver.',
        'Weather, traffic, construction, landslides, local restrictions, or road conditions may temporarily affect accessibility.'
      ]
    },
    {
      id: 24,
      category: 'stay',
      title: '24. Parking',
      points: [
        'Parking availability differs by property and is subject to the space available.',
        'Vehicles and belongings kept inside vehicles remain at the guest\'s own responsibility.',
        'SKYMYST is not responsible for damage caused by another vehicle, weather, falling objects, animals, or circumstances outside reasonable management control unless caused by proven negligence of the property.'
      ]
    },
    {
      id: 25,
      category: 'stay',
      title: '25. Mountain & Outdoor Environment',
      points: [
        'Guests acknowledge that stays in hill and nature destinations may naturally involve insects, wildlife, weather changes, uneven terrain, vegetation, moisture, and other characteristics of the local environment.',
        'Guests should exercise reasonable caution when using outdoor areas, terraces, trails, gardens, bonfire areas, and natural surroundings.'
      ]
    },
    {
      id: 26,
      category: 'stay',
      title: '26. Bonfire & Outdoor Activities',
      points: [
        'Bonfire availability depends on weather, local restrictions, staff availability, and property facilities.',
        'Additional charges may apply.',
        'Guests must follow staff instructions and maintain safe distance from fire.',
        'Children must remain supervised.',
        'Bonfires may be cancelled where wind, forest-fire restrictions, weather, or safety conditions make them unsuitable.'
      ]
    },
    {
      id: 27,
      category: 'stay',
      title: '27. Activities & Third-Party Services',
      points: [
        'Some properties may help arrange activities such as: bird watching, trekking, sightseeing, taxis, adventure activities, guides, camping, local experiences.',
        'Where a service is operated by an independent third party, that service provider remains responsible for its own operations.',
        'SKYMYST may assist with coordination but does not assume responsibility for third-party acts or omissions unless expressly stated.'
      ]
    },
    {
      id: 28,
      category: 'conduct',
      title: '28. Personal Belongings',
      points: [
        'Guests are responsible for their personal belongings, valuables, documents, cash, jewellery, electronics, and luggage.',
        'Guests should check the property carefully before departure.',
        'SKYMYST will make reasonable efforts to assist with lost-and-found items but cannot guarantee recovery.',
        'Courier or delivery costs for returned belongings must normally be borne by the guest.'
      ]
    },
    {
      id: 29,
      category: 'conduct',
      title: '29. CCTV & Security',
      points: [
        'For safety and security, CCTV cameras may be installed in permissible outdoor or common-access areas such as: entrances, parking, gates, exterior/common areas.',
        'Cameras will not be intentionally installed in private guest areas such as bedrooms or bathrooms.'
      ]
    },
    {
      id: 30,
      category: 'stay',
      title: '30. Maintenance & Emergency Access',
      points: [
        'Occasionally, urgent maintenance may be required during a stay.',
        'Where possible, guests will be informed in advance.',
        'In an emergency involving safety, water leakage, fire, electrical hazards, property damage, or similar situations, authorised staff may access the necessary area.'
      ]
    },
    {
      id: 31,
      category: 'conduct',
      title: '31. Behaviour Towards Staff',
      points: [
        'SKYMYST maintains a respectful workplace.',
        'Abusive, threatening, discriminatory, violent, or inappropriate behaviour towards property staff, neighbours, other guests, or management will not be tolerated.',
        'Serious misconduct may result in termination of the stay and involvement of appropriate authorities where required.'
      ]
    },
    {
      id: 32,
      category: 'conduct',
      title: '32. Misrepresentation or Rule Violation',
      points: [
        'SKYMYST reserves the right to refuse check-in or terminate a stay where there is: incorrect guest information, undeclared guests, illegal activity, serious property damage, threatening behaviour, repeated disturbance, violation of safety requirements, misuse of the property.',
        'Refund eligibility in such cases will depend on the circumstances and applicable booking policy.'
      ]
    },
    {
      id: 33,
      category: 'legal',
      title: '33. Photos & Property Representation',
      points: [
        'Property photographs are intended to represent the accommodation accurately.',
        'Minor differences may occur due to: furniture replacement, maintenance, seasonal vegetation, décor updates, lighting, weather, operational improvements.',
        'Such reasonable variations do not constitute misrepresentation.'
      ]
    },
    {
      id: 34,
      category: 'legal',
      title: '34. Force Majeure & Circumstances Beyond Control',
      points: [
        'SKYMYST will not be liable for failure or interruption caused by circumstances outside reasonable control, including: extreme weather, landslides, road closures, natural disasters, government restrictions, strikes, power-grid failure, internet/network failure, water-supply interruption, emergencies, civil disturbances, acts of God.',
        'Where possible, SKYMYST will assist guests in identifying a reasonable solution.'
      ]
    },
    {
      id: 35,
      category: 'legal',
      title: '35. Relocation in Exceptional Circumstances',
      points: [
        'In rare situations where the booked property becomes unavailable due to a serious maintenance issue, emergency, safety concern, or another unavoidable circumstance, SKYMYST may offer: alternative accommodation of reasonably comparable standard, rescheduling, or refund according to the circumstances.',
        'Any alternative will depend on availability.'
      ]
    },
    {
      id: 36,
      category: 'booking',
      title: '36. Offers & Discounts',
      points: [
        'Offers, promotional rates, coupon codes, and special packages may have separate conditions.',
        'They cannot be combined unless expressly permitted.',
        'Prices may change for future reservations without affecting an already confirmed booking.'
      ]
    },
    {
      id: 37,
      category: 'booking',
      title: '37. Direct / Offline Booking Acceptance',
      points: [
        'For bookings made through WhatsApp, telephone, bank transfer, UPI, cash, social media, or other direct channels, payment of the booking amount will be treated as acceptance of: these Terms & Conditions, the applicable Cancellation & Refund Policy, the property\'s house rules, and the confirmed booking details.',
        'Guests are advised to review the terms before making payment.'
      ]
    },
    {
      id: 38,
      category: 'booking',
      title: '38. OTA Bookings',
      points: [
        'For bookings made through Airbnb, Booking.com, Agoda, MakeMyTrip, Goibibo, or another third-party platform, the relevant platform\'s terms may also apply.',
        'Where payment, cancellation, refund, or dispute handling is controlled by the OTA, SKYMYST must follow that platform\'s applicable process.'
      ]
    },
    {
      id: 39,
      category: 'stay',
      title: '39. Complaints During the Stay',
      points: [
        'Guests are encouraged to report any issue during the stay as soon as reasonably possible so that the property team has an opportunity to resolve it.',
        'Where an issue can reasonably be corrected during the stay, guests should allow the management team an opportunity to address it.'
      ]
    },
    {
      id: 40,
      category: 'legal',
      title: '40. Reviews & Feedback',
      points: [
        'We welcome honest and constructive guest feedback.',
        'Guests are encouraged to contact SKYMYST directly during their stay if they face any issue so that our team can attempt an immediate resolution.',
        'Nothing in these terms restricts a guest from sharing genuine feedback or exercising rights available under applicable law or an OTA\'s policies.'
      ]
    },
    {
      id: 41,
      category: 'legal',
      title: '41. Limitation of Responsibility',
      points: [
        'SKYMYST will take reasonable care in providing the accommodation and agreed services.',
        'However, SKYMYST is not responsible for losses resulting from matters outside reasonable control or from a guest\'s own negligence, unsafe conduct, failure to follow instructions, or third-party actions.',
        'Nothing in these terms excludes liability that cannot legally be excluded under applicable law.'
      ]
    },
    {
      id: 42,
      category: 'legal',
      title: '42. Property-Specific Rules',
      points: [
        'Each SKYMYST property may have additional rules based on its location, design, operating model, neighbourhood, facilities, or local requirements.',
        'Property-specific rules communicated on the property page, booking confirmation, signage, or guest information form part of these Terms & Conditions.'
      ]
    },
    {
      id: 43,
      category: 'legal',
      title: '43. Changes to Terms',
      points: [
        'SKYMYST may update these Terms & Conditions from time to time.',
        'The terms applicable to a booking will normally be those in effect when the reservation is confirmed, except where changes are required by law or safety requirements.'
      ]
    },
    {
      id: 44,
      category: 'legal',
      title: '44. Applicable Law',
      points: [
        'These Terms & Conditions are governed by the applicable laws of India.',
        'Any dispute will be handled according to applicable Indian law and the jurisdiction legally applicable to the transaction/property.'
      ]
    }
  ];

  const filteredTerms = termsData.filter((item) => {
    const matchesCategory = activeTab === 'all' || item.category === activeTab;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.points.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FAF9F5] font-sans antialiased text-stone-800 min-h-screen">
      {/* 1. Header / Banner */}
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
            SKYMYST – Terms & Conditions
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-emerald-100 font-light leading-relaxed">
            Effective for bookings made through the SKYMYST website, WhatsApp, telephone, direct payment, offline booking, or any other direct booking channel operated by SKYMYST.
          </p>
          <div className="px-6 py-3.5 rounded-full bg-[#004D37] border border-[#007052] text-xs sm:text-sm lg:text-base text-stone-200 max-w-4xl leading-relaxed">
            By making a reservation, paying any advance amount, confirming a booking in writing, or checking into a SKYMYST-managed property, the guest agrees to the following Terms & Conditions.
          </div>
        </div>
      </section>



      {/* Main Content Area */}
      <div className="max-w-[1200px] mx-auto py-10 px-4 sm:px-8">
        {filteredTerms.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200">
            <p className="text-stone-500 font-medium">No matching terms found for &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
              className="mt-4 px-4 py-2 bg-[#005B41] text-white rounded-full text-xs font-medium hover:bg-[#004D37]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredTerms.map((item) => (
              <div
                key={item.id}
                id={`clause-${item.id}`}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-lustria text-lg sm:text-xl font-semibold text-[#005B41] mb-4 border-b border-stone-100 pb-3 flex items-center justify-between">
                  <span>{item.title}</span>
                  <span className="text-xs font-sans font-normal text-stone-400 bg-stone-100 px-3 py-1 rounded-full uppercase">
                    Clause {item.id}
                  </span>
                </h3>

                <ul className="space-y-3 font-sans text-sm sm:text-base text-stone-700 leading-relaxed">
                  {item.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="w-2 h-2 rounded-full bg-[#005B41] shrink-0 mt-2" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Guest Acceptance Statement */}
        <div className="mt-12 bg-white text-stone-900 rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-200/80">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-[#005B41]">
              <ShieldCheck className="w-5 h-5" />
              <h4 className="font-lustria font-semibold text-lg text-stone-900">Guest Acceptance Statement</h4>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
              By confirming a reservation or making payment, the guest acknowledges that they have read, understood, and accepted the booking terms, cancellation policy, property rules, and applicable charges.
            </p>
            <p className="text-xs font-mono text-stone-400 pt-1">
              SKYMYST • Vacation Rental &amp; Hospitality Management
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('privacy')}
              className="px-5 py-2.5 rounded-full bg-[#005B41] hover:bg-[#004D37] text-white text-xs sm:text-sm font-medium transition cursor-pointer flex items-center space-x-1 shadow-sm"
            >
              <span>Privacy Policy</span>
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

export default TermsAndConditions;
