import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAaZRYdX4RNjF9-J2Be_1FXsDTDQMiP4b4",
  authDomain: "lagin-fde17.firebaseapp.com",
  databaseURL: "https://lagin-fde17.firebaseio.com",
  projectId: "lagin-fde17",
  storageBucket: "",
  messagingSenderId: "651922840167",
  appId: "1:651922840167:web:c0634f0330674c35"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase; 