// General imports
import { makeObservable, observable, action, runInAction } from 'mobx';

// Repositories import
import PokemonsRepository from '../repositories/PokemonsRepository';

// Services import
import NotificationsService from '../services/NotificationsService';

/**
 * Class represents the view model of the PokemonsView.
 *
 * @class PokemonsViewModel
 */
class PokemonsViewModel {
  /**
   * Instance of the view model.
   *
   * @static
   * @memberof PokemonsViewModel
   */
  static _viewModel = null;

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
   * @type {boolean}
   * @memberof PokemonsViewModel
   */
  isFirstLoad;

  /**
   * Is loading flag.
   *
   * @type {boolean}
   * @memberof PokemonsViewModel
   */
  isLoading;

  /**
   * Pokemons collection.
   *
   * @type {Object[]}
   * @memberof PokemonsViewModel
   */
  pokemons;

  /**
   * Page number.
   *
   * @type {number}
   * @memberof PokemonsViewModel
   */
  pageNumber;

  /**
   * Page size.
   *
   * @type {number}
   * @memberof PokemonsViewModel
   */
  pageSize;

  /**
   * Total Pokemons number.
   *
   * @type {number}
   * @memberof PokemonsViewModel
   */
  totalPokemons;

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
   * @param {number} page Page number
   * @memberof PokemonsViewModel
   */
  async loadPokemons(page = this.pageNumber) {
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
      } = await PokemonsRepository.getPokemons(payload);

      runInAction(() => {
        this.pokemons = results;
        this.pageNumber = page;
        this.totalPokemons = count;
      });
    } catch (e) {
      NotificationsService.showDefaultErrorNotification();
    }

    runInAction(() => {
      this.isLoading = false;
    });
  }
}

export default PokemonsViewModel;
