describe('checkIfErrorPaletteExists', function() {
  it('button has .mat-error class', function() {
    cy.visit('http://localhost:4200/heroes');
    cy.get('.mat-app-background')
      .find('button')
      .click()
      .should('have.attr', 'color')
      .and('eq', 'error');
    // .should('have.class', '.mat-error')
  });
});
