/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // TODO: when the future Client Portal / Admin Dashboard modules are added,
  // revisit rewrites/redirects here to route /portal and /admin segments.
}

module.exports = nextConfig
