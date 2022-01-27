// Mount import
import { mount } from '@cypress/react';

// Component import
import ThemeSwitcher from './ThemeSwitcher';

/**
 * Theme switcher component tests.
 */
describe('Theme switcher', () => {
  it('Shows theme switcher with default props', () => {
    mount(<ThemeSwitcher />);

    cy.get('[class*="themeSwitcher"]')
      .should('exist')
      .should('be.visible');

    cy.get('[data-testid="LightModeIcon"]')
      .should('exist')
      .should('be.visible');
  });

  it('Shows light mode icon when "isDarkMode" flag is false', () => {
    mount(<ThemeSwitcher isDarkMode={false} />);

    cy.get('[data-testid="LightModeIcon"]')
      .should('exist')
      .should('be.visible');
  });

  it('Shows dark mode icon when "isDarkMode" flag is true', () => {
    mount(<ThemeSwitcher isDarkMode />);

    cy.get('[data-testid="DarkModeIcon"]')
      .should('exist')
      .should('be.visible');
  });

  it('Should trigger function callback on icon click', () => {
    const triggerModeChange = cy.spy().as('triggerChange');

    mount(<ThemeSwitcher onModeChange={triggerModeChange} />);

    cy.get('[class*="themeSwitcher"]')
      .click();

    cy.get('@triggerChange').should('have.been.calledOnce');
  });
});
