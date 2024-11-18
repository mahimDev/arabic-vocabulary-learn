// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA32FLI1v6oY6Gp0yzKRQBDjBC-UFX9TFo",
  authDomain: "arabic-vocabulary-94d04.firebaseapp.com",
  projectId: "arabic-vocabulary-94d04",
  storageBucket: "arabic-vocabulary-94d04.firebasestorage.app",
  messagingSenderId: "618111819937",
  appId: "1:618111819937:web:afbe9755e0e948a61710e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
