// General imports
import { test, expect } from '@playwright/test';

// Helper import
import { screenshot } from '@/playwright/helpers/PlaywrightHelpers';

/**
 * 404 page tests.
 */
test.describe('404 page', () => {
  /**
   * Testing that the 404 page is shown when accessing route that does not exist.
   */
  test('shows when bad is entered', async ({ page, browserName }) => {
    await page.goto('/this/is/some/bad/url');

    await expect(page.getByTestId('heading')).toContainText('404');

    await screenshot(page, browserName, __filename, '404page');
  });
});
