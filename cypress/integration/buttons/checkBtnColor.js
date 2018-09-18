const convert = require('simple-hex-to-rgb');

describe('checkBtnColor', function() {
  it('has color #b00020', function() {
    const errorPaletteColor = convert("#b00020");
    cy.visit('http://localhost:4200/heroes');
    cy.get('.mat-app-background')
      .find('button')
      .click()
      .should('have.css', 'background-color')
      .and('eq', errorPaletteColor);
  });
});
