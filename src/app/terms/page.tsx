import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
        <div className="mb-8">
            <Link href="/" className="text-secondary hover:text-primary transition-colors mb-8 inline-block">
                ← Back to Home
            </Link>
            <h1 className="text-4xl font-serif font-bold text-primary mb-6">Terms of Service</h1>
            <p className="text-muted">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

      <div className="prose prose-stone max-w-none">
        <p>
          Welcome to Eastern Massage Spa. By accessing our website or using our services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary mt-8 mb-4">1. Appointments and Cancellations</h2>
        <p>
          Appointments can be made by calling us directly. We appreciate prompt arrival for your scheduled appointment. If you need to cancel or reschedule, please contact us at least 24 hours in advance. Late cancellations or no-shows may be subject to a fee.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary mt-8 mb-4">2. Health Conditions</h2>
        <p>
          It is your responsibility to inform us of any medical conditions, allergies, or injuries prior to your session. Massage therapy is not a substitute for medical examination or diagnosis.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary mt-8 mb-4">3. Professional Conduct</h2>
        <p>
          Our services are strictly therapeutic. Any inappropriate behavior or sexual advances will result in the immediate termination of the session, full payment will be due, and law enforcement may be notified.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary mt-8 mb-4">4. Pricing and Payment</h2>
        <p>
          Prices for services are listed on our website and are subject to change without notice. Payment is due at the time of service.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary mt-8 mb-4">5. Limitation of Liability</h2>
        <p>
          Eastern Massage Spa and its therapists shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services or website.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary mt-8 mb-4">6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Your continued use of our services following any changes indicates your acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary mt-8 mb-4">7. Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with the laws of the State of Washington.
        </p>
      </div>
    </div>
  );
}

