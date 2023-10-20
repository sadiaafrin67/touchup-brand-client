// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4trgnGiugodUq5FY9G3cb9wTIUQ4MVno",
  authDomain: "touchup-brand-client.firebaseapp.com",
  projectId: "touchup-brand-client",
  storageBucket: "touchup-brand-client.appspot.com",
  messagingSenderId: "970041191334",
  appId: "1:970041191334:web:135fd4e67d83c18b747d67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;