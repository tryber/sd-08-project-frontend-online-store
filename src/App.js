import React from 'react';
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
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
