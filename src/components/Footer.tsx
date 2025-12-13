import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-12 text-sm border-t border-primary/20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <span className="text-lg font-serif font-bold text-secondary block mb-2">{site.name}</span>
                    <p className="text-primary-foreground/70">{site.address.streetAddress}, {site.address.addressLocality}, {site.address.addressRegion}</p>
                    <p className="text-primary-foreground/60 mt-1">{site.phone} · Open daily 10:00 AM – 9:30 PM</p>
                    <p className="text-primary-foreground/60 mt-1">&copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
                </div>
                <div className="flex gap-8">
                    <Link href="/privacy" className="text-primary-foreground/70 hover:text-secondary transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="text-primary-foreground/70 hover:text-secondary transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    )
}
