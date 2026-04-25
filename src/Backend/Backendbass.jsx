// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeizYR5zg36FGqc9AKYt8qEbRBBgXOX54",
  authDomain: "ecart-b5d3d.firebaseapp.com",
  projectId: "ecart-b5d3d",
  storageBucket: "ecart-b5d3d.firebasestorage.app",
  messagingSenderId: "953477369184",
  appId: "1:953477369184:web:4385919b6129dc1eb86205"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const _Auth=getAuth(app)
export const _DB=getFirestore(app)
