import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<TestAboutComponent />}/>
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <h1>This is a test 'Home' Compoenent</h1>
  )
}

function TestAboutComponent() {
  return (
    <p>This is a test component -- wiill be deleted!</p>
  )
}

export default App;