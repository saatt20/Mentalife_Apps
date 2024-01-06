import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";


firebase.initializeApp({
  apiKey: "AIzaSyDy9r3oUYuLLSlGR9JQJ523iNLfI_aRx6c",
  authDomain: "uas-mentalife.firebaseapp.com",
  databaseURL: "https://uas-mentalife-default-rtdb.firebaseio.com",
  projectId: "uas-mentalife",
  storageBucket: "uas-mentalife.appspot.com",
  messagingSenderId: "341493121263",
  appId: "1:341493121263:web:e91bbd6949c9ff98b1db1a"
});

const FIREBASE = firebase;

export default FIREBASE;