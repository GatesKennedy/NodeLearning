//  require('express') Returns a FXN 
//  resulting fuction is called 'express'
const express = require('express');

//  call 'express' function, returns obj of type 'Express'
//  AKA [express(): Express]
const app = express();

//  Express Object (called 'app' contains methods...)
// app.get();
// app.post();
// app.put();
// app.delete();

//  GET method
    //  Two Args| path/url, callbackFxn( request, response)
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3,]);
});

app.listen(3000, () => console.log('Listening on port 3000...'));
