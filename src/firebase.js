import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA3Qm3U-bB6xM0-gho46ZY93xcpa0--4gI",
  authDomain: "gautam-react-portfolio.firebaseapp.com",
  projectId: "gautam-react-portfolio",
  storageBucket: "gautam-react-portfolio.appspot.com",
  messagingSenderId: "23974439108",
  appId: "1:23974439108:web:bd16e5f8892ec6ab17c191"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()