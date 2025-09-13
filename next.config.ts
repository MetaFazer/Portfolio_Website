// next.config.ts

import type { NextConfig } from 'next';

const config: NextConfig = {
  // If you have any OTHER configurations for your project, they would go here.
  // For now, we only need the 'images' configuration.
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