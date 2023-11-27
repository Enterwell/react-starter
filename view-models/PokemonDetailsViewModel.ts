import { makeObservable, observable, action, runInAction } from 'mobx';

import { showDefaultErrorNotification } from '@/services/NotificationsService';
import { getSinglePokemon } from '@/repositories/PokemonsRepository';
import PokemonDetails from '@/models/PokemonDetails';
import UserAppModel from '@/app-models/UserAppModel';

/**
 * Class represents the view model of the PokemonDetailsView.
 *
 * @class PokemonDetailsViewModel
 */
export default class PokemonDetailsViewModel {
  /**
   * Instance of the view model.
   *
   * @static
   * @memberof PokemonDetailsViewModel
   */
  static _viewModel: PokemonDetailsViewModel = null;

  /**
   * Returns the view model's instance.
   *
   * @static
   * @returns view model's instance
   * @memberof PokemonDetailsViewModel
   */
  static get instance() {
    // Creates instance if it isn't set yet
    if (PokemonDetailsViewModel._viewModel == null) {
      PokemonDetailsViewModel._viewModel = new PokemonDetailsViewModel();
    }

    return PokemonDetailsViewModel._viewModel;
  }

  /**
   * User app model.
   *
   * @memberof PokemonDetailsViewModel
   */
  userAppModel: UserAppModel;

  /**
   * Is loading flag.
   *
   * @memberof PokemonDetailsViewModel
   */
  isLoading: boolean;

  /**
   * Pokemon details data.
   *
   * @memberof PokemonDetailsViewModel
   */
  pokemon: PokemonDetails;

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
      loadPokemon: action.bound,
      onUnmount: action.bound
    });
  }

  /**
   * Loads the Pokemon.
   *
   * @param id Pokemon's ID
   * @memberof PokemonDetailsViewModel
   */
  async loadPokemon(id: number) {
    this.isLoading = true;

    try {
      const pokemon = await getSinglePokemon(id);

      runInAction(() => {
        this.pokemon = pokemon;
      });
    } catch (e) {
      console.error(e);
      showDefaultErrorNotification();
    }

    runInAction(() => {
      this.isLoading = false;
    });
  }

  /**
   * Method that resets the view model's variables on component unmount.
   *
   * @memberof PokemonDetailsViewModel
   */
  onUnmount() {
    this.isLoading = true;
    this.pokemon = null;
  }
}
