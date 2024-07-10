// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApbnOBtHUiMvLVqmnEl4b9-fE6LNYkyTY",
  authDomain: "ai-travelplanner.firebaseapp.com",
  projectId: "ai-travelplanner",
  storageBucket: "ai-travelplanner.appspot.com",
  messagingSenderId: "728991381227",
  appId: "1:728991381227:web:04905a61aa6b4f42c4f0ae",
  measurementId: "G-ZNVZWXWHN4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

