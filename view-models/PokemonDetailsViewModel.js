// General imports
import { observable, action } from 'mobx';

// App models import
import UserAppModel from '../app-models/UserAppModel';

// Repositories import
import PokemonsRepository from '../repositories/PokemonsRepository';

// Services import
import NotificationsService from '../services/NotificationsService';

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
   * User app model.
   *
   * @type {UserAppModel}
   * @memberof PokemonDetailsViewModel
   */
  userAppModel;

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
    this.userAppModel = UserAppModel.get();
    this.isLoading = true;
    this.pokemon = null;
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
      NotificationsService.showDefaultErrorNotification();
    }

    this.isLoading = false;
  }
}

export default PokemonDetailsViewModel;
