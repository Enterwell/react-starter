const path = require('path');

const withReactSvg = require('next-react-svg')({
  include: path.resolve(__dirname, './public/icons')
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
      'app',
      'app-models',
      'component-models', 'components', 'config',
      'helpers', 'hooks',
      'mappers', 'models',
      'playwright',
      'repositories',
      'services',
      'tests',
      'view-models', 'views'
    ]
  }
};

module.exports = withBundleAnalyzer(withReactSvg(nextConfig));
