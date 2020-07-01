// General imports
import { render } from '@testing-library/react';
import { rest, setupWorker } from 'msw';

// Components import
import PokemonDetailsView from './PokemonDetailsView';

// Factories import
import viewModelsFactory from '../../factories/viewModelsFactory';


/**
 * Test cases for PokemonsDetailsView component.
 */
describe('PokemonDetailsView', () => {
  test('', () => {
    window.router = { query: { id: 1 }};
    render(<PokemonDetailsView viewModel={viewModelsFactory.pokemonDetailsViewModel} />);

    expect(true);
  });
});
