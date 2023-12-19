// General imports
import { test, expect } from '@playwright/experimental-ct-react';

// Component import
import Pagination from '@/components/Pagination/Pagination';

/**
 * Pagination component tests.
 */
test.describe('Pagination', () => {
  /**
   * Testing that the component correctly renders without passing any props.
   */
  test('Shows pagination component with default props', async ({ mount }) => {
    const component = await mount(<Pagination />);

    const navigationItemsCount = await component.locator('[class*=Item-previousNext]').count();
    expect(navigationItemsCount).toBe(2);

    const pageCount = await component.locator('[class*=Item-page]').count();
    expect(pageCount).toBe(1);
  });

  /**
   * Testing that the pagination pages can be cycled through by using page buttons.
   */
  test('Can switch between pages using page buttons', async ({ mount }) => {
    const component = await mount(<Pagination count={2} />);

    await expect(component.locator('[class*=Item-page]').first())
      .toHaveClass(/Mui-selected/);

    await expect(component.locator('[class*=Item-page]').nth(1))
      .not
      .toHaveClass(/Mui-selected/);

    await component.locator('[class*=Item-page]').nth(1)
      .click();

    await expect(component.locator('[class*=Item-page]').first())
      .not
      .toHaveClass(/Mui-selected/);

    await expect(component.locator('[class*=Item-page]').nth(1))
      .toHaveClass(/Mui-selected/);
  });

  /**
   * Testing that the pagination pages can be cycled through by using arrow buttons.
   */
  test('Can switch between pages using arrow buttons', async ({ mount }) => {
    const component = await mount(<Pagination count={2} />);

    await expect(component.locator('[class*=Item-previousNext]').first())
      .toBeDisabled();

    await expect(component.locator('[class*=Item-previousNext]').last())
      .not
      .toBeDisabled();

    await expect(component.locator('[class*=Item-page]').first())
      .toHaveClass(/Mui-selected/);

    await expect(component.locator('[class*=Item-page]').nth(1))
      .not
      .toHaveClass(/Mui-selected/);

    await component.locator('[class*=Item-previousNext]').last()
      .click();

    await expect(component.locator('[class*=Item-page]').first())
      .not
      .toHaveClass(/Mui-selected/);

    await expect(component.locator('[class*=Item-page]').nth(1))
      .toHaveClass(/Mui-selected/);

    await expect(component.locator('[class*=Item-previousNext]').first())
      .not
      .toBeDisabled();

    await expect(component.locator('[class*=Item-previousNext]').last())
      .toBeDisabled();
  });
});
