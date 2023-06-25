import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnwrKF_lj4WVDGV_M1w1dJNHVE1YtJRCo",
  authDomain: "msnap-message.firebaseapp.com",
  projectId: "msnap-message",
  storageBucket: "msnap-message.appspot.com",
  messagingSenderId: "775542088416",
  appId: "1:775542088416:web:6b4a2c4f3cc1777dfa2685",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default {
  auth,
  db,
};
