// Services import
import LocalStorageService from '../services/LocalStorageService';

// Mappers import
import UsersMapper from '../mappers/UsersMapper';

/**
 * Class represents the user repository used for accessing and modifying user data.
 *
 * @class UsersRepository
 */
class UsersRepository {
  /**
   * Gets the User from API.
   *
   * @static
   * @returns {User} User data
   * @memberof UsersRepository
   */
  static getUser() {
    const user = LocalStorageService.get('user');

    return UsersMapper.mapDtoToUser(user);
  }

  /**
   * Edits the User.
   *
   * @static
   * @param {User} payload User data
   * @returns {User} User data
   * @memberof UsersRepository
   */
  static editUser(payload) {
    LocalStorageService.set('user', payload);

    return payload;
  }
}

export default UsersRepository;
