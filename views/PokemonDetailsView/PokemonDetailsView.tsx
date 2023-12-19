'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';

import PokemonDetailsViewModel from '@/view-models/PokemonDetailsViewModel';
import { withViewModel } from '@/helpers/ComponentsHelper';
import LoadingContainer from '@/components/LoadingContainer/LoadingContainer';

// Styles import
import styles from './PokemonDetailsView.module.scss';

type PokemonDetailsViewProps = {
  viewModel: PokemonDetailsViewModel;
}

/**
 * Function representing the view corresponding to the Pokemon details page.
 *
 * @returns PokemonDetailsView component
 */
function PokemonDetailsView({ viewModel }: PokemonDetailsViewProps) {
  const {
    userAppModel,
    isLoading,
    pokemon,
    loadPokemon,
    onUnmount
  } = viewModel;
  const {
    user
  } = userAppModel;

  const params = useParams();

  useEffect(() => {
    if (params.pokemonId) {
      loadPokemon(Number(params.pokemonId));
    }

    return onUnmount;
  }, [loadPokemon, onUnmount, params]);

  return (
    <LoadingContainer isLoading={isLoading}>
      {pokemon && (
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={250}
              height={250}
            />
          </div>
          <span className={styles.name} data-testid="pokemon-name">
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
          <div className={styles.feedback}>
            {`What do you think about ${pokemon.name} `}
            <span className={styles.user} data-testid="pokemon-user-name">
              {`${user ? user.name : 'John Doe'}`}
            </span>
            ?
          </div>
          <Link
            href="/pokemons"
            className={styles.link}
            data-testid="pokemon-link"
          >
            Go back
          </Link>
        </div>
      )}
    </LoadingContainer>
  );
}

// @ts-ignore
export default withViewModel(observer(PokemonDetailsView), PokemonDetailsViewModel);
