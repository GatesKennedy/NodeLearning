
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

/*
CONSOLE RESULT:

C: \Programming\ NodeJS\ NodeLearning\ MoshCourse\ NodeModuleSystem > node module_path.js 
{
    root: 'C:\\',
    dir: 'C:\\Programming\\NodeJS\\NodeLearning\\MoshCourse\\NodeModuleSystem',
    base: 'module_path.js',
    ext: '.js',
    name: 'module_path'
}

*/