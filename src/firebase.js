import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD5jJy56XvYSjIqeT0XBXsQagGX0puc338",
  authDomain: "regandlog-b6f82.firebaseapp.com",
  projectId: "regandlog-b6f82",
  storageBucket: "regandlog-b6f82.appspot.com",
  messagingSenderId: "692658568382",
  appId: "1:692658568382:web:527aa75b1847447753f2ef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export {createUserWithEmailAndPassword}