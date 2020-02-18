const functions = require('firebase-functions');
const app = require('express')();

// const cors = require('cors');
// app.use(cors());

const Projects = require('./controllers/projects');
const Users = require('./controllers/users');

app.get('/projects', Projects.index);
app.post('/projects', Projects.create);
app.post('/signup', Users.create);

exports.api = functions.region('europe-west1').https.onRequest(app);
