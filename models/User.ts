/**
 * Class represents the user model.
 *
 * @class User
 */
export default class User {
  /**
   * Name.
   *
   * @memberof User
   */
  name: string;

  /**
   * Clones the object.
   *
   * @returns User object with same values as current one
   * @memberof User
   */
  clone(): User {
    const copy = new User();

    copy.name = this.name;

    return copy;
  }
}