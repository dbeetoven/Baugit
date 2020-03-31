import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './Firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const fireAuth = { providers, firebaseAppAuth };

export default fireAuth;
