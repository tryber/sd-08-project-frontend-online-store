import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route
        path="/checkout"
        render={ (props) => (
          <Checkout { ...props } />
        ) }
      />
      <Route
        path="/products/:id"
        render={ (props) => (
          <ProductDetails { ...props } />
        ) }
      />
      <Route path="/shopping-cart" component={ ShoppingCart } />
    </BrowserRouter>
  );
}

export default App;
