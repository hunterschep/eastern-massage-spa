import Image from "next/image";

export default function Location() {
  return (
    <section id="location" className="py-24 bg-surface-alt">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
            {/* Contact & Map Column */}
          <div className="space-y-12 order-2 lg:order-1">
            <div>
                <h2 className="text-4xl font-serif font-bold mb-6 text-primary">Visit Our Sanctuary</h2>
                <p className="text-muted text-lg leading-relaxed font-light">
                    Conveniently located in the heart of Issaquah. Escape the busy world and step into tranquility.
                </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-surface p-6 rounded-xl border border-stone-100 shadow-sm">
                    <h3 className="font-serif font-semibold text-primary mb-3 text-lg flex items-center gap-2">
                        📍 Address
                    </h3>
                    <p className="text-muted mb-4 leading-relaxed">
                    160 NW Gilman Blvd Ste 216<br />
                    Issaquah, WA 98027
                    </p>
                    <a 
                        href="https://www.google.com/maps/dir//160+NW+Gilman+Blvd+Ste+216,+Issaquah,+WA+98027" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-secondary underline underline-offset-4 hover:text-primary transition-colors"
                    >
                        Get Directions
                    </a>
                </div>
                
                <div className="bg-surface p-6 rounded-xl border border-stone-100 shadow-sm">
                    <h3 className="font-serif font-semibold text-primary mb-3 text-lg flex items-center gap-2">
                        📞 Phone
                    </h3>
                    <p className="text-muted mb-4">
                        Questions or ready to book? Give us a call.
                    </p>
                    <a href="tel:+12067506868" className="text-xl font-bold text-secondary hover:text-primary transition-colors">
                    (206) 750-6868
                    </a>
                </div>
            </div>

            {/* Map Embed */}
            <div className="w-full h-80 bg-stone-200 rounded-2xl overflow-hidden border border-stone-200 shadow-md relative">
                <iframe 
                    width="100%" 
                    height="100%" 
                    id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=160+NW+Gilman+Blvd+Ste+216,+Issaquah,+WA+98027&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Google Map of Orchid Bloom Massage Location"
                    className="absolute inset-0"
                >
                </iframe>
            </div>
          </div>

          {/* Hours & Image Column */}
          <div className="order-1 lg:order-2 space-y-8">
             <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg">
                <Image 
                    src="/eastern-massage-spa/photos/stock3.jpg"
                    alt="Spa Interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                />
             </div>

             <div className="bg-primary text-primary-foreground p-8 md:p-10 rounded-2xl shadow-lg border border-primary/50">
                <h3 className="text-2xl font-serif font-bold mb-8 text-center">Business Hours</h3>
                <ul className="space-y-4">
                    {[
                        { day: "Mon - Fri", hours: "10:00 AM – 9:30 PM" },
                        { day: "Saturday", hours: "10:00 AM – 9:30 PM" },
                        { day: "Sunday", hours: "10:00 AM – 9:30 PM" },
                    ].map((item, idx) => (
                        <li key={idx} className="flex justify-between items-center text-primary-foreground/80 border-b border-primary-foreground/20 pb-4 last:border-0 last:pb-0">
                            <span className="font-medium">{item.day}</span>
                            <span className="text-right font-bold text-secondary">{item.hours}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 text-center text-sm text-primary-foreground/60 italic">
                    *Hours might differ on holidays
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
