// General imports
import { createTheme } from '@mui/material/styles';

import colors from './colors';

/**
 * Material-UI theme.
 *
 * @param isDarkMode is dark mode selected flag
 * @type Material-UI theme
 */
export default function getTheme(isDarkMode: boolean) {
  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: colors.primary,
        contrastText: colors.white
      },
      secondary: {
        main: colors.secondary.base,
        contrastText: colors.secondary.text
      }
    }
  });
}
