import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
    <div className={styles.containerMain}>
      <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path ='/login' element={<Login/>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
