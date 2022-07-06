/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.github.com', 'github.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
