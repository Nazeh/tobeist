const { admin, db } = require('../utils/admin');

const index = (req, res) => {
  db.collection('projects')
    .get()
    .then(data => {
      const projects = [];
      data.forEach(doc => {
        projects.push(doc.data());
      });
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
};

const create = (req, res) => {
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
      res.status(500).json({ error: err });
    });
};

module.exports = {
  index,
  create,
};
