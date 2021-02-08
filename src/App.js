import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ProductsList, ShoppingCart, ProductDetails } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ ProductsList } exact />
        <Route path="/shoppingcart" component={ ShoppingCart } />
        <Route path="/details/:id" component={ ProductDetails } />
      </Switch>
    </Router>
  );
}

export default App;
