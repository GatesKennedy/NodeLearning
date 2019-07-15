//=================
//  Requirements
//=================

//  Express
const express = require('express');
//  Joi
const Joi = require('joi');

//=================
//  Objects
//=================

//  Express
const api = express();      // Instantiate Express Object
api.use(express.json());    // Enables parsing of JSON in req.body via middleware

//  Genres
const genres = [
    {id: 1, name: 'Comedy'},
    {id: 2, name: 'Action'},
    {id: 3, name: 'Romance'},
    {id: 4, name: 'Horror'},
    {id: 5, name: 'Documentary'}
];

//=================
//  Validation
//=================
//  Genre Requirements
function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(genre, schema);
}
//  Genre Exists

//=================
//  GET Handlers
//=================

//  All
api.get('/api/genres', (req, res) => {
    res.send(genres);
});

//  by ID
api.get('/api/genres/:id', (req, res) => {
    //  Validate
    //const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('That Genre does not exist...');
    //  Return
    res.send(genre);
});
 
//=================
//  POST Handlers
//=================
api.post('/api/genres', (req, res) => {
    //  Validate req.body
    const result = validateGenre(req.body);
    //  Check Validation
    if (result.error) {
        res.status(400).send('Genre Name is required to be a minimum of 3 characters...');
        return; 
    }
    //  Create New Genre Object
    const genre = {
        id: genres.length +1,
        name: req.body.name
    }
    //  Update Genres
    genres.push(genre);
    res.send(genre);
});

//=================
//  PUT Handlers
//=================

//=================
//  DELETE Handlers
//=================