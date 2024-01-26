/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
