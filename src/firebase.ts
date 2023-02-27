// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMgyhtzN12NLpbTlTx3zT1zVP39j46T4k",
  authDomain: "netflix-clone-3acb7.firebaseapp.com",
  projectId: "netflix-clone-3acb7",
  storageBucket: "netflix-clone-3acb7.appspot.com",
  messagingSenderId: "174407252914",
  appId: "1:174407252914:web:4a815140ce596d285282ab",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
