import { useState } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages//HomePage';
import AboutPage from './pages/AboutPage';
import VanListings, { loader as vansLoader } from './pages/Vans/VanListings';
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
import VansRouteError from './errorElements/VansRouteError';
import Login from './pages/Login';
import './App.css';

import "./server";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />}/>
    <Route path="about" element={<AboutPage />}/>
    <Route path="login" element={<Login />}/>
    <Route 
      path="van-listings" 
      element={<VanListings/>} 
      errorElement={<VansRouteError />}
      loader={vansLoader}
    />
    <Route path="van-listings/:id" element={<VanDetails />}/>
    <Route 
      path="host" 
      element={<HostLayout />}
    >
      <Route 
        index 
        element={<Dashboard />}
        loader={async () => {
          return null;
        }}
      />
      <Route 
        path="income" 
        element={<Income />}
        loader={async () => {
          return null;
        }}
      />
      <Route 
        path="reviews" 
        element={<Reviews />}
        loader={async () => {
          return null;
        }}
      />
      <Route 
        path="vans" 
        element={<HostVans />}
        loader={async () => {
          return null;
        }}
      />
      <Route 
        path="vans/:id" 
        element={<HostVanDetails />}
        loader={async () => {
          return null;
        }}
      >
        <Route 
          index 
          element={<HostsVanDetails />}
          loader={async () => {
            return null;
          }}
        />
        <Route 
          path="pricing" 
          element={<HostsVanPricing />}
          loader={async () => {
            return null;
          }}
        />
        <Route 
          path="photos" 
          element={<HostsVanPhotos />}
          loader={async () => {
            return null;
          }}
        />
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