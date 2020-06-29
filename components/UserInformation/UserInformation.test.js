// General imports
import { render, fireEvent } from '@testing-library/react';

// Components import
import UserInformation from './UserInformation';

// Factories import
import appModelsFactory from '../../factories/appModelsFactory';

/**
 * Setup function for tests.
 */
const setup = () => render(
  <UserInformation userAppModel={appModelsFactory.userAppModel} />
);

/**
 * Cleanup function run after each test.
 */
afterEach(() => appModelsFactory.userAppModel.removeUser());

/**
 * Test cases for UserInformation component.
 */
describe('UserInformation', () => {
  test('displays default name', () => {
    const { getByText } = setup();

    expect(getByText(/John Doe/)).toBeInTheDocument();
  });

  test('displays name of user set in UserAppModel', () => {
    appModelsFactory.userAppModel.editUser('Matej');

    const { getByText } = setup();

    expect(getByText(/Matej/)).toBeInTheDocument();
  });

  test('changes name of user correctly', async () => {
    const {
      getByRole,
      getByText
    } = setup();

    const name = 'Matej';
    const input = getByRole('textbox');

    expect(getByText(/John Doe/)).toBeInTheDocument();

    fireEvent.change(input, { target: { value: name }});
    expect(input.value).toBe(name);

    fireEvent.keyPress(input, { key: 'Enter', keyCode: 13 });
    expect(input.value).toBe('');
    expect(getByText(name)).toBeInTheDocument();
  });
});
