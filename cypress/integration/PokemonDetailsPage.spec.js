/**
 * API requests fixtures,
 */
beforeEach(() => {
  cy.server();
  cy.route('GET', '**/pokemon/1', 'fixture:pokemonId1');
});

/**
 * Pokemon details page tests.
 */
describe('Pokemon details page', () => {
  it('shows the Pokemon\'s details data', () => {
    cy.visit('/pokemons/1');

    cy.get('[class*="PokemonDetailsView_name"]')
      .contains('bulbasaur');
  });

  it('has working link to Pokemons page', () => {
    cy.visit('/pokemons/1');

    cy.get('[class*="PokemonDetailsView_link"]')
      .click();

    cy.location()
      .should((loc) => {
        expect(loc.pathname).to.eq('/pokemons');
      });
  });

  it('updates question when name is changed', () => {
    cy.visit('/pokemons/1');

    cy.get('[class*="UserInformation_name"]')
      .contains('John Doe');

    cy.get('[class*="PokemonDetailsView_user"]')
      .contains('John Doe');

    cy.get('input')
      .type('Matej')
      .type('{enter}');

    cy.get('input')
      .should('have.value', '');

    cy.get('[class*="UserInformation_name"]')
      .contains('Matej');

    cy.get('[class*="PokemonDetailsView_user"]')
      .contains('Matej');
  });
});
