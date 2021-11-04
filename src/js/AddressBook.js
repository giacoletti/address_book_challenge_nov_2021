class AddressBook {
    storage = window.localStorage;

    index() {
        const entries = this.storage.getItem('entries');
        return JSON.parse(entries);
    }
    create(data) {
        if (data.constructor === Object) {
            const oldEntries = this.storage.getItem('entries') || "[]";
            const newEntries = JSON.parse(oldEntries);
            newEntries.push(data);
            this.storage.setItem('entries', JSON.stringify(newEntries));
            return 'The entry was added to the address book';
        } else {
            return 'We could not process your entry';
        }
    }
    update(existingItem, newItem){
        if ((existingItem.constructor === Object) && (newItem.constructor === Object)) {
            const oldEntries = this.storage.getItem('entries');
            const newEntries = JSON.parse(oldEntries);
            const elementIndex = newEntries.findIndex((element) => element.name === existingItem.name);
            if (elementIndex !== -1) {
                newEntries.splice(elementIndex, 1, newItem);    //find and replace contact
                this.storage.setItem('entries', JSON.stringify(newEntries));
                return 'Contact updated!';
            } else {
                return 'Something went wrong during the updating process!';
            }
        }
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = AddressBook;
}