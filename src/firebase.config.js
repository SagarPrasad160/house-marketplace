// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmGcCJ8C-5PxMnguNiuYrxqpdDhj791qQ",
  authDomain: "house-marketplace-app-d2e15.firebaseapp.com",
  projectId: "house-marketplace-app-d2e15",
  storageBucket: "house-marketplace-app-d2e15.appspot.com",
  messagingSenderId: "747067934375",
  appId: "1:747067934375:web:82cd1e94782b70f4e6fd82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
