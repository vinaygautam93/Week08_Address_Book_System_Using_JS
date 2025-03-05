class AddressBookContact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        const addressPattern = /^[a-zA-Z0-9\s]{4,}$/;
        const zipPattern = /^[1-9][0-9]{5}$/;
        const phonePattern = /^[6-9]\d{9}$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
            throw new Error("First and Last Name must start with a capital letter and have at least 3 characters.");
        }
        if (!addressPattern.test(address) || !addressPattern.test(city) || !addressPattern.test(state)) {
            throw new Error("Address, City, and State must have at least 4 characters.");
        }
        if (!zipPattern.test(zip)) {
            throw new Error("Invalid Zip Code.");
        }
        if (!phonePattern.test(phone)) {
            throw new Error("Invalid Phone Number.");
        }
        if (!emailPattern.test(email)) {
            throw new Error("Invalid Email.");
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state}, Zip: ${this.zip}, Phone: ${this.phone}, Email: ${this.email}`;
    }
}

// Example Usage
try {
    const contact = new AddressBookContact("Vinay", "Kumar", "123 Street", "Mumbai", "Maharashtra", "400001", "9876543210", "vinay@example.com");
    console.log(contact.toString());
} catch (error) {
    console.error(error.message);
}