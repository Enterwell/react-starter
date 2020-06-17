/**
 * Class represents the Pokemon simplified model.
 *
 * @class PokemonSimplified
 */
class PokemonSimplified {
  /**
   * Identifier.
   *
   * @type {numer}
   * @memberof PokemonSimplified
   */
  id;

  /**
   * Name.
   *
   * @type {string}
   * @memberof PokemonSimplified
   */
  name;

  /**
   * Height.
   *
   * @type {number}
   * @memberof PokemonSimplified
   */
  height;

  /**
   * Weight.
   *
   * @type {number}
   * @memberof PokemonSimplified
   */
  weight;

  /**
   * Abilities.
   *
   * @type {string[]}
   * @memberof PokemonSimplified
   */
  abilities;

  /**
   * Base experience.
   *
   * @type {number}
   * @memberof PokemonSimplified
   */
  baseExperience;

  /**
   * Image.
   *
   * @type {number}
   * @memberof PokemonSimplified
   */
  image;

  /**
   * Clones the object.
   *
   * @returns PokemonSimplified object with same values as current one
   * @memberof PokemonSimplified
   */
  clone() {
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

export default PokemonSimplified;
