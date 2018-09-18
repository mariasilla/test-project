describe('invalidInputError', function() {
  it('color is error when input is invalid', function() {
    const ivalidData = '@gmail.com';

    cy.visit('http://localhost:4200/dashboard');
    cy.get('input[name=email]').type(ivalidData);
    cy.get('.mat-form-field.mat-form-field-invalid .mat-form-field-label')
      .should('have.css', 'color')
      .and('eq', 'rgb(176, 0, 32)');
  });
});
