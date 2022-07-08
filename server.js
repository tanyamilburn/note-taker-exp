const express = require('express');
const apiRoutes = require('./routes/apiroutes')
const HTMLroutes = require('./routes/htmlroutes')


const app = express();
const PORT = process.env.PORT || 3000 

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))

app.use('/api', apiRoutes)

app.use('/', HTMLroutes)

app.listen(PORT, ()=> console.log(`listening on PORT: ${PORT}`))



const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');
// Import custom middleware, "cLog"
app.use(clog);
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));
// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);
// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} :rocket:`)
);

const notes = require('express').Router();
// GET Route for retrieving all the notes = /api/notes/
notes.get('/', (req, res) => {
  readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});