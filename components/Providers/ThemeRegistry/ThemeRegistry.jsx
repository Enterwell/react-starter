'use client';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import theme from '../../../config/theme';
import useDarkMode from '../../../hooks/useDarkMode';
import ThemeSwitcher from '../../ThemeSwitcher/ThemeSwitcher';
import NextAppDirEmotionCacheProvider from './EmotionCache';

/**
 * Function representing the ThemeRegistry component.
 *
 * @returns ThemeRegistry component
 */
export default function ThemeRegistry({ children }) {
  const [isDarkMode, toggleThemeChange] = useDarkMode();

  const finalTheme = theme(isDarkMode);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui', prepend: true }}>
      <ThemeProvider theme={finalTheme}>
        <CssBaseline />

        <ThemeSwitcher
          isDarkMode={isDarkMode ?? false}
          onModeChange={toggleThemeChange}
        />

        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
