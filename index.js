"use strict";
class contactCard {
    constructor(firstName, phoneNumber) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }
    sendMessage() {
        console.log('My name is ' + this.firstName +
            ' and my phone number is ' + this.phoneNumber + '.');
    }
}
let ContactCard = new contactCard("Henry", 1234567890);
ContactCard.sendMessage();
