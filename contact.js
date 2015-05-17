'use strict';

var jsonFile = require('jsonfile');

var Contact = {};

Contact.parseName = function (str) {
  var parts = str.split(',');
  return parts[0].trim();
};

Contact.parseNumber = function (str) {
    var parts = str.split(',');
    return parts[1].trim();
};


Contact.createContact = function (str) {
    return {
        name: this.parseName(str),
        number: this.parseNumber(str)
    }
};

Contact.loadContacts = function (done) {
    var file = './data.json';
    jsonFile.readFile(file, done);
};

Contact.saveContacts = function (contacts, done) {
    var file = './data.json';
    jsonFile.writeFile(file, contacts, done);
};

Contact.saveContact = function (contact, done) {

    var _this = this;

    this.loadContacts(function (err, contacts) {

         if (err) {
             return done(err);
         }

         contacts.push(contact);

         _this.saveContacts(contacts, done);

    });
};

module.exports = Contact;
