// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdYdq0xnosmZ_2kLzMbGSAf4BdPG8Jjls",
  authDomain: "videocall-fc57a.firebaseapp.com",
  projectId: "videocall-fc57a",
  storageBucket: "videocall-fc57a.appspot.com",
  messagingSenderId: "651425900307",
  appId: "1:651425900307:web:eb095fe07f5963b5f59ce6",
  measurementId: "G-6BRFL628TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);