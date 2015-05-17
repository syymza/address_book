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
    Contact.saveContact(newContact, function (err) {
        return done(err);
    });

};

module.exports = Command;