// General imports
import React from 'react';

// Components import
import App from 'next/app';
import Head from 'next/head';

// Checks whether app is in production or development mode
const isProduction = process.env.NODE_ENV === 'production';

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
        <Component {...pageProps} />
      </>
    );
  }
}

export default CustomApp;
