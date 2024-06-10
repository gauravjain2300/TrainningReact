import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARhbBeSLnW2y35ELatozkBaz0_lsZInmc",
  authDomain: "mainproject-b1de5.firebaseapp.com",
  projectId: "mainproject-b1de5",
  storageBucket: "mainproject-b1de5.appspot.com",
  messagingSenderId: "851650803945",
  appId: "1:851650803945:web:37492011ce271bd9069878",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
