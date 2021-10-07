/**
 * Class represents the user model.
 *
 * @class User
 */
class User {
  /**
   * Name.
   *
   * @type {string}
   * @memberof User
   */
  name;

  /**
   * Clones the object.
   *
   * @returns User object with same values as current one
   * @memberof User
   */
  clone() {
    const copy = new User();

    copy.name = this.name;

    return copy;
  }
}

export default User;
