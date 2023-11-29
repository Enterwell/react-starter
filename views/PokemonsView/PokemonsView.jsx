'use client';

// General imports
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

// Components import
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '../../components/Pagination/Pagination';

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
    pageNumber,
    pageSize,
    totalPokemons
  } = viewModel;

  useEffect(() => {
    if (pageNumber === 0) {
      loadPokemons();
    }
  }, [loadPokemons, pageNumber]);

  const handlePageChange = (_, newPage) => {
    loadPokemons(newPage - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {pokemons.map((p) => (
          <Link
            key={p.id}
            href={`/pokemons/${p.id}`}
            className={styles.item}
            data-testid="pokemon-item"
          >
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
          </Link>
        ))}
      </div>
      <Pagination
        color="primary"
        count={Math.max(1, Math.ceil(totalPokemons / pageSize))}
        onChange={handlePageChange}
        page={pageNumber + 1}
        siblingCount={2}
      />
    </div>
  );
}

export default withViewModel(observer(PokemonsView), PokemonsViewModel);
