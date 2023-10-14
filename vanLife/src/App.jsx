import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './pages//HomePage';
import AboutPage from './pages/AboutPage';
import VanListings from './pages/VanListingPage';
import VanDetails from './pages/VanDetails';
import Footer from './Footer';
import './App.css'

import "./server"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/van-listings" element={<VanListings />}/>
        <Route path="/van-listings/:id" element={<VanDetails />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;