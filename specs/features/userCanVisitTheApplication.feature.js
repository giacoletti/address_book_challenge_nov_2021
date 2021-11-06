describe('User visiting the application url', () => {

    // create some fake data. Remember that this string needs to be parsable (using 'JSON.parse()')
    const entries = '[{"name": "John Doe", "phone": "031-123124", "twitter": "@john_doe"}, {"name": "Jane Doe", "phone": "+1 3553-44233", "twitter": "@jane_doe"}]';

    beforeEach(() => {
        cy.visit('/', {
            onBeforeLoad(window) {
                // populate the item of "localStorage" with the data we wrote above
                window.localStorage.setItem('entries', entries);
            }
        });
        // get the list element using the name attribute of the parent <div> and the <ul> tag
        cy.get('[name=address_list] ul').as('displayList');   //the alias we're gonna use in our tests below
    });

    it('is expected to see a header', () => {
        cy.get('h1').should('contain.text', 'Address Book');
    });

    it('is expected to see an address list', () => {
        cy.get('@displayList').should('exist').and('be.visible');
    });

    it('is expected to display 2 entries', () => {
        cy.get('@displayList').children().should('have.length', 2);
    });
    
});