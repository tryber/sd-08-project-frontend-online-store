import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    const { cart } = this.state;
    this.setState({
      cart: [...cart, product],
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <Router>
        <main>
          <Switch>
            <Route
              path="/details"
              render={ () => <Details addToCart={ this.addToCart } /> }
            />
            <Route path="/shoppingcart" render={ () => <ShoppingCart cart={ cart } /> } />
            <Route path="/" render={ () => <Home addToCart={ this.addToCart } /> } />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
