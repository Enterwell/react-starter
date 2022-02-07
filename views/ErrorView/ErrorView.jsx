// Styles import
import styles from './ErrorView.module.scss';

/**
 * Function represents the view corresponding to the error page.
 *
 * @returns view's elements
 */
function Error() {
  return (
    <div className={styles.container}>
      There was an error. Please refresh the page.
    </div>
  );
}

export default Error;
