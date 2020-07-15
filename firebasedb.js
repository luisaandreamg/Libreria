import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCwNO5Fi3a5R3PMAfh6gpzssAlRJX8bXq8",
  authDomain: "libreria-7f6c9.firebaseapp.com",
  databaseURL: "https://libreria-7f6c9.firebaseio.com",
  projectId: "libreria-7f6c9",
  storageBucket: "libreria-7f6c9.appspot.com",
  messagingSenderId: "1049233674525",
  appId: "1:1049233674525:web:81c0a4f5281f68a562d1f4",
  measurementId: "G-LRKWR7DGYW",
};
firebase.initializeApp(config);

export default firebase;
