// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoW2iQAb_G7YJMjklFs509Qr2qpDTtvkA",
  authDomain: "linkedin-clone-a41ac.firebaseapp.com",
  projectId: "linkedin-clone-a41ac",
  storageBucket: "linkedin-clone-a41ac.appspot.com",
  messagingSenderId: "962280934103",
  appId: "1:962280934103:web:bab8a33a8f7bb72961fe92",
  measurementId: "G-DRHB9TG0XW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { auth, app, firestore, storage};