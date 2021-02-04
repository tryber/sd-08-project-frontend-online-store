import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ Home }
          />
          <Route
            path="/pages/cart"
            component={ Cart }
          />
          <Route path="/pages/details/:id" component={ ProductDetails } />
          <Route path="/pages/checkout" component={ CheckOut } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
