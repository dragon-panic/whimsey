/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/whimsey',
  assetPrefix: '/whimsey/',
}

module.exports = nextConfig 