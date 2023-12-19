// Components import
import Link from 'next/link';

// Styles import
import styles from './IndexView.module.scss';

/**
 * Function representing the view corresponding to the index page.
 *
 * @returns IndexView component
 */
export default function IndexView() {
  return (
    <div className={styles.container}>
      <span>
        Not much to see here. If you are intereseted in Pokemons, visit
      </span>
      <Link
        href="/pokemons"
        className={styles.link}
        data-testid="pokemons-link"
      >
        Pokemons page
      </Link>
    </div>
  );
}
