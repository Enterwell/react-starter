// Service import
import LocalStorageService from './LocalStorageService';

/**
 * Class represents the theme service.
 * It uses local storage to handle user's selected page theme.
 *
 * @class ThemeService
 */
class ThemeService {
  /**
   * Loads the flag representing is the dark theme selected from the local storage.
   *
   * @static
   * @returns flag representing is the dark theme selected
   * @memberof ThemeService
   */
  static getIsDarkMode() {
    const isDarkMode = LocalStorageService.get('isDarkMode');

    return isDarkMode || false;
  }

  /**
   * Saves the user's selected theme to the local storage.
   *
   * @static
   * @param {boolean} isDark is dark mode selected flag
   * @memberof ThemeService
   */
  static setIsDarkMode(isDark) {
    LocalStorageService.set('isDarkMode', isDark);
  }
}

export default ThemeService;
