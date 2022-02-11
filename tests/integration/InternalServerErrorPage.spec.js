/**
 * Internal server error page tests.
 */
describe('Internal server error page', () => {
  /**
   * Testing that the internal server error page is shown when getting 500 status code.
   */
  it('shows when bad is entered', () => {
    cy.visit('/500', { failOnStatusCode: false });

    cy.get('h1').contains('500');

    cy.wait(3000);
    cy.screenshot('500-page');
  });
});
