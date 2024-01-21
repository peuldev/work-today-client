// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFMkGepglMVfC1Ta5_EfinDy_AdS370d0",
  authDomain: "work-today-live.firebaseapp.com",
  projectId: "work-today-live",
  storageBucket: "work-today-live.appspot.com",
  messagingSenderId: "1084200054233",
  appId: "1:1084200054233:web:48bc4ef10a93b36079fdc8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
