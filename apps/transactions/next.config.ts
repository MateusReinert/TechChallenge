import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/transactions",
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb",
    },
  },
};

export default nextConfig;