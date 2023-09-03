// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq9ZEXaynZSZLkD5CcIJh566CkmBtrR2s",
  authDomain: "educare-389613.firebaseapp.com",
  databaseURL: "https://educare-389613-default-rtdb.firebaseio.com",
  projectId: "educare-389613",
  storageBucket: "educare-389613.appspot.com",
  messagingSenderId: "1089967034158",
  appId: "1:1089967034158:web:43f768afb1ed727eb6f4bf",
  measurementId: "G-HW5LYNJLNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const analytics = getAnalytics(app);