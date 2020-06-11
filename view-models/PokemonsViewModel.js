// General imports
import { observable, action } from 'mobx';

// Repositories import
import PokemonsRepository from '../repositories/PokemonsRepository';

/**
 * Class represents the view model of the PokemonsView.
 *
 * @class PokemonsViewModel
 */
class PokemonsViewModel {
  /**
   * Instances of the view model.
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
  static get() {
    console.log(PokemonsViewModel._viewModel);

    // Creates instance if it isn't set yet
    if (PokemonsViewModel._viewModel === null) {
      PokemonsViewModel._viewModel = new PokemonsViewModel();
    }

    return PokemonsViewModel._viewModel;
  }

  /**
   * Is loading flag.
   *
   * @type {boolean}
   * @memberof PokemonsViewModel
   */
  @observable isLoading;

  /**
   * Pokemons collection.
   *
   * @type {Object[]}
   * @memberof PokemonsViewModel
   */
  @observable pokemons;

  /**
   * Page number.
   *
   * @type {number}
   * @memberof PokemonsViewModel
   */
  @observable pageNumber;

  /**
   * Page size.
   *
   * @type {number}
   * @memberof PokemonsViewModel
   */
  @observable pageSize;

  /**
   * Total Pokemons number.
   *
   * @type {number}
   * @memberof PokemonsViewModel
   */
  @observable totalPokemons;

  /**
   * Creates an instance of PokemonsViewModel.
   *
   * @memberof PokemonsViewModel
   */
  constructor() {
    console.log('a');
    
    this.isLoading = false;
    this.pokemons = [];
    this.pageNumber = 0;
    this.pageSize = 10;
    this.totalPokemons = 0;
  }

  /**
   * Loads the Pokemons.
   *
   * @param {number} page Page number
   * @memberof PokemonsViewModel
   */
  @action.bound
  async loadPokemons(page = this.pageNumber) {
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

      this.pokemons = results;
      this.pageNumber = page;
      this.totalPokemons = count;
    } catch (e) {
      console.log(e);
    }

    this.isLoading = false;
  }
}

const inst = new PokemonsViewModel();
export default inst; // new PokemonsViewModel();
