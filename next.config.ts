import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * A nonce-based policy would be stricter, but Next only supports nonces via a
 * proxy that forces every page to render dynamically — too steep a price for a
 * site that is otherwise fully static. So inline script/style stay allowed;
 * what this policy does buy is pinning every *origin*, which blocks the common
 * case of injected markup pulling a script off an attacker's host.
 *
 * `unsafe-eval` is dev-only: React uses eval there to rebuild server error
 * stacks in the browser. Neither React nor Next need it in production.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  // Would try to force http://localhost onto https during local dev.
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Redundant next to frame-ancestors, but still honoured by older browsers.
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // Only meaningful over HTTPS; browsers ignore it on plain-http localhost.
  ...(isDev
    ? []
    : [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]),
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
