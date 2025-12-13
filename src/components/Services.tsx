import Image from "next/image";
import { site } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background texture/image */}
      <div className="absolute top-0 left-0 w-full h-64 bg-surface-alt/50 -skew-y-3 transform origin-top-left z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">Our Treatment Menu</h2>
            <p className="text-muted max-w-2xl mx-auto text-lg font-light">
                Discover a sanctuary of calm with our curated selection of therapeutic massages tailored to Issaquah clients seeking relaxation and relief.
            </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-start">
           <div className="space-y-8">
              {site.services.map((service, idx) => (
                <div key={idx} className="bg-surface p-8 md:p-10 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h3 className="text-2xl font-serif font-semibold text-primary">{service.category}</h3>
                      {service.subtitle && <span className="text-xs font-bold text-secondary uppercase tracking-wider border border-secondary px-2 py-1 rounded-full">{service.subtitle}</span>}
                  </div>
                  <p className="text-muted mb-8 font-light italic">{service.description}</p>
                  <ul className="space-y-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex justify-between items-end border-b border-stone-100 pb-2 border-dashed">
                        <span className="text-foreground font-medium">{item.name}</span>
                        <span className="text-lg font-bold text-secondary">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
           </div>

           <div className="lg:sticky lg:top-32">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl mb-12">
                    <Image 
                        src="/photos/stock1.jpg" 
                        alt="Massage Oils and Stones" 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-primary/10"></div>
                </div>

                <div className="bg-primary text-primary-foreground p-10 rounded-3xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                    <h3 className="text-2xl font-serif font-semibold mb-8 text-center relative z-10">Enhance Your Session</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                        {site.addons.map((addon, idx) => (
                            <div key={idx} className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-white/10 hover:bg-white/20 transition-colors">
                                <span className="font-medium">{addon.name}</span>
                                <span className="text-secondary font-bold">{addon.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
           </div>
        </div>
      </div>
    </section>
  );
}
