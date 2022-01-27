// Components import
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

// MUI theme import
import theme from '../config/theme';

// Global styles import
import '../styles/global.scss';

// Next image import
import * as NextImage from 'next/image';

// Fix for getting next/image to work with Storybook
// Source link https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage {...props} unoptimized />
  )
});

const darkTheme = theme(true);

// Integrating with the MUI by defining a global decorator
export const decorators = [
  Story => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </StyledEngineProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
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
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
    ]
  }
}