import { get } from '../services/HttpService';
import { mapDtosToPokemons, mapDtoToSinglePokemon } from '../mappers/PokemonsMapper';

/**
 * Gets the Pokemons from API.
 *
 * @static
 * @param {Object} payload Limit and offset data
 * @returns Pokemons data
 */
export async function getPokemons(payload) {
  const { data } = await get('pokemon', payload);

  return {
    ...data,
    results: mapDtosToPokemons(data.results)
  };
}

/**
* Gets the Pokemon from API.
*
* @static
* @param {number} payload Pokemon's ID
* @returns Pokemon data
*/
export async function getSinglePokemon(payload) {
  const { data } = await get(`pokemon/${payload}`);

  return mapDtoToSinglePokemon(data);
}
