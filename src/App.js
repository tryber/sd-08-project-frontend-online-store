import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shoppingCart" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
