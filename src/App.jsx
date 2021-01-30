import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
// import HomeModelo from './pages/HomeModelo';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Home } />
        {/* <Route path="/product" exact component={ ProductDetails } /> */}
        <Route path="/product/:id/:title" exact component={ ProductDetails } />
        <Route path="/cart" exact component={ Cart } />

        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}
