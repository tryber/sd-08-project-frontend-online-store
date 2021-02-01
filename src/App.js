import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Details from './pages/Details';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shoppingCart" component={ ShoppingCart } />
        <Route path="/details/:id" component={ Details } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
