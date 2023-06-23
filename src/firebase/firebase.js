import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKTuf1Gc5Z3NRo2uBPxGNaJkUx3G4ax94",
  authDomain: "snap-message-sm.firebaseapp.com",
  projectId: "snap-message-sm",
  storageBucket: "snap-message-sm.appspot.com",
  messagingSenderId: "189988510901",
  appId: "1:189988510901:web:81c9ba2b53fffd473ff2fc",
  measurementId: "G-ZSQ2E97QGP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default {
  auth,
  db,
};
