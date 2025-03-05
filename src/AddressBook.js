class AddressBook {
    findByName(name) {
        return this.contacts.find(contact => contact.firstName === name);
    }

    editContact(name, newDetails) {
        let contact = this.findByName(name);
        if (contact) {
            Object.assign(contact, newDetails);
            return true;
        }
        return false;
    }
}

// Example Usage
console.log("Before Editing:");
addressBook.displayContacts();
addressBook.editContact("Vinay", { city: "Pune" });
console.log("After Editing:");
addressBook.displayContacts();