const express = require('express');
const apiRoutes = require('./routes/apiroutes')
const HTMLroutes = require('./routes/htmlroutes')
const path = require('path')


const app = express();
const PORT = process.env.PORT || 3001 

app.use('/api', apiRoutes)

app.use('/', HTMLroutes)

// app.listen(PORT, ()=> console.log(`listening on PORT: ${PORT}`))

// const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} :rocket:`)
);

// const notes = require('express').Router();
// // GET Route for retrieving all the notes = /api/notes/
// notes.get('/', (req, res) => {
//   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });