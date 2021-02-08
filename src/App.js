import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ProductsList, ShoppingCart } from './pages';

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
        </Switch>
      </Router>
    );
  }
}

export default App;
