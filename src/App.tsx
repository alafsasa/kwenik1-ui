//import React from 'react';
//import logo from './logo.svg';
//import logo from './logo1000.png';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import { Starter } from './components/Starter';
import { RegisterUser } from './components/RegisterUser';
import { Login } from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Starter/>} />
        <Route path='/register' element={<RegisterUser email='' password='' confirmPassword='' town='' country=''/>} />
        <Route path='/login' element={<Login email='' password='' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;