import PokemonSimplified from '@/models/PokemonSimplified';
import PokemonDetails from '@/models/PokemonDetails';

/**
 * Maps the array of DTOs to PokemonSimplified model.
 *
 * @static
 * @param dtos DTOs array
 * @returns PokemonSimplified model
 */
export function mapDtosToPokemons(dtos: any[]): PokemonSimplified[] {
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
* @param dto DTO
* @returns PokemoDetails model
*/
export function mapDtoToSinglePokemon(dto: any): PokemonDetails {
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
