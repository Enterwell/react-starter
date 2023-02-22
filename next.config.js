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
    ]
  },
  eslint: {
    dirs: [
      '.storybook',
      'app-models',
      'component-models', 'components', 'config', 'cypress',
      'helpers', 'hooks',
      'mappers', 'models',
      'pages',
      'repositories',
      'services',
      'tests',
      'view-models', 'views'
    ]
  }
};

module.exports = withBundleAnalyzer(withReactSvg(nextConfig));
