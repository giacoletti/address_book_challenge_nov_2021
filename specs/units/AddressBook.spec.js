const { expect } = require('chai');
const AddressBook = require('../../src/js/AddressBook');

describe('AddressBook', () => {

    afterEach(() => {
        window.localStorage.data = {};
        sinon.reset();
    });

    subject(() => new AddressBook());

    it(() => is.expected.to.be.an('object'));

    it(() => is.expected.to.be.an.instanceOf(AddressBook));

    it(() => is.expected.to.respondTo('index'));

    it(() => is.expected.to.respondTo('create'));

    let setItemSpy, getItemSpy, stringifySpy, parseSpy, message;

    setItemSpy = sinon.spy(window.localStorage, 'setItem');
    getItemSpy = sinon.spy(window.localStorage, 'getItem');
    stringifySpy = sinon.spy(JSON, 'stringify');
    parseSpy = sinon.spy(JSON, 'parse');

    describe('#create', () => {

        def('contactsInStorage', () => JSON.parse(window.localStorage.data.entries));

        def('validData', {
            name: "John Doe",
            email: "john@mailhost.com",
            phone: "+1202123456",
            twitter: "@john_doe",
        });

        def('invalidData', 'this is not an object!');

        context('with valid data', () => {

            beforeEach(() => {
                message = $subject.create($validData);
            });

            it('is expected to call on localStorage.getItem', () => {
                expect(getItemSpy).to.have.been.calledOnce;
            });

            it('is expected to call on localStorage.setItem', () => {
                expect(setItemSpy).to.have.been.calledOnce;
            });

            it('is expected to call on JSON.parse', () => {
                expect(parseSpy).to.have.been.calledOnce;
            });

            it('is expected to call on JSON.stringify', () => {
                expect(stringifySpy).to.have.been.calledOnce;
            });

            it('is expected to add an entry to localStorage', () => {
                expect($contactsInStorage).to.have.length(1);
            });

            it('is expected to respond with a success message', () => {
                expect(message).to.equal('The entry was added to the address book');
            });

        });

        context('with invalid data', () => {
            
            beforeEach(() => {
                message = $subject.create($invalidData);
            });

            it('is expected to respond with an error message', () => {
                expect(message).to.equal('We could not process your entry');
            });

        });

    });

    describe('#index', () => {

        let collection;

        beforeEach(() => {
            
            $subject.create({ name: 'Giovanni' });
            $subject.create({ name: 'Luca' });
            $subject.create({ name: 'Matteo' });
            sinon.reset();
            collection = $subject.index();
            
        });

        it('is expected to call on localStorage.getItem()', () => {
            expect(getItemSpy).to.have.been.calledOnce;
        });

        it('is expected to call on JSON.parse()', () => {
            expect(parseSpy).to.have.been.calledOnce;
        });

        it('is expected to return an array with 3 objects', () => {
            expect(collection).to.be.an.instanceOf(Array).and.have.length(3);
        });
        
    });

});
