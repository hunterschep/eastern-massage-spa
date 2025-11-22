import Link from 'next/link';
import BookNowButton from './BookNowButton';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md shadow-sm border-b border-stone-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-serif font-bold tracking-tight text-primary">
          Eastern Massage Spa
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted">
          <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="#location" className="hover:text-primary transition-colors">Location & Hours</Link>
        </div>
        <BookNowButton className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-md">
          Book Now
        </BookNowButton>
      </div>
    </nav>
  );
}
