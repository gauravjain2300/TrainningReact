// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtrWIJLNngg59eYYY68RKR2zEucYsyfHc",
  authDomain: "myproject-43be7.firebaseapp.com",
  projectId: "myproject-43be7",
  storageBucket: "myproject-43be7.appspot.com",
  messagingSenderId: "998491758594",
  appId: "1:998491758594:web:177639837a2b850be5071b",
  measurementId: "G-6ZXJKWTL6W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };
