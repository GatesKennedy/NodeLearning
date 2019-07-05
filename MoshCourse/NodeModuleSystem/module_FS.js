
const fs = require('fs');

//  Do NOT commonly use 'Sync' methods
    //  Ex: 'access()' is Asynchronous
    //  Ex: 'accessSync()' is Synchronous [yuck!]
//  Asynchronous methods take a fxn as its last arg
    //  Node will call the last fxn when async operations complete
    //  the fxn at last arg is called a 'Callback' fxn

//  Read Directory
//  readdirSync()   Sync
    //  returns all files and folders in the current folder
    //  returns an Array of Strings
console.log('Read Dir [Synchronous]');
const files = fs.readdirSync('./');
console.log(files);

//  readdir()       Async
    //  Callback Fxn: function(ErrorString, ResultArray)
console.log('Read Dir [Async]');
fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});