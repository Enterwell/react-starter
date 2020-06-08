// General imports
import React from 'react';

// Components import
import Head from 'next/head';

// Icons import
import HelpIcon from '../public/assets/svgs/help.svg';

// Styles import
import styles from './index.module.scss';

function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Enterwell's React starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <span>Welcome</span>
      <HelpIcon />
    </div>
  );
}

export default Index;
