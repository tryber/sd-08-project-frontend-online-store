import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/products/:id" component={ ProductDetails } />
      <Route path="/shop-cart" component={ ShoppingCart } />
    </BrowserRouter>
  );
}

export default App;
