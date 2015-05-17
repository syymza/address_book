'use strict';

var Contact = require ('./contact');

var Command = {};

Command.getOperation = function () {
    return process.argv[2];
};

Command.getOperationData = function () {
    return process.argv[3];
};

Command.add = function (done) {
    // extracts the contact string from the command line arguments
    // converts the contact string into a contact object using Contact.createContact
    // appends the contact object to data.json
    // calls the callback done(err)
    // err represents the error which will be null if no errors were encountered

    var data = this.getOperationData();
    var newContact = Contact.createContact(data);
    Contact.saveContact(newContact, done);

};

Command.find = function(done) {
    // extracts the name from the command line arguments e.g. "John Smith"
    // searches for the contacts matching the given name using Contact.findContacts
    // prints the matched contacts
    // returns the matched contacts array via done callback
    // e.g. done(err, foundContacts)
    // where foundContacts is the array of contacts that matched the search
    // err is the value for the error (null if no error was encountered)

    var name = this.getOperationData();

    Contact.findContacts(name, function(err, found) {

        if (err) {
            return done(err)
        }

        found.forEach(function(contact) {
            console.log(contact.name, contact.number)
        });

        done(null, found);
    })

};


module.exports = Command;