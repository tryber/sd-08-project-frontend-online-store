import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProductsList from './pages/ProductsList';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ ProductsList } exact />
        <Route path="/shoppingcart" component={ ShoppingCart } />
      </Switch>
    </Router>
  );
}

export default App;
