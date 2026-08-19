import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  // no x-frame-options: the site is intentionally embeddable
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  transpilePackages: ["three"], // three ships untranspiled esm that drei pulls in
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90], // 90 for the about portrait; next 16 gates non-default quality behind this allowlist
    unoptimized: true,
  },
};

export default nextConfig;
