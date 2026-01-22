/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export - generates static HTML files
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
