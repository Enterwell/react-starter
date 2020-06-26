// General imports
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';

// Components import
import Link from 'next/link';
import LoadingContainer from '../../components/LoadingContainer/LoadingContainer';

// Styles import
import styles from './PokemonDetailsView.module.scss';

/**
 * Function represents the view corresponding to the Pokemon details page.
 *
 * @param {Object} props Various component's props
 * @returns view's elements
 */
function PokemonDetailsView(props) {
  const { viewModel } = props;
  const {
    userAppModel,
    isLoading,
    pokemon,
    loadPokemon
  } = viewModel;
  const {
    user
  } = userAppModel;

  const router = useRouter();

  useEffect(() => {
    if (router.query && router.query.id) {
      loadPokemon(router.query.id);
    }
  }, [router.query]);

  return (
    <LoadingContainer isLoading={isLoading}>
      {pokemon && (
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
          <div className={styles.feedback}>
            {`What do you think about ${pokemon.name} `}
            <span className={styles.user}>
              {`${user ? user.name : 'John Doe'}`}
            </span>
            ?
          </div>
          <Link href="/pokemons">
            <a className={styles.link}>
              Go back
            </a>
          </Link>
        </div>
      )}
    </LoadingContainer>
  );
}

export default observer(PokemonDetailsView);
