// Models import
import PokemonDetails from '../models/PokemonDetails';
import PokemonSimplified from '../models/PokemonSimplified';

/**
 * Class represents the Pokemons mapper. It provides functions for mapping DTOs
 * to Pokemon data.
 *
 * @class PokemonsMapper
 */
class PokemonsMapper {
  /**
   * Maps the array of DTOs to PokemonSimplified model.
   *
   * @static
   * @param {Object[]} dtos DTOs array
   * @returns PokemonSimplified model
   * @memberof PokemonsMapper
   */
  static mapDtosToPokemons(dtos) {
    return dtos.map((dto) => {
      const parts = dto.url.split('/');
      const pokemon = new PokemonSimplified();

      pokemon.id = parts[parts.length - 2];
      pokemon.name = dto.name;
      pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(pokemon.id).padStart(3, '0')}.png`;

      return pokemon;
    });
  }

  /**
   * Maps the DTO to PokemonDetails model.
   *
   * @static
   * @param {Object} dto DTO
   * @returns PokemoDetails model
   * @memberof PokemonsMapper
   */
  static mapDtoToSinglePokemon(dto) {
    const pokemon = new PokemonDetails();

    pokemon.id = dto.id;
    pokemon.name = dto.name;
    pokemon.height = dto.height;
    pokemon.weight = dto.weight;
    pokemon.abilities = dto.abilities.map((a) => a.ability.name);
    pokemon.baseExperience = dto.base_experience;
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(pokemon.id).padStart(3, '0')}.png`;

    return pokemon;
  }
}

export default PokemonsMapper;
