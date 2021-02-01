import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/ProductDetails/:id" component={ ProductDetails } />
          <Route path="/cart" component={ Cart } />
          <Route path="/" component={ Home } />
          <Route path="/checkout" component={ Checkout } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
