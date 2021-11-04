class AddressBook {
    index() {}
    create(data) {
        if (data.constructor === Object) {
            const oldEntries = window.localStorage.getItem('entries') || "[]";
            const newEntries = JSON.parse(oldEntries);
            newEntries.push(data);
            window.localStorage.setItem('entries', JSON.stringify(newEntries));
            return 'The entry was added to the address book';
        }
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = AddressBook;
}