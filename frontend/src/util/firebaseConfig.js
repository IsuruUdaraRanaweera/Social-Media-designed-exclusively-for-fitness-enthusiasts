// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2w1s42XVIKnSanb9jZ08NxFbLY8yCDb0",
  authDomain: "paf-fitness-center.firebaseapp.com",
  projectId: "paf-fitness-center",
  storageBucket: "paf-fitness-center.appspot.com",
  messagingSenderId: "337774210258",
  appId: "1:337774210258:web:6670e61fde96cc2636d10b",
  measurementId: "G-LQ1Z5JEMGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;