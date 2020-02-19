import firebase from 'firebase/app';
import 'firebase/auth';
import { authState } from 'rxfire/auth';
import firebaseConfig from 'config/firebase';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export let user = authState(auth);

export const login = method => {
  switch (method) {
    case 'GOOGLE':
      auth.signInWithPopup(googleProvider);
      break;
    default:
      firebase.auth().signInAnonymously();
  }
};

export const logOut = () => auth.signOut();
