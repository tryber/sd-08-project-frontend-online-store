import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Route path="/shop-cart" component={ ShoppingCart } />
      <Route path="/" exact component={ Search } />
    </BrowserRouter>
  );
}

export default App;
