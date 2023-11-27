/**
 * Class represents the Pokemon simplified model.
 *
 * @class PokemonSimplified
 */
export default class PokemonSimplified {
  /**
   * Identifier.
   *
   * @memberof PokemonSimplified
   */
  id: number;

  /**
   * Name.
   *
   * @memberof PokemonSimplified
   */
  name: string;

  /**
   * Height.
   *
   * @memberof PokemonSimplified
   */
  height: number;

  /**
   * Weight.
   *
   * @memberof PokemonSimplified
   */
  weight: number;

  /**
   * Abilities.
   *
   * @memberof PokemonSimplified
   */
  abilities: string[];

  /**
   * Base experience.
   *
   * @memberof PokemonSimplified
   */
  baseExperience: number;

  /**
   * Image.
   *
   * @memberof PokemonSimplified
   */
  image: string;

  /**
   * Clones the object.
   *
   * @returns PokemonSimplified object with same values as current one
   * @memberof PokemonSimplified
   */
  clone(): PokemonSimplified {
    const copy = new PokemonSimplified();

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