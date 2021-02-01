import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cart: {},
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAddToCart(product) {
    const { id } = product;
    this.setState(({ cart }) => {
      if (!cart[id]) {
        return {
          cart: {
            ...cart,
            [id]: {
              item: product,
              quantity: 1,
              order: Object.keys(cart).length,
            },
          },
        };
      }
      return null;
    });
  }

  handleIncrease(product) {
    const { id } = product;
    this.setState(({ cart }) => {
      const { [id]: itemToUpdate, ...rest } = cart;
      const { quantity, ...itemRest } = itemToUpdate;
      const { available_quantity: availableQuantity } = product;
      const newQuantity = quantity + 1;
      return {
        cart: {
          ...rest,
          [id]: {
            ...itemRest,
            quantity: (newQuantity <= availableQuantity ? newQuantity : quantity),
          },
        },
      };
    });
  }

  handleDecrease(product) {
    const { id } = product;
    this.setState(({ cart }) => {
      const { [id]: itemToUpdate, ...rest } = cart;
      const { quantity, ...itemRest } = itemToUpdate;
      return {
        cart: {
          ...rest,
          [id]: {
            ...itemRest,
            quantity: (quantity && quantity - 1),
          },
        },
      };
    });
  }

  handleRemove({ id }) {
    this.setState(({ cart }) => {
      const { [id]: itemToRemove, ...rest } = cart;
      return {
        cart: {
          ...rest,
        },
      };
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            path="/product/:id"
            render={ (props) => (
              <ProductDetails { ...props } />) }
            handleAddToCart={ this.handleAddToCart }
          />
          <Route
            path="/cart"
            render={ (props) => (
              <Cart
                { ...props }
                cart={ cart }
                handleIncrease={ this.handleIncrease }
                handleDecrease={ this.handleDecrease }
                handleRemove={ this.handleRemove }
              />) }
          />
          <Route
            path="/"
            render={ (props) => (
              <Home { ...props } handleAddToCart={ this.handleAddToCart } />
            ) }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
