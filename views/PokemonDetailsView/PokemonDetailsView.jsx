// General imports
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

// Components import
import Link from 'next/link';
import LoadingContainer from '../../components/LoadingContainer/LoadingContainer';

// View models import
import PokemonDetailsViewModel from '../../view-models/PokemonDetailsViewModel';

// Styles import
import styles from './PokemonDetailsView.module.scss';

// View model
const pokemonDetailsViewModel = PokemonDetailsViewModel.get();

/**
 * Function represents the view corresponding to the Pokemon details page.
 *
 * @returns view's elements
 */
function PokemonDetailsView() {
  const {
    isLoading,
    pokemon,
    loadPokemon
  } = pokemonDetailsViewModel;

  const router = useRouter();

  useEffect(() => {
    if (router.query && router.query.id) {
      loadPokemon(router.query.id);
    }
  }, [router.query]);

  return (
    <LoadingContainer isLoading={isLoading}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={pokemon.image}
          alt={pokemon.name}
        />
        <span className={styles.name}>
          {pokemon.name}
        </span>
        <div className={styles.data}>
          <div>
            <span className={styles.label}>
              Weight:
            </span>
            <span>
              {pokemon.weight}
            </span>
          </div>
          <div>
            <span className={styles.label}>
              Height:
            </span>
            <span>
              {pokemon.height}
            </span>
          </div>
          <div>
            <span className={styles.label}>
              Base experience:
            </span>
            <span>
              {pokemon.baseExperience}
            </span>
          </div>
        </div>
        <Link href="/pokemons">
          <a className={styles.link}>
            Go back
          </a>
        </Link>
      </div>
    </LoadingContainer>
  );
}

export default observer(PokemonDetailsView);
