import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC5Xcgoh1jgj6VT5UAqy01-XlDY9fQaCY8",
  authDomain: "todo-ninja-4c750.firebaseapp.com",
  databaseURL: "https://todo-ninja-4c750.firebaseio.com",
  projectId: "todo-ninja-4c750",
  storageBucket: "todo-ninja-4c750.appspot.com",
  messagingSenderId: "943083443220",
  appId: "1:943083443220:web:bae3a36db3f23cff"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;