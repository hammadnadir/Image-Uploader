// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxjgTryb0s-Zlv_Nmdd5kcvoeGRys_Ebk",
  authDomain: "biotech-c9081.firebaseapp.com",
  projectId: "biotech-c9081",
  storageBucket: "biotech-c9081.appspot.com",
  messagingSenderId: "292904208181",
  appId: "1:292904208181:web:72d21a84a6f312f9122e7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

