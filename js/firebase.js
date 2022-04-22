// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX58A1U5agmFXXaY6zl9BnHvR1FCCrQZc",
  authDomain: "deisytiendacesde.firebaseapp.com",
  projectId: "deisytiendacesde",
  storageBucket: "deisytiendacesde.appspot.com",
  messagingSenderId: "696189912792",
  appId: "1:696189912792:web:d64c0675945b18f5d7f9ad",
  measurementId: "G-ETZ1KNBK6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);