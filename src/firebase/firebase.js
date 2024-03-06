import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5iBXk344JncimHKuMgA6NgPsjrKR9SIw",
  authDomain: "insta-clone-90c27.firebaseapp.com",
  projectId: "insta-clone-90c27",
  storageBucket: "insta-clone-90c27.appspot.com",
  messagingSenderId: "958695709754",
  appId: "1:958695709754:web:ad5742b728e4ee6f42a903",
  measurementId: "G-TCDJJ562Z4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };