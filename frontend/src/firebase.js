//setting up Firebase 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {      //Firebase Configuration
  apiKey: "AIzaSyBUQoe23xzPOz_7bI-kU0mRh8Pztd08p5c",
  authDomain: "query-help.firebaseapp.com",
  projectId: "query-help",
  storageBucket: "query-help.appspot.com",
  messagingSenderId: "194487869554",
  appId: "1:194487869554:web:46639009c10ed6f3cae2eb",
  measurementId: "G-B3JNC8YWB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth();     //Authentication
const provider = new GoogleAuthProvider();

export { auth, provider };