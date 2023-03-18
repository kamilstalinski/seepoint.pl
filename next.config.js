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
      {
        source: "/en/products/carpets-and-floorpromotors",
        destination: "/en/produkty/dywany-i-floopromotory",
        locale: false,
      },
      {
        source: "/en/products/palet-covers",
        destination: "/en/produkty/paletcovery",
        locale: false,
      },
      {
        source: "/en/products/x-display-advertising-stand",
        destination: "/en/produkty/x-display",
        locale: false,
      },
      {
        source: "/en/products/x-display-advertising-stand",
        destination: "/en/produkty/x-display",
        locale: false,
      },
      {
        source: "/en/products/magnetic-foil-popular-magnets",
        destination: "/en/produkty/folia-magnetyczna",
        locale: false,
      },
      {
        source: "/en/products/posters",
        destination: "/en/produkty/plakaty",
        locale: false,
      },
      {
        source: "/en/products/stickers",
        destination: "/en/produkty/naklejki",
        locale: false,
      },
      {
        source: "/en/products/alusandwich-prints-on-slabs-with-aluminum-lining",
        destination: "/en/produkty/alusandwich",
        locale: false,
      },
      {
        source: "/en/products/forex-print-boards-of-foamed-pvc",
        destination: "/en/produkty/forex-druk",
        locale: false,
      },
      {
        source: "/en/products/backlit-film",
        destination: "/en/produkty/backlitfilm",
        locale: false,
      },
      {
        source: "/en/technologies",
        destination: "/en/technologie",
        locale: false,
      },
      {
        source: "/en/technologies/sublimation-print",
        destination: "/en/technologie/druk-sublimacyjny",
        locale: false,
      },
      {
        source: "/en/technologies/eco-print-solvent",
        destination: "/en/technologie/druk-eko-solwentowy",
        locale: false,
      },
      {
        source: "/en/technologies/uv-print",
        destination: "/en/technologie/druk-uv",
        locale: false,
      },
      {
        source: "/en/technologies/solvent-xxl",
        destination: "/en/technologie/druk-solvent-xxl",
        locale: false,
      },
      {
        source: "/en/technologies/cutting-plotters",
        destination: "/en/technologie/plotery-tnace",
        locale: false,
      },
      {
        source: "/en/privacy-policy",
        destination: "/en/polityka-prywatnosci",
        locale: false,
      },
      {
        source: "/en/information-obligation",
        destination: "/en/obowiazek-informacyjny",
        locale: false,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/o-nas",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/about-us",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/",
        permanent: false,
      },
      {
        source: "/en/blog/:path*",
        destination: "/",
        permanent: false,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: false,
      },
      {
        source: "/en/blog",
        destination: "/",
        permanent: false,
      },
      {
        source: "/parametry-i-typy-plikow-do-druku-cyfrowego",
        destination: "/pomoc",
        permanent: true,
      },
      {
        source: "/en/parametry-i-typy-plikow-do-druku-cyfrowego",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/druk-uv",
        destination: "/technologie/druk-uv",
        permanent: true,
      },
      {
        source: "/en/uv-print",
        destination: "/en/technologies/uv-print",
        permanent: true,
      },
      {
        source: "/druk-solwentowy-xxl",
        destination: "/technologie/druk-solwentowy-xxl",
        permanent: true,
      },
      {
        source: "/en/xxl-solvent-print",
        destination: "/en/technologies/xxl-solvent-print",
        permanent: true,
      },
      {
        source: "/plotery-tnace",
        destination: "/technologie/plotery-tnace",
        permanent: true,
      },
      {
        source: "/en/cutting-plotters",
        destination: "/en/technologies/cutting-plotters",
        permanent: true,
      },
      {
        source: "/informacja-o-przetwarzaniu-danych-osobowych",
        destination: "/obowiazek-informacyjny",
        permanent: true,
      },
      {
        source: "/en/information-on-the-processing-of-personal-data",
        destination: "/en/information-obligation",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
