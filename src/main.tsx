import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Login } from './features/restaurant/auth/pages/Login';

import { RutaPrivada } from './routes/PrivateRoute';

import { Home } from './features/restaurant/pages/Home';
import HomeClient from './features/client/pages/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeClient />} />
        <Route path='/Login' element={<Login />} />
        <Route
          path='/Home'
          element={
            <RutaPrivada>
              <Home />
            </RutaPrivada>
          }
        />
        <Route path='/*' element={<Navigate to='/HomeClient' replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
