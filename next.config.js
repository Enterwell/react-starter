const path = require('path');
const withReactSvg = require('next-react-svg')({
  include: path.resolve(__dirname, './public/assets')
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        hostname: 'assets.pokemon.com',
        protocol: 'https'
      }
    ],
    unoptimized: true // NOTE: Remove this line when you don't export app as static
  },
  eslint: {
    dirs: [
      'app-models',
      'component-models', 'components', 'config',
      'hooks',
      'mappers', 'models',
      'pages',
      'repositories',
      'services',
      'view-models', 'views'
    ]
  }
};

module.exports = withBundleAnalyzer(withReactSvg(nextConfig));
