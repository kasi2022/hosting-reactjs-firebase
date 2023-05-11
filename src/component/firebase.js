// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyAP52CqQ7pl3wzkyAuItYy-ZBwQITN6y_k",
  authDomain: "student-reisgration.firebaseapp.com",
  projectId: "student-reisgration",
  storageBucket: "student-reisgration.appspot.com",
  messagingSenderId: "829422514059",
  appId: "1:829422514059:web:a1af5990a408d66455098e",
  measurementId: "G-CMD1EPRH30"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);