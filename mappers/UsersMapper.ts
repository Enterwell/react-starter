import User from '../models/User';

/**
 * Maps the DTO to user model.
 *
 * @static
 * @param {Object|null} dto DTO
 * @returns User model
 */
export function mapDtoToUser(dto: null | { name: string }) {
  if (dto === null) {
    return null;
  }

  const user = new User();

  user.name = dto.name;

  return user;
}
