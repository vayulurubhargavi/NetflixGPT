// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj6WchPeTdxuXcQUTeaXsfWH7r4YgZXlg",
  authDomain: "netflixgpt-f55e3.firebaseapp.com",
  projectId: "netflixgpt-f55e3",
  storageBucket: "netflixgpt-f55e3.firebasestorage.app",
  messagingSenderId: "948940901396",
  appId: "1:948940901396:web:6c9e703229c756fc68ab01",
  measurementId: "G-7C2K3X2WH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// get the auth 
export const auth = getAuth();