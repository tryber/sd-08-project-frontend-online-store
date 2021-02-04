import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPageCart from './components/LandingPageCart';

import SearchBar from './components/SearchBar';
import LandingProductDetails from './components/LandingProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ SearchBar } />
      <Route path="/shopping-cart" component={ LandingPageCart } />
      <Route path="/product-details/:id" component={ LandingProductDetails } />
    </BrowserRouter>
  );
}

export default App;
