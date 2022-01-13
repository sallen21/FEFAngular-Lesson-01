interface person{
    firstName: string;
    lastName?: string;
    
}

interface contact{
    phoneNumber: number;
    email?: string;
   
}

class contactCard implements person, contact {
    firstName: string;
    phoneNumber: number;

    constructor(firstName: string, phoneNumber: number){
        this.firstName = firstName
        this.phoneNumber = phoneNumber
    }
    sendMessage() : void {
        console.log('My name is ' + this.firstName +
         ' and my phone number is ' + this.phoneNumber + '.')
    }
}

let ContactCard = new contactCard ("Henry", 1234567890);
ContactCard.sendMessage();
