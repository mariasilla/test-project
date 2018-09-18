describe('checkBtnColor', function() {
  it('has color #b00020', function() {
    cy.visit('http://localhost:4200/heroes');
    cy.get('.mat-app-background')
      .find('button')
      .click()
      .should('have.css', 'background-color')
      .and('eq', 'rgb(176, 0, 32)');
  });
});
