import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'

import './App.css'




function App() {

  return (<div className="app">
    <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route patj="/auth" element={<Auth/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>

  </div>);

}

export default App
