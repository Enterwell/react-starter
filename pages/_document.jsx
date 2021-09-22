import React from 'react';

// Components import
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';

/**
 * Custom document component. It is used to augment application's
 * html any body tags. More about custom document can be found on the
 * following link https://nextjs.org/docs/advanced-features/custom-document.
 *
 * @class CustomDocument
 * @extends {Document}
 */
class CustomDocument extends Document {
  /**
   * Server side data requirements.
   *
   * @static
   * @param {Object} ctx Context
   * @returns initial props
   * @memberof CustomDocument
   */
  static async getInitialProps(ctx) {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App isServer {...props} />)
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
      isServer: false
    };
  }

  /**
   * Renders the component.
   *
   * @returns component's elements
   * @memberof CustomDocument
   */
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
