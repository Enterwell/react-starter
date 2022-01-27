// General imports
import { createTheme } from '@mui/material/styles';

/**
 * Material-UI theme.
 *
 * @param {boolean} isDarkMode is dark mode selected flag
 * @type {Object}
 */
const theme = (isDarkMode) => createTheme({
  palette: {
    mode: isDarkMode ? 'dark' : 'light',
    primary: {
      main: '#2aa876',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ffd265',
      contrastText: '#7e621d'
    }
  }
});

export default theme;
