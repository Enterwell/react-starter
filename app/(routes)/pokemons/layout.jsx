import UserInformation from '../../../components/UserInformation/UserInformation';

/**
 * Function representing the PokemonsLayout component.
 *
 * @returns PokemonsLayout component
 */
export default function PokemonsLayout({ children }) {
  return (
    <>
      <UserInformation />
      {children}
    </>
  );
}
