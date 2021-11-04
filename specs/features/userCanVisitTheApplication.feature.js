describe('User visiting the application url', () => {
    
    before(() => {
        cy.visit('/');
    });

    it('is expected to see the index page', () => {
        cy.get('h1').should('contain.text', 'Address Book');
        cy.get('button[id=add-contact]').should('be.visible').should('contain.text', 'Add New Contact');
        cy.get('#nameLabel').should('contain.text', 'Name');
        cy.get('#name').should('exist');
        cy.get('#emailLabel').should('contain.text', 'Email');
        cy.get('#email').should('exist');
        cy.get('#phoneLabel').should('contain.text', 'Phone');
        cy.get('#phone').should('exist');
        cy.get('#companyLabel').should('contain.text', 'Company');
        cy.get('#company').should('exist');
        cy.get('#notesLabel').should('contain.text', 'Notes');
        cy.get('#notes').should('exist');
        cy.get('#twitterLabel').should('contain.text', 'Twitter');
        cy.get('#twitter').should('exist');
    });
    
});