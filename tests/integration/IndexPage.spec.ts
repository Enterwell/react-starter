// General imports
import { test, expect } from '@playwright/test';

// Helper import
import { screenshot } from '@/playwright/helpers/PlaywrightHelpers';

/**
 * Index page tests.
 */
test.describe('Index page', () => {
  /**
   * Testing that the index page has link to page with pokemons.
   */
  test('has link to pokemons page', async ({ page, browserName }) => {
    await page.goto('/');

    await screenshot(page, browserName, __filename, 'indexPage');

    // Click the link to pokemons page
    await page.getByTestId('pokemons-link')
      .click();

    // Expect the URL to contain pokemons
    await expect(page).toHaveURL('/pokemons');
  });
});
