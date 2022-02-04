/**
 * API requests fixtures,
 */
beforeEach(() => {
  cy.intercept('GET', '**/pokemon?offset=0&limit=10', { fixture: 'pokemonsOffset0Limit10' });
  cy.intercept('GET', '**/pokemon?offset=10&limit=10', { fixture: 'pokemonsOffset10Limit10' });
  cy.visit('/pokemons');
});

/**
 * Pokemons page tests.
 */
describe('Pokemons page', () => {
  /**
   * Testing that the page has list of 10 pokemons and that the first one is correct.
   */
  it('shows the Pokemons data', () => {
    cy.get('[class*="PokemonsView_item"]')
      .should('have.length', 10);

    cy.get('[class*="PokemonsView_item"]')
      .eq(1)
      .contains('ivysaur');
  });

  /**
   * Testing that the page contains working pagination with which we can change pages.
   */
  it('has working pagination', () => {
    cy.get('[class*="MuiPaginationItem-previousNext"]')
      .eq(1)
      .click();

    cy.get('[class*="PokemonsView_item"]')
      .should('have.length', 9);

    cy.get('[class*="PokemonsView_item"]')
      .eq(1)
      .contains('butterfree');

    cy.get('[class*="MuiPaginationItem-previousNext"]')
      .eq(0)
      .click();

    cy.get('[class*="PokemonsView_item"]')
      .should('have.length', 10);

    cy.get('[class*="PokemonsView_item"]')
      .eq(1)
      .contains('ivysaur');
  });

  /**
   * Testing that clicking on first pokemon from the page's list opens the
   * correct pokemon details page.
   */
  it('correctly opens Pokemon\'s details', () => {
    cy.get('[class*="PokemonsView_item"]')
      .eq(0)
      .click();

    cy.location()
      .should((loc) => {
        expect(loc.pathname).to.eq('/pokemons/1');
      });
  });
});
