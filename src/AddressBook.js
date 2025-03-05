class AddressBook {
    getContactCount() {
        return this.contacts.reduce(count => count + 1, 0);
    }
}

// Example Usage
console.log("Total Contacts: " + addressBook.getContactCount());