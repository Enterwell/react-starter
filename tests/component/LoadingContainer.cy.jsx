// Mount import
import { mount } from '@cypress/react';

// Component import
import LoadingContainer from '../../components/LoadingContainer/LoadingContainer';

/**
 * Loading container component tests.
 */
describe('Loading container', () => {
  /**
   * Testing that the loading indicator is not shown when using the component
   * without passing any props.
   */
  it('No loading indicator by default', () => {
    mount(
      <LoadingContainer>
        Content inside loading container
      </LoadingContainer>
    );

    cy.get('[class*="container"]')
      .should('have.text', 'Content inside loading container');
  });

  /**
   * Testing that the loading indicator is show when passing 'true' to 'isLoading' prop.
   */
  it('Loading indicator when the "isLoading" flag is true', () => {
    mount(
      <LoadingContainer isLoading>
        Content inside loading container
      </LoadingContainer>
    );

    cy.get('[class*="container"]')
      .should('not.have.text', 'Content inside loading container');

    cy.get('[role=progressbar]')
      .should('be.visible');
  });
});
