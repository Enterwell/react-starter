// Mount import
import { mount } from '@cypress/react';

// Component import
import UserInformation from '../../components/UserInformation/UserInformation';

// As we don't pass any additional props, we can extract the mount call.
beforeEach(() => {
  mount(<UserInformation />);
});

/**
 * User information component tests.
 */
describe('User information', () => {
  /**
   * Testing that the component correctly renders without passing any props.
   */
  it('Shows user information component with default props', () => {
    cy.get('[class*="container"]')
      .should('exist')
      .should('be.visible');
  });

  /**
   * Testing that the component initially shows user's username as 'John Doe'.
   */
  it('Initially shows default "John Doe" username greeting', () => {
    cy.get('[class*="name"]')
      .should('include.text', 'Hi John Doe!');
  });

  /**
   * Testing that the user's username updates after entering it in the component's input.
   */
  it('Updates greeting name when the name is entered in the input', () => {
    cy.get('input')
      .type('Custom Name{enter}');

    cy.get('input')
      .should('have.text', '');

    cy.get('[class*="name"]')
      .should('include.text', 'Hi Custom Name!');
  });

  /**
   * Testing that the user's username is saved to the browser's local storage.
   */
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
