// General imports
import { observable, action } from 'mobx';

// Repositories import
import PokemonsRepository from '../repositories/PokemonsRepository';

/**
 * Class represents the view model of the PokemonDetailsView.
 *
 * @class PokemonDetailsViewModel
 */
class PokemonDetailsViewModel {
  /**
   * Returns the view model's instance.
   *
   * @static
   * @returns view model's instance
   * @memberof PokemonDetailsViewModel
   */
  static get() {
    return new PokemonDetailsViewModel();
  }

  /**
   * Is loading flag.
   *
   * @type {boolean}
   * @memberof PokemonDetailsViewModel
   */
  @observable isLoading;

  /**
   * Pokemon details data.
   *
   * @type {Object}
   * @memberof PokemonDetailsViewModel
   */
  @observable pokemon;

  /**
   * Creates an instance of PokemonDetailsViewModel.
   *
   * @memberof PokemonDetailsViewModel
   */
  constructor() {
    this.isLoading = false;
    this.pokemon = { };
  }

  /**
   * Loads the Pokemon.
   *
   * @param {number} id Pokemon's ID
   * @memberof PokemonDetailsViewModel
   */
  @action.bound
  async loadPokemon(id) {
    this.isLoading = true;

    try {
      this.pokemon = await PokemonsRepository.getPokemon(id);
    } catch (e) {
      console.log(e);
    }

    this.isLoading = false;
  }
}

export default PokemonDetailsViewModel;
