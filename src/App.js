import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SampleProduct from './SampleProduct';
import Product from './Product';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Product />
        <SampleProduct />
      </BrowserRouter>
    </div>
  );
}
