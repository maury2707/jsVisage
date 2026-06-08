//import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import { Routes, Route } from 'react-router-dom'
import Cars from './pages/Cars.jsx'
import Airplanes from './pages/Airplanes.jsx'
import Motorcycles from './pages/Motorcycles.jsx'

function App() {

  // prevent body scrolling and ensure full-height layout
  useEffect(() => {
    document.body.style.margin = 0
  }, [])

  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/airplanes" element={<Airplanes />} />
        <Route path="/motorcycles" element={<Motorcycles />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App