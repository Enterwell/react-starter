// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const PORT = process.env.TEST_PORT || 3000;
const baseURL = `http://127.0.0.1:${PORT}`;

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  retries: 2,
  testDir: './tests/integration',
  timeout: 30 * 1000,
  fullyParallel: true,
  expect: {
    timeout: 5 * 1000
  },
  use: {
    baseURL,
    headless: true,
    actionTimeout: 5 * 1000
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ],
  webServer: {
    command: `yarn dev --port ${PORT}`,
    url: baseURL,
    timeout: 120 * 1000
  }
});
