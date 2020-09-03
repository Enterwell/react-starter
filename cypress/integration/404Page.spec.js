/**
 * 404 page tests.
 */
describe('404 page', () => {
  it('shows when bad is entered', () => {
    cy.visit('/this/is/some/bad/url', { failOnStatusCode: false });

    cy.get('h1').contains('404');
  });
});
