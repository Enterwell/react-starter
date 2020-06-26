// Factories import
import appModelsFactory from './appModelsFactory';

// View models import
import PokemonsViewModel from '../view-models/PokemonsViewModel';
import PokemonDetailsViewModel from '../view-models/PokemonDetailsViewModel';

/**
 * Class represents the view models factory. It's main purpose is providing view 
 * models to everyone who needs them.
 *
 * @class ViewModelsFactory
 */
class ViewModelsFactory {
  /**
   * Pokemons view model.
   *
   * @type {PokemonsViewModel}
   * @memberof ViewModelsFactory
   */
  pokemonsViewModel;

  /**
   * Pokemon details view model.
   *
   * @readonly
   * @type {PokemonDetailsViewModel}
   * @memberof ViewModelsFactory
   */
  get pokemonDetailsViewModel() {
    return new PokemonDetailsViewModel(appModelsFactory.userAppModel);
  }

  /**
   * Creates an instance of ViewModelsFactory.
   *
   * @memberof ViewModelsFactory
   */
  constructor() {
    this.pokemonsViewModel = new PokemonsViewModel(appModelsFactory.userAppModel);
  }
}

export default new ViewModelsFactory();
