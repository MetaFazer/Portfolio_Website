// next.config.ts
import type { NextConfig } from 'next';

const config: NextConfig = {
  eslint: {
    // ✅ Linting errors (any, unused vars, etc.) won’t block builds
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default config;
