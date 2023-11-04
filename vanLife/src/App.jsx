import { useState } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages//HomePage';
import AboutPage from './pages/AboutPage';
import VanListings from './pages/Vans/VanListings';
import VanDetails from './pages/Vans/VanDetails';
import HostLayout from './components/HostLayout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans from './pages/Host/HostVans';
import HostVanDetails from './pages/Host/HostVanDetails';
import HostsVanDetails from './pages/Host/HostsVanDetails';
import HostsVanPricing from './pages/Host/HostsVanPricing';
import HostsVanPhotos from './pages/Host/HostsVanPhotos';
import PageNotFound from './pages/PageNotFound';
import './App.css';

import "./server";

const router = createBrowserRouter(createRoutesFromElements(
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
        <Route index element={<HostsVanDetails />}/>
        <Route path="pricing" element={<HostsVanPricing />}/>
        <Route path="photos" element={<HostsVanPhotos />}/>
      </Route>
    </Route>
    <Route path="*" element={<PageNotFound />}/>
  </Route>
))

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;