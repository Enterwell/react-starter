// General imports
import { render } from '@testing-library/react';

// Components import
import UserInformation from './UserInformation';

// Factories import
import appModelsFactory from '../../factories/appModelsFactory';

/**
 * Test cases for UserInformation component.
 */
describe('UserInformation', () => {
  test('displays default name', () => {
    const { getByText } = render(
      <UserInformation userAppModel={appModelsFactory.userAppModel} />
    );

    expect(getByText('John Doe')).toBeInTheDocument();
  });

  test('displays name of user set in UserAppModel', () => {
    appModelsFactory.userAppModel.editUser('Matej');

    const { getByText } = render(
      <UserInformation userAppModel={appModelsFactory.userAppModel} />
    );

    expect(getByText('Matej')).toBeInTheDocument();
  });
});
