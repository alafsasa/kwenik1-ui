//import React from 'react';
//import logo from './logo.svg';
//import logo from './logo1000.png';
import './App.css';
//import { Login } from './components/Login';
import { NavBar } from './components/NavBar';
import { RegisterUser } from './components/RegisterUser';

function App() {
  return (
    <div>
      <NavBar/>
      <RegisterUser email='' password='' confirmPassword='' town='' country=''/>
    </div>
  );
}

export default App;
