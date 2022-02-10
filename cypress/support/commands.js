// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/**
 * Cypress 'screenshot' method overwrite.
 *
 * @param {Function} originalFn Original 'screenshot' function that is begin overwritten.
 * @param {string} fileName A name for the image file.
 * @param {Object} options Options object to change the default behavior of the function.
 */
Cypress.Commands.overwrite('screenshot', (originalFn, fileName, options) => {
  // If there is any focused element, blur it
  cy.get('body').then(($body) => {
    if ($body.find(':focus').length > 0) {
      cy.get(':focus').blur();
    }
  });

  // Wait a little for all assets to be properly rendered
  cy.wait(200);

  // Call the original 'screenshot' function
  originalFn(fileName, options);
});
