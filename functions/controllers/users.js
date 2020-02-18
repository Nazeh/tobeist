const firebase = require('firebase');
const config = require('../config');

firebase.initializeApp(config);

const create = (req, res) => {
  const newUser = { ...res };

  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password);
};

module.exports = {
  create,
};
