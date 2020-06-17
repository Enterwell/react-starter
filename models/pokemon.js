/**
 * Class represents the Pokemon model.
 *
 * @class Pokemon
 */
class Pokemon {
  /**
   * Identifier.
   *
   * @type {numer}
   * @memberof Pokemon
   */
  id;

  /**
   * Name.
   *
   * @type {string}
   * @memberof Pokemon
   */
  name;

  /**
   * Height.
   *
   * @type {number}
   * @memberof Pokemon
   */
  height;

  /**
   * Weight.
   *
   * @type {number}
   * @memberof Pokemon
   */
  weight;

  /**
   * Abilities.
   *
   * @type {string[]}
   * @memberof Pokemon
   */
  abilities;

  /**
   * Base experience.
   *
   * @type {number}
   * @memberof Pokemon
   */
  baseExperience;

  /**
   * Image.
   *
   * @type {number}
   * @memberof Pokemon
   */
  image;

  /**
   * Clones the object.
   *
   * @returns Pokemon object with same values as current one
   * @memberof Pokemon
   */
  clone() {
    const copy = new Pokemon();

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

export default Pokemon;
