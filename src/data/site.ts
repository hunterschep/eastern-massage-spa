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
    "Massage therapy in Issaquah, WA offering Advanced Recovery Therapy, Targeted Therapeutic Massage, Essential Relaxation Massage, and cupping therapy near downtown Issaquah.",
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
      category: "Advanced Recovery Therapy",
      description:
        "High-performance treatment designed for clients who need real results, not just relaxation.",
      intro:
        "Advanced Recovery Therapy combines deep tissue work, dynamic cupping, and CBD therapy to release stubborn tension, restore mobility, and reset the body. It is designed for clients who need focused recovery work rather than a lighter relaxation-only session.",
      benefits: [
        "Combines deep tissue, dynamic cupping, and CBD therapy in one recovery-focused session.",
        "Helps release stubborn tension, improve mobility, and reduce restriction in overworked areas.",
        "Provides a more intensive treatment option for clients who need measurable bodywork results.",
      ],
      bestFor: [
        "Clients with stubborn tension, restricted mobility, or recurring tightness.",
        "Active clients, athletes, and people with physically demanding routines.",
        "Anyone who wants intensive therapeutic work instead of a relaxation-focused session.",
      ],
      items: [
        { name: "90 min", price: "$180" },
        { name: "120 min", price: "$250" },
      ],
      faqs: [
        {
          question: "What makes Advanced Recovery Therapy different?",
          answer:
            "Advanced Recovery Therapy goes beyond a standard therapeutic massage by combining deep tissue work with dynamic cupping and CBD therapy. It is built for clients who want a more results-driven session focused on tension relief, mobility, and recovery.",
        },
        {
          question: "Is Advanced Recovery Therapy only for athletes?",
          answer:
            "No. It works well for athletes, desk workers, and anyone dealing with persistent tightness or limited mobility. The key factor is needing more focused recovery work, not a specific lifestyle label.",
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
      description:
        "A focused, effective session using medium to firm pressure to relieve tension and restore balance.",
      intro:
        "Targeted Therapeutic Massage is designed for clients who need real work without committing to the full Advanced Recovery Therapy session. Medium to firm pressure is used to address tension patterns, reduce tightness, and help the body feel more balanced.",
      benefits: [
        "Uses focused therapeutic work to ease tension without the full advanced recovery package.",
        "Helps relieve muscular tightness and restore a more balanced feel in the body.",
        "Offers a clear middle ground between deep recovery work and general relaxation massage.",
      ],
      bestFor: [
        "Clients who want medium to firm pressure and targeted tension relief.",
        "People dealing with stress, stiffness, or localized problem areas.",
        "Anyone who wants therapeutic bodywork without the full advanced treatment.",
      ],
      items: [
        { name: "60 min", price: "$115" },
        { name: "90 min", price: "$165" },
      ],
      faqs: [
        {
          question: "How is Targeted Therapeutic Massage different from Advanced Recovery Therapy?",
          answer:
            "Targeted Therapeutic Massage uses medium to firm pressure to address tension and restore balance, but it does not include the full deep tissue, cupping, and CBD combination built into Advanced Recovery Therapy.",
        },
        {
          question: "What kind of pressure should I expect?",
          answer:
            "This service is typically performed with medium to firm pressure. The goal is effective therapeutic work that still feels productive and manageable.",
        },
        {
          question: "Who usually books this service?",
          answer:
            "Clients often choose it when they want real tension relief, focused attention on problem areas, and a practical therapeutic session without moving into the most intensive treatment tier.",
        },
      ],
    },
    {
      slug: "relaxation-massage",
      category: "Essential Relaxation Massage",
      description:
        "A light to moderate pressure session focused on relaxation, circulation, and stress relief.",
      intro:
        "Essential Relaxation Massage is designed for general wellness, stress relief, and a calmer full-body reset. Pressure stays light to moderate, making it a better fit for relaxation, circulation, and nervous system recovery than for deep or stubborn muscle tension.",
      benefits: [
        "Promotes relaxation, circulation, and full-body stress relief.",
        "Uses light to moderate pressure for a calmer, more restorative experience.",
        "Supports general wellness without the intensity of deeper therapeutic work.",
      ],
      bestFor: [
        "Clients looking to relax, de-stress, and recharge.",
        "People who prefer lighter pressure and a more soothing pace.",
        "General wellness appointments rather than intensive recovery work.",
      ],
      items: [
        { name: "60 min", price: "$105" },
        { name: "90 min", price: "$145" },
        { name: "120 min", price: "$230" },
      ],
      faqs: [
        {
          question: "What is the difference between Essential Relaxation Massage and Targeted Therapeutic Massage?",
          answer:
            "Essential Relaxation Massage stays lighter and is centered on stress relief, circulation, and a calming full-body experience. Targeted Therapeutic Massage is more focused and uses medium to firm pressure for tension relief.",
        },
        {
          question: "Is this a good choice for first-time clients?",
          answer:
            "Often, yes. Many first-time clients prefer it because the pressure is more comfortable and the session is designed around relaxation and general wellness.",
        },
        {
          question: "Can Essential Relaxation Massage fix deep muscle tension?",
          answer:
            "It can help with general tightness, but it is not designed for deep or stubborn muscle tension. If you want more focused relief, Targeted Therapeutic Massage or Advanced Recovery Therapy is usually the better fit.",
        },
      ],
    },
    {
      slug: "cupping-therapy-dynamic-vacuum",
      category: "Cupping Therapy (Dynamic Vacuum)",
      subtitle: "Standalone",
      description:
        "A targeted cupping session designed to release deep muscle tension, improve circulation, and support recovery.",
      intro:
        "This standalone Dynamic Vacuum cupping session is designed for clients who want focused decompression work without booking a full massage appointment. It helps release deep muscle tension, improve local circulation, and support recovery in specific areas of the body.",
      benefits: [
        "Uses dynamic vacuum cupping to decompress restricted tissue and support circulation.",
        "Targets specific recovery needs without requiring a full-length massage session.",
        "Helps reduce tension in focused areas that feel overworked or stuck.",
      ],
      bestFor: [
        "Clients who want focused cupping work as a standalone service.",
        "People managing localized tightness, stiffness, or recovery needs.",
        "Anyone curious about how dynamic cupping feels before adding it to a massage.",
      ],
      items: [{ name: "30 min", price: "$70" }],
      faqs: [
        {
          question: "Can I book cupping therapy without a massage?",
          answer:
            "Yes. This service is offered as a standalone 30-minute appointment for clients who want targeted dynamic vacuum cupping without a full massage session.",
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
      description: "Heated stones are used to relax muscles and improve circulation.",
    },
    {
      name: "Advanced Cupping Therapy (Dynamic Vacuum)",
      price: "$30",
      description:
        "Dynamic cupping is applied during your session to release deeper muscle restriction.",
    },
    {
      name: "CBD Oil Enhancement",
      price: "$30",
      description: "CBD-infused oil is used to reduce inflammation and enhance recovery.",
    },
    {
      name: "Aromatherapy",
      price: "$15",
      description: "Essential oils are applied to promote relaxation and reduce stress.",
    },
  ],
  faqs: [
    {
      question: "Do you accept same-day massage appointments in Issaquah?",
      answer:
        "Same-day appointments are often available, but availability can change quickly. Call us at (206) 750-6868 or check online booking to see the latest openings.",
    },
    {
      question: "Which massage is best if I want deeper work?",
      answer:
        "Advanced Recovery Therapy is the most intensive option and includes deep tissue work, dynamic cupping, and CBD therapy. Targeted Therapeutic Massage uses medium to firm pressure for focused tension relief, while Essential Relaxation Massage is intended for lighter-pressure relaxation and general wellness.",
    },
    {
      question: "Can I book cupping therapy without booking a massage?",
      answer:
        "Yes. Cupping Therapy (Dynamic Vacuum) is available as a standalone 30-minute service, and dynamic cupping can also be added to massage appointments as an enhancement.",
    },
    {
      question: "What add-ons are available?",
      answer:
        "Hot Stones, Advanced Cupping Therapy (Dynamic Vacuum), CBD Oil Enhancement, and Aromatherapy are available add-ons for massage appointments.",
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
