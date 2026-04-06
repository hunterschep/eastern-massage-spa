import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

const LAST_UPDATED = "March 22, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `${site.name} privacy policy explaining how website, booking, contact, and intake information is collected, used, and protected.`,
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-muted">Last Updated: {LAST_UPDATED}</p>
        </div>

        <div className="legal-prose">
          <p>
            This Privacy Policy describes how {site.legalName} (&quot;{site.name},&quot;
            &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, discloses, and protects
            information when you visit our website, contact us, book services, or
            receive massage therapy services. By using our website or providing
            information to us, you agree to the practices described in this
            Privacy Policy.
          </p>

          <section>
            <h2>1. Information We Collect</h2>
            <p>We may collect the following categories of information:</p>
            <ul>
              <li>
                Contact information, such as your name, phone number, email
                address, and mailing address.
              </li>
              <li>
                Appointment information, such as requested services, appointment
                date and time, therapist preferences, booking history, and
                cancellation history.
              </li>
              <li>
                Payment and transaction information processed through a booking
                or payment provider. We do not state that we store full payment
                card numbers on this website.
              </li>
              <li>
                Health and intake information you provide in connection with
                massage therapy services, such as injuries, areas of pain,
                allergies, pregnancy status, contraindications, and other
                information relevant to providing safe massage services.
              </li>
              <li>
                Communications, including phone calls, voicemails, text
                messages, emails, and appointment-related correspondence.
              </li>
              <li>
                Limited technical information collected automatically when you
                use the website, such as IP address, browser type, device type,
                referring pages, and basic server or hosting logs used for site
                security and performance.
              </li>
            </ul>
          </section>

          <section>
            <h2>2. Sources of Information</h2>
            <p>We collect information directly from you when you:</p>
            <ul>
              <li>Call or text us.</li>
              <li>Book through our online booking page.</li>
              <li>Submit information during intake or before a session.</li>
              <li>Speak with us in person at our location.</li>
              <li>Use our website and linked booking tools.</li>
            </ul>
            <p>
              We may also receive booking, scheduling, payment-status, and
              messaging information from third-party service providers that help
              us operate the business, such as Fresha, payment processors,
              website hosting providers, or mapping providers.
            </p>
          </section>

          <section>
            <h2>3. How We Use Information</h2>
            <p>We may use information to:</p>
            <ul>
              <li>Schedule, confirm, reschedule, and manage appointments.</li>
              <li>
                Provide massage therapy services in a safe and appropriate
                manner.
              </li>
              <li>
                Communicate with you about appointments, follow-up questions,
                customer service, or policy updates.
              </li>
              <li>
                Send appointment reminders or service-related text messages and
                calls.
              </li>
              <li>Process or document payments and enforce our policies.</li>
              <li>Maintain business and treatment records.</li>
              <li>
                Protect the security and integrity of our website and business.
              </li>
              <li>Comply with legal, regulatory, insurance, and tax duties.</li>
            </ul>
          </section>

          <section>
            <h2>4. Consumer Health Data and Sensitive Information</h2>
            <p>
              Because massage therapy may involve information about your body,
              pain, injuries, pregnancy status, or other wellness conditions, we
              may collect information that could be considered health-related or
              sensitive under applicable law. We collect that information only as
              reasonably necessary to book appointments, determine whether a
              service is appropriate, and provide massage services safely.
            </p>
            <p>
              We do not sell personal information or consumer health data. We do
              not use health-related information for targeted advertising from
              this website.
            </p>
          </section>

          <section>
            <h2>5. Text Messages and Calls</h2>
            <p>
              If you provide a phone number, you consent to receive
              appointment-related calls and texts from us, including booking
              confirmations, reminders, rescheduling notices, and responses to
              your inquiries. Marketing or promotional text messages, if any,
              are handled only in accordance with applicable consent
              requirements, and you may opt out of non-essential texts at any
              time by telling us to stop.
            </p>
          </section>

          <section>
            <h2>6. Disclosure of Information</h2>
            <p>We may disclose information to:</p>
            <ul>
              <li>
                Booking, scheduling, payment, communication, hosting, and map
                providers that help operate the business.
              </li>
              <li>
                Professional advisors, insurers, or service providers where
                reasonably necessary for business operations or claims handling.
              </li>
              <li>
                Government authorities or other parties when required by law,
                court order, subpoena, or to protect rights, safety, or
                property.
              </li>
            </ul>
            <p>
              We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2>7. Retention and Security</h2>
            <p>
              We retain information for as long as reasonably necessary for the
              purposes described in this Privacy Policy, including appointment
              history, legal compliance, dispute resolution, recordkeeping, and
              business operations. We use reasonable administrative, technical,
              and physical safeguards appropriate to the nature of the
              information we maintain. No method of transmission or storage is
              guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2>8. Your Rights</h2>
            <p>
              Subject to applicable law, you may request access to, correction
              of, or deletion of certain personal information we maintain. If
              Washington&apos;s consumer health privacy laws apply to particular
              information, you may also have rights to withdraw consent for
              certain collection or sharing practices, request deletion, or
              appeal a denial of your request.
            </p>
            <p>
              To make a privacy request, call us at {site.phone} or write to us
              at {site.address.streetAddress}, {site.address.addressLocality},{" "}
              {site.address.addressRegion} {site.address.postalCode}. We may ask
              for information reasonably necessary to verify your request before
              acting on it.
            </p>
            <p>
              If we deny a request, you may appeal that decision by contacting us
              again through the same phone or mailing address and clearly stating
              that you are submitting an appeal.
            </p>
          </section>

          <section>
            <h2>9. Third-Party Services and External Sites</h2>
            <p>
              Our website links to third-party services, including Fresha and
              Google Maps. Those third parties operate under their own terms and
              privacy policies, and we are not responsible for their separate
              privacy practices. You should review their policies before
              providing information through their services.
            </p>
          </section>

          <section>
            <h2>10. Children&apos;s Privacy</h2>
            <p>
              This website is not directed to children under 13. We do not
              knowingly collect personal information from children through this
              website without appropriate consent. Massage services for minors,
              if offered, are subject to our separate service and consent
              requirements.
            </p>
          </section>

          <section>
            <h2>11. Changes to This Policy</h2>
            <p>
              We may revise this Privacy Policy from time to time. The updated
              version will be posted on this page with a new &quot;Last Updated&quot;
              date. Your continued use of the website after a revision becomes
              effective means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2>12. Contact Information</h2>
            <p>
              Privacy questions or requests may be directed to:
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
