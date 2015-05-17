var Command = {};

Command.getOperation = function () {
    return process.argv[2];
};

Command.getOperationData = function () {
    return process.argv[3];
};

module.exports = Command;