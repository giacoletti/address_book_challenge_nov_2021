class AddressBook {
  storage = window.localStorage;

  index() {
    const entries = this.storage.getItem('entries');
    return JSON.parse(entries);
  }
  create(data) {
    if (data.constructor === Object) {
      const oldEntries = this.storage.getItem('entries') || '[]';
      const newEntries = JSON.parse(oldEntries);
      newEntries.push(data);
      this.storage.setItem('entries', JSON.stringify(newEntries));
      return 'The entry was added to the address book';
    } else {
      return 'We could not process your entry';
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AddressBook;
}
