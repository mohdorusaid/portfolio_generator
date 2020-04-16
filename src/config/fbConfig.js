import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Replace this with your own config details
//new config
var config = {
  apiKey: "AIzaSyCQqisJ3uWkiW0_76X7y_PzoeoOjbM6hec",
  authDomain: "portfoliogenerator-f75bf.firebaseapp.com",
  databaseURL: "https://portfoliogenerator-f75bf.firebaseio.com",
  projectId: "portfoliogenerator-f75bf",
  storageBucket: "portfoliogenerator-f75bf.appspot.com",
  messagingSenderId: "177201420332",
  appId: "1:177201420332:web:767a73243151af7cf79989"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({});

export const AuthInstance= firebase.auth();
export const googleProvider=new firebase.auth.GoogleAuthProvider();
export const storage=firebase.storage();

export default firebase;
