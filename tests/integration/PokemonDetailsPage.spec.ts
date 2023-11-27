// General imports
import { test, expect } from '@playwright/test';

import mockedPokemonData from '@/playwright/mockedData/pokemonId1.json';
import { screenshot } from '@/playwright/helpers/PlaywrightHelpers';

/**
 * Before each.
 */
test.beforeEach(async ({ page }) => {
  await page.route('**/pokemon/1', (route) => route.fulfill({
    status: 200,
    contentType: 'application/json',
    json: mockedPokemonData
  }));

  await page.goto('/pokemons/1');

  await page.waitForTimeout(3 * 1000);
});

/**
 * Pokemon details page tests.
 */
test.describe('Pokemon details page', () => {
  /**
   * Testing that the page shows pokemon's details data.
   */
  test('shows the Pokemon\'s details data', async ({ page, browserName }) => {
    await expect(page.getByTestId('pokemon-name'))
      .toContainText('bulbasaur');

    await screenshot(page, browserName, __filename, 'pokemonDetails');
  });

  /**
   * Testing that the page contains link to go back to the pokemons page.
   */
  test('has working link to Pokemons page', async ({ page }) => {
    await page.getByTestId('pokemon-link')
      .click();

    await expect(page).toHaveURL('/pokemons');
  });

  /**
   * Testing that the page has user information component with which the user can change
   * his username and that the name referring to the user will be changed accordingly.
   */
  test('updates question when name is changed', async ({ page, browserName }) => {
    await expect(page.getByTestId('user-name'))
      .toContainText('John Doe');

    await expect(page.getByTestId('pokemon-user-name'))
      .toContainText('John Doe');

    await page.getByLabel('Name').type('Matej');
    await page.getByLabel('Name').press('Enter');

    await expect(page.getByLabel('Name'))
      .toHaveText('');

    await expect(page.getByTestId('user-name'))
      .toContainText('Matej');

    await expect(page.getByTestId('pokemon-user-name'))
      .toContainText('Matej');

    await screenshot(page, browserName, __filename, 'pokemon-details-question-name-updated');
  });
});
