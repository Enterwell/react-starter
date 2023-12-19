import { getLocalStorageItem, setLocalStorageItem } from '@/services/LocalStorageService';
import User from '@/models/User';
import { mapDtoToUser } from '@/mappers/UsersMapper';

/**
 * Gets the User from API.
 *
 * @static
 * @returns User data
 */
export function getUser(): User {
  const user = getLocalStorageItem('user');

  return mapDtoToUser(user);
}

/**
 * Edits the User.
 *
 * @static
 * @param payload User data
 * @returns User data
 */
export function editUser(payload: User): User {
  setLocalStorageItem('user', payload);

  return payload;
}
