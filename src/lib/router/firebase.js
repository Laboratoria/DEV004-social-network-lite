//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAtRGwpzoccAON8lgcZAha8i0N2MtJxFI",
  authDomain: "sportlink-nutrition.firebaseapp.com",
  projectId: "sportlink-nutrition",
  storageBucket: "sportlink-nutrition.appspot.com",
  messagingSenderId: "880144340004",
  appId: "1:880144340004:web:c38fe413554929bc1d34b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//console.log (app)
export const auth = getAuth (app)
