import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Login } from './features/restaurant/auth/pages/Login';

import { RutaPrivada } from './routes/PrivateRoute';

import { CartProvider } from './context/CountContext';

import { HomeAdm } from './features/restaurant/pages/HomeAdm';

import HomeClient from './features/client/pages/HomeClient';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path='/' element={<HomeClient />} />
          <Route path='/Login' element={<Login />} />
          <Route
            path='/Home'
            element={
              <RutaPrivada>
                <HomeAdm />
              </RutaPrivada>
            }
          />
          <Route path='/*' element={<Navigate to='/HomeClient' replace />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
