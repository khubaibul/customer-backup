// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSCEwHFtfVDA2nh6DeebpO8FtC0T5MaiY",
  authDomain: "showa-af2ca.firebaseapp.com",
  projectId: "showa-af2ca",
  storageBucket: "showa-af2ca.appspot.com",
  messagingSenderId: "851573051900",
  appId: "1:851573051900:web:1b4d6fb9535421b9152279",
  measurementId: "G-RKW43HH6XM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
