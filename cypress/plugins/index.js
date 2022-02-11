/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const injectedDevServer = require('@cypress/react/plugins/next');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  injectedDevServer(on, config);

  // Increasing the browser window size when running headlessly
  // This will produce higher resolution images
  // See more: https://docs.cypress.io/api/plugins/browser-launch-api
  on('before:browser:launch', (browser = {}, launchOptions) => {
    // The browser width and height we want
    const width = 1920;
    const height = 1080;

    if (browser.name === 'chrome' && browser.isHeadless) {
      launchOptions.args.push(`--window-size=${width},${height}`);

      // Force screen to be non-retina and just use our given resolution
      launchOptions.args.push('--force-device-scale-factor=1');
    }

    if (browser.name === 'electron' && browser.isHeadless) {
      // Might not work on CI for some reason
      launchOptions.preferences.width = width;
      launchOptions.preferences.height = height;
    }

    if (browser.name === 'firefox' && browser.isHeadless) {
      launchOptions.args.push(`--width=${width}`);
      launchOptions.args.push(`--height=${height}`);
    }

    return launchOptions;
  });

  return config;
};
