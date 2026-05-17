import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'vibeas.com',
      },
      {
        protocol: 'https',
        hostname: 'biagiotti.qodeinteractive.com',
      },
    ],
  },
};

export default nextConfig;
