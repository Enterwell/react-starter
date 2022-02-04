// Mount import
import { mount } from '@cypress/react';

// Component import
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';

/**
 * Theme switcher component tests.
 */
describe('Theme switcher', () => {
  /**
   * Testing that the component correctly renders without passing any props.
   */
  it('Shows theme switcher with default props', () => {
    mount(<ThemeSwitcher />);

    cy.get('[class*="themeSwitcher"]')
      .should('exist')
      .should('be.visible');

    cy.get('[data-testid="LightModeIcon"]')
      .should('exist')
      .should('be.visible');
  });

  /**
   * Testing that the component shows light mode icon when passing 'false' to 'isDarkMode' prop.
   */
  it('Shows light mode icon when "isDarkMode" flag is false', () => {
    mount(<ThemeSwitcher isDarkMode={false} />);

    cy.get('[data-testid="LightModeIcon"]')
      .should('exist')
      .should('be.visible');
  });

  /**
   * Testing that the component shows dark mode icon when passing 'true' to 'isDarkMode' prop.
   */
  it('Shows dark mode icon when "isDarkMode" flag is true', () => {
    mount(<ThemeSwitcher isDarkMode />);

    cy.get('[data-testid="DarkModeIcon"]')
      .should('exist')
      .should('be.visible');
  });

  /**
   * Testing that the component correctly triggers callback function passed
   * to 'onModeChange' prop on its click.
   */
  it('Should trigger function callback on icon click', () => {
    const triggerModeChange = cy.spy().as('triggerChange');

    mount(<ThemeSwitcher onModeChange={triggerModeChange} />);

    cy.get('[class*="themeSwitcher"]')
      .click();

    cy.get('@triggerChange').should('have.been.calledOnce');
  });
});
