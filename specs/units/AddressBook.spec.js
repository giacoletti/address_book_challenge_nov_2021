const AddressBook = require('../../src/js/AddressBook');

describe('AddressBook', () => {
    
    subject(() => new AddressBook());

    it('is expected to be an Object', () => {
        expect($subject).to.be.an('object');
    });

    it('is expected to be an instance of AddressBook class', () => {
        expect($subject).to.be.an.instanceOf(AddressBook);
    });

});
