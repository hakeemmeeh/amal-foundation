import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/strategy", destination: "/", permanent: true },
      { source: "/strategy/:path*", destination: "/", permanent: true },
      { source: "/programs", destination: "/initiative", permanent: true },
      { source: "/programs/:path*", destination: "/initiative/:path*", permanent: true },
      { source: "/initiative/education-healthcare", destination: "/initiative", permanent: false },
      { source: "/initiative/humanitarian-relief", destination: "/initiative", permanent: false },
      { source: "/initiative/financial-inclusion", destination: "/initiative", permanent: false },
      { source: "/initiative/entrepreneurship", destination: "/initiative", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
