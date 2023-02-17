/**
 * Gets the item from local storage if it is defined.
 *
 * @static
 * @param {string} itemName Item's name
 * @returns value associated with item name or null if local storage is not defined
 */
export function getLocalStorageItem(itemName) {
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
 */
export function setLocalStorageItem(itemName, itemValue) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(itemName, JSON.stringify(itemValue));
  }
}

/**
 * Removes the item from local storage if it is defined.
 *
 * @static
 * @param {string} itemName Item's name
 */
export function removeLocalStorageItem(itemName) {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(itemName);
  }
}
