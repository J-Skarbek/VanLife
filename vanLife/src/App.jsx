import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import HomePage from './pages//HomePage';
import AboutPage from './pages/AboutPage';
import Footer from './Footer';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;