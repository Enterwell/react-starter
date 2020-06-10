// General imports
import React from 'react';
import { create } from 'jss';

// Components import
import App from 'next/app';
import Head from 'next/head';
import { jssPreset, StylesProvider, ThemeProvider, CssBaseline } from '@material-ui/core';

// Configs import
import theme from '../config/theme';

// Global styles and colors import
import '../styles/global.scss';
import '../styles/colors.scss';

// jss-insertion-point insert
if (typeof document !== 'undefined') {
  const styleNode = document.createComment('jss-insertion-point');
  document.head.insertBefore(styleNode, document.head.firstChild);
}

// Checks whether app is in production or development mode
const isProduction = process.env.NODE_ENV === 'production';

/**
 * Custom app component. This component is wrapper around each page so the logic common to
 * all pages should be placed here. More about custom app can be found on the following link
 * https://nextjs.org/docs/advanced-features/custom-app.
 *
 * @class CustomApp
 * @extends {App}
 */
class CustomApp extends App {
  /**
   * Handles the componentDidMount lifecycle event.
   *
   * @memberof CustomApp
   */
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  /**
   * Renders the component.
   *
   * @returns component's elements
   * @memberof CustomApp
   */
  render() {
    const {
      Component,
      pageProps
    } = this.props;

    return (
      <>
        <Head>
          <title>
            {`${Component.title || 'React starter'} ${!isProduction ? ' - development' : ''}`}
          </title>
        </Head>
        <StylesProvider
          jss={
            create({
              ...jssPreset(),
              // Define a custom insertion point that JSS will look for when injecting the
              // styles into the DOM
              insertionPoint: 'jss-insertion-point'
            })
          }
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </StylesProvider>
      </>
    );
  }
}

export default CustomApp;
