const functions = require('firebase-functions');
const app = require('express')();

const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

app.get('/projects', (req, res) => {
  db.collection('projects')
    .get()
    .then(data => {
      const projects = [];
      data.forEach(doc => {
        projects.push(doc.data());
      });
      res.json(projects);
    })
    .catch(err => console.log(err));
});

app.post('projects', (req, res) => {
  const newPrject = {
    name: req.body.name,
    createdAt: admin.firestore.Timestamp.fromDate(new Date()),
  };

  db.collection('projects')
    .add(newPrject)
    .then(doc => {
      res.json({ messages: `document ${doc.id} was created successfully` });
    })
    .catch(err => {
      res.status(500).json({ error: `something went wrong` });
      console.log(err);
    });
});

exports.api = functions.region('europe-west1').https.onRequest(app);
