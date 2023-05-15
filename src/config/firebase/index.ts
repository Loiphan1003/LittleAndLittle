import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// const dotenv = require('dotenv');

const firebaseConfig = {
  apiKey: "AIzaSyAp6Db8iNA6j7-5i176iQDZc-JlJBRSQwk",
  authDomain: "littleandlittle-2a796.firebaseapp.com",
  projectId: "littleandlittle-2a796",
  storageBucket: "littleandlittle-2a796.appspot.com",
  messagingSenderId: "618899563370",
  appId: "1:618899563370:web:05e5090cea8bbd89e07b13"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
