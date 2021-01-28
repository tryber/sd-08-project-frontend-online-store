import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/shoppingcart" component={ ShoppingCart } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </Router>
  );
}

export default App;
