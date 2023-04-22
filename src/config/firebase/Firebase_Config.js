// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvGhapVYuMd_0zi-uIPhh9YigAw0PTJnQ",
  authDomain: "meetingdetecting.firebaseapp.com",
  projectId: "meetingdetecting",
  storageBucket: "meetingdetecting.appspot.com",
  messagingSenderId: "989824025939",
  appId: "1:989824025939:web:7896d7523ea5050ae50da6",
  measurementId: "G-L1JSNRW553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)