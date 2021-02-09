import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ProductsList, ShoppingCart, ProductDetails } from './pages';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };

    this.handleAddItemToCart = this.handleAddItemToCart.bind(this);
  }

  handleAddItemToCart(item) {
    const { cart } = this.state;
    item.quantity = 1;
    item.totalPrice = item.price;

    this.setState({
      cart: [...cart, item],
    });
  }

  render() {
    const { cart } = this.state;

    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={ () => (<ProductsList
              handleAddItemToCart={ this.handleAddItemToCart }
              cart={ cart }
            />) }
          />
          <Route
            path="/shoppingcart"
            render={ () => (<ShoppingCart
              cart={ cart }
              handleAddItemToCart={ this.handleAddItemToCart }
            />) }
          />
          <Route path="/details/:id" component={ ProductDetails } />
        </Switch>
      </Router>
    );
  }
}

export default App;
