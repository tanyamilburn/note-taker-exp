const router = require('express').Router()
const path = require('path');
const fs = require('fs');

function getNotes(){
    const data= fs.readFileSync(path.join(__dirname,"../db/db.json"), "utf-8");
    const parsedData = JSON.parse(data);
    console.log("parsedData", parsedData)
    return parsedData
}

router.get('/notes', function(req, res){
    res.json(getNotes())
})

router.post('/notes', function(req, res){
    const saveNotes = fs.readFileSync(path.join(__dirname,"../db/db.json"), "utf-8")
    console.log('what type?', typeof saveNotes)  
    let newNote = req.body;
    let id = saveNotes.length.toString();
    // console.log(newNote);
    // newNote.id = id;
    saveNotes.push(newNote);
    fs.writeFileSync("../db/db.json", JSON.stringify(saveNotes));
    res.json(saveNotes);
})

module.exports = router

// build out routes to save --get route, post route, save route
// const store = require(), store file needs to go in db file, store .js
// store.js: class, json parsing, and stringifying to get data in database
// create middleware?


