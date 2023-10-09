// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo138xiESEuMxopDQZDBSP789yFXLhoUU",
  authDomain: "fir-vitechat-58d49.firebaseapp.com",
  projectId: "fir-vitechat-58d49",
  storageBucket: "fir-vitechat-58d49.appspot.com",
  messagingSenderId: "918935123416",
  appId: "1:918935123416:web:118ec56c037985c987eead",
  measurementId: "G-94WPC7S7SX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);