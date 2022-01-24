// Mount import
import { mount } from '@cypress/react';

// Component import
import UserInformation from './UserInformation';

// As we don't pass any additional props, we can extract the mount call.
beforeEach(() => {
  mount(<UserInformation />);
});

/**
 * User information component tests.
 */
describe('User information', () => {
  it('Shows user information component with default props', () => {
    cy.get('[class*="container"]')
      .should('exist')
      .should('be.visible');
  });

  it('Initially shows default "John Doe" username greeting', () => {
    cy.get('[class*="name"]')
      .should('include.text', 'Hi John Doe!');
  });

  it('Shows information for the user input', () => {
    cy.get('[class*="newNameWrapper"]')
      .should('include.text', 'That\'s not really my name. You should rather call me');
  });

  it('Shows input', () => {
    cy.get('input')
      .should('exist')
      .should('be.visible');
  });

  it('Updates greeting name when the name is entered in the input', () => {
    cy.get('input')
      .type('Custom Name{enter}');

    cy.get('input')
      .should('have.text', '');

    cy.get('[class*="name"]')
      .should('include.text', 'Hi Custom Name!');
  });

  it('Stores the updated greeting name in localStorage', () => {
    cy.get('input')
      .type('Custom Name{enter}');

    cy.get('input')
      .should('have.text', '');

    cy.should(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(localStorage.getItem('user')).to.not.be.null;
      expect(localStorage.getItem('user')).to.have.string('{"name":"Custom Name"}');
    });
  });
});
