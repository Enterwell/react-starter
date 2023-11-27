// General imports
import { test, expect } from '@playwright/experimental-ct-react';

// Component import
import UserInformation from '@/components/UserInformation/UserInformation';

/**
 * User information component tests.
 */
test.describe('User information', () => {
  /**
   * Testing that the component correctly renders without passing any props.
   */
  test('Shows user information component with default props', async ({ mount }) => {
    const component = await mount(<UserInformation />);

    await expect(component).toBeVisible();
  });

  /**
   * Testing that the component initially shows user's username as 'John Doe'.
   */
  test('Initially shows default "John Doe" username greeting', async ({ mount }) => {
    const component = await mount(<UserInformation />);

    await expect(component.locator('[class*="nameWrapper"]'))
      .toContainText('Hi John Doe!');
  });

  /**
   * Testing that the user's username updates after entering it in the component's input.
   */
  test('Updates greeting name when the name is entered in the input', async ({ mount }) => {
    const component = await mount(<UserInformation />);

    await component.getByLabel('Name').type('Custom Name');
    await component.getByLabel('Name').press('Enter');

    await expect(component.getByLabel('Name'))
      .toHaveText('');

    await expect(component.locator('[class*="nameWrapper"]'))
      .toContainText('Hi Custom Name!');
  });

  /**
   * Testing that the user's username is saved to the browser's local storage.
   */
  test('Stores the updated greeting name in localStorage', async ({ mount, page }) => {
    const component = await mount(<UserInformation />);

    await component.getByLabel('Name').type('Custom Name');
    await component.getByLabel('Name').press('Enter');

    await expect(component.getByLabel('Name'))
      .toHaveText('');

    await page.waitForFunction(() => JSON.parse(localStorage.getItem('user')).name === 'Custom Name');
  });
});
