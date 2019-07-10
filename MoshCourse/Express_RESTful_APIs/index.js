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

//  Array of Course Objects
const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
]

//  GET method
    //  Two Args| path/url, callbackFxn( request, response)
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// Route Parameters
    // /api/courses/:<paraValue>
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('There is no such course...'); //404
    res.send(course);
});

//  Route Multiple Params
    //  /api/calendar/:<param1>/:<param2>
app.get('/api/calendar/:year/:month', (req, res) => {
    res.send(req.params);
});

//  Query String Params
    //  /api/posts/:<param1>/:<param2>?sortBy=name
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
});

//  PORT (environment variable)
const port = process.env.PORT || 3000;

//  Register Listener
app.listen(port, () => console.log(`Listening on port ${port}...`));
