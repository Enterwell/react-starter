// General imports
import { test, expect } from '@playwright/experimental-ct-react';

// Component import
import LoadingContainer from '@/components/LoadingContainer/LoadingContainer';

/**
 * Loading container component tests.
 */
test.describe('Loading container', () => {
  /**
   * Testing that the loading indicator is not shown when using the component
   * without passing any props.
   */
  test('No loading indicator by default', async ({ mount }) => {
    const component = await mount(
      <LoadingContainer>
        Content inside loading container
      </LoadingContainer>
    );

    await expect(component).toHaveText('Content inside loading container');
  });

  /**
   * Testing that the loading indicator is show when passing 'true' to 'isLoading' prop.
   */
  test('Loading indicator when the "isLoading" flag is true', async ({ mount }) => {
    const component = await mount(
      <LoadingContainer isLoading>
        Content inside loading container
      </LoadingContainer>
    );

    await expect(component).toBeEmpty();

    await expect(component.locator('[role=progressbar]')).toBeVisible();
  });
});
