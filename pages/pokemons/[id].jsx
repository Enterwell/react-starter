// General imports
import { inject } from 'mobx-react';

// Views import
import PokemonDetailsView from '../../views/PokemonDetailsView/PokemonDetailsView';

/**
 * Function represents the page corresponding to the '/pokemons/{id}' route.
 *
 * @returns page's elements
 */
const PokemonDetails = (props) => <PokemonDetailsView viewModel={props.viewModels.pokemonDetailsViewModel} />;

PokemonDetails.title = 'Pokemon details';
PokemonDetails.showUser = true;

export default inject('viewModels')(PokemonDetails);
