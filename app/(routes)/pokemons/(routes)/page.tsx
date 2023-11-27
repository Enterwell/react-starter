import { Metadata } from 'next';

import PokemonsView from '@/views/PokemonsView/PokemonsView';

/**
 * Pokemons page metadata.
 */
export const metadata: Metadata = {
  title: 'Pokemons'
};

/**
 * Function representing the PokemonsPage component.
 *
 * @returns PokemonsPage component
 */
export default function PokemonsPage() {
  return <PokemonsView />;
}
