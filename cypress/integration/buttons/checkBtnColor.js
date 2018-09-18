describe('checkBtnColor', function() {
  it('has color rgb(176, 0, 32)', function() {
    cy.visit('http://localhost:4200/heroes');
    cy.get('.mat-app-background')
      .find('button')
      .click()
      .should('have.css', 'background-color')
      .and('eq', 'rgb(176, 0, 32)');
  });
});
