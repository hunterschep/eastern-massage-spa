/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: If deploying to a custom domain like easternmassagespa.com, you don't need basePath.
  // If deploying to username.github.io/repo-name, you would need:
  // basePath: '/repo-name',
  
  async headers() {
    // Headers are not supported in 'output: export' (static site), 
    // so we return empty array or remove this block if purely static.
    // For GitHub Pages (static hosting), these headers won't apply anyway.
    return [];
  }
};

module.exports = nextConfig;
