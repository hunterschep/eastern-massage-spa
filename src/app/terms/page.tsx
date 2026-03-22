import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

const LAST_UPDATED = "March 22, 2026";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `${site.name} terms of service covering website use, bookings, therapeutic massage policies, payments, cancellations, and client conduct.`,
};

export default function TermsOfService() {
  return (
    <main className="legal-page">
      <div className="legal-card">
        <div className="mb-8">
          <Link
            href="/"
            className="text-secondary hover:text-primary transition-colors mb-8 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">
            Terms of Service
          </h1>
          <p className="text-muted">Last Updated: {LAST_UPDATED}</p>
        </div>

        <div className="legal-prose">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the {site.name}
            website and your booking or receipt of services from {site.legalName}
            . By using the website, contacting us, booking an appointment, or
            receiving services, you agree to these Terms.
          </p>

          <section>
            <h2>1. Website Use</h2>
            <p>
              You may use this website only for lawful purposes related to
              learning about our services, contacting us, and booking
              appointments. You may not misuse the website, interfere with its
              operation, attempt unauthorized access, or use the website in a
              manner that could harm us or other users.
            </p>
          </section>

          <section>
            <h2>2. Booking and Appointment Requests</h2>
            <p>
              Appointments may be requested through our booking provider,
              telephone, text message, or other contact methods we make
              available. A booking is not guaranteed until accepted and
              confirmed. We reserve the right to decline, cancel, or reschedule
              appointments for operational, safety, legal, or professional
              reasons.
            </p>
          </section>

          <section>
            <h2>3. Arrival, Late Arrivals, and No-Shows</h2>
            <p>
              Please arrive on time for your appointment. Late arrival may
              reduce your hands-on treatment time if required to avoid delaying
              later appointments. Missed appointments, late cancellations, or
              no-shows may be charged in accordance with the booking terms
              presented at the time of booking or the policies communicated to
              you directly.
            </p>
          </section>

          <section>
            <h2>4. Pricing, Payment, and Promotions</h2>
            <p>
              Service prices and enhancement prices displayed on the website are
              in U.S. dollars and may be updated at any time before booking.
              Unless otherwise stated, payment is due at the time of service.
              Promotional offers, discounts, gift certificates, or package terms
              may be subject to additional conditions.
            </p>
          </section>

          <section>
            <h2>5. Therapeutic Services Only</h2>
            <p>
              All services are strictly therapeutic and professional. Any sexual
              request, sexually suggestive conduct, harassment, threatening
              behavior, intoxication that makes treatment inappropriate, or
              other inappropriate conduct is grounds for immediate termination of
              the session, refusal of future service, and, where appropriate,
              involvement of law enforcement. If a session is terminated for
              client misconduct, payment may still be due.
            </p>
          </section>

          <section>
            <h2>6. Client Health Disclosures and Consent</h2>
            <p>
              You are responsible for providing accurate and complete
              information about injuries, pain, allergies, pregnancy, medical
              conditions, medications, contraindications, and other health
              information that may affect your massage session. By receiving
              services, you represent that the information you provide is
              accurate to the best of your knowledge and that you will notify us
              of any changes before treatment.
            </p>
            <p>
              Massage therapy is not a substitute for medical diagnosis,
              psychiatric care, or treatment by a licensed physician or other
              medical provider. We do not diagnose illness, prescribe treatment,
              or guarantee any particular outcome.
            </p>
          </section>

          <section>
            <h2>7. Right to Refuse or Stop Service</h2>
            <p>
              We may refuse, modify, or discontinue a service at any time if we
              determine, in our professional judgment, that the service is
              contraindicated, unsafe, outside the scope of massage therapy, or
              inappropriate under the circumstances.
            </p>
          </section>

          <section>
            <h2>8. Minors</h2>
            <p>
              Services for minors may be limited or unavailable. If we provide
              services to a minor, a parent or legal guardian may be required to
              provide consent and comply with any attendance or supervision
              requirements we establish.
            </p>
          </section>

          <section>
            <h2>9. Third-Party Providers</h2>
            <p>
              Certain parts of the customer experience may be provided through
              third parties, including booking, payment, communication, or map
              services. Your use of those services may also be governed by the
              third party&apos;s own terms and privacy policy.
            </p>
          </section>

          <section>
            <h2>10. Disclaimer of Warranties</h2>
            <p>
              The website and services are provided on an &quot;as is&quot; and &quot;as
              available&quot; basis to the fullest extent permitted by law. We do not
              warrant that the website will be uninterrupted or error-free, or
              that services will achieve any specific therapeutic or medical
              result.
            </p>
          </section>

          <section>
            <h2>11. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {site.legalName} and its
              owners, therapists, employees, and agents will not be liable for
              indirect, incidental, special, consequential, or punitive damages
              arising out of or related to the website or services. Our total
              liability for any claim arising out of the services or website
              will not exceed the amount you paid us for the specific service
              giving rise to the claim, except where liability cannot be limited
              under applicable law.
            </p>
          </section>

          <section>
            <h2>12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless {site.legalName} and its
              owners, therapists, employees, and agents from claims, losses,
              liabilities, and expenses arising out of your misuse of the
              website, your violation of these Terms, or inaccurate information
              you provide to us.
            </p>
          </section>

          <section>
            <h2>13. Changes to These Terms</h2>
            <p>
              We may update these Terms at any time by posting the revised
              version on this page. The updated Terms become effective when
              posted unless a later effective date is stated.
            </p>
          </section>

          <section>
            <h2>14. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Washington,
              without regard to conflict-of-law rules, except to the extent
              superseded by applicable federal law.
            </p>
          </section>

          <section>
            <h2>15. Contact Information</h2>
            <p>
              Questions about these Terms may be directed to:
            </p>
            <p>
              {site.legalName}
              <br />
              {site.address.streetAddress}
              <br />
              {site.address.addressLocality}, {site.address.addressRegion}{" "}
              {site.address.postalCode}
              <br />
              {site.phone}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
