/**
 * Gets the item from local storage if it is defined.
 *
 * @static
 * @param {string} itemName Item's name
 * @returns value associated with item name or null if local storage is not defined
 */
export function getLocalStorageItem(itemName: string) {
  if (typeof localStorage !== 'undefined') {
    const value = localStorage.getItem(itemName);
    if (value == null || value === 'undefined' || value === 'null') {
      return null;
    }

    return JSON.parse(value);
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
export function setLocalStorageItem(itemName: string, itemValue) {
  if (typeof localStorage !== 'undefined') {
    if (itemValue == null) {
      localStorage.removeItem(itemName);
    } else {
      localStorage.setItem(itemName, JSON.stringify(itemValue));
    }
  }
}

/**
 * Removes the item from local storage if it is defined.
 *
 * @static
 * @param {string} itemName Item's name
 */
export function removeLocalStorageItem(itemName: string) {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(itemName);
  }
}
