import PokemonDetailsView from '../../../../../views/PokemonDetailsView/PokemonDetailsView';

/**
 * Pokemon details page metadata.
 *
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: 'Pokemon details'
};

/**
 * Function representing the PokemonDetailsPage component.
 *
 * @returns PokemonDetailsPage component
 */
export default function PokemonDetailsPage() {
  return <PokemonDetailsView />;
}
