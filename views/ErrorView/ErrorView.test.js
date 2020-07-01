// General imports
import { render } from '@testing-library/react';

// Components import
import ErrorView from './ErrorView';

/**
 * Test cases for ErrorView component.
 */
describe('ErrorView', () => {
  test('displays error message', () => {
    const { getByText } = render(<ErrorView />);

    expect(getByText(/Looks like your code did an oopsie!/)).toBeInTheDocument();
  });
});
