// General import
import { useEffect, useState, useCallback } from 'react';

// Theme service import
import ThemeService from '../services/ThemeService';

/**
 * Hook that stores state about is dark mode on.
 *
 * @returns {[boolean, Function]} Tuple containing the state value and state setter.
 */
export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState();

  useEffect(() => {
    setIsDarkMode(ThemeService.getIsDarkMode());
  }, []);

  useEffect(() => {
    ThemeService.setIsDarkMode(isDarkMode);
  }, [isDarkMode]);

  const toggleThemeChange = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, [setIsDarkMode]);

  return [isDarkMode, toggleThemeChange];
}
