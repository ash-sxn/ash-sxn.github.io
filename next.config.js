/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // Enable static exports
  trailingSlash: true, // Add trailing slashes for cleaner URLs
  images: {
    unoptimized: true, // Required for static export
  },
  // GitHub Pages uses URLs with repo name prefixed, so we need to adjust the basePath in production
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
}

module.exports = nextConfig 