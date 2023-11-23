import PokemonsView from '../../../../views/PokemonsView/PokemonsView';

/**
 * Pokemons page metadata.
 *
 * @type {import('next').Metadata}
 */
export const metadata = {
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
