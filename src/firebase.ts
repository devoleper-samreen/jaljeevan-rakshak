

// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYqUSLta6_wPK_J3VL2dqbKuhhe3ZNfNw",
  authDomain: "jaljeevan-rakshak.firebaseapp.com",
  projectId: "jaljeevan-rakshak",
  storageBucket: "jaljeevan-rakshak.firebasestorage.app",
  messagingSenderId: "1087914349954",
  appId: "1:1087914349954:web:0d3835d8475a859097eb9b",
  measurementId: "G-J2BCTDXCCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Analytics
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
