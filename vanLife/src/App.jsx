import { useState } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages//HomePage';
import AboutPage from './pages/AboutPage';
import VanListings, { loader as vansLoader } from './pages/Vans/VanListings';
import VanDetails, { loader as vanDetailLoader } from './pages/Vans/VanDetails';
import HostLayout from './components/HostLayout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans, { loader as hostVansLoader } from './pages/Host/HostVans';
import HostVanDetails, { loader as hostVanDetailsLoader } from './pages/Host/HostVanDetails';
import HostsVanDescription from './pages/Host/HostsVanDescription';
import HostsVanPricing from './pages/Host/HostsVanPricing';
import HostsVanPhotos from './pages/Host/HostsVanPhotos';
import PageNotFound from './pages/PageNotFound';
import VansRouteError from './errorElements/VansRouteError';
import Login, { loginLoader, action as loginAction } from './pages/Login';
import { requireAuth } from './utils';
import './App.css';

import "./server";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />}/>
    <Route path="about" element={<AboutPage />}/>
    <Route 
      path="login" 
      element={<Login />} 
      loader={loginLoader}
      action={loginAction}
    />
    <Route 
      path="van-listings" 
      element={<VanListings/>} 
      errorElement={<VansRouteError />}
      loader={vansLoader}
    />
    <Route 
      path="van-listings/:id" 
      element={<VanDetails />}
      loader={vanDetailLoader}
      errorElement={<VansRouteError />}
    />
    <Route 
      path="host" 
      element={<HostLayout />}
      loader={async ({ request }) => await requireAuth(request)}
    >
      <Route 
        index 
        element={<Dashboard />}
        loader={async ({ request }) => await requireAuth(request)}
      />
      <Route 
        path="income" 
        element={<Income />}
        loader={async ({ request }) => await requireAuth(request)}
      />
      <Route 
        path="reviews" 
        element={<Reviews />}
        loader={async ({ request }) => await requireAuth(request)}
      />
      <Route 
        path="vans" 
        element={<HostVans />}
        loader={hostVansLoader}
        errorElement={<VansRouteError />}
      />
      <Route 
        path="vans/:id" 
        element={<HostVanDetails />}
        loader={hostVanDetailsLoader}
        errorElement={<VansRouteError />}
      >
        <Route 
          index 
          element={<HostsVanDescription />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route 
          path="pricing" 
          element={<HostsVanPricing />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route 
          path="photos" 
          element={<HostsVanPhotos />}
          loader={async ({ request }) => await requireAuth(request)}
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