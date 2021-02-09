import React from 'react';

import './style.css';

import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import Shop from './pages/Shop';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './Components/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
    this.onAddCart = this.onAddCart.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease(item) {
    const { cart } = this.state;
    const newCart = [...cart];
    if (newCart[item].productQuantity <= newCart[item].availableQuantity) {
      newCart[item].productQuantity += 1;
      this.setState({
        cart: newCart,
      });
    }
  }

  handleDecrease(item) {
    const { cart } = this.state;
    const newCart = [...cart];
    if (newCart[item].productQuantity > 1) {
      newCart[item].productQuantity -= 1;
      this.setState({
        cart: newCart,
      });
    }
  }

  onAddCart(item) {
    const { cart } = this.state;
    item.productQuantity = 1;
    const newCart = [...cart, item];
    this.setState({
      cart: newCart,
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Link to="/shop" data-testid="shopping-cart-button">
            <ShoppingCart />
          </Link>
        </div>
        <Switch>
          <Route exact path="/shop">
            <Shop
              cart={ cart }
              handleIncrease={ this.handleIncrease }
              handleDecrease={ this.handleDecrease }
            />
          </Route>
          <Route exact path="/">
            <Home cart={ cart } onAddCart={ this.onAddCart } />
          </Route>
          <Route exact path="/details">
            <ProductDetails onAddCart={ this.onAddCart } />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
