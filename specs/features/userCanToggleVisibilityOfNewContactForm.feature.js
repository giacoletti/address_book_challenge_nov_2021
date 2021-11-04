describe('User can toggle visibility of the form', () => {

    before(() => {
        cy.visit('/');
    });

    it('is expected to show/hide the new contact form by clicking "Add New Contact" button', () => {
        cy.get('#new-contact-form').should('not.be.visible');
        cy.get('#add-contact').click();
        cy.get('#new-contact-form').should('be.visible');
        cy.get('#add-contact').click();
        cy.get('#new-contact-form').should('not.be.visible');
    });

});