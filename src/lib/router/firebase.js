import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";


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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
console.log (getFirestore)


  const agrearcolettion =  (post) => {addDoc(collection(db, "users"), {
    post
  });
}
  




export { app, auth, agrearcolettion };
