// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOeH5xpkpoKFRQlE6bs5S-b8gPJuKmboI",
  authDomain: "flick-genie.firebaseapp.com",
  projectId: "flick-genie",
  storageBucket: "flick-genie.firebasestorage.app",
  messagingSenderId: "137893969907",
  appId: "1:137893969907:web:0818967e74c5398d33dc86",
  measurementId: "G-WT4SF2YQ8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
