// Components import
import { CssBaseline, ThemeProvider } from '@mui/material';
import NextAppDirEmotionCacheProvider from '../components/providers/ThemeRegistry/EmotionCache';

// Storycap managed mode decorator import
import { withScreenshot } from 'storycap';

// MUI theme import
import theme from '../config/theme';

// Global styles import
import '../styles/global.scss';

// Font import
import { roboto } from '../config/fonts';

const darkTheme = theme(true);

// Integrating with the MUI by defining a global decorator
export const decorators = [
  withScreenshot,
  (Story) => (
    <div className={roboto.className}>
      <NextAppDirEmotionCacheProvider options={{ key: 'storybook-mui', prepend: true }}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </div>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  layout: 'centered',
  backgrounds: {
    default: darkTheme.palette.mode,
    values: [
      {
        name: darkTheme.palette.mode,
        value: darkTheme.palette.background.default
      },
      // Prettier colors than the default ones (by default only light and dark ones are available)
      {
        name: 'twitter',
        value: '#00aced'
      },
      {
        name: 'facebook',
        value: '#3b5998'
      }
    ]
  },
  screenshot: {
    // Global screenshot parameters go here (e.g. viewport)
    // Parameters can also be defined for each individual story
    // See more at https://github.com/reg-viz/storycap#managed-mode
  }
};
