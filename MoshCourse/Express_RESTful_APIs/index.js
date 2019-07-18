//  require('express') Returns a FXN 
//  resulting fuction is called 'express'
const express = require('express');
const Joi = require('joi');
//  call 'express' function, returns obj of type 'Express'
//  AKA [express(): Express]
const app = express();
app.use(express.json()); // Enables express to parse JSON objects in req body 
                        //  Adds middleware in express handling pipeline

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
];

//================
//  GET Handlers
//================
    //  Two Args| path/url, callbackFxn( request, response)
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// Route Parameters
    // /api/courses/<paraValue>
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

//================
//  POST Handlers
//================
app.post('/api/courses', (req, res) => {
    //  Input Validation (Joi Package)
        //  Define Schema
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    console.log(result);
    //  Error response from 'Joi' 
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //  Input Validation (Manuel)
    if (!req.body.name || req.body.length < 3) {
        // return 400 Bad Request
        res.status(400).send('Name is required and should be a min of 3 characters..');
        // exit function execution
        return;
    }
    //  Create New Course Object
    const course = {
        id: courses.length + 1, 
        name: req.body.name     // requires parsing of JSON objs in Body of Request (enabled above^^^)
    };
    courses.push(course);       // Pushes new course object to Courses array
    res.send(course);           // Return object in the body of the response (Client should be imformed)
});
//  course Validator
function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

//================
//  PUT Handlers
//================
app.put('/api/courses/:id', (req, res) => {
    //  Look up the course
    //  If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send('There is no such course...'); //404  
        return;
    }
    //  Validate
    //  If invalid, return 400 - Bad request
    const result = validateCourse(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    // Object Destructuring Syntax
    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

//  Update course
    course.name = req.body.name;
    //  Return the updated course
    res.send(course);
});

//================
//  DELETE Handlers
//================
app.delete('/api/courses/:id', (req, res) => {
    // Look up the course
    // Not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('There is no such course...'); //404  

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Return the same course
    res.send(course);
});

//  PORT (environment variable)
const port = process.env.PORT || 3000;

//  Register Listener
app.listen(port, () => console.log(`Listening on port ${port}...`));
