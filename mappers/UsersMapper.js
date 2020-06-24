// Models import
import User from '../models/User';

/**
 * Class represents the users mapper. It provides functions for mapping DTOs
 * to user data.
 *
 * @class UsersMapper
 */
class UsersMapper {
  /**
   * Maps the DTO to user model.
   *
   * @static
   * @param {Object|null} dto DTO
   * @returns User model
   * @memberof UsersMapper
   */
  static mapDtoToUser(dto) {
    if (dto === null) {
      return null;
    }

    const user = new User();

    user.name = dto.name;

    return user;
  }
}

export default UsersMapper;
