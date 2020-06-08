const path = require('path');
const { withPlugins } = require('next-compose-plugins');
const withReactSvg = require('next-react-svg');
const nextSourceMaps = require('@zeit/next-source-maps');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
}); 

module.exports = withPlugins([
  nextSourceMaps,
  withBundleAnalyzer,
  [withReactSvg, {
    include: path.resolve(__dirname, './public/assets/svgs')
  }]
]);
