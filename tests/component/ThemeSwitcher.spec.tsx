// General imports
import { test, expect } from '@playwright/experimental-ct-react';

// Component import
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';

/**
 * Theme switcher component tests.
 */
test.describe('Theme switcher', () => {
  /**
   * Testing that the component correctly renders without passing any props.
   */
  test('Shows theme switcher with default props', async ({ mount }) => {
    const component = await mount(<ThemeSwitcher />);

    await expect(component).toBeVisible();

    await expect(component.getByTestId('LightModeIcon')).toBeVisible();
  });

  /**
   * Testing that the component shows light mode icon when passing 'false' to 'isDarkMode' prop.
   */
  test('Shows light mode icon when "isDarkMode" flag is false', async ({ mount }) => {
    const component = await mount(<ThemeSwitcher isDarkMode={false} />);

    await expect(component.getByTestId('LightModeIcon')).toBeVisible();
  });

  /**
   * Testing that the component shows dark mode icon when passing 'true' to 'isDarkMode' prop.
   */
  test('Shows dark mode icon when "isDarkMode" flag is true', async ({ mount }) => {
    const component = await mount(<ThemeSwitcher isDarkMode />);

    await expect(component.getByTestId('DarkModeIcon')).toBeVisible();
  });
});
