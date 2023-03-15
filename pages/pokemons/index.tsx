// Views import
import PokemonsView from '../../views/PokemonsView/PokemonsView';

/**
 * Function represents the page corresponding to the '/pokemons' route.
 *
 * @returns page's elements
 */
function Pokemons() {
  return <PokemonsView />;
}

Pokemons.title = 'Pokemons';
Pokemons.showUser = true;

export default Pokemons;
