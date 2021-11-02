describe('User visiting the application url', () => {

    it('is expected to see a header', () => {
        cy.visit('/');
        cy.get('h1').should('contain.text', 'Address Book');
    });
    
});