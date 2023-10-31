// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4_RT3-8vvE5GZ8LRVst1UBH4RqkKUR9U",
  authDomain: "educare-90ee3.firebaseapp.com",
  projectId: "educare-90ee3",
  storageBucket: "educare-90ee3.appspot.com",
  messagingSenderId: "1074993960483",
  appId: "1:1074993960483:web:82f5531b5cb31ab2408396"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore() 