import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home/Home';
import { Login } from '../components/Login/Login';
import { Register } from '../components/Register/Register';
import { Forgot } from '../components/Forgot/Forgot';
import { AuthProvider } from '../context/auth'
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
    <div className={styles.containerMain}>
    <AuthProvider>
      <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path ='/login' element={<Login/>} />
      <Route path ='/register' element={<Register/>} />
      <Route path ='/forgot' element={<Forgot/>} />
      </Routes>
      </AuthProvider>
    </div>
    </div>
  );
}

export default App;
