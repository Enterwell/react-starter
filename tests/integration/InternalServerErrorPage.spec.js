// General imports
import { test, expect } from '@playwright/test';

// Helper import
import { screenshot } from '../../playwright/helpers/PlaywrightHelpers';

/**
 * Internal server error page tests.
 */
test.describe('Internal server error page', () => {
  /**
   * Testing that the internal server error page is shown when getting 500 status code.
   */
  test('shows when bad is entered', async ({ page, browserName }) => {
    await page.goto('/500');

    await expect(page.getByTestId('heading')).toContainText('500');

    await screenshot(page, browserName, __filename, '500page');
  });
});
