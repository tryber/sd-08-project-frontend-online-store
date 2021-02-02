import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      ratings: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.removeAllFromCart = this.removeAllFromCart.bind(this);
    this.addRating = this.addRating.bind(this);
    this.cleanCart = this.cleanCart.bind(this);
  }

  addRating(rating) {
    const { ratings } = this.state;
    this.setState({
      ratings: [...ratings, rating],
    });
  }

  addToCart(product) {
    const { cart } = this.state;
    this.setState({
      cart: [...cart, product],
    });
  }

  cleanCart() {
    this.setState({
      cart: [],
    });
  }

  removeFromCart(product) {
    const { cart } = this.state;
    const copyProducts = cart.slice();
    const notFound = -1;
    const index = copyProducts.slice().reverse()
      .findIndex((prod) => prod.id === product.id);
    if (index !== notFound) {
      copyProducts.splice(copyProducts.length - 1 - index, 1);
      this.setState({
        cart: copyProducts,
      });
    }
  }

  removeAllFromCart({ id }) {
    const { cart } = this.state;
    this.setState({
      cart: cart.filter((prod) => prod.id !== id),
    });
  }

  render() {
    const { cart, ratings } = this.state;
    return (
      <Router>
        <main>
          <Switch>
            <Route
              path="/checkout"
              render={ () => <Checkout cleanCart={ this.cleanCart } cart={ cart } /> }
            />
            <Route
              path="/product-details"
              render={ (props) => (
                <ProductDetails
                  { ...props }
                  ratings={ ratings }
                  addRating={ this.addRating }
                  addToCart={ this.addToCart }
                />) }
            />
            <Route
              path="/shoppingcart"
              render={ () => (<ShoppingCart
                cart={ cart }
                addToCart={ this.addToCart }
                removeAllFromCart={ this.removeAllFromCart }
                removeFromCart={ this.removeFromCart }
              />) }
            />
            <Route
              path="/"
              render={ () => <Home addToCart={ this.addToCart } cart={ cart } /> }
            />
          </Switch>
        </main>
      </Router>
    );
  }
}
export default App;
