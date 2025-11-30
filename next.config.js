/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Required for GitHub Pages when repo name is not username.github.io
  basePath: '/SriAksharaSchool',
  trailingSlash: true,
  
  // Set environment variable for basePath (used in components)
  env: {
    NEXT_PUBLIC_BASE_PATH: '/SriAksharaSchool',
  },
  
  images: {
    // Disable image optimization for static export
    unoptimized: true,
    domains: ['localhost', 'your-wordpress-site.com'],
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
  // Add these to help with compilation
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // ignoreBuildErrors: true,
  },
  // Reduce initial compilation time
  swcMinify: true,
}

module.exports = nextConfig

