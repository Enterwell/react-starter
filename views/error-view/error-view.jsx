// Styles import
import styles from './error-view.module.scss';

/**
 * Function represents the view corresponding to the error page.
 *
 * @returns view's elements
 */
function Error() {
  return (
    <div className={styles.container}>
      Looks like your code did an oopsie!
    </div>
  );
}

export default Error;
