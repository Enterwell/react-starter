// Views import
import PokemonsView from '../../views/PokemonsView/PokemonsView';

/**
 * Function represents the page corresponding to the '/pokemons' route.
 *
 * @returns page's elements
 */
const Pokemons = () => <PokemonsView />;

Pokemons.title = 'Pokemons';
Pokemons.showUser = true;

export default Pokemons;
