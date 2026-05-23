import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingLink, CTAGroup } from "@/components/ActionLinks";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Section,
  SectionHeading,
  Shell,
  SoftPanel,
  TrustChip,
} from "@/components/DesignPrimitives";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import ServiceViewTracker from "@/components/ServiceViewTracker";
import TrustReviews from "@/components/TrustReviews";
import {
  getServiceBookingUrl,
  getServiceBySlug,
  getServiceUrl,
  site,
} from "@/data/site";
import {
  publicHoursText,
  publicText,
} from "@/utils/publicContent";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return site.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  const pageUrl = `${site.url}${getServiceUrl(service.slug)}`;
  const title = service.seoTitle;
  const description = service.metaDescription;

  return {
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
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const pageUrl = `${site.url}${getServiceUrl(service.slug)}`;
  const breadcrumbId = `${pageUrl}/#breadcrumb`;
  const bookingUrl = getServiceBookingUrl(service);

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
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
        item: `${site.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.category,
        item: pageUrl,
      },
    ],
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}/#service`,
    name: service.category,
    serviceType: service.category,
    description: publicText(service.intro, service.description),
    areaServed: {
      "@type": "City",
      name: site.address.addressLocality,
    },
    provider: {
      "@id": `${site.url}/#business`,
    },
    mainEntityOfPage: pageUrl,
    offers: service.items.map((item) => {
      const numericPrice = Number(item.price.replace(/[^0-9.]/g, ""));

      return {
        "@type": "Offer",
        name: `${service.category} ${item.name}`,
        url: pageUrl,
        price: numericPrice,
        priceCurrency: "USD",
      };
    }),
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
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
      <ServiceViewTracker serviceName={service.category} />
      <JsonLd id={`${service.slug}-breadcrumb-structured-data`} data={breadcrumbData} />
      <JsonLd id={`${service.slug}-service-structured-data`} data={serviceData} />
      <JsonLd id={`${service.slug}-faq-structured-data`} data={faqData} />
      <Navbar />

      <Section className="bg-[var(--background)]">
        <Shell>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.category },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="detail-label mb-4">{service.primaryKeyword}</p>
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] text-primary md:text-5xl lg:text-6xl">
                {service.category} in Issaquah, WA
              </h1>
              {service.subtitle ? (
                <p className="mt-4 text-lg font-semibold text-foreground">
                  {service.subtitle}
                </p>
              ) : null}
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                {publicText(service.intro, service.description)}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <TrustChip>Michelle-led session</TrustChip>
                <TrustChip>{site.address.addressLocality}, {site.address.addressRegion}</TrustChip>
              </div>

              <CTAGroup className="mt-8">
                <BookingLink
                  href={bookingUrl}
                  serviceName={service.category}
                  ctaLocation="service_page_hero"
                >
                  {service.bookingLabel}
                </BookingLink>
                <Link href="/services" className="fine-link inline-flex min-h-11 items-center">
                  Compare services
                </Link>
              </CTAGroup>
            </div>

            <SoftPanel className="p-5 md:p-6">
              <h2 className="text-2xl font-semibold text-primary">
                Session lengths and pricing
              </h2>
              <ul className="mt-5 divide-y divide-primary/10">
                {service.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span className="font-semibold text-foreground">{item.name}</span>
                    <span className="font-semibold text-secondary">{item.price}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-6 text-muted">
                {publicHoursText(site.hoursText)}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                {site.address.streetAddress}, {site.address.addressLocality},{" "}
                {site.address.addressRegion} {site.address.postalCode}
              </p>
            </SoftPanel>
          </div>
        </Shell>
      </Section>

      <Section className="bg-[var(--surface)]">
        <Shell className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            label="What this session is for"
            title={service.description}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <SoftPanel className="p-5">
              <h2 className="text-xl font-semibold text-primary">Good fit if...</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                {service.bestFor.map((item, index) => (
                  <li key={`best-for-${index}`}>
                    {publicText(item, "You want focused massage care.")}
                  </li>
                ))}
              </ul>
            </SoftPanel>
            <SoftPanel className="p-5">
              <h2 className="text-xl font-semibold text-primary">
                Choose a different option if...
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted">
                {publicText(service.chooseDifferent, "Choose the service that best matches your goals and comfort level.")}
              </p>
              <p className="mt-4 text-sm leading-6 text-muted">
                {publicText(service.safetyNote, "If you are unsure whether massage is appropriate, consult a qualified healthcare professional before booking.")}
              </p>
            </SoftPanel>
          </div>
        </Shell>
      </Section>

      <Section className="bg-[var(--background)]">
        <Shell>
          <SectionHeading
            label="What to expect"
            title="Before, during, and after your appointment."
            className="mb-10"
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Session overview", service.whatToExpect],
              ["Before your appointment", service.beforeAppointment],
              ["Session focus", service.duringSession],
              ["Aftercare", service.aftercare],
            ].map(([title, items]) => (
              <SoftPanel key={title as string} className="p-5">
                <h3 className="text-lg font-semibold text-primary">{title as string}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                  {(items as string[]).map((item, index) => (
                    <li key={`${title as string}-${index}`}>
                      {publicText(
                        item,
                        "Michelle will review this with you before the session."
                      )}
                    </li>
                  ))}
                </ul>
              </SoftPanel>
            ))}
          </div>

          <SoftPanel dark className="mt-8 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-3xl font-semibold text-primary-foreground">
                  Book {service.category}.
                </h2>
              </div>
              <BookingLink
                href={bookingUrl}
                serviceName={service.category}
                ctaLocation="service_page_expectations"
              >
                {service.bookingLabel}
              </BookingLink>
            </div>
          </SoftPanel>
        </Shell>
      </Section>

      <Section className="bg-[var(--surface)]">
        <Shell className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            label="Questions"
            title="Common questions."
          />

          <FAQAccordion items={service.faqs} />
        </Shell>
      </Section>

      <TrustReviews compact ctaLocation={`service_page_reviews_${service.slug}`} />
      <Footer />
    </main>
  );
}
