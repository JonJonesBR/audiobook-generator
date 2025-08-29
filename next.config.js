/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'build',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;