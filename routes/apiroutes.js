const router = require('express').Router()
const path = require('path');
const fs = require('fs');

function getNotes(){
    const data= fs.readFileSync(path.join(__dirname,"../db/db.json"), "utf-8");
    const parsedData = JSON.parse(data).notes;
    console.log("parsedData", parsedData)
    return parsedData
}

router.get('/notes', function(req, res){
    res.json(getNotes())
})

// .catch((err)=> res.status(500).json(err));
// router.post('/notes', function(req, res){
//     let saveNotes = JSON.parse(readFileSync('./../db/db.json', 'utf8'));
//     let newNote = req.body;
//     let id = saveNotes.length.toString();
//     newNote.id = id;
//     saveNotes.push(newNote);
//     fs.writeFileSynce('../db/db.json', JSON.stringify(saveNotes));
//     res.json(saveNotes);
// })

module.exports = router

// build out routes to save --get route, post route, save route
// const store = require(), store file needs to go in db file, store .js
// store.js: class, json parsing, and stringifying to get data in database
// DONT CHANGE INDEX.JS file!!!
