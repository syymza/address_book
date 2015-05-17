'use strict';

var Contact = {};

Contact.parseName = function (str) {
  var parts = str.split(',');
  return parts[0];
};


module.exports = Contact;
