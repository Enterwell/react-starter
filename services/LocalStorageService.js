/**
 * Class represents the local storage service. It implements methods needed for communication
 * with local storage.
 *
 * @class LocalStorageService
 */
class LocalStorageService {
  /**
   * Gets the item from local storage if it is defined.
   *
   * @static
   * @param {string} itemName Item's name
   * @returns value associated with item name or null if local storage is not defined
   * @memberof LocalStorageService
   */
  static get(itemName) {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem(itemName));
    }

    return null;
  }

  /**
   * Sets the item to local storage if it is defined.
   *
   * @static
   * @param {string} itemName Item's name
   * @param {any} itemValue Item's value
   * @memberof LocalStorageService
   */
  static set(itemName, itemValue) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(itemName, JSON.stringify(itemValue));
    }
  }

  /**
   * Removes the item from local storage if it is defined.
   *
   * @static
   * @param {string} itemName Item's name
   * @memberof LocalStorageService
   */
  static remove(itemName) {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(itemName);
    }
  }
}

export default LocalStorageService;
