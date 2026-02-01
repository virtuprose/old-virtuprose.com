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

  // Cache-control headers and security headers
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
        // API responses should never be cached at the edge or browser.
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store",
          },
        ],
      },
      {
        // Versioned public assets: safe to cache forever.
        source: "/assets/branding/light-logo.v1.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/orvia-logo-black.v1.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/favicon.v1.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/orvia/chat-01.v1.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/orvia/chat-02.v1.svg",
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
          // Security headers
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()"
          },
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
