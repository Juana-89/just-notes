import React from 'react';
import { Router, Routes, useLocation } from 'react-router-dom';
import { Home } from '../Home.jsx';
import { Login } from '../Login.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container-main">
      <Routes>
      <Router path ='/' element={<Home/>} />
      <Router path ='/login' element={<Login/>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
