// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoEgZuvJ2VXtHaUPyZOg40i0gB7uuyN1U",
  authDomain: "stride-af1ff.firebaseapp.com",
  databaseURL: "https://stride-af1ff-default-rtdb.firebaseio.com",
  projectId: "stride-af1ff",
  storageBucket: "stride-af1ff.appspot.com",
  messagingSenderId: "586022199719",
  appId: "1:586022199719:web:a7950d23db1d769c85d682",
  measurementId: "G-E2RR5NTZ5L"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getDatabase(FIREBASE_APP);
//const analytics = getAnalytics(app);