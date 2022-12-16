import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SampleProduct from './SampleProduct';
import Product from './Product';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <BrowserRouter>
        <Product />
        <SampleProduct />
      </BrowserRouter>
    </div>
  );
}
