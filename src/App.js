import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Route path="/shop-cart" component={ ShoppingCart } />
      <Route path="/" exact component={ Home } />
    </BrowserRouter>
  );
}

export default App;
