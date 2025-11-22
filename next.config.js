/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: If deploying to a custom domain like easternmassagespa.com, you don't need basePath.
  // If deploying to username.github.io/repo-name, you would need:
  // basePath: '/repo-name',
  
  // Headers are not supported in 'output: export'
};

module.exports = nextConfig;
