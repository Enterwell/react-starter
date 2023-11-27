/**
 * Class represents the Pokemon details model.
 *
 * @class PokemonDetails
 */
export default class PokemonDetails {
  /**
   * Identifier.
   *
   * @memberof PokemonDetails
   */
  id: number;

  /**
   * Name.
   *
   * @memberof PokemonDetails
   */
  name: string;

  /**
   * Height.
   *
   * @memberof PokemonDetails
   */
  height: number;

  /**
   * Weight.
   *
   * @memberof PokemonDetails
   */
  weight: number;

  /**
   * Abilities.
   *
   * @memberof PokemonDetails
   */
  abilities: string[];

  /**
   * Base experience.
   *
   * @memberof PokemonDetails
   */
  baseExperience: number;

  /**
   * Image.
   *
   * @memberof PokemonDetails
   */
  image: string;

  /**
   * Clones the object.
   *
   * @returns PokemonDetails object with same values as current one
   * @memberof PokemonDetails
   */
  clone(): PokemonDetails {
    const copy = new PokemonDetails();

    copy.id = this.id;
    copy.name = this.name;
    copy.height = this.height;
    copy.weight = this.weight;
    copy.abilities = [...this.abilities];
    copy.baseExperience = this.baseExperience;
    copy.image = this.image;

    return copy;
  }
}