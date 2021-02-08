import React from 'react';

import './style.css';

import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import Shop from './pages/Shop';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './Components/ShoppingCart';
import RateProduct from  './Components/RateProcuct';

function App() {
  return (
    <BrowserRouter>
      <div>
      <RateProduct />
        <Link to="/shop" data-testid="shopping-cart-button">
          <ShoppingCart />
        </Link>
      </div>
      <Switch>
        <Route exact path="/shop" component={ Shop } />
        <Route exact path="/" component={ Home } />
        <Route exact path="/details">
          <ProductDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
