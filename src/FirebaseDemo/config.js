import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3X28eftl3EgV7Ov3IH7ceHX51CrZKCq8",
  authDomain: "ebird-c2eae.firebaseapp.com",
  databaseURL: "https://ebird-c2eae.firebaseapp.com",
  projectId: "ebird-c2eae",
  storageBucket: "ebird-c2eae.appspot.com",
  messagingSenderId: "670995933979",
  appId: "1:670995933979:web:e40105d717485ace0441be"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };