import { defineConfig } from 'cypress';

export default defineConfig({
  screenshotsFolder: '.cypress-pending',
  trashAssetsBeforeRuns: false,
  experimentalStudio: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'tests/integration/**/*.cy.{js,jsx,ts,tsx}'
  },
  component: {
    // setupNodeEvents(on, config) {},
    // specPattern: 'tests/component/*.@(spec|test).@(js|jsx|ts|tsx)',
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  }
});
