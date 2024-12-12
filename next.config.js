const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@react-email/render'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'text-image.tool.vin',
      },
    ],
  },
}

module.exports = withNextIntl(nextConfig)
