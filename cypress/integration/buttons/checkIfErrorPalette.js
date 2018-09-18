describe('checkIfErrorPaletteExists', function() {
  it('button has error color attribute', function() {
    cy.visit('http://localhost:4200/heroes');
    cy.get('.mat-app-background')
      .find('button')
      .click()
      .should('have.attr', 'color', 'error')
  });
});


// describe('checkIfErrorPaletteExists', function() {
//   it('button has .mat-error class', function() {
//     cy.visit('http://localhost:4200/heroes');
//     cy.get('.mat-app-background')
//       .find('button')
//       .click()
//       .and('have.class', '.mat-raised-button.mat-error');
//   });
// });
