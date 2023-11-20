import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider, sendPasswordResetEmail,
    FacebookAuthProvider, signInWithPopup,
    onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('No hay proveedor de autenticación');
  return context;
};


export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const forgot = (email) => {auth.languageCode='es'; return sendPasswordResetEmail(auth, email)};
  const register = ( email, password) => {
    createUserWithEmailAndPassword (auth, email, password)
    navigate('/login')
  }

  const signInGoogle = () => {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider)
      .then((result) => { 
        console.log(result)
        navigate('/notes')

        }).catch((error) => {
          console.log(error)
        })
  };

  const signInFacebook = () => {
      const provider = new FacebookAuthProvider();
      return signInWithPopup(auth, provider)
      .then((result) => { 
        console.log(result)
        navigate('/notes')
        }).catch((error) => {
          console.log(error)
        })
  };
  
  const logOut = () => signOut(auth)
      .then(() => {
          console.log('Saliste de la sesión')
        }).catch((error) => {
          console.log(error)
        });
      

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
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