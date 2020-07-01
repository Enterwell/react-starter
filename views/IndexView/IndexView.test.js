// General imports
import { render } from '@testing-library/react';

// Components import
import IndexView from './IndexView';

/**
 * Test cases for ErrorView component.
 */
describe('IndexView', () => {
  test('displays text message', () => {
    const { getByText } = render(<IndexView />);

    expect(getByText(/Not much to see here./)).toBeInTheDocument();
  });

  test('has link to the right page', () => {
    const { getByText } = render(<IndexView />);

    expect(getByText(/Pokemons page/).closest('a')).toHaveAttribute('href', '/pokemons');
  });
});
