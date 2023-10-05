import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
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
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

// function Home() {
//   return (
//     <h1>This is a test 'Home' Compoenent</h1>
//   )
// }

// function TestAboutComponent() {
//   return (
//     <p>This is a test component -- wiill be deleted!</p>
//   )
// }

export default App;