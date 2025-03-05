class AddressBook {
    sortContacts() {
        this.contacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
    }
}

// Example Usage
console.log("Before Sorting:");
addressBook.displayContacts();
addressBook.sortContacts();
console.log("After Sorting:");
addressBook.displayContacts();