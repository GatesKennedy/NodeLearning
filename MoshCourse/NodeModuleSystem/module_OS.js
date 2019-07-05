
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//  Log Total Memory
console.log('Total Memory: ' + totalMemory)

//  Template string
    //  ES6 / ES2015 : ECMAScript 6
    //  Uses `` | Not ''

console.log(`Free Memory: ${freeMemory}`);