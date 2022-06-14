const { defineConfig } = require('cypress');
const PluginsFile = require('./cypress/plugins');

module.exports = defineConfig({
  screenshotsFolder: '.cypress-pending',
  trashAssetsBeforeRuns: false,
  e2e: {
    setupNodeEvents(on, config) {
      return PluginsFile(on, config);
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'tests/integration/**/*.cy.{js,jsx,ts,tsx}'
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    },
    specPattern: 'tests/component/*.cy.{js,jsx,ts,tsx}'
  }
});
