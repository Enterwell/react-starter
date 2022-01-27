// General imports
import Head from 'next/head';

// Components import
import { StylesProvider } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import UserInformation from '../components/UserInformation/UserInformation';
import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher';

// Use dark mode hook import
import useDarkMode from '../hooks/useDarkMode';

// Configs import
import theme from '../config/theme';

// Global styles import
import '../styles/global.scss';

// Checks whether app is in production or development mode
const isProduction = process.env.NODE_ENV === 'production';

/**
 * Custom app component. This component is wrapper around each page so the logic common to
 * all pages should be placed here. More about custom app can be found on the following link
 * https://nextjs.org/docs/advanced-features/custom-app.
 *
 * @param {Object} props Various component's props
 * @returns component's elements
 */
function App(props) {
  const {
    Component,
    pageProps
  } = props;

  const [isDarkMode, toggleThemeChange] = useDarkMode();

  const finalTheme = theme(isDarkMode);

  // Resolving dark mode 'blink'.
  if (isDarkMode == null) {
    return null;
  }

  return (
    <>
      <Head>
        <title>
          {`${Component.title || 'React starter'} ${!isProduction ? ' - development' : ''}`}
        </title>
      </Head>
      <StylesProvider injectFirst>
        <ThemeProvider theme={finalTheme}>
          <CssBaseline />
          <ThemeSwitcher
            isDarkMode={isDarkMode}
            onModeChange={toggleThemeChange}
          />
          {Component.showUser && (
            <UserInformation />
          )}
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </>
  );
}

export default App;
