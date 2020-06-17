// Models import
import Pokemon from '../models/pokemon';

/**
 * Class represents the Pokemons mapper. It provides functions for mapping DTOs
 * to Pokemon data.
 *
 * @class PokemonsMapper
 */
class PokemonsMapper {
  /**
   * Maps the array of DTOs to Pokemons data.
   *
   * @static
   * @param {Object[]} dtos DTOs array
   * @returns Pokemons data
   * @memberof PokemonsMapper
   */
  static mapDtosToPokemons(dtos) {
    return dtos.map((dto) => {
      const parts = dto.url.split('/');
      const pokemon = new Pokemon();

      pokemon.id = parts[parts.length - 2];
      pokemon.name = dto.name;
      pokemon.image = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;

      return pokemon;
    });
  }

  /**
   * Maps the DTO to Pokemon details data.
   *
   * @static
   * @param {Object} dto DTO
   * @returns Pokemon details data
   * @memberof PokemonsMapper
   */
  static mapDtoToPokemon(dto) {
    const pokemon = new Pokemon();

    pokemon.id = dto.id;
    pokemon.name = dto.name;
    pokemon.height = dto.height;
    pokemon.weight = dto.weight;
    pokemon.abilities = dto.abilities.map((a) => a.ability.name);
    pokemon.baseExperience = dto.base_experience;
    pokemon.image = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;

    return pokemon;
  }
}

export default PokemonsMapper;
