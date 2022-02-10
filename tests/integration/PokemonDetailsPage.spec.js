/**
 * Pokemon details page tests.
 */
describe('Pokemon details page', () => {
  /**
   * API requests fixtures.
   */
  beforeEach(() => {
    cy.intercept('GET', '**/pokemon/1', { fixture: 'pokemonId1' });
    cy.visit('/pokemons/1');
  });

  /**
   * Testing that the page shows pokemon's details data.
   */
  it('shows the Pokemon\'s details data', () => {
    cy.get('[class*="PokemonDetailsView_name"]')
      .contains('bulbasaur');

    cy.wait(3000);
    cy.screenshot('pokemon-details');
  });

  /**
   * Testing that the page contains link to go back to the pokemons page.
   */
  it('has working link to Pokemons page', () => {
    cy.get('[class*="PokemonDetailsView_link"]')
      .click();

    cy.location()
      .should((loc) => {
        expect(loc.pathname).to.eq('/pokemons');
      });
  });

  /**
   * Testing that the page has user information component with which the user can change
   * his username and that the name referring to the user will be changed accordingly.
   */
  it('updates question when name is changed', () => {
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

    cy.wait(3000);
    cy.screenshot('pokemon-details-question-name-updated');
  });
});
