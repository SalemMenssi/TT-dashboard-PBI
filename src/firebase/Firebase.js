// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHs7-hXjy3BMGZxYljNrHAlH3VHCP6Y4A",
  authDomain: "mohamedpfe-72cff.firebaseapp.com",
  projectId: "mohamedpfe-72cff",
  storageBucket: "mohamedpfe-72cff.appspot.com",
  messagingSenderId: "256731831799",
  appId: "1:256731831799:web:93562f9920c8426042e2f2",
  measurementId: "G-F053KNR2KM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
