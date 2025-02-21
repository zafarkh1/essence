const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold",
        protocol: "https",
      },
    ],
    unoptimized: true,
  },
};

module.exports = withNextIntl(nextConfig);
