import { getAuth, createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,GoogleAuthProvider, 
    FacebookAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./config";

export const signInGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => { 
       console.log(result)
      }).catch((error) => {
        console.log(error)
      });
}

export const signInFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => { 
       console.log(result)
      }).catch((error) => {
        console.log(error)
      });
}

export const logOut = () => {
    signOut(auth).then(() => {
        console.log('Saliste de la sesión')
      }).catch((error) => {
        console.log(error)
      });
      
}