import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const title = `Massage Therapy in ${site.address.addressLocality}, ${site.address.addressRegion}`;
const description =
  "Book massage therapy in Issaquah, WA. Explore Advanced Recovery Therapy, Targeted Therapeutic Massage, Essential Relaxation Massage, cupping therapy, hours, and online availability at Eastern Massage Spa.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: `${title} | ${site.name}`,
    description,
    url: site.url,
  },
  twitter: {
    title: `${title} | ${site.name}`,
    description,
  },
};

export default function Home() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-stone-50">
      <JsonLd id="homepage-faq-structured-data" data={faqStructuredData} />
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <FAQ />
      <Location />
      <Footer />
    </main>
  );
}
