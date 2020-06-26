// General imports
import { render } from '@testing-library/react';

// Components import
import UserInformation from './UserInformation';

/**
 * Test cases for UserInformation component.
 */
describe('UserInformation', () => {
  test('displays default name', () => {
    const { getByRole } = render(
      <UserInformation />
    );

    expect(getByRole('progressbar')).toBeInTheDocument();
  });
});
