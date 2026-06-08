import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Canonical host: https://easternmassagespa.me
  //
  // This app is statically exported, so Next.js runtime redirects are not
  // available after deployment. Configure these at the hosting/DNS layer:
  // [HOSTING_REDIRECT_REQUIRED: Configure platform-level HTTP-to-HTTPS 301
  // redirect preserving path/query.]
  // [WWW_SSL_REQUIRED: Add valid SSL certificate for www.easternmassagespa.me
  // and configure www-to-non-www 301 redirect preserving path/query.]
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
};

export default nextConfig;
