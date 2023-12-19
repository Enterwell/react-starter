export type LocalStorageValue<T> = T | null;

/**
 * Gets the item from local storage if it is defined.
 *
 * @static
 * @param itemName Item's name
 * @returns value associated with item name or null if local storage is not defined
 */
export function getLocalStorageItem<T>(itemName: string): LocalStorageValue<T> {
  if (typeof localStorage !== 'undefined') {
    const value = localStorage.getItem(itemName);

    if (value == null || value === 'undefined' || value === 'null') {
      return null;
    }

    return JSON.parse(value) as T;
  }
  return null;
}

/**
 * Sets the item to local storage if it is defined.
 *
 * @static
 * @param itemName Item's name
 * @param itemValue Item's value
 */
export function setLocalStorageItem<T>(itemName: string, itemValue: LocalStorageValue<T>) {
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
 * @param itemName Item's name
 */
export function removeLocalStorageItem(itemName: string) {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(itemName);
  }
}
