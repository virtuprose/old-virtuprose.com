/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Next.js 16 to use Webpack instead of Turbopack
  experimental: {
    turbo: false
  },

  images: {
    unoptimized: true,
  },

  // Force a unique build ID for every deployment (cache busting)
  generateBuildId: async () => {
    return `${Date.now()}`;
  },

  // Cache-control headers
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, must-revalidate" },
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
        ],
      },
    ];
  },

  // Webpack: hashed filenames to prevent stale caching
  webpack(config) {
    config.output.filename = "static/chunks/[name].[contenthash].js";
    config.output.chunkFilename = "static/chunks/[name].[contenthash].js";
    return config;
  },
};

module.exports = nextConfig;