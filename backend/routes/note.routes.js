const express = require('express');

const {getAllnotes, deleteNote} = require('../controllers/note.controller');
const {addNote,updateNote,noteById} =  require('../controllers/note.controller');
const  notesRoutes = express.Router();

notesRoutes.get('/notes',getAllnotes);

notesRoutes.post('/notes/add',addNote);

notesRoutes.put('/notes/:id',updateNote);

notesRoutes.delete('/notes/delete/:id',deleteNote);

notesRoutes.get('/notes/:id',noteById);

module.exports = {
    notesRoutes
}