/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
  output: 'export'
}

module.exports = nextConfig
