import { resolve } from 'path';

import { defineConfig, devices } from '@playwright/experimental-ct-react';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  retries: 2,
  testDir: './tests/component',
  timeout: 30 * 1000,
  fullyParallel: true,
  use: {
    ctPort: 3100,
    ctViteConfig: {
      resolve: {
        alias: {
          '@': resolve(__dirname, './')
        }
      }
    }
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
  ]
});
