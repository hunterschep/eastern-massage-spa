/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // This should match your GitHub repository name exactly
  // e.g. if your repo is https://github.com/user/eastern-massage-spa, this should be '/eastern-massage-spa'
  basePath: '/eastern-massage-spa',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
