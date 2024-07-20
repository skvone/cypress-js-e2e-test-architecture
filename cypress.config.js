const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/tests/**/*.cy.js',
    baseUrl: 'https://example.cypress.io',
  },
});
