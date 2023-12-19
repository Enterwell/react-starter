import { getLocalStorageItem, setLocalStorageItem } from './LocalStorageService';

/**
 * Loads the flag representing is the dark theme selected from the local storage.
 *
 * @static
 * @returns flag representing is the dark theme selected
 */
export function getIsDarkMode() {
  return getLocalStorageItem('isDarkMode') || false;
}

/**
 * Saves the user's selected theme to the local storage.
 *
 * @static
 * @param {boolean} isDark is dark mode selected flag
 */
export function setIsDarkMode(isDark) {
  setLocalStorageItem('isDarkMode', isDark);
}
