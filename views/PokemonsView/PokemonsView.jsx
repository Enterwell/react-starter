// General imports
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

// Components import
import Link from 'next/link';
import Image from 'next/image';

// View models import
import PokemonsViewModel from '../../view-models/PokemonsViewModel';

// Helpers import
import { withViewModel } from '../../helpers/ComponentsHelper';

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
            passHref
          >
            <div className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image
                  src={p.image}
                  alt={p.name}
                  width={36}
                  height={36}
                />
              </div>
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

export default withViewModel(observer(PokemonsView), PokemonsViewModel);
