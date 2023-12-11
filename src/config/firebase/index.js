import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "KONFIGURASI",
  authDomain: "DARI",
  databaseURL: "BAGIAN",
  projectId: "SETUP FIREBASE TADI",
  storageBucket: "COPY PASTE",
  messagingSenderId: "KE SINI",
  appId: "dari property apiKey hingga appId ;) "
});

const FIREBASE = firebase;

export default FIREBASE;