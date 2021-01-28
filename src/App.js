import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/shop-cart" component={ ShoppingCart } />
        <Route path="/" exact component={ Search } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
