export type ServiceItem = {
  name: string;
  price: string;
};

export type AddonItem = {
  name: string;
  price: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ReviewTestimonial = {
  quote: string;
  author: string;
  source: string;
};

export type Service = {
  slug: string;
  category: string;
  subtitle?: string;
  seoTitle: string;
  metaDescription: string;
  bookingLabel: string;
  bookingUrlPlaceholder: string;
  primaryKeyword: string;
  description: string;
  intro: string;
  benefits: string[];
  bestFor: string[];
  whatToExpect: string[];
  beforeAppointment: string[];
  duringSession: string[];
  aftercare: string[];
  chooseDifferent: string;
  safetyNote: string;
  items: ServiceItem[];
  faqs: ServiceFaq[];
};

type SiteFaq = {
  question: string;
  answer: string;
};

export const site = {
  name: "Eastern Massage Spa",
  legalName: "Eastern Massage Spa",
  publicNamePlaceholder: "[OFFICIAL_BUSINESS_NAME]",
  url: "https://easternmassagespa.me",
  description:
    "Massage therapy in Issaquah, WA offering deep tissue massage, targeted therapeutic massage, relaxation massage, and cupping therapy near downtown Issaquah.",
  phone: "(206) 750-6868",
  phoneE164: "+12067506868",
  phoneHref: "tel:+12067506868",
  emailPlaceholder: "[OFFICIAL_EMAIL_IF_PUBLIC]",
  bookingUrl:
    "https://www.fresha.com/book-now/eastern-wellness-center-i9qpjgss/all-offer?share=true&pId=812456",
  genericBookingUrlPlaceholder: "[GENERIC_FRESHA_BOOKING_URL]",
  bookingCtaLabel: "Check Availability",
  giftCardUrlPlaceholder: "[FRESHA_GIFT_CARD_URL]",
  packageUrlPlaceholder: "[FRESHA_PACKAGE_URL]",
  mapUrl:
    "https://www.google.com/maps/dir//160+NW+Gilman+Blvd+Ste+216,+Issaquah,+WA+98027",
  mapEmbedUrlPlaceholder: "[GOOGLE_MAPS_EMBED_URL]",
  address: {
    streetAddress: "160 NW Gilman Blvd Ste 216",
    suitePlaceholder: "[OFFICIAL_SUITE_OR_UNIT]",
    addressLocality: "Issaquah",
    addressRegion: "WA",
    postalCode: "98027",
    addressCountry: "US",
  },
  geo: {
    latitude: 47.5390509,
    longitude: -122.0384037,
  },
  priceRange: "$$",
  images: {
    logo: "/logo/optimized/mainlogo-512.webp",
    hero: "/photos/optimized/hero-1000.webp",
    heroLarge: "/photos/optimized/hero-1600.webp",
    services: "/photos/optimized/services-1200.webp",
    location: "/photos/optimized/location-900.webp",
    og: "/photos/optimized/og-home.jpg",
    michelle: "/photos/optimized/michelle-picture.jpg",
  },
  hoursConfirmed: true,
  hoursText: "Open daily 10:30 AM - 9:30 PM",
  hoursNote: "Open daily. Online booking shows the most current appointment availability.",
  hours: [
    {
      label: "Monday",
      hours: "10:30 AM - 9:30 PM",
      days: ["Monday"],
      opens: "10:30",
      closes: "21:30",
    },
    {
      label: "Tuesday",
      hours: "10:30 AM - 9:30 PM",
      days: ["Tuesday"],
      opens: "10:30",
      closes: "21:30",
    },
    {
      label: "Wednesday",
      hours: "10:30 AM - 9:30 PM",
      days: ["Wednesday"],
      opens: "10:30",
      closes: "21:30",
    },
    {
      label: "Thursday",
      hours: "10:30 AM - 9:30 PM",
      days: ["Thursday"],
      opens: "10:30",
      closes: "21:30",
    },
    {
      label: "Friday",
      hours: "10:30 AM - 9:30 PM",
      days: ["Friday"],
      opens: "10:30",
      closes: "21:30",
    },
    {
      label: "Saturday",
      hours: "10:30 AM - 9:30 PM",
      days: ["Saturday"],
      opens: "10:30",
      closes: "21:30",
    },
    {
      label: "Sunday",
      days: ["Sunday"],
      hours: "10:30 AM - 9:30 PM",
      opens: "10:30",
      closes: "21:30",
    },
  ],
  practitioner: {
    firstName: "Michelle",
    fullName: "Michelle",
    title: "Licensed Massage Therapist",
    licenseNumber: "[MICHELLE_LICENSE_NUMBER_IF_PUBLIC]",
    yearsExperience: "[MICHELLE_YEARS_EXPERIENCE]",
    credentials: "Licensed Massage Therapist",
    specialties: "[MICHELLE_SPECIALTIES]",
    approach: "[MICHELLE_APPROACH]",
    shortBio:
      "Michelle is a licensed massage therapist and the primary practitioner at Eastern Massage Spa in Issaquah.",
    longBio:
      "Michelle is a licensed massage therapist serving clients at Eastern Massage Spa in Issaquah. Her massage work is focused, responsive, and centered on the areas clients want addressed during the appointment.",
    associations: "[PROFESSIONAL_ASSOCIATIONS]",
    languages: "[LANGUAGES_SPOKEN_IF_RELEVANT]",
    photoAlt: "Michelle, licensed massage therapist at Eastern Massage Spa",
  },
  reviews: {
    summary:
      "Reviewed by local clients on Google, Fresha, and Birdeye, including a 5.0 Fresha rating from 32 reviews.",
    sources: [
      {
        name: "Google",
        rating: "4.9",
        count: "55",
        url: "https://www.google.com/search?q=eastern+massage+spa+issaquah&rlz=1C5CHFA_enUS1011US1011&oq=eastern+massage+spa+issaquah&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyCAgCEAAYFhgeMg0IAxAAGIYDGIAEGIoFMg0IBBAAGIYDGIAEGIoFMgYIBRBFGDwyBggGEEUYPTIGCAcQRRg90gEIMzQ0MGowajSoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x54906f0c2e9ae0ad:0xccb0e9a6e2361403,1,,,,",
      },
      {
        name: "Fresha",
        rating: "5.0",
        count: "32",
        url: "https://www.fresha.com/book-now/eastern-wellness-center-i9qpjgss/all-offer?share=true&pId=812456",
      },
      {
        name: "Birdeye",
        rating: "4.8",
        count: "54",
        url: "https://reviews.birdeye.com/eastern-massage-spa-170070692127766",
      },
    ],
    testimonials: [
      {
        author: "Allison Lindelef",
        source: "Google",
        quote:
          "Highly recommend Eastern Massage and Michelle's work is excellent! She listened where my areas of focus were and really spent time on those areas. This was the best massage I've had in a long time. The location was great, convenient, peaceful and good parking.",
      },
      {
        author: "Frank S",
        source: "Fresha",
        quote:
          "Such an amazing experience! Clean, spacious, well appointed rooms with top end massage tables. Experienced professionals that are polite, thoughtful, and caring. Fair pricing, excellent massage, easy parking, and a luxurious experience.",
      },
      {
        author: "KROenke Ficker",
        source: "Birdeye",
        quote:
          "The session was targeted and responsive. I left with real results and highly recommend Eastern Massage Spa for therapeutic work.",
      },
    ],
  },
  businessStats: [
    {
      label: "Appointments completed",
      value: "784",
    },
    {
      label: "Clients served",
      value: "549",
    },
  ],
  locationDetails: {
    parking: "[PARKING_INSTRUCTIONS]",
    buildingEntry: "[BUILDING_ENTRY_INSTRUCTIONS]",
    suiteDirections: "[SUITE_DIRECTIONS]",
    accessibility: "[ACCESSIBILITY_NOTES]",
    landmarks: "[NEARBY_LANDMARKS]",
    transit: "[TRANSIT_OR_PARKING_NOTES]",
    appointmentType: "[APPOINTMENT_ONLY_OR_WALK_IN]",
  },
  policies: {
    cancellation: "[CANCELLATION_POLICY]",
    lateArrival: "[LATE_ARRIVAL_POLICY]",
    noShow: "[NO_SHOW_POLICY]",
    refund: "[REFUND_POLICY]",
    giftCard: "[GIFT_CARD_POLICY]",
    package: "[PACKAGE_POLICY]",
    intake: "[INTAKE_POLICY]",
  },
  profiles: {
    googleBusiness: "[GOOGLE_BUSINESS_PROFILE_URL]",
    appleMaps: "[APPLE_MAPS_URL]",
    bingPlaces: "[BING_PLACES_URL]",
    yelp: "[YELP_URL]",
    birdeye: "https://reviews.birdeye.com/eastern-massage-spa-170070692127766",
    fresha:
      "https://www.fresha.com/book-now/eastern-wellness-center-i9qpjgss/all-offer?share=true&pId=812456",
    facebook: "[FACEBOOK_URL]",
    instagram: "[INSTAGRAM_URL]",
    linkedIn: "[LINKEDIN_URL_IF_ANY]",
    other: "[OTHER_OFFICIAL_PROFILE_URLS]",
  },
  services: [
    {
      slug: "deep-tissue-therapy",
      category: "Advanced Recovery Therapy",
      subtitle: "Deep tissue precision, dynamic cupping, and CBD therapy",
      seoTitle: "Advanced Recovery Therapy in Issaquah, WA",
      metaDescription:
        "Book Advanced Recovery Therapy in Issaquah, WA for focused deep tissue work, dynamic cupping, and CBD therapy.",
      bookingLabel: "Book Advanced Recovery Therapy",
      bookingUrlPlaceholder: "[FRESHA_DEEP_TISSUE_BOOKING_URL]",
      primaryKeyword: "advanced recovery therapy Issaquah",
      description:
        "High-performance treatment for clients who want focused recovery work, firmer pressure, and clear session goals.",
      intro:
        "Advanced Recovery Therapy is the most intensive Fresha-listed massage service at Eastern Massage Spa. It combines focused deep tissue work, dynamic cupping, and CBD therapy for clients who want a firmer, results-focused appointment.",
      benefits: [
        "Uses focused pressure and slower bodywork for areas that feel tight, overworked, or restricted.",
        "May help support temporary relief from everyday muscle tension and physical stress.",
        "Provides a more intensive option for clients who prefer firm therapeutic bodywork.",
      ],
      bestFor: [
        "Clients with stubborn muscle tension, recurring tightness, or physically demanding routines.",
        "Active clients, athletes, and people with physically demanding routines.",
        "Anyone who wants intensive therapeutic work with a focused recovery pace.",
      ],
      whatToExpect: [
        "Michelle will confirm your comfort level, priority areas, and pressure preferences before the session begins.",
        "The session is shaped around focused bodywork and your priority areas.",
        "Pressure should feel productive and manageable; tell Michelle if anything feels too intense.",
      ],
      beforeAppointment: [
        "Share recent injuries, surgeries, pregnancy, medical conditions, skin sensitivities, and medications that may affect massage.",
        "Arrive with enough time to find the suite and settle in before your appointment.",
        "Dynamic cupping and CBD therapy are part of the Advanced Recovery Therapy service listed in Fresha.",
      ],
      duringSession: [
        "Expect slower, more focused work on priority areas such as back, shoulders, hips, legs, or neck.",
        "You can ask for lighter or firmer pressure at any point.",
        "Michelle may recommend a different service if deep tissue work feels poorly matched to your goals or comfort level.",
      ],
      aftercare: [
        "Drink water, move gently, and avoid scheduling intense physical activity immediately after deeper bodywork if you tend to feel sore.",
        "Temporary tenderness can happen after firm massage; contact a healthcare professional for unusual or concerning symptoms.",
      ],
      chooseDifferent:
        "Choose relaxation massage if you want lighter pressure and a calmer full-body session. Choose targeted therapeutic massage if you want focused work with a moderate therapeutic pace.",
      safetyNote:
        "This service may be inappropriate for some clients. If you are pregnant, have a medical condition, recent injury, skin condition, or are unsure whether deep tissue massage is appropriate, consult a qualified healthcare professional before booking.",
      items: [
        { name: "90 min", price: "$180" },
        { name: "120 min", price: "$250" },
      ],
      faqs: [
        {
          question: "What makes Advanced Recovery Therapy different?",
          answer:
            "Advanced Recovery Therapy is the most intensive Fresha-listed massage service. It combines deep tissue precision, dynamic cupping, and CBD therapy in a longer results-focused session.",
        },
        {
          question: "Is Advanced Recovery Therapy only for athletes?",
          answer:
            "No. It may be a fit for athletes, desk workers, and anyone with physically demanding routines or significant tension. The key factor is your comfort with deeper, more focused bodywork.",
        },
        {
          question: "Should I choose 90 minutes or 120 minutes?",
          answer:
            "Ninety minutes is a strong option for focused full-body recovery or a couple of priority areas. One hundred twenty minutes gives more time for deeper work, broader coverage, and a slower recovery-focused pace.",
        },
      ],
    },
    {
      slug: "targeted-therapeutic-massage",
      category: "Targeted Therapeutic Massage",
      seoTitle: "Therapeutic Massage in Issaquah, WA",
      metaDescription:
        "Targeted therapeutic massage in Issaquah for focused neck, back, shoulder, and muscle tension care. Book with Eastern Massage Spa.",
      bookingLabel: "Book Therapeutic Massage",
      bookingUrlPlaceholder: "[FRESHA_TARGETED_THERAPEUTIC_BOOKING_URL]",
      primaryKeyword: "therapeutic massage Issaquah",
      description:
        "A focused, effective session using medium to firm pressure to help ease tension and support a more balanced feel.",
      intro:
        "Targeted Therapeutic Massage is a focused therapeutic session using medium to firm pressure to address muscle tension, tightness, and everyday stress patterns. It is a good fit for maintenance care, localized tension, and effective work at a moderate therapeutic pace.",
      benefits: [
        "Uses focused therapeutic work to support comfort in tense areas with medium to firm pressure.",
        "May help many clients feel looser and more at ease after everyday stress or physical strain.",
        "Offers a clear middle ground between deep recovery work and general relaxation massage.",
      ],
      bestFor: [
        "Clients who want medium to firm pressure and targeted tension relief.",
        "People dealing with stress, stiffness, or localized problem areas.",
        "Anyone who wants therapeutic bodywork with a focused, practical structure.",
      ],
      whatToExpect: [
        "Michelle will ask about priority areas and pressure preferences before starting.",
        "The session can focus on common tension areas such as the neck, shoulders, back, hips, or legs.",
        "Pressure should stay within a productive and comfortable range.",
      ],
      beforeAppointment: [
        "Share injuries, medical conditions, pregnancy, skin sensitivities, and any areas to avoid.",
        "Think about your top one to three priority areas so the session time is used well.",
      ],
      duringSession: [
        "Expect medium to firm pressure adjusted throughout the appointment.",
        "Michelle may spend more time on specific areas when they need more attention.",
        "You can ask for pressure changes or a shift in focus at any time.",
      ],
      aftercare: [
        "Drink water and give your body time to settle after focused bodywork.",
        "Gentle movement may help you notice how your body feels after the session.",
      ],
      chooseDifferent:
        "Choose deep tissue massage if you want the firmest recovery-style session. Choose relaxation massage if your main goal is lighter pressure and stress relief.",
      safetyNote:
        "Massage may be inappropriate for some clients. If you have recent injuries, a medical condition, or uncertainty about whether massage is appropriate, consult a qualified healthcare professional before booking.",
      items: [
        { name: "60 min", price: "$115" },
        { name: "90 min", price: "$165" },
      ],
      faqs: [
        {
          question: "How is Targeted Therapeutic Massage different from Advanced Recovery Therapy?",
          answer:
            "Targeted Therapeutic Massage uses medium to firm pressure for focused tension care. Advanced Recovery Therapy is the longer, more intensive Fresha-listed option and includes dynamic cupping and CBD therapy.",
        },
        {
          question: "What kind of pressure should I expect?",
          answer:
            "This service is typically performed with medium to firm pressure. The goal is effective therapeutic work that still feels productive and manageable.",
        },
        {
          question: "Who usually books this service?",
          answer:
            "Clients often choose it when they want tension relief, focused attention on problem areas, and a practical therapeutic session at a moderate intensity.",
        },
      ],
    },
    {
      slug: "relaxation-massage",
      category: "Essential Relaxation Massage",
      seoTitle: "Relaxation Massage in Issaquah, WA",
      metaDescription:
        "Relaxation and Swedish-style massage in Issaquah, WA to ease stress, calm the body, and support restorative self-care.",
      bookingLabel: "Book Relaxation Massage",
      bookingUrlPlaceholder: "[FRESHA_RELAXATION_MASSAGE_BOOKING_URL]",
      primaryKeyword: "relaxation massage Issaquah",
      description:
        "A light to moderate pressure session focused on relaxation, circulation, and stress relief.",
      intro:
        "Essential Relaxation Massage is a calming light to moderate pressure session designed to promote relaxation, improve circulation, and support overall well-being. It is recommended for stress relief, general relaxation, and a gentler massage experience.",
      benefits: [
        "Designed to promote relaxation, comfort, and a calmer body.",
        "Uses light to moderate pressure for a calmer, more restorative experience.",
        "Supports general wellness with a lighter, more soothing pace.",
      ],
      bestFor: [
        "Clients looking to relax, de-stress, and recharge.",
        "People who prefer lighter pressure and a more soothing pace.",
        "General wellness appointments with a calmer session style.",
      ],
      whatToExpect: [
        "Michelle will confirm pressure preference and any areas you want avoided.",
        "The session is calmer and less intensive than deep tissue or targeted therapeutic massage.",
        "The pace is intended to support relaxation and comfort.",
      ],
      beforeAppointment: [
        "Share any medical conditions, pregnancy, injuries, allergies, or areas Michelle should avoid.",
        "Let Michelle know if you prefer a quiet session or want more communication during the massage.",
      ],
      duringSession: [
        "Expect light to moderate pressure and a soothing pace.",
        "You can ask for pressure changes, more focus on a specific area, or less focus on sensitive areas.",
      ],
      aftercare: [
        "Give yourself a few minutes after the session before returning to a busy schedule.",
        "Hydrate and notice how your body feels after a relaxation-focused appointment.",
      ],
      chooseDifferent:
        "Choose targeted therapeutic massage or deep tissue massage if you want firmer pressure or focused work on stubborn tension.",
      safetyNote:
        "If you are pregnant, have recent injuries, a medical condition, or are unsure whether massage is appropriate, consult a qualified healthcare professional before booking.",
      items: [
        { name: "60 min", price: "$105" },
        { name: "90 min", price: "$145" },
        { name: "120 min", price: "$230" },
      ],
      faqs: [
        {
          question: "What is the difference between Essential Relaxation Massage and Targeted Therapeutic Massage?",
          answer:
            "Essential Relaxation Massage stays lighter and is centered on stress relief, comfort, and a calming full-body experience. Targeted Therapeutic Massage is more focused and uses medium to firm pressure for tension care.",
        },
        {
          question: "Is this a good choice for first-time clients?",
          answer:
            "Often, yes. Many first-time clients prefer it because the pressure is more comfortable and the session is designed around relaxation and general wellness.",
        },
        {
          question: "Can Essential Relaxation Massage fix deep muscle tension?",
          answer:
            "It can help with general tightness. For deep or stubborn muscle tension, Targeted Therapeutic Massage or Advanced Recovery Therapy is usually the better fit.",
        },
      ],
    },
    {
      slug: "cupping-therapy-dynamic-vacuum",
      category: "Cupping Therapy (Dynamic Vacuum)",
      subtitle: "Standalone Session",
      seoTitle: "Cupping Therapy in Issaquah, WA",
      metaDescription:
        "Cupping therapy in Issaquah, WA to support muscle recovery, mobility, and targeted tension relief. Book your session today.",
      bookingLabel: "Book Cupping Therapy",
      bookingUrlPlaceholder: "[FRESHA_CUPPING_THERAPY_BOOKING_URL]",
      primaryKeyword: "cupping therapy Issaquah",
      description:
        "A targeted standalone cupping session designed to support deep muscle tension relief, circulation, and recovery.",
      intro:
        "Cupping Therapy is a standalone 30-minute dynamic vacuum session. It is designed as a focused treatment and can also help clients decide whether cupping feels useful before choosing a longer massage service.",
      benefits: [
        "Uses dynamic vacuum cupping to gently lift and decompress soft tissue.",
        "Targets specific recovery needs in a shorter standalone session.",
        "May support temporary relief from muscle tension in focused areas that feel overworked or stuck.",
      ],
      bestFor: [
        "Clients who want focused cupping work as a standalone service.",
        "People managing localized tightness, stiffness, or recovery needs.",
        "Anyone curious about how dynamic cupping feels before adding it to a massage.",
      ],
      whatToExpect: [
        "Michelle will confirm the target area and explain how dynamic vacuum cupping will be used.",
        "The cups create suction and may be moved across the treatment area.",
        "Temporary marks or discoloration can occur and should be expected by some clients.",
      ],
      beforeAppointment: [
        "Tell Michelle about skin conditions, bruising, blood thinners, pregnancy, recent injuries, or medical conditions before cupping.",
        "Avoid booking cupping over irritated skin, open wounds, sunburn, or areas that should avoid suction.",
        "This Fresha-listed cupping service is a standalone 30-minute session.",
      ],
      duringSession: [
        "The session typically focuses on a smaller number of priority areas.",
        "Suction should feel controlled; ask Michelle to adjust or stop if it feels uncomfortable.",
        "Michelle may recommend a different massage service if cupping is poorly matched to the area or concern.",
      ],
      aftercare: [
        "Temporary discoloration may last several days depending on your skin and tissue response.",
        "Hydrate, avoid irritating the treated skin, and avoid intense heat on recently cupped areas immediately after the session.",
        "Seek medical guidance for unusual pain, skin reaction, or symptoms that concern you.",
      ],
      chooseDifferent:
        "Choose a massage service if you want full-body care, lighter relaxation, or a session better matched to your health history.",
      safetyNote:
        "Cupping may be inappropriate for some clients. If you are pregnant, take blood thinners, bruise easily, have recent injuries, skin conditions, or are unsure whether cupping is appropriate, consult a qualified healthcare professional before booking.",
      items: [{ name: "30 min", price: "$70" }],
      faqs: [
        {
          question: "Can I book cupping therapy by itself?",
          answer:
            "Yes. This service is offered as a standalone 30-minute appointment for clients who want targeted dynamic vacuum cupping.",
        },
        {
          question: "Will cupping leave marks?",
          answer:
            "It can. Some clients notice temporary discoloration after cupping depending on the area treated and how their tissue responds, but the experience should still feel controlled and therapeutic.",
        },
        {
          question: "What areas can be treated during the session?",
          answer:
            "The session is typically focused on a smaller number of priority areas, such as the back, shoulders, hips, or legs, depending on where you are carrying the most tension.",
        },
      ],
    },
  ] as Service[],
  addons: [
    {
      name: "Hot Stones",
      price: "$15",
      description:
        "Heated stones are used to relax muscles and support a calmer massage experience.",
    },
    {
      name: "Advanced Cupping Therapy (Dynamic Vacuum)",
      price: "$30",
      description:
        "Dynamic cupping is applied during your session to support deeper work on muscle restriction.",
    },
    {
      name: "CBD Oil Enhancement",
      price: "$30",
      description:
        "CBD-infused oil is used as an optional enhancement to support comfort during the session.",
    },
    {
      name: "Aromatherapy",
      price: "$15",
      description:
        "Essential oils are applied to promote relaxation and reduce stress.",
    },
  ] as AddonItem[],
  faqs: [
    {
      question: "Do you accept same-day massage appointments in Issaquah?",
      answer:
        "Same-day appointments may appear in Fresha when Michelle has availability. Use online booking to view the latest openings.",
    },
    {
      question: "Which massage is best if I want deeper work?",
      answer:
        "Advanced Recovery Therapy is the most intensive Fresha-listed option and includes deep tissue precision, dynamic cupping, and CBD therapy. Targeted Therapeutic Massage uses medium to firm pressure for focused tension care, while Essential Relaxation Massage is intended for lighter-pressure relaxation and general wellness.",
    },
    {
      question: "Can I book cupping therapy by itself?",
      answer:
        "Yes. Cupping Therapy (Dynamic Vacuum) is available as a standalone 30-minute service, and dynamic cupping can also be added to massage appointments as an enhancement.",
    },
    {
      question: "What enhancements are available?",
      answer:
        "Hot Stones, Advanced Cupping Therapy (Dynamic Vacuum), CBD Oil Enhancement, and Aromatherapy are available as session enhancements. Confirm availability in Fresha when booking.",
    },
    {
      question: "Where is Eastern Massage Spa located?",
      answer:
        "We are located at 160 NW Gilman Blvd Ste 216 in Issaquah, Washington, with convenient access for clients visiting from Issaquah and nearby Eastside communities.",
    },
    {
      question: "What are your business hours?",
      answer:
        "Eastern Massage Spa is open daily from 10:30 AM to 9:30 PM. Online booking shows the most current appointment availability.",
    },
    {
      question: "How do I check availability for a massage appointment?",
      answer:
        "Use Fresha online booking to view currently released times, compare services, and choose an appointment.",
    },
  ] as SiteFaq[],
};

export function getServiceUrl(slug: string) {
  return `/services/${slug}`;
}

export function getServiceBySlug(slug: string) {
  return site.services.find((service) => service.slug === slug);
}

export function getAbsoluteUrl(path = "") {
  if (!path) {
    return site.url;
  }

  if (path.startsWith("http")) {
    return path;
  }

  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getServiceBookingUrl(service: Service) {
  return service.bookingUrlPlaceholder.startsWith("http")
    ? service.bookingUrlPlaceholder
    : site.bookingUrl;
}

export function getOfficialProfileUrls() {
  return [
    site.profiles.googleBusiness,
    site.profiles.appleMaps,
    site.profiles.bingPlaces,
    site.profiles.yelp,
    site.profiles.birdeye,
    site.profiles.fresha,
    site.profiles.facebook,
    site.profiles.instagram,
    site.profiles.linkedIn,
  ].filter((url) => url.startsWith("http"));
}
