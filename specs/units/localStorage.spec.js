describe('localStorage', () => {

    subject(() => window.localStorage);

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

    describe('#setItem', () => {
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

    describe('#getItem', () => {

        context('existing key', () => {

            def('response', () => $subject.getItem('entries'));

            before(() => {
                $subject.setItem('entries', JSON.stringify(entry_1));
            });

            it('is expected to return a string ', () => {
                expect(typeof $response).to.equal('string');
            });

            it('is expected to contain the data', () => {
                expect(JSON.parse($response)).to.eql(entry_1);
            });

        });

        context('non existing key', () => {

            def('response', () => $subject.getItem('nonExistingKey'));

            it('is expected to return "undefined"', () => {
                expect($response).to.equal(undefined);
            });

        });

    });

    describe("#removeItem", () => {

        beforeEach(() => {
            $subject.setItem("keyToRemove", "some value");
        });

        it("is expected to remove an item", () => {
            $subject.removeItem("keyToRemove");
            expect($subject.data).to.not.have.own.property("keyToRemove");
        });

    });

    describe("#clear", () => {

        beforeEach(() => {
            $subject.setItem("myKey", "some value");
            $subject.setItem("myKey2", "some value");
            $subject.clear();
        });
        
        it("is expected to remove an item myKey", () => {
            expect($subject.data).to.not.have.own.property("myKey");
        });
        
        it("is expected to remove an item myKey2", () => {
            expect($subject.data).to.not.have.own.property("myKey2");
        });
        
    });

});