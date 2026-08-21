/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — works on sriakshara.com via GitHub Pages, Vercel, or any static host
  output: 'export',
  trailingSlash: true,

  // Served at the domain root (sriakshara.com). Learning Buddy lives on the subdomain.
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
    NEXT_PUBLIC_SITE_URL: 'https://sriakshara.com',
    NEXT_PUBLIC_LEARNING_BUDDY_URL: 'https://learningbuddy.sriakshara.com',
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['gsap', 'framer-motion'],
  },
  swcMinify: true,
}

module.exports = nextConfig
