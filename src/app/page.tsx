import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMichelle from "@/components/AboutMichelle";
import Services from "@/components/Services";
import TrustReviews from "@/components/TrustReviews";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import { publicText } from "@/utils/publicContent";

const title = `Eastern Massage Spa | Massage Therapy in ${site.address.addressLocality}, ${site.address.addressRegion}`;
const description =
  "Book massage therapy in Issaquah, WA with Eastern Massage Spa. Compare deep tissue, therapeutic, relaxation, and cupping services.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title,
    description,
    url: site.url,
    images: [
      {
        url: site.images.og,
        width: 1200,
        height: 630,
        alt: `${site.name} treatment room in Issaquah`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [site.images.og],
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
        text: publicText(faq.answer, "Check Fresha for details."),
      },
    })),
  };

  return (
    <main className="min-h-screen bg-background">
      <JsonLd id="homepage-faq-structured-data" data={faqStructuredData} />
      <Navbar />
      <Hero />
      <Services />
      <AboutMichelle />
      <TrustReviews ctaLocation="homepage_reviews" />
      <FAQ />
      <Location />
      <FinalCTA />
      <Footer />
    </main>
  );
}
