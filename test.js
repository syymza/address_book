var Parrot = require('./parrot');
var Contact = require ('./contact')

console.log(Parrot.speakEnglish());
console.log(Parrot.speakSpanish());

var name = Contact.parseName('John Smith, 604-123-9999');

console.log(name);
