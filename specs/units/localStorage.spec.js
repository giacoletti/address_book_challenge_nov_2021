describe('localStorage', () => {
    
    subject(()=> window.localStorage);

    it(() => is.expected.to.respondTo('getItem'));
    it(() => is.expected.to.respondTo('setItem'));
    it(() => is.expected.to.respondTo('removeItem'));
    it(() => is.expected.to.respondTo('clear'));
    it(() => is.expected.to.have.property('data'));

    const entry_1 = {
        name: 'Giovanni',
        phone: '123456789',
        email: 'giovanni@fakemail.com'
    };

    describe.only('#setItem', () => { 
        let storedData;

        before(() => {
            $subject.setItem('entries', JSON.stringify(entry_1));
            storedData = $subject.data;
        });

        it('is expected to store data in the chosen key', () => {
            expect(storedData).to.have.own.property('entries');
        });

        it('is expected to store the data as a string', () => {
            expect(typeof storedData.entries).to.equal('string');
        });

    });

});