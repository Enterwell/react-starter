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

module.exports = withPlugins([
  withEnv,
  withSourceMaps,
  withBundleAnalyzer,
  withReactSvg
], {
  env: {
    LOCAL_SERVER: false,
    ENV: process.env.NODE_ENV
  },
  include: path.resolve(__dirname, './public/assets')
});
