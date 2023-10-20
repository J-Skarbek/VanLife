import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import HomePage from './pages//HomePage';
import AboutPage from './pages/AboutPage';
import VanListings from './pages/Vans/VanListings';
import VanDetails from './pages/Vans/VanDetails';
import HostLayout from './components/HostLayout';
import Dashboard from './pages/host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans from './pages/Host/HostVans';
import HostVanDetails from './pages/Host/HostVanDetails';
import HostsVanDetails from './pages/Host/HostsVanDetails';
import HostsVanPricing from './pages/Host/HostsVanPricing';
import HostsVanPhotos from './pages/Host/HostsVanPhotos';
import './App.css'

import "./server"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="about" element={<AboutPage />}/>
          <Route path="van-listings" element={<VanListings />}/>
          <Route path="van-listings/:id" element={<VanDetails />}/>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path="income" element={<Income />}/>
            <Route path="reviews" element={<Reviews />}/>
            <Route path="vans" element={<HostVans />}/>
            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route path="vans/:id/details" element={<HostsVanDetails />}/>
              <Route path="vans/:id/pricing" element={<HostsVanPricing />}/>
              <Route path="vans/:id/photos" element={<HostsVanPhotos />}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;