import { mapDtoToUser } from '../mappers/UsersMapper';
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
 * @param {User} payload User data
 * @returns {User} User data
 */
export function editUser(payload) {
  setLocalStorageItem('user', payload);

  return payload;
}
