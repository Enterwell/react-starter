// Styles import
import styles from './not-found-view.module.scss';

/**
 * Function represents the view corresponding to the 404 page.
 *
 * @returns views's elements
 */
function NotFoundView() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>
        404
      </span>
      <span className={styles.subtitle}>
        Just like Pokemons, this page doesn't exist
      </span>
    </div>
  );
}

export default NotFoundView;
