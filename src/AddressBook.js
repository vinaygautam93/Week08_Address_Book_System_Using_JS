class AddressBook {
    deleteContact(name) {
        let index = this.contacts.findIndex(contact => contact.firstName === name);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            return true;
        }
        return false;
    }
}

// Example Usage
console.log("Before Deletion:");
addressBook.displayContacts();
addressBook.deleteContact("Vinay");
console.log("After Deletion:");
addressBook.displayContacts();