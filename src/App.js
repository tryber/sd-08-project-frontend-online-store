import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, ShoppingCart, Product } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/shoppingcart" component={ ShoppingCart } />
          <Route path="/product" component={ Product } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
