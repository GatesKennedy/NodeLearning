
var _ = require('underscore');

//  How Node's require() resolves a module
//  Order by search locations
    //  1. Core module
    //  2. File or folder
    //  3. node_modules Folder

var result = _.contains([1, 2, 3], 2);
console.log(result);