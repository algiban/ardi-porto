import type { NextConfig } from 'next'
import withBundleAnalyzer from '@next/bundle-analyzer'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unit-testing.newtcugapps.com',
        pathname: '/uploads/products/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/uploads/products/**',
      },
    ],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  experimental: {
    reactCompiler: false, // biarkan false (masih experimental)
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}


export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig)