// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC446WmRsgJjzEfTHLPdAiwEXrmvXY6FKM",
  authDomain: "ecommerce-1de42.firebaseapp.com",
  databaseURL: "https://ecommerce-1de42-default-rtdb.firebaseio.com",
  projectId: "ecommerce-1de42",
  storageBucket: "ecommerce-1de42.appspot.com",
  messagingSenderId: "700604113753",
  appId: "1:700604113753:web:eb8ab56867d863156ee248",
  measurementId: "G-50L48ZWCSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth, analytics };