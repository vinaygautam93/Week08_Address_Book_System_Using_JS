class AddressBook {
    addContact(contact) {
        if (this.contacts.some(existing => existing.firstName === contact.firstName)) {
            console.log("Duplicate Entry Found! Contact not added.");
            return;
        }
        this.contacts.push(contact);
    }
}