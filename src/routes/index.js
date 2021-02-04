import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ShoppingCart from '../pages/ShoppingCart';
import Payment from '../pages/Payment';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route path="/product-details/:id" component={ ProductDetails } />
        <Route path="/checkout" component={ Payment } />
      </Switch>
    );
  }
}
