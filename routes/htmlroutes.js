const path = require('path')
const router = require('express').Router()

router.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})
router.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})



module.exports = router

// use /notes, router.get,delete, etc., request and res, calling store and call functions within store
// all this goes in APIroutes! This file is done.
