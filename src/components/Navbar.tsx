import Link from 'next/link';
import Image from 'next/image';
import BookNowButton from './BookNowButton';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md shadow-sm border-b border-stone-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
             <Image 
                src="/eastern-massage-spa/logo/mainlogo.png" 
                alt="Eastern Massage Spa Logo" 
                fill
                className="object-contain"
                unoptimized
             />
          </div>
          <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-primary hidden sm:block">
            Eastern Massage Spa
          </span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted">
          <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="#location" className="hover:text-primary transition-colors">Location & Hours</Link>
        </div>
        <BookNowButton className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors shadow-md">
          Book Now
        </BookNowButton>
      </div>
    </nav>
  );
}
