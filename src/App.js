import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ShoppingCart from './ShoppingCart';
import ProductDetails from './ProductDetails';
import Checkout from './Checkout';

function App() {
  return (
    <BrowserRouter>
      <Route path="/product-details" component={ ProductDetails } />
      <Route path="/shopping-cart" component={ ShoppingCart } />
      <Route path="/checkout" component={ Checkout } />
      <Route exact path="/" component={ LandingPage } />
    </BrowserRouter>
  );
}

export default App;
