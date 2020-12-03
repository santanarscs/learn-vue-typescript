import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyA4eQnfQJyHdVTKEdA-0oqoStREQ6JCaks",
  authDomain: "learn-vue-typescript.firebaseapp.com",
  databaseURL: "https://learn-vue-typescript.firebaseio.com",
  projectId: "learn-vue-typescript",
  storageBucket: "learn-vue-typescript.appspot.com",
  messagingSenderId: "657167835173",
  appId: "1:657167835173:web:d0ca88f70196ab748c9fcc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
