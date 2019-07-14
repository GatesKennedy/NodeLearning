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
//  GET Handlers
//=================

//  All
api.get('/api/genres', (req, res) => {
    res.send(genres);
});

//  by ID
api.get('/api/genres/:id', (req, res) => {
    //  Validate
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('That Genre does not exist...');
    //  Return
    res.send(genre);
});
 
//=================
//  POST Handlers
//=================

//=================
//  PUT Handlers
//=================

//=================
//  DELETE Handlers
//=================