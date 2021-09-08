module.exports = {
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    domains: [ 'images.microcms-assets.io'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}