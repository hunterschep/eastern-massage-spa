export type ServiceItem = {
  name: string;
  price: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  category: string;
  subtitle?: string;
  description: string;
  intro: string;
  benefits: string[];
  bestFor: string[];
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
  url: "https://easternmassagespa.me",
  description:
    "Massage therapy in Issaquah, WA offering Deep Tissue Therapy, Relaxation Massage, and custom enhancements near downtown Issaquah.",
  phone: "(206) 750-6868",
  phoneHref: "tel:+12067506868",
  bookingUrl:
    "https://www.fresha.com/a/eastern-massage-spa-issaquah-160-northwest-gilman-boulevard-ebx624o5",
  bookingCtaLabel: "Check Availability",
  bookingNote: "Limited availability. Select times are released.",
  mapUrl:
    "https://www.google.com/maps/dir//160+NW+Gilman+Blvd+Ste+216,+Issaquah,+WA+98027",
  address: {
    streetAddress: "160 NW Gilman Blvd Ste 216",
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
  hoursText: "Open daily 10:30 AM – 8:30 PM",
  hours: [
    {
      label: "Mon - Fri",
      hours: "10:30 AM – 8:30 PM",
      opens: "10:30",
      closes: "20:30",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    },
    {
      label: "Saturday",
      hours: "10:30 AM – 8:30 PM",
      opens: "10:30",
      closes: "20:30",
      days: ["Saturday"],
    },
    {
      label: "Sunday",
      hours: "10:30 AM – 8:30 PM",
      opens: "10:30",
      closes: "20:30",
      days: ["Sunday"],
    },
  ],
  services: [
    {
      slug: "deep-tissue-therapy",
      category: "Deep Tissue Therapy",
      description:
        "Focused, firm-pressure bodywork designed for chronic tension, overworked muscles, stiffness, and recovery-oriented massage sessions.",
      intro:
        "Deep Tissue Therapy at Eastern Massage Spa in Issaquah is designed for clients dealing with persistent tightness in the neck, shoulders, back, hips, or legs. Sessions use slower, more focused techniques to work through areas that feel restricted from desk work, repetitive strain, training, or physically demanding routines.",
      benefits: [
        "Targets stubborn tightness in the neck, shoulders, back, hips, and legs.",
        "Uses focused pressure and slower techniques for areas that feel restricted or overworked.",
        "Supports recovery when lighter-pressure massage is not specific enough for the issue.",
      ],
      bestFor: [
        "Clients with chronic tension or recurring stiffness.",
        "People who prefer firmer pressure and more targeted bodywork.",
        "Desk workers, active clients, and anyone managing overworked muscle groups.",
      ],
      items: [
        { name: "60 minutes", price: "$105" },
        { name: "90 minutes", price: "$150" },
        { name: "120 minutes", price: "$200" },
      ],
      faqs: [
        {
          question: "Is Deep Tissue Therapy supposed to feel painful?",
          answer:
            "The session can feel more intense than a relaxation-focused massage, but pressure should still feel productive and manageable. Your therapist can adjust pressure and technique based on how your body responds.",
        },
        {
          question: "Who usually books Deep Tissue Therapy?",
          answer:
            "Clients commonly book it for stubborn tension, limited mobility, overworked muscles, and areas that have not responded well to lighter pressure.",
        },
        {
          question: "How often should I schedule Deep Tissue Therapy?",
          answer:
            "That depends on your tension patterns, workload, and goals. Some clients book occasionally for maintenance, while others come more regularly during periods of higher stress or physical demand.",
        },
      ],
    },
    {
      slug: "relaxation-massage",
      category: "Relaxation Massage",
      description:
        "A calming massage with gentle to medium pressure designed to reduce stress, improve circulation, and help clients unwind.",
      intro:
        "Relaxation Massage is a good fit for clients who want a calming, full-body session that eases everyday stress and general tension. At our Issaquah location, this service focuses on helping the body slow down, recover, and feel more balanced without the more intense pressure used in deeper work.",
      benefits: [
        "Encourages a calmer, more restorative massage experience.",
        "Helps reduce general body tension and everyday stress.",
        "Promotes circulation and overall relaxation with gentle to medium pressure.",
      ],
      bestFor: [
        "Clients who want stress relief and a more soothing session.",
        "People newer to massage or those who do not want intense pressure.",
        "Anyone looking for a calming appointment that supports rest and recovery.",
      ],
      items: [
        { name: "60 minutes", price: "$90" },
        { name: "90 minutes", price: "$130" },
        { name: "120 minutes", price: "$170" },
      ],
      faqs: [
        {
          question: "What is the difference between Relaxation Massage and Deep Tissue Therapy?",
          answer:
            "Relaxation Massage uses gentler to medium pressure and is centered on calming the body and easing general tension. Deep Tissue Therapy is more focused and firm, and is typically chosen for persistent tightness and more specific trouble spots.",
        },
        {
          question: "Can Relaxation Massage still address sore muscles?",
          answer:
            "Yes. It can still help with mild soreness and tension, but if you want more concentrated work on chronic tightness, Deep Tissue Therapy may be the better fit.",
        },
        {
          question: "Is Relaxation Massage a good choice for first-time clients?",
          answer:
            "Often, yes. It gives many first-time clients a comfortable way to experience massage therapy while still addressing stress and general muscular tension.",
        },
      ],
    },
  ] as Service[],
  addons: [
    { name: "Aromatherapy", price: "$15" },
    { name: "Hot Stones", price: "$15" },
    { name: "Prenatal Upgrade", price: "$10" },
    { name: "Cupping Therapy", price: "$25" },
    { name: "CBD Oil Enhancement", price: "$25" },
  ],
  faqs: [
    {
      question: "Do you accept same-day massage appointments in Issaquah?",
      answer:
        "Same-day appointments are often available, but availability can change quickly. Call us at (206) 750-6868 or check online booking to see the latest openings.",
    },
    {
      question: "What is the difference between Deep Tissue Therapy and Relaxation Massage?",
      answer:
        "Deep Tissue Therapy is more focused and firm for chronic tightness and overworked muscles. Relaxation Massage uses gentler to medium pressure and is better for stress relief, circulation, and general body tension.",
    },
    {
      question: "Can I add aromatherapy, hot stones, cupping, or CBD oil?",
      answer:
        "Yes. Aromatherapy, hot stones, prenatal upgrade, cupping therapy, and CBD oil enhancement are available with massage services.",
    },
    {
      question: "Where is Eastern Massage Spa located?",
      answer:
        "We are located at 160 NW Gilman Blvd Ste 216 in Issaquah, Washington, with convenient access for clients visiting from Issaquah and nearby Eastside communities.",
    },
    {
      question: "What are your business hours?",
      answer:
        "Eastern Massage Spa is open daily from 10:30 AM to 8:30 PM. Holiday hours may vary.",
    },
    {
      question: "How do I check availability for a massage appointment?",
      answer:
        "Use the online booking link to view currently released times, or call us directly if you need help choosing a service or checking the latest openings.",
    },
  ] as SiteFaq[],
};

export function getServiceUrl(slug: string) {
  return `/services/${slug}`;
}

export function getServiceBySlug(slug: string) {
  return site.services.find((service) => service.slug === slug);
}
