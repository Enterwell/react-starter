// Views import
import PokemonDetailsView from '../../views/PokemonDetailsView/PokemonDetailsView';

/**
 * Function represents the page corresponding to the '/pokemons/{id}' route.
 *
 * @returns page's elements
 */
function PokemonDetails() {
  return <PokemonDetailsView />;
}

PokemonDetails.title = 'Pokemon details';
PokemonDetails.showUser = true;

export default PokemonDetails;
