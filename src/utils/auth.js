import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from 'config/firebase';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent,
);

export const login = async method => {
  const addError = err => alert(err.message);

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
};

export const signup = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const loginWithEmail = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const resetPassword = email => auth.sendPasswordResetEmail(email);

export const logOut = () => auth.signOut();
