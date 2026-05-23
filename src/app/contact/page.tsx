import type { Metadata } from "next";
import { BookingLink, DirectionsLink } from "@/components/ActionLinks";
import {
  Section,
  SectionHeading,
  Shell,
  SoftPanel,
} from "@/components/DesignPrimitives";
import Footer from "@/components/Footer";
import HoursList from "@/components/HoursList";
import Navbar from "@/components/Navbar";
import { site } from "@/data/site";

const pageUrl = `${site.url}/contact`;
const title = "Contact Eastern Massage Spa | Issaquah, WA";
const description =
  "Contact Eastern Massage Spa in Issaquah, WA for massage appointments, directions, parking notes, hours, and online booking.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title,
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
    title,
    description,
    images: [site.images.og],
  },
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${site.address.streetAddress} ${site.address.addressLocality}, ${site.address.addressRegion} ${site.address.postalCode}`
  );
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <Section className="bg-[var(--background)]">
        <Shell>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              label="Contact and location"
              title="Here's how to find the Issaquah studio."
            >
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BookingLink ctaLocation="contact_page_hero">
                  Book a Massage
                </BookingLink>
              </div>
            </SectionHeading>

            <SoftPanel className="p-5 md:p-6">
              <h1 className="text-3xl font-semibold text-primary">
                Eastern Massage Spa
              </h1>
              <address className="mt-4 not-italic leading-7 text-muted">
                {site.address.streetAddress}
                <br />
                {site.address.addressLocality}, {site.address.addressRegion}{" "}
                {site.address.postalCode}
              </address>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <DirectionsLink ctaLocation="contact_page_address">
                  Get Directions
                </DirectionsLink>
              </div>
            </SoftPanel>
          </div>
        </Shell>
      </Section>

      <Section className="bg-[var(--surface)]">
        <Shell className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <SoftPanel className="p-5 md:p-6">
              <h2 className="text-2xl font-semibold text-primary">
                Business hours
              </h2>
              <div className="mt-4">
                <HoursList />
              </div>
            </SoftPanel>

            <SoftPanel className="p-5 md:p-6">
              <h2 className="text-2xl font-semibold text-primary">Book online</h2>
              <div className="mt-5">
                <BookingLink ctaLocation="contact_page_booking">
                  Book a Massage
                </BookingLink>
              </div>
            </SoftPanel>
          </div>

          <div className="space-y-5">
            <div className="relative h-96 overflow-hidden rounded-lg border border-primary/10 bg-[var(--surface-alt)]">
              <iframe
                width="100%"
                height="100%"
                src={
                  site.mapEmbedUrlPlaceholder.startsWith("http")
                    ? site.mapEmbedUrlPlaceholder
                    : mapEmbedUrl
                }
                title="Google Map of Eastern Massage Spa in Issaquah"
                className="absolute inset-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </Shell>
      </Section>

      <Footer />
    </main>
  );
}
