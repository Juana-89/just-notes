import React, { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider, sendPasswordResetEmail,
    FacebookAuthProvider, signInWithPopup,
    onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { collection } from "firebase/firestore";
import { auth, db } from "../firebase/config";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('No hay proveedor de autenticación');
  return context;
};


export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const forgot = (email) => {auth.languageCode='es'; return sendPasswordResetEmail(auth, email)};
  const register = (displayName, email, password) => createUserWithEmailAndPassword (auth, email, password)
  .then((userCredentials)=>{
    const user = userCredentials.user;
    user.updateProfile({
      displayName: displayName
    })
  //   .then((e) => {
  //     alert('registrado')
  //   }).catch((error) => {
  //     alert(error.message);
  // })
  })
  const signInGoogle = () => {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider)
      .then((result) => { 
        console.log(result)
        }).catch((error) => {
          console.log(error)
        })
  };

  const signInFacebook = () => {
      const provider = new FacebookAuthProvider();
      return signInWithPopup(auth, provider)
      .then((result) => { 
        console.log(result)
        }).catch((error) => {
          console.log(error)
        })
  };
  
  const logOut = () => signOut(auth)
      .then(() => {
          alert('Saliste de la sesión')
        }).catch((error) => {
          alert(error)
        });
      

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    console.log({ currentUser });
    setUser(currentUser);
  
  });
  return () => unsubscribe();
}, []);

return (
  <authContext.Provider
    value={{login, register, forgot, user, signInGoogle, signInFacebook, logOut }}>
    {children}
  </authContext.Provider>
);
}