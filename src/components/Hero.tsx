import Image from "next/image";
import BookNowButton from './BookNowButton';

export default function Hero() {
  return (
    <section className="relative bg-surface-alt overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="relative z-10 order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest text-secondary uppercase border border-secondary/30 rounded-full bg-white/50 backdrop-blur-sm">
              Issaquah's Hidden Gem
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight font-serif">
              Restore Your <br/>
              <span className="text-secondary italic">Inner Balance</span>
            </h1>
            <p className="text-lg md:text-xl text-muted mb-10 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              Experience authentic Eastern massage techniques blended with modern therapy in a serene, tranquil environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <BookNowButton className="bg-accent text-accent-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                Book Appointment
              </BookNowButton>
              <a 
                href="#services"
                className="bg-white text-primary border border-primary/20 px-8 py-4 rounded-full text-lg font-medium hover:bg-surface-alt transition-colors shadow-sm hover:shadow-md flex items-center justify-center"
              >
                View Services
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-sm font-medium text-muted">
                <div className="flex -space-x-2 overflow-hidden">
                    {/* Fake avatars or just icons could go here, let's stick to the rating */}
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">G</div>
                </div>
                <div>
                    <div className="flex text-secondary text-lg">★★★★★</div>
                    <p>4.4 Stars on Google Reviews</p>
                </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/eastern-massage-spa/photos/stock1.jpg"
              alt="Relaxing Massage Atmosphere at Eastern Massage Spa"
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
