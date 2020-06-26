// General imports
import 'mobx-react-lite/batchingForReactDom';

// Components import
import App from 'next/app';
import Head from 'next/head';
import { StylesProvider, ThemeProvider, CssBaseline } from '@material-ui/core';
import { Provider } from 'mobx-react';
import UserInformation from '../components/UserInformation/UserInformation';

// Factories import
import appModelsFactory from '../factories/appModelsFactory';
import viewModelsFactory from '../factories/viewModelsFactory';

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
 * @class CustomApp
 * @extends {App}
 */
class CustomApp extends App {
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
        <Provider
          appModels={appModelsFactory}
          viewModels={viewModelsFactory}
        >
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {Component.showUser && (
                <UserInformation userAppModel={appModelsFactory.userAppModel} />
              )}
              <Component {...pageProps} />
            </ThemeProvider>
          </StylesProvider>
        </Provider>
      </>
    );
  }
}

export default CustomApp;
