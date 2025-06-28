import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Productos } from './pages/Productos';
import { SobreNosotros } from './pages/SobreNosotros';
import { Navbar } from './components/Navbar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
