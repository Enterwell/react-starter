// General imports
import Head from 'next/head';

// Components import
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import UserInformation from '../components/UserInformation/UserInformation';
import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher';
import createEmotionCache from '../config/createEmotionCache';

// Use dark mode hook import
import useDarkMode from '../hooks/useDarkMode';

// Configs import
import theme from '../config/theme';

// Global styles import
import '../styles/global.scss';

// Checks whether app is in production or development mode
const isProduction = process.env.NODE_ENV === 'production';

const clientSideEmotionCache = createEmotionCache();

/**
 * Custom app component. This component is wrapper around each page so the logic common to
 * all pages should be placed here. More about custom app can be found on the following link
 * https://nextjs.org/docs/advanced-features/custom-app.
 *
 * @param {Object} props Various component's props
 * @returns component's elements
 */
function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [isDarkMode, toggleThemeChange] = useDarkMode();
  const finalTheme = theme(isDarkMode);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          {`${Component.title || 'React starter'} ${!isProduction ? ' - development' : ''}`}
        </title>
      </Head>
      <ThemeProvider theme={finalTheme}>
        <CssBaseline />
        <ThemeSwitcher
          isDarkMode={isDarkMode ?? false}
          onModeChange={toggleThemeChange}
        />
        {Component.showUser && (
        <UserInformation />
        )}
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
