import { makeObservable, observable, action, runInAction } from 'mobx';

import { showDefaultErrorNotification } from '@/services/NotificationsService';
import { getPokemons } from '@/repositories/PokemonsRepository';
import PokemonSimplified from '@/models/PokemonSimplified';

/**
 * Class represents the view model of the PokemonsView.
 *
 * @class PokemonsViewModel
 */
export default class PokemonsViewModel {
  /**
   * Instance of the view model.
   *
   * @static
   * @memberof PokemonsViewModel
   */
  static _viewModel: PokemonsViewModel = null;

  /**
   * Returns the view model's instance.
   *
   * @static
   * @returns view model's instance
   * @memberof PokemonsViewModel
   */
  static get instance() {
    // Creates instance if it isn't set yet
    if (PokemonsViewModel._viewModel === null) {
      PokemonsViewModel._viewModel = new PokemonsViewModel();
    }

    return PokemonsViewModel._viewModel;
  }

  /**
   * Is first loading flag.
   *
   * @memberof PokemonsViewModel
   */
  isFirstLoad: boolean;

  /**
   * Is loading flag.
   *
   * @memberof PokemonsViewModel
   */
  isLoading: boolean;

  /**
   * Pokemons collection.
   *
   * @memberof PokemonsViewModel
   */
  pokemons: PokemonSimplified[];

  /**
   * Page number.
   *
   * @memberof PokemonsViewModel
   */
  pageNumber: number;

  /**
   * Page size.
   *
   * @memberof PokemonsViewModel
   */
  pageSize: number;

  /**
   * Total Pokemons number.
   *
   * @memberof PokemonsViewModel
   */
  totalPokemons: number;

  /**
   * Creates an instance of PokemonsViewModel.
   *
   * @memberof PokemonsViewModel
   */
  constructor() {
    this.isFirstLoad = true;
    this.isLoading = true;
    this.pokemons = [];
    this.pageNumber = 0;
    this.pageSize = 10;
    this.totalPokemons = 0;

    makeObservable(this, {
      isFirstLoad: observable,
      isLoading: observable,
      pokemons: observable,
      pageNumber: observable,
      pageSize: observable,
      totalPokemons: observable,
      loadPokemons: action.bound
    });
  }

  /**
   * Loads the Pokemons.
   *
   * @param page Page number
   * @memberof PokemonsViewModel
   */
  async loadPokemons(page: number = this.pageNumber) {
    if (!this.isFirstLoad && this.isLoading) {
      return;
    }

    if (page < 0) {
      return;
    }

    this.isLoading = true;

    try {
      const payload = {
        offset: page * this.pageSize,
        limit: this.pageSize
      };

      const {
        results,
        count
      } = await getPokemons(payload);

      runInAction(() => {
        this.pokemons = results;
        this.pageNumber = page;
        this.totalPokemons = count;
      });
    } catch (e) {
      console.error(e);
      showDefaultErrorNotification();
    }

    runInAction(() => {
      this.isLoading = false;
    });
  }
}
