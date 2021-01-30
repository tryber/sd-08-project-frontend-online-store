import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ProductsList, ShoppingCart } from './pages';

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
