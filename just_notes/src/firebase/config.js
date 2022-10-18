
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD2A1BLS6_U50M_1IXlNXx4JfSfRGhd0cs",
  authDomain: "just-notes-2bff4.firebaseapp.com",
  projectId: "just-notes-2bff4",
  storageBucket: "just-notes-2bff4.appspot.com",
  messagingSenderId: "607672278577",
  appId: "1:607672278577:web:3a703dbf0b43a7a1617f10"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);