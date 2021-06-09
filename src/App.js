import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Router from './components/Router'
import Navbar from './components/Navbar'
import Login from './components/Login'
function App() {
  return (
     <BrowserRouter>
        <Navbar/>
        <Login/>
        <Router/>
     </BrowserRouter>
  );
}

export default App;
