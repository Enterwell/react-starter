import { useEffect, useState, useCallback } from 'react';
import { getIsDarkMode, setIsDarkMode as persistIsDarkMode } from '../services/ThemeService';

/**
 * Hook that stores state about is dark mode on.
 *
 * @returns {[boolean, Function]} Tuple containing the state value and state setter.
 */
export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState();

  useEffect(() => {
    setIsDarkMode(getIsDarkMode());
  }, []);

  useEffect(() => {
    persistIsDarkMode(isDarkMode);
  }, [isDarkMode]);

  const toggleThemeChange = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  return [isDarkMode, toggleThemeChange];
}
