import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Layout from './components/Layout';
import HomePage from './pages//HomePage';
import AboutPage from './pages/AboutPage';
import VanListings from './pages/VanListingPage';
import VanDetails from './pages/VanDetails';
import Footer from './components/Footer';
import './App.css'

import "./server"

function App() {

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/van-listings" element={<VanListings />}/>
          <Route path="/van-listings/:id" element={<VanDetails />}/>
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App;