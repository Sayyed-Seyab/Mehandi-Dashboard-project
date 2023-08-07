// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0yVwIDanWpDVhuKXPZQRESjREfWu57PY",
  authDomain: "mehandi-46f1b.firebaseapp.com",
  projectId: "mehandi-46f1b",
  storageBucket: "mehandi-46f1b.appspot.com",
  messagingSenderId: "148690301524",
  appId: "1:148690301524:web:be54d050af0348807cb3c1",
  measurementId: "G-NMDHYZ7P9G"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app)





 
