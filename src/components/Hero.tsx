import Image from "next/image";
import BookNowButton from "./BookNowButton";
import { site } from "@/data/site";

export default function Hero() {
  const actionClass =
    "inline-flex min-h-14 min-w-[220px] items-center justify-center rounded-full px-8 py-4 text-base md:text-lg font-semibold transition-all duration-200";

  return (
    <section className="relative bg-surface-alt overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="relative z-10 order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest text-secondary uppercase border border-secondary/30 rounded-full bg-white/50 backdrop-blur-sm">
              Licensed Massage Therapists • Issaquah, WA
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight font-serif">
              Massage Therapy in <br />
              <span className="text-secondary italic">Issaquah, Washington</span>
            </h1>
            <p className="text-lg md:text-xl text-muted mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Deep Tissue Therapy, Relaxation Massage, and targeted enhancements in a clean, professional setting near downtown Issaquah.
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-3">
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center lg:justify-start">
                <BookNowButton
                  className={`${actionClass} bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 hover:shadow-xl hover:-translate-y-0.5`}
                >
                  {site.bookingCtaLabel}
                </BookNowButton>

                <a
                  href={site.phoneHref}
                  className={`${actionClass} border border-primary/20 bg-white text-primary shadow-sm hover:-translate-y-0.5 hover:bg-surface-alt hover:shadow-md`}
                >
                  <span className="text-secondary">Call</span>
                  <span className="ml-2">{site.phone}</span>
                </a>

                <a
                  href="#services"
                  className={`${actionClass} border border-primary/10 bg-surface text-primary shadow-sm hover:-translate-y-0.5 hover:bg-white hover:shadow-md`}
                >
                  View Services
                </a>
              </div>

              <p className="max-w-md text-center text-sm text-muted lg:text-left">
                {site.bookingNote}
              </p>
            </div>
            
            <div className="mt-10 flex flex-col gap-3 text-sm font-medium text-muted items-center lg:items-start">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/20 text-secondary font-bold">
                    WA
                  </span>
                  <div className="text-left">
                    <p className="text-base text-primary font-semibold">{site.phone}</p>
                    <p>{site.hoursText}</p>
                  </div>
                </div>
                <p className="text-center lg:text-left">Call ahead or book online to reserve your preferred time.</p>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/photos/stock2.jpg"
              alt="Massage therapy room at Eastern Massage Spa in Issaquah"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
          </div>
          
        </div>
      </div>
      
      {/* Decorative floral element or shape could go here */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
