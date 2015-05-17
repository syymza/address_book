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

module.exports = Contact;
