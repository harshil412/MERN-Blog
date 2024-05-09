// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3ff2d.firebaseapp.com",
  projectId: "mern-blog-3ff2d",
  storageBucket: "mern-blog-3ff2d.appspot.com",
  messagingSenderId: "641540584467",
  appId: "1:641540584467:web:a07ec800b2520db83ffbe6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

