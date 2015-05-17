var Parrot = require('./parrot');
var Contact = require ('./contact');
var testContact = 'John Smith , 604-123-9999';

var name = Contact.parseName(testContact);
var number = Contact.parseNumber(testContact);
var contactObj = Contact.createContact(testContact);
var contactsArr = [
    {
        "name": "John Smith",
        "number": "604-123-9090"
    },
    {
        "name": "Bob Leon",
        "number": "604-555-1212"
    }
];


console.log(name);
console.log(number);
console.log(contactObj);

Contact.loadContacts(function(err, data) {
    console.log(data);
});

Contact.saveContacts(contactsArr, function(err) {

    if (err) {
        console.log(err);
        return;
    }
    console.log('success');
});