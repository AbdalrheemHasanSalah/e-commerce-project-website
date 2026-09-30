import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext';
import './App.css'




function App() {

  return (
    
  <AuthProvider>
  <div className="app">
    <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>

  </div>
  </AuthProvider>
  );

}

export default App
