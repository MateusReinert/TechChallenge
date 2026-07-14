import type { NextConfig } from "next";

const transactionsZoneUrl =
  process.env.TRANSACTIONS_ZONE_URL ?? "http://localhost:3002";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb",
    },
  },
  async rewrites() {
    return [
      {
        source: "/transactions",
        destination: `${transactionsZoneUrl}/transactions`,
      },
      {
        source: "/transactions/:path*",
        destination: `${transactionsZoneUrl}/transactions/:path*`,
      },
    ];
  },
};

export default nextConfig;
