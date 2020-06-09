// General imports
import React from 'react';

// Icons import
import HelpIcon from '../public/assets/svgs/help.svg';

// Styles import
import styles from './index.module.scss';

function Index() {
  return (
    <div className={styles.container}>
      <span>Welcome</span>
      <HelpIcon />
    </div>
  );
}

export default Index;
