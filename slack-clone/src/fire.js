import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAY8vsHvWBhPqb__48V5oF3FdAr9I9UPkA",
  authDomain: "slack-clone-c959b.firebaseapp.com",
  projectId: "slack-clone-c959b",
  storageBucket: "slack-clone-c959b.appspot.com",
  messagingSenderId: "833590437563",
  appId: "1:833590437563:web:da8952f7e75556ee60eb9e",
  measurementId: "G-PQ9FK6RQM0",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
