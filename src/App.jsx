import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
// import HomeModelo from './pages/HomeModelo';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Home } />
        {/* <Route path="/home" exact component={ HomeModelo } /> */}
        <Route path="/product" exact component={ Product } />
        <Route path="/product/:id" exact component={ Product } />
        <Route path="/cart" exact component={ Cart } />

        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}
