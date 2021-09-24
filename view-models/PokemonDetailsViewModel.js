// General imports
import { makeObservable, observable, action, runInAction } from 'mobx';

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
  static get instance() {
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
  isLoading;

  /**
   * Pokemon details data.
   *
   * @type {Object}
   * @memberof PokemonDetailsViewModel
   */
  pokemon;

  /**
   * Creates an instance of PokemonDetailsViewModel.
   *
   * @memberof PokemonDetailsViewModel
   */
  constructor() {
    this.userAppModel = UserAppModel.instance;
    this.isLoading = true;
    this.pokemon = null;

    makeObservable(this, {
      isLoading: observable,
      pokemon: observable,
      loadPokemon: action.bound

    });
  }

  /**
   * Loads the Pokemon.
   *
   * @param {number} id Pokemon's ID
   * @memberof PokemonDetailsViewModel
   */
  async loadPokemon(id) {
    this.isLoading = true;

    try {
      const pokemon = await PokemonsRepository.getSinglePokemon(id);

      runInAction(() => {
        this.pokemon = pokemon;
      });
    } catch (e) {
      NotificationsService.showDefaultErrorNotification();
    }

    runInAction(() => {
      this.isLoading = false;
    });
  }
}

export default PokemonDetailsViewModel;
