import React from 'react';

import './style.css';

import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import Shop from './pages/Shop';
import Home from './pages/Home';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/shop" data-testid="shopping-cart-button">
          <ShoppingCart />
        </Link>
      </div>
      <Switch>
        <Route exact path="/shop" component={ Shop } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
