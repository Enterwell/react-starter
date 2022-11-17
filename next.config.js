const path = require('path');

const withReactSvg = require('next-react-svg');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const nextConfig = {
  reactStrictMode: true,
  include: path.resolve(__dirname, './public/assets'),
  productionBrowserSourceMaps: true,
  images: {
    domains: ['assets.pokemon.com']
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
