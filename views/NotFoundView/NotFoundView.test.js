// General imports
import { render } from '@testing-library/react';

// Components import
import NotFoundView from './NotFoundView';

/**
 * Test cases for ErrorView component.
 */
describe('NotFoundView', () => {
  test('displays error message', () => {
    const { getByText } = render(<NotFoundView />);

    expect(getByText(/404/)).toBeInTheDocument();
  });
});
