import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container-main">
      <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path ='/login' element={<Login/>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
