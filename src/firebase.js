import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAld3XN8poFgHI_aL7fN6Co7R-Gqv4BfT0',
    authDomain: 'tobeist.firebaseapp.com',
    databaseURL: 'https://tobeist.firebaseio.com',
    projectId: 'tobeist',
    storageBucket: 'tobeist.appspot.com',
    messagingSenderId: '196771511674',
    appId: '1:196771511674:web:bd7d5066855777ee3aaac3',
    measurementId: 'G-DDWXNRZ5ND',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
