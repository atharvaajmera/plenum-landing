/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The site is served as static files from GitHub Pages.
  output: "export",
  images: { unoptimized: true },
  typescript: {
    // Typecheck is run via `npm run typecheck` (tsc --noEmit)
    ignoreBuildErrors: true,
  },
  eslint: {
    // Lint is run via `npm run lint`
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
