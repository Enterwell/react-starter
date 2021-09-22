// General imports
import { createTheme } from '@mui/material/styles';

/**
 * Material-UI theme.
 *
 * @type {Object}
 */
const theme = createTheme({
  palette: {
    mode: 'dark',
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
