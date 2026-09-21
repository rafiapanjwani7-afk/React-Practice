import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={Home } />
        <Route path="/about" element={About} />
        <Route path="/contact" element={Contact} />
      </Routes>
    </>
  )
}

export default App
