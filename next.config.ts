import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
  experimental: {
    reactCompiler: false, // tambahkan ini untuk menonaktifkan compiler experimental
  },

};

export default nextConfig;
