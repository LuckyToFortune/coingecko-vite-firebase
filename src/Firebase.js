// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM9B4BwbzvzprCDUxnEUrhrcKfJnROd-E",
  authDomain: "crypto-project-dd28f.firebaseapp.com",
  projectId: "crypto-project-dd28f",
  storageBucket: "crypto-project-dd28f.appspot.com",
  messagingSenderId: "735579524297",
  appId: "1:735579524297:web:ace79ffa0df54829c81118"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

