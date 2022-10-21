import React, { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,GoogleAuthProvider, 
    FacebookAuthProvider, signInWithPopup,
    onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
const register = (email, password) => createUserWithEmailAndPassword (auth, email, password);

const signInGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
    .then((result) => { 
       console.log(result)
      }).catch((error) => {
        console.log(error)
      });
}

const signInFacebook = () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider)
    .then((result) => { 
       console.log(result)
      }).catch((error) => {
        console.log(error)
      });
}
 const logOut = () => signOut(auth)
    .then(() => {
        console.log('Saliste de la sesión')
      }).catch((error) => {
        console.log(error)
      });
      

useEffect(() => {
  const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
    console.log({ currentUser });
    setUser(currentUser);
  
  });
  return () => unsubuscribe();
}, []);

return (
  <authContext.Provider
    value={{login, register, user, signInGoogle, signInFacebook, logOut }}>
    {children}
  </authContext.Provider>
);
}