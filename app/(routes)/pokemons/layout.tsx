import UserInformation from '@/components/UserInformation/UserInformation';

type PokemonsLayoutProps = {
  children: React.ReactNode;
};

/**
 * Function representing the PokemonsLayout component.
 *
 * @returns PokemonsLayout component
 */
export default function PokemonsLayout({ children }: PokemonsLayoutProps) {
  return (
    <>
      <UserInformation />
      {children}
    </>
  );
}
