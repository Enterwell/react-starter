import User from '@/models/User';

/**
 * Maps the DTO to user model.
 *
 * @static
 * @param dto DTO
 * @returns User model
 */
export function mapDtoToUser(dto: any): User {
  if (dto === null) {
    return null;
  }

  const user = new User();

  user.name = dto.name;

  return user;
}
