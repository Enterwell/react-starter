// General imports
import { inject } from 'mobx-react';

// Views import
import PokemonsView from '../../views/PokemonsView/PokemonsView';

/**
 * Function represents the page corresponding to the '/pokemons' route.
 *
 * @returns page's elements
 */
const Pokemons = (props) => <PokemonsView viewModel={props.viewModels.pokemonsViewModel} />;

Pokemons.title = 'Pokemon details';
Pokemons.showUser = true;

export default inject('viewModels')(Pokemons);
