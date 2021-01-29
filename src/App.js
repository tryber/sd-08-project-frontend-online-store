import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import FilterCategories from './components/FilterCategories';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route path="/pages/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </main>
      <FilterCategories />
    </Router>
  );
}

export default App;
