import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookNowButton from "@/components/BookNowButton";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import { getServiceUrl, site } from "@/data/site";

const pageUrl = `${site.url}/services`;
const title = `Massage Services in ${site.address.addressLocality}, ${site.address.addressRegion}`;
const description =
  "Compare massage services in Issaquah, WA, including Deep Tissue Therapy and Relaxation Massage. Review pricing, session lengths, and book online.";

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
  },
  twitter: {
    title: `${title} | ${site.name}`,
    description,
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
        description: service.description,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-stone-50">
      <JsonLd id="services-breadcrumb-structured-data" data={breadcrumbData} />
      <JsonLd id="services-page-structured-data" data={collectionPageData} />
      <Navbar />

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
          />

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
              Massage Services
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Massage Services in Issaquah, WA
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              Eastern Massage Spa offers focused therapeutic massage services for
              clients who want stress relief, firmer bodywork, and session
              enhancements in a professional Issaquah setting. Review each
              service below to compare pricing, session lengths, and fit.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {site.services.map((service) => (
              <article
                key={service.slug}
                className="rounded-3xl border border-primary/10 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary mb-3">
                  {service.category}
                </p>
                <h2 className="text-3xl font-semibold text-primary mb-4">
                  <Link
                    href={getServiceUrl(service.slug)}
                    className="hover:text-secondary transition-colors"
                  >
                    {service.category}
                  </Link>
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  {service.intro}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between items-center border-b border-primary/10 pb-3"
                    >
                      <span className="font-medium text-foreground">{item.name}</span>
                      <span className="font-semibold text-secondary">{item.price}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={getServiceUrl(service.slug)}
                  className="text-sm font-semibold text-secondary underline underline-offset-4 hover:text-primary transition-colors"
                >
                  View {service.category} details
                </Link>
              </article>
            ))}
          </div>

          <section className="mt-16 rounded-3xl bg-primary text-primary-foreground p-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold mb-4">
                Add enhancements or book your preferred session online
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Aromatherapy, hot stones, prenatal upgrade, cupping therapy, and
                CBD oil enhancement are available add-ons. Online booking shows
                currently released times, and calling us is always an option if
                you want help choosing the right service.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <BookNowButton className="inline-flex items-center justify-center bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors">
                  {site.bookingCtaLabel}
                </BookNowButton>
                <p className="text-sm text-primary-foreground/70">{site.bookingNote}</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
