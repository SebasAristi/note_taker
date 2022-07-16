const api = require('express').Router();
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils');


api.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

api.post('/notes', (req,res) =>{
    console.log(req.body);

    const {title, text} = req.body;
  
    if (req.body) {
      const newNote = {
       title, 
       text
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
});

module.exports = api