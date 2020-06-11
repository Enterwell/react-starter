// General imports
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

// View models import
import PokemonsViewModel from '../../view-models/PokemonsViewModel';

// Styles import
import styles from './PokemonsView.module.scss';

// View model
const pokemonsViewModel = PokemonsViewModel//.get();

/**
 * Function represents the view corresponding to the Pokemons page.
 *
 * @returns view's elements
 */
function PokemonsView() {
  const {
    pokemons,
    loadPokemons,
    pageNumber
  } = pokemonsViewModel;

  useEffect(() => {
    console.log(pokemonsViewModel);

    if (pageNumber === 0) {
      loadPokemons();
    }
  }, []);

  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {pokemons.map((p) => (
          <div
            key={p.id}
            className={styles.item}
            onClick={() => router.push(`/pokemons/${p.id}`)}
          >
            <img
              className={styles.image}
              src={p.image}
              alt={p.name}
            />
            <span className={styles.name}>
              {p.name}
            </span>
          </div>
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
