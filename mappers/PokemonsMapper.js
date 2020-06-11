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
      const id = parts[parts.length - 2];

      return {
        id,
        name: dto.name,
        image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
      };
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
    return {
      id: dto.id,
      name: dto.name,
      height: dto.height,
      weight: dto.weight,
      abilities: dto.abilities.map((a) => a.name),
      baseExperience: dto.base_experience,
      image: `https://pokeres.bastionbot.org/images/pokemon/${dto.id}.png`
    };
  }
}

export default PokemonsMapper;
