'use strict';

var path = require('path');

var Util = {};

Util.getHomeDirectory = function() {
    // returns the path to the home directory
    var os = process.platform;

    switch (os) {
        case 'win32':
            return process.env.USERPROFILE;
        case 'darwin':
        case 'linux':
            return process.env.HOME;
        default:
            return 'Unsupported OS';
    }

};

Util.getDataPath = function () {
    return path.join(this.getHomeDirectory(), 'data.json');
};

module.exports = Util;