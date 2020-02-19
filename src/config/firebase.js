import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: 'tobeist.firebaseapp.com',
  databaseURL: 'https://tobeist.firebaseio.com',
  projectId: 'tobeist',
  storageBucket: 'tobeist.appspot.com',
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
export default firebase;
