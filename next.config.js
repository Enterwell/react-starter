const path = require('path');
const withReactSvg = require('next-react-svg');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  include: path.resolve(__dirname, './public/assets'),
  productionBrowserSourceMaps: true,
  images: {
    domains: ['assets.pokemon.com'],
    unoptimized: true // NOTE: Remove this line when you don't export app as static
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

const plugins = withBundleAnalyzer(withReactSvg(nextConfig));

// NOTE: Workaround for https://github.com/Enterwell/react-starter/issues/340
//       Should be removed when `next-react-svg` implements settings correctly.
delete plugins.include;
module.exports = plugins;
