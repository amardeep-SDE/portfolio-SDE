import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA0PFi6gx00pgP53PxfU_bz0IyIhy5l34E",
  authDomain: "portfolio-1494.firebaseapp.com",
  projectId: "portfolio-1494",
  storageBucket: "portfolio-1494.firebasestorage.app",
  messagingSenderId: "945758834833",
  appId: "1:945758834833:web:50ad437e44af1ac2472f30",
  measurementId: "G-8CFS4LYSS1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);