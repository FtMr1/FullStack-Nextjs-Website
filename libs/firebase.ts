// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ1DfWXsQ0w-M3zP9_OxgBso1LwQijve0",
  authDomain: "websiteclient.firebaseapp.com",
  projectId: "websiteclient",
  storageBucket: "websiteclient.appspot.com",
  messagingSenderId: "39770085746",
  appId: "1:39770085746:web:c520a3313704f09cf725eb",
  measurementId: "G-53P117JE55"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


export default firebaseApp