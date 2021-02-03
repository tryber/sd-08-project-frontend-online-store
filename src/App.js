import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import CartSizeContext from './services/context';

class App extends React.Component {
  constructor(props) {
    super(props);

    const cartSize = localStorage.cartItems ? this.calcSize(localStorage.cartItems) : 0;

    this.state = {
      cartSize,
    };

    this.updateCartSize = this.updateCartSize.bind(this);
  }

  calcSize(storage) {
    return JSON.parse(storage).reduce((acc, { quantity }) => acc + quantity, 0);
  }

  updateCartSize() {
    this.setState({
      cartSize: this.calcSize(localStorage.cartItems),
    });
  }

  render() {
    const { cartSize } = this.state;
    return (
      <CartSizeContext.Provider value={ this.updateCartSize }>
        <Router>
          <main className="App">
            <Switch>
              <Route
                path="/details/:id"
                render={ (props) => (
                  <ProductDetails { ...props } cartSize={ cartSize } />) }
              />
              <Route path="/pages/shoppingcart" component={ ShoppingCart } />
              <Route
                exact
                path="/"
                render={ (props) => <Home { ...props } cartSize={ cartSize } /> }
              />
            </Switch>
          </main>
        </Router>
      </CartSizeContext.Provider>
    );
  }
}

export default App;
