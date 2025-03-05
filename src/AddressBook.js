class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    displayContacts() {
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
}

// Example Usage
const addressBook = new AddressBook();
try {
    const contact1 = new AddressBookContact("Vinay", "Kumar", "123 Street", "Mumbai", "Maharashtra", "400001", "9876543210", "vinay@example.com");
    addressBook.addContact(contact1);
    addressBook.displayContacts();
} catch (error) {
    console.error(error.message);
}