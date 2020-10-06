const path = require('path');
const { withPlugins } = require('next-compose-plugins');

const withEnv = require('@moxy/next-env')({
  removePrefixes: true
});
const withReactSvg = require('next-react-svg');
const withSourceMaps = require('@zeit/next-source-maps');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const withProdOnlyPlugin = (plugin) => (process.env.NODE_ENV === 'production'
  ? (w) => w
  : plugin);

module.exports = withPlugins([
  withEnv,
  withProdOnlyPlugin(withSourceMaps),
  withProdOnlyPlugin(withBundleAnalyzer),
  withReactSvg
], {
  env: {
    LOCAL_SERVER: false,
    ENV: process.env.NODE_ENV
  },
  include: path.resolve(__dirname, './public/assets'),
  assetPrefix: process.env.ASSETS_PREFIX ? `/${process.env.ASSETS_PREFIX}` : '',
  publicRuntimeConfig: {
    basePath: process.env.ASSETS_PREFIX ? `/${process.env.ASSETS_PREFIX}` : ''
  }
});
