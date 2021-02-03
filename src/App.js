import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, DetailsProduct, ShoppingCart, Checkout } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/product/details/:id"
            render={ (props) => (
              <DetailsProduct { ...props } />
            ) }
          />
          <Route path="/shoppingcart/checkout" component={ Checkout } />
          <Route path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
