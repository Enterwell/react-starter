/**
 * Class represents the local storage service. It implements methods needed for communication
 * with local storage.
 *
 * @class LocalStorageService
 */
class LocalStorageService {
  /**
   * Gets the item from local storage.
   *
   * @static
   * @param {string} itemName Item's name
   * @returns value associated with item name
   * @memberof LocalStorageService
   */
  static get(itemName) {
    return JSON.parse(localStorage.getItem(itemName));
  }

  /**
   * Sets the item to local storage.
   *
   * @static
   * @param {string} itemName Item's name
   * @param {any} itemValue Item's value
   * @memberof LocalStorageService
   */
  static set(itemName, itemValue) {
    localStorage.setItem(itemName, JSON.stringify(itemValue));
  }

  /**
   * Removes the item from local storage.
   *
   * @static
   * @param {string} itemName Item's name
   * @memberof LocalStorageService
   */
  static remove(itemName) {
    localStorage.removeItem(itemName);
  }
}

export default LocalStorageService;
