// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApAExKnRTdY8a4CDOXf2hxzoES96S7JL8",
  authDomain: "jakefire-1e771.firebaseapp.com",
  projectId: "jakefire-1e771",
  storageBucket: "jakefire-1e771.appspot.com",
  messagingSenderId: "71701981757",
  appId: "1:71701981757:web:fc9504a93dd3d3b72f5854",
  measurementId: "G-CPP0924VV5"
};


initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export  const db = getFirestore();