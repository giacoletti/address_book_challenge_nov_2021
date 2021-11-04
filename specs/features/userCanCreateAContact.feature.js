describe('User fills out form and creates a new contact', () => {
    
    describe('with all the correct values needed', () => {

        before(() => {
            cy.visit('/');
            cy.get('button[id=add-contact]').click();
            cy.get('input[id=name]').type('Clark Kent');
            cy.get('input[id=email]').type('ckent@fakemail.com');
            cy.get('input[id=phone]').type('003451431251');
            cy.get('input[id=company]').type('Marvelous Widgets AB');
            cy.get('textarea[id=notes]').type('This is my useless note');
            cy.get('input[id=twitter]').type('@classNoWobble');
            cy.get('button[id=create-contact]').click();
        });

        it('is expected to see the new contact on the contact list', () => {
            cy.get('div[id=contact-list]').should('contain', 'Clark Kent')
                .should('contain', 'ckent@fakemail.com')
                .should('contain', '003451431251')
                .should('contain', 'Marvelous Widgets AB');
        });
        
    });

});