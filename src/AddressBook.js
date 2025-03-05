class AddressBook {
    sortByCity() {
        this.contacts.sort((a, b) => a.city.localeCompare(b.city));
    }

    sortByZip() {
        this.contacts.sort((a, b) => a.zip.localeCompare(b.zip));
    }
}

// Example Usage
console.log("Before Sorting by City:");
addressBook.displayContacts();
addressBook.sortByCity();
console.log("After Sorting by City:");
addressBook.displayContacts();