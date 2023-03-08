// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-iWi2i41wuIekOKZH8FcbJmvsDkPJpRw",
  authDomain: "real-estate-99b1d.firebaseapp.com",
  projectId: "real-estate-99b1d",
  storageBucket: "real-estate-99b1d.appspot.com",
  messagingSenderId: "373363742791",
  appId: "1:373363742791:web:a32ebf608e64b31d3fb962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
