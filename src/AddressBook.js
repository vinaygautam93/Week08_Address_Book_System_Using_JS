class AddressBook {
    searchByCity(city) {
        return this.contacts.filter(contact => contact.city === city);
    }

    countByCity(city) {
        return this.searchByCity(city).length;
    }
}

// Example Usage
console.log("Contacts in Mumbai:", addressBook.searchByCity("Mumbai"));
console.log("Count of contacts in Mumbai:", addressBook.countByCity("Mumbai"));