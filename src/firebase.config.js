// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwZFaUWyNVrcc5RACpP9vXBO5HQV4DpsE",
  authDomain: "house-marketplace-2dcee.firebaseapp.com",
  projectId: "house-marketplace-2dcee",
  storageBucket: "house-marketplace-2dcee.appspot.com",
  messagingSenderId: "755178958852",
  appId: "1:755178958852:web:2a279385e9593620d5c551",
};

// Initialize Firebase
//eslint-disable-next-line
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
