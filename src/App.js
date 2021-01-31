import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import './App.css';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shop-cart" component={ ShoppingCart } />
          <Route
            path="/product/:id"
            render={
              (props) => <ProductDetail { ...props } />
            }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
