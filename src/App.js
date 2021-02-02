import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShoppingCart from './Pages/Shopping-cart';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route exact path="/" component={ Home } />
        <Route path="/details/:id" component={ ProductDetail } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
