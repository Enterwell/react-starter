import { useEffect, useState, useCallback } from 'react';

import { getIsDarkMode, setIsDarkMode as persistIsDarkMode } from '@/services/ThemeService';

/**
 * Hook that stores state about is dark mode on.
 *
 * @returns Tuple containing the state value and state setter.
 */
export default function useDarkMode(): [boolean, () => void] {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setIsDarkMode(getIsDarkMode());
  }, []);

  useEffect(() => {
    persistIsDarkMode(isDarkMode);
  }, [isDarkMode]);

  const toggleThemeChange = useCallback(() => {
    setIsDarkMode((prev: boolean) => !prev);
  }, []);

  return [isDarkMode, toggleThemeChange];
}
