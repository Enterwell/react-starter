import { Metadata } from 'next';

import PokemonDetailsView from '@/views/PokemonDetailsView/PokemonDetailsView';

/**
 * Pokemon details page metadata.
 */
export const metadata: Metadata = {
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
