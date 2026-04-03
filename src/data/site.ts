type ServiceItem = {
  name: string;
  price: string;
};

type Service = {
  category: string;
  description: string;
  subtitle?: string;
  items: ServiceItem[];
};

export const site = {
  name: "Eastern Massage Spa",
  legalName: "Eastern Massage Spa",
  url: "https://easternmassagespa.me",
  description:
    "Massage therapy in Issaquah, WA with licensed massage therapists offering Swedish massage, Deep Tissue massage, and custom enhancements including cupping, hot stones, prenatal upgrade, and CBD oil.",
  phone: "(206) 750-6868",
  phoneHref: "tel:+12067506868",
  bookingUrl: "https://issaquah-location.square.site/",
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
      category: "Swedish Massage",
      description:
        "Gentle to medium pressure designed to promote relaxation, improve circulation, and relieve general tension.",
      items: [
        { name: "60 minutes", price: "$90" },
        { name: "90 minutes", price: "$130" },
        { name: "120 minutes", price: "$170" },
      ],
    },
    {
      category: "Deep Tissue Massage",
      description:
        "Targeted, firm pressure focused on relieving chronic muscle tension, stiffness, and deeper muscle layers. Recommended for clients with significant tension or physically demanding lifestyles.",
      items: [
        { name: "60 minutes", price: "$105" },
        { name: "90 minutes", price: "$150" },
        { name: "120 minutes", price: "$200" },
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
      question: "Do you accept same-day appointments?",
      answer:
        "Yes, same-day appointments are often available. Call us at (206) 750-6868 to check availability.",
    },
    {
      question: "What should I expect during my first visit?",
      answer:
        "Arrive a few minutes early to discuss your needs with your therapist. We tailor pressure and techniques to your comfort level.",
    },
    {
      question: "Can I add enhancements to my massage?",
      answer:
        "Yes. Aromatherapy, hot stones, prenatal upgrade, cupping therapy, and CBD oil enhancement are available with any massage service.",
    },
    {
      question: "Where is Eastern Massage Spa located?",
      answer:
        "We are located at 160 NW Gilman Blvd Ste 216 in Issaquah, Washington, with convenient access for clients visiting from Issaquah and nearby Eastside communities.",
    },
    {
      question: "What type of massage should I book?",
      answer:
        "Swedish massage is ideal for relaxation, circulation, and general tension relief. Deep Tissue massage is best for clients who want firmer pressure focused on chronic tightness, stiffness, and deeper muscle tension.",
    },
  ],
};
