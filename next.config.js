/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: ["res.cloudinary.com"],
  },
  async rewrites() {
    return [
      {
        source: "/en/products",
        destination: "/en/produkty",
        locale: false,
      },
      {
        source: "/en/technology",
        destination: "/en/technologie",
        locale: false,
      },
      {
        source: "/en/help",
        destination: "/en/pomoc",
        locale: false,
      },
      {
        source: "/en/contact",
        destination: "/en/kontakt",
        locale: false,
      },
      {
        source: "/en/products/flags",
        destination: "/en/produkty/flagi",
        locale: false,
      },
      {
        source: "/en/products/frontlit-banners-laminated-and-coated-pvc-banner",
        destination: "/en/produkty/banery-zewnetrzne-frontlit",
        locale: false,
      },
      {
        source: "/en/products/roll-up-exhibition-system",
        destination: "/en/produkty/roll-up",
        locale: false,
      },
      {
        source: "/en/products/blockout",
        destination: "/en/produkty/blockout",
        locale: false,
      },
      {
        source: "/en/products/mesh",
        destination: "/en/produkty/mesh",
        locale: false,
      },
      {
        source:
          "/en/products/alu-system-printouts-for-mounting-on-aluminum-frames",
        destination: "/en/produkty/alu-system",
        locale: false,
      },
      {
        source: "/en/products/petpillows",
        destination: "/en/produkty/poduszkozwierzaki",
        locale: false,
      },
      {
        source: "/en/products/images-paintings-prints",
        destination: "/en/produkty/obrazy",
        locale: false,
      },
      {
        source: "/en/products/beach-flags",
        destination: "/en/produkty/beachflagi",
        locale: false,
      },
      {
        source: "/en/products/advertising-walls-exhibition-items",
        destination: "/en/produkty/scianki-reklamowe",
        locale: false,
      },
    ];
  },
};

module.exports = nextConfig;
