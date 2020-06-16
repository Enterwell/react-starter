// General imports
import { createMuiTheme } from '@material-ui/core';

/**
 * Material-UI theme.
 *
 * @type {Object}
 */
const theme = createMuiTheme({
  palette: {
    type: 'dark',
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
