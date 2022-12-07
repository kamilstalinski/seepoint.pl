/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    minimumCacheTTL: 31536000,
  },
  i18n: {
    locales: ["pl-PL", "en"],
    defaultLocale: "pl-PL",
  },
};

module.exports = nextConfig;
