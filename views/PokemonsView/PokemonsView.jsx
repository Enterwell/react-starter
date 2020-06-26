// General imports
import { useEffect } from 'react';
import { observer } from 'mobx-react';

// Components import
import Link from 'next/link';

// Styles import
import styles from './PokemonsView.module.scss';

/**
 * Function represents the view corresponding to the Pokemons page.
 *
 * @param {Object} props Various component's props
 * @returns view's elements
 */
function PokemonsView(props) {
  const { viewModel } = props;
  const {
    pokemons,
    loadPokemons,
    pageNumber
  } = viewModel;

  useEffect(() => {
    if (pageNumber === 0) {
      loadPokemons();
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {pokemons.map((p) => (
          <Link
            key={p.id}
            href="/pokemons/[id]"
            as={`/pokemons/${p.id}`}
          >
            <div className={styles.item}>
              <img
                className={styles.image}
                src={p.image}
                alt={p.name}
              />
              <span className={styles.name}>
                {p.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.pagination}>
        <div
          className={styles.arrow}
          onClick={() => loadPokemons(pageNumber - 1)}
        >
          &lt;
        </div>
        <span>{pageNumber + 1}</span>
        <div
          className={styles.arrow}
          onClick={() => loadPokemons(pageNumber + 1)}
        >
          &gt;
        </div>
      </div>
    </div>
  );
}

export default observer(PokemonsView);
