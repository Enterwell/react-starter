// General imports
import React from 'react';

// Components import
import Document, { Head, Main, NextScript } from 'next/document';

/**
 *
 *
 * @class CustomDocument
 * @extends {Document}
 */
class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
