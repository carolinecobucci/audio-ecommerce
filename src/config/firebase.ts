// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvHiaawglIeac9FaqBLLezjmTJjsZK96Q",
  authDomain: "audio-ecommerce-db510.firebaseapp.com",
  projectId: "audio-ecommerce-db510",
  storageBucket: "audio-ecommerce-db510.appspot.com",
  messagingSenderId: "82730789963",
  appId: "1:82730789963:web:db21a2ddd64b5bb7bf71ce",
  measurementId: "G-LYC3VT3HX2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
