// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mentisai-abc8d.firebaseapp.com",
  projectId: "mentisai-abc8d",
  storageBucket: "mentisai-abc8d.firebasestorage.app",
  messagingSenderId: "196039016457",
  appId: "1:196039016457:web:5dd7ebee9790bbdef738d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
