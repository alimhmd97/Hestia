import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your config options here
};

// Need to use module.exports for Next.js config
module.exports = withNextIntl(nextConfig);
