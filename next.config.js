const path = require('path');
const { withPlugins } = require('next-compose-plugins');
const withEnv = require('@moxy/next-env');
const withReactSvg = require('next-react-svg');
const withSourceMaps = require('@zeit/next-source-maps');
const withBundleAnalyzer = require('@next/bundle-analyzer');

module.exports = withPlugins([
  [
    withEnv({
      removePrefixes: true
    }),
    {
      env: {
        LOCAL_SERVER: false,
        ENV: process.env.NODE_ENV
      }
    }
  ],
  withSourceMaps,
  withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
  }),
  [
    withReactSvg, {
      include: path.resolve(__dirname, './public/assets/svgs')
    }
  ]
]);
