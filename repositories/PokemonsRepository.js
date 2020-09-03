// Services import
import HttpService from '../services/HttpService';

// Mappers import
import PokemonsMapper from '../mappers/PokemonsMapper';

/**
 * Class represents the Pokemons repository used for accessing Pokemons' data.
 *
 * @class PokemonsRepository
 */
class PokemonsRepository {
  /**
   * Gets the Pokemons from API.
   *
   * @static
   * @param {Object} payload Limit and offset data
   * @returns Pokemons data
   * @memberof PokemonsRepository
   */
  static async getPokemons(payload) {
    const { data } = await HttpService.get('pokemon', payload);

    return {
      ...data,
      results: PokemonsMapper.mapDtosToPokemons(data.results)
    };
  }

  /**
   * Gets the Pokemon from API.
   *
   * @static
   * @param {number} payload Pokemon's ID
   * @returns Pokemon data
   * @memberof PokemonsRepository
   */
  static async getSinglePokemon(payload) {
    const { data } = await HttpService.get(`pokemon/${payload}`);

    return PokemonsMapper.mapDtoToSinglePokemon(data);
  }
}

export default PokemonsRepository;
