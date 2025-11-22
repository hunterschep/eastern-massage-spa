import { Metadata } from "next";

export default function Robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://easternmassagespa.com/sitemap.xml',
  };
}

