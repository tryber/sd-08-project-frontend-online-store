import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shoppingcart" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
