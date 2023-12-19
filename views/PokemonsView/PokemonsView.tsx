'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';

import PokemonsViewModel from '@/view-models/PokemonsViewModel';
import { withViewModel } from '@/helpers/ComponentsHelper';
import Pagination from '@/components/Pagination/Pagination';

import styles from './PokemonsView.module.scss';

type PokemonsViewProps = {
  viewModel: PokemonsViewModel;
}

/**
 * Function representing the view corresponding to the Pokemons page.
 *
 * @returns PokemonsView component
 */
function PokemonsView({ viewModel }: PokemonsViewProps) {
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

// @ts-ignore
export default withViewModel(observer(PokemonsView), PokemonsViewModel);
