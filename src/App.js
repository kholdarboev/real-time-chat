import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Router from './components/Router'
import Navbar from './components/Navbar'
function App() {
  return (
     <BrowserRouter>
        <Navbar/>
        <Router/>
     </BrowserRouter>
  );
}

export default App;
