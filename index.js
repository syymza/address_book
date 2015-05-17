'use strict';

var Command = require('./command');

var cmd = Command.getOperation();

function handleResult(err) {
    if (err) {
        console.log('Error!')
    } else {
        console.log('OK! The command ran successfully!')
    }
}

switch (cmd) {
    case 'add':
        Command.add(handleResult);
        break;
    case 'find':
        Command.find(handleResult);
        break;
    default:
        console.log('Invalid command!');
        break;
}

