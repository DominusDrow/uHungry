// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDVI6pJtiX2JxSs3gvNUnOCHrWeWWKVv0",
  authDomain: "uhunngry.firebaseapp.com",
  projectId: "uhunngry",
  storageBucket: "uhunngry.appspot.com",
  messagingSenderId: "905555323510",
  appId: "1:905555323510:web:a4effc24139a361f6f4d57",
  measurementId: "G-QKWW19MP4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {auth, db};