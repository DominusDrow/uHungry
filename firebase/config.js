// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const provider = new GoogleAuthProvider(app);


export {auth, provider};