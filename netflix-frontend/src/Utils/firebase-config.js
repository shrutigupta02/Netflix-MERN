import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBscAlFCbeoS5fIhkP5jaaQEgcd2x08wp4",
  authDomain: "react-netflix-3f39b.firebaseapp.com",
  projectId: "react-netflix-3f39b",
  storageBucket: "react-netflix-3f39b.appspot.com",
  messagingSenderId: "728976552621",
  appId: "1:728976552621:web:f0a8d18e17352d671b4c24",
  measurementId: "G-WE4Y9W8Y3C"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);