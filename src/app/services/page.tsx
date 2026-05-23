import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Section, SectionHeading, Shell } from "@/components/DesignPrimitives";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import ServicePricingMenu from "@/components/ServicePricingMenu";
import TrustReviews from "@/components/TrustReviews";
import { getServiceUrl, site } from "@/data/site";
import { publicText } from "@/utils/publicContent";

const pageUrl = `${site.url}/services`;
const title = `Massage Services in ${site.address.addressLocality}, ${site.address.addressRegion}`;
const description =
  "Explore massage services in Issaquah, WA including therapeutic massage, relaxation massage, deep tissue work, and cupping therapy.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `${title} | ${site.name}`,
    description,
    url: pageUrl,
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
    title: `${title} | ${site.name}`,
    description,
    images: [site.images.og],
  },
};

export default function ServicesPage() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: pageUrl,
      },
    ],
  };

  const collectionPageData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}/#webpage`,
    url: pageUrl,
    name: "Massage Services in Issaquah, WA",
    description,
    isPartOf: {
      "@id": `${site.url}/#website`,
    },
    about: {
      "@id": `${site.url}/#business`,
    },
    breadcrumb: {
      "@id": `${pageUrl}/#breadcrumb`,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: site.services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${site.url}${getServiceUrl(service.slug)}`,
        name: service.category,
        description: publicText(service.description, service.category),
      })),
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <JsonLd id="services-breadcrumb-structured-data" data={breadcrumbData} />
      <JsonLd id="services-page-structured-data" data={collectionPageData} />
      <Navbar />

      <Section className="bg-[var(--background)]">
        <Shell>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
          />

          <div className="max-w-3xl">
            <SectionHeading
              label="Massage services in Issaquah"
              title="Massage services and pricing."
            />
          </div>

          <div className="mt-12">
            <ServicePricingMenu ctaLocation="services_pricing_menu" />
          </div>
        </Shell>
      </Section>

      <TrustReviews compact ctaLocation="services_page_reviews" />
      <Footer />
    </main>
  );
}
