import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';

import store from './store';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
// import Debug from './pages/Debug';
// import HomeModelo from './pages/HomeModelo';

export default function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Switch>
          <Route path="/" exact component={ Home } />
          {/* <Route path="/product" exact component={ ProductDetails } /> */}
          {/* <Route path="/product/:id/:title/:price" exact component={ ProductDetails } /> */}
          <Route path="/product/:id" exact component={ ProductDetails } />
          {/* <Route path="/cart" exact component={ Cart } /> */}

          <Route path="/cart" exact component={ Cart } />

          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}
