import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx8UgRCDQrrRTpzKs5WmqmA-7aqCM22wI",
  authDomain: "devlog-e95c8.firebaseapp.com",
  projectId: "devlog-e95c8",
  storageBucket: "devlog-e95c8.appspot.com",
  messagingSenderId: "205978232754",
  appId: "1:205978232754:web:f264677d4ed913cf4166ab",
  measurementId: "G-SBMK28TS3P",
};

firebase.initializeApp(firebaseConfig);
const apiKey = firebaseConfig.apiKey;
const firestore = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const db = getFirestore();

export { auth, apiKey, firestore, storage, db };
