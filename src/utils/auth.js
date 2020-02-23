import firebase from 'firebase/app';
import 'firebase/auth';
import { authState } from 'rxfire/auth';
import firebaseConfig from 'config/firebase';

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export let user = authState(auth);

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent,
);

export const login = async method => {
  let errorMessage;
  const addError = err => (errorMessage = err.message);

  switch (method) {
    case 'GOOGLE':
      if (isMobile) {
        await auth.signInWithRedirect(googleProvider).catch(addError);
      } else {
        await auth.signInWithPopup(googleProvider).catch(addError);
      }
      break;
    case 'DEMO':
      await auth.signInAnonymously().catch(addError);
      break;
    default:
      console.log('Specify a sign in method!');
  }
  return errorMessage;
};

export const signup = (email, password) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => {
      return error;
    });

export const loginWithEmail = () => {};

export const logOut = () => auth.signOut();
