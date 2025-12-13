export const site = {
  name: "Eastern Massage Spa",
  legalName: "Eastern Massage Spa",
  url: "https://easternmassagespa.com",
  description:
    "Eastern Massage Spa in Issaquah, WA specializes in Swedish, Deep Tissue, Cupping, Hot Stone, and Mobile massage services focused on relaxation and recovery.",
  phone: "(206) 750-6868",
  phoneHref: "tel:+12067506868",
  bookingUrl: "tel:+12067506868",
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
      hours: "10:00 AM – 9:30 PM",
      opens: "10:00",
      closes: "21:30",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    },
    {
      label: "Saturday",
      hours: "10:00 AM – 9:30 PM",
      opens: "10:00",
      closes: "21:30",
      days: ["Saturday"],
    },
    {
      label: "Sunday",
      hours: "10:00 AM – 9:30 PM",
      opens: "10:00",
      closes: "21:30",
      days: ["Sunday"],
    },
  ],
  services: [
    {
      category: "Swedish Massage",
      description:
        "Gentle, relaxing strokes to improve circulation and relieve tension.",
      items: [
        { name: "60 minutes", price: "$85" },
        { name: "90 minutes", price: "$120" },
        { name: "120 minutes", price: "$160" },
      ],
    },
    {
      category: "Deep Tissue Massage",
      description:
        "Targeted pressure to release chronic muscle knots and tightness.",
      items: [
        { name: "60 minutes", price: "$95" },
        { name: "90 minutes", price: "$130" },
        { name: "120 minutes", price: "$180" },
      ],
    },
    {
      category: "Mobile Massage",
      description:
        "Professional massage therapy in the comfort of your home.",
      subtitle: "(Established Clients Only)",
      items: [
        { name: "60 minutes", price: "$120" },
        { name: "90 minutes", price: "$170" },
        { name: "120 minutes", price: "$230" },
      ],
    },
  ],
  addons: [
    { name: "Aromatherapy", price: "$10" },
    { name: "Cupping", price: "$20" },
    { name: "Hot Stones", price: "$10" },
    { name: "Prenatal", price: "$10" },
    { name: "Customized Massage", price: "Included" },
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
      question: "Do you offer mobile massage?",
      answer:
        "Yes, mobile massage is available for established clients within the Issaquah area. Please call to schedule.",
    },
  ],
};
