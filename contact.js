'use strict';

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

module.exports = Contact;
