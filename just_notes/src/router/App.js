import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { Forgot } from '../pages/Forgot/Forgot';
import { Popup } from '../components/Popup/Popup';
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
      {/* <Route path ='/popup' element={<Popup/>} /> */}
      <Route path ='/register' element={<Register/>} />
      <Route path ='/forgot' element={<Forgot/>} />
      </Routes>
      </AuthProvider>
    </div>
    </div>
  );
}

export default App;
