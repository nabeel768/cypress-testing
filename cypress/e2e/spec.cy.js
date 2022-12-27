describe('the bbc homepage', () => {
  it('should have a welcome message', () => {
    cy.visit('https://bbc.co.uk');
    // now check that the google logo is on the page
    cy.get('header').should('contain', 'Welcome to the BBC');
    // cy.get('.flagpole-container').should('have.length', flagpoleKeys.length)
  });
});
