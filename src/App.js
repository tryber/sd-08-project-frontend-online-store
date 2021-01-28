import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import LandingPageCart from './components/LandingPageCart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/shopping-cart" component={ LandingPageCart } />
    </BrowserRouter>
  );
}

export default App;
