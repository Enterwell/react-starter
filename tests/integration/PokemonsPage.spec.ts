// General imports
import { test, expect } from '@playwright/test';

// Mocked data
import mockedSecondDataPage from '@/playwright/mockedData/pokemonsOffset10Limit10.json';
import mockedFirstDataPage from '@/playwright/mockedData/pokemonsOffset0Limit10.json';
import { screenshot } from '@/playwright/helpers/PlaywrightHelpers';

/**
 * Before each.
 */
test.beforeEach(async ({ page }) => {
  await page.route('**/pokemon?offset=0&limit=10', (route) => route.fulfill({
    status: 200,
    contentType: 'application/json',
    json: mockedFirstDataPage
  }));
  await page.route('**/pokemon?offset=10&limit=10', (route) => route.fulfill({
    status: 200,
    contentType: 'application/json',
    json: mockedSecondDataPage
  }));

  await page.goto('/pokemons');

  await page.waitForTimeout(3 * 1000);
});

/**
 * Pokemons page tests.
 */
test.describe('Pokemons page', () => {
  /**
   * Testing that the page has list of 10 pokemons and that the first one is correct.
   */
  test('shows the Pokemons data', async ({ page, browserName }) => {
    await expect(page.getByTestId('pokemon-item'))
      .toHaveCount(10);

    await expect(page.getByTestId('pokemon-item').first())
      .toContainText('bulbasaur');

    await screenshot(page, browserName, __filename, 'pokemonList');
  });

  /**
   * Testing that the page contains working pagination with which we can change pages.
   */
  test('has working pagination', async ({ page, browserName }) => {
    await page.locator('[class*="MuiPaginationItem-previousNext"]')
      .last()
      .click();

    await page.waitForTimeout(3 * 1000);

    await expect(page.getByTestId('pokemon-item'))
      .toHaveCount(9);

    await screenshot(page, browserName, __filename, 'pokemon-list-second-page');

    await expect(page.getByTestId('pokemon-item').nth(1))
      .toContainText('butterfree');

    await page.locator('[class*="MuiPaginationItem-previousNext"]')
      .first()
      .click();

    await expect(page.getByTestId('pokemon-item'))
      .toHaveCount(10);

    await expect(page.getByTestId('pokemon-item').nth(1))
      .toContainText('ivysaur');
  });

  /**
   * Testing that clicking on first pokemon from the page's list opens the
   * correct pokemon details page.
   */
  test('correctly opens Pokemon\'s details', async ({ page }) => {
    await page.getByTestId('pokemon-item')
      .first()
      .click();

    await expect(page).toHaveURL('/pokemons/1');
  });
});
