//import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import { Routes, Route } from 'react-router-dom'
import Body from './pages/Body.jsx'
import Body2 from './pages/Body2.jsx'

function App() {

  // prevent body scrolling and ensure full-height layout
  useEffect(() => {
    document.body.style.margin = 0
  }, [])

  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/body2" element={<Body2 />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App