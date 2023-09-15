// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCapBxvGRxDuGH6DR47BUxN1hqkaagsPns",
  authDomain: "todoapp-14416.firebaseapp.com",
  projectId: "todoapp-14416",
  storageBucket: "todoapp-14416.appspot.com",
  messagingSenderId: "323625867089",
  appId: "1:323625867089:web:39463967c7972d9909e570"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);