/**
 * Class represents the Pokemon details model.
 *
 * @class PokemonDetails
 */
class PokemonDetails {
  /**
   * Identifier.
   *
   * @type {numer}
   * @memberof PokemonDetails
   */
  id;

  /**
   * Name.
   *
   * @type {string}
   * @memberof PokemonDetails
   */
  name;

  /**
   * Height.
   *
   * @type {number}
   * @memberof PokemonDetails
   */
  height;

  /**
   * Weight.
   *
   * @type {number}
   * @memberof PokemonDetails
   */
  weight;

  /**
   * Abilities.
   *
   * @type {string[]}
   * @memberof PokemonDetails
   */
  abilities;

  /**
   * Base experience.
   *
   * @type {number}
   * @memberof PokemonDetails
   */
  baseExperience;

  /**
   * Image.
   *
   * @type {number}
   * @memberof PokemonDetails
   */
  image;

  /**
   * Clones the object.
   *
   * @returns PokemonDetails object with same values as current one
   * @memberof PokemonDetails
   */
  clone() {
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

export default PokemonDetails;
