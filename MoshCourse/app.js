function sayHello(name) {
    console.log('Hello '+ name);
}

sayHello('Conor');

// var logger = require('./NodeModuleSystem/logger');

// BEST PRACTICE
const logger = require('./NodeModuleSystem/logger');
console.log(logger);

/*
CONSOLE RESULT:

C: \Programming\ NodeJS\ NodeLearning\ MoshCourse > node app.js
Hello Conor {
    log: [Function: log],
    endPoint: 'http://mylogger.io/log'
}

*/
