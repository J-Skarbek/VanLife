import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;