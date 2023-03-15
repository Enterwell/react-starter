import { mapDtoToUser } from '../mappers/UsersMapper';
import User from '../models/User';
import { getLocalStorageItem, setLocalStorageItem } from '../services/LocalStorageService';

/**
 * Gets the User from API.
 *
 * @static
 * @returns {User} User data
 */
export function getUser() {
  const user = getLocalStorageItem('user');

  return mapDtoToUser(user);
}

/**
 * Edits the User.
 *
 * @static
 * @param {User | undefined} payload User data
 * @returns {User} User data
 */
export function editUser(payload: User | undefined) {
  setLocalStorageItem('user', payload);

  return payload;
}
