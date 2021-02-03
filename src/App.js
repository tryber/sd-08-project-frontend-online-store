import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route path="/details/:id" component={ ProductDetails } />
          <Route path="/pages/shoppingcart" component={ ShoppingCart } />
          <Route path="/pages/checkout" component={ Checkout } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
