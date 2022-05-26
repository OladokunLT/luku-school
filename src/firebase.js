// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLGDoSuUtVriguZevtw2tHrdeLoO-gsGQ",
  authDomain: "school-auth-93db7.firebaseapp.com",
  projectId: "school-auth-93db7",
  storageBucket: "school-auth-93db7.appspot.com",
  messagingSenderId: "676744739787",
  appId: "1:676744739787:web:bcf8d375f4c591941a144e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app