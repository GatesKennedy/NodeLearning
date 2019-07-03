

//CREATING A MODULE

var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

// Export multiple functions/variables
module.exports.log = log;
module.exports.endPoint = url; // unecesary to expose this object

// Export single function directly
module.exports = log;

// Module Wrapper Function
    // expose MWF arguments
console.log(exports);
console.log(require);
console.log(module);
console.log(__filename);
console.log(__dirname);
