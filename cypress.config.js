const { defineConfig } = require('cypress')

module.exports = defineConfig({
  screenshotsFolder: '.cypress-pending',
  trashAssetsBeforeRuns: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'tests/integration/**/*.cy.{js,jsx,ts,tsx}'
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    specPattern: 'tests/component/*.cy.{js,jsx,ts,tsx}',
  },
})
