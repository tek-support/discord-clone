import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDI6IDqc2GO3_31J3dfNAjkcSE1JDAVII8",
  authDomain: "discord-261f2.firebaseapp.com",
  projectId: "discord-261f2",
  storageBucket: "discord-261f2.appspot.com",
  messagingSenderId: "502125610978",
  appId: "1:502125610978:web:adf5a6a2cfe71142c0dbbb",
  measurementId: "G-W61NXSCSGX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
