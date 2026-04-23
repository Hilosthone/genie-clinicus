/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    // This allows you to pull in images from external sources if needed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
