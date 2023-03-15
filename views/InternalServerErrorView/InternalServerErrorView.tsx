// Styles import
import styles from './InternalServerErrorView.module.scss';

/**
 * Function represents the view corresponding to the internal server error page.
 *
 * @returns view's elements
 */
function InternalServerError() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        500
      </h1>
      <h2 className={styles.subtitle}>
        Ooops, something went wrong
      </h2>
    </div>
  );
}

export default InternalServerError;
