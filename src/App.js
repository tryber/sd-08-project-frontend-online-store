import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productCart: [],
      productNumber: 0,
    };

    this.productToCart = this.productToCart.bind(this);
  }

  productToCart(newProduct) {
    const { productCart } = this.state;
    this.setState(({ productNumber }) => ({
      productCart: [...productCart, newProduct],
      productNumber: productNumber + 1,
    }));
  }

  render() {
    const { productCart, productNumber } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (
                <Home
                  { ...props }
                  productCart={ productCart }
                  productNumber={ productNumber }
                  productToCart={ this.productToCart }
                />
              ) }
            />
            <Route path="/cart" component={ Cart } />
            <Route
              path="/productDetails/:title"
              render={ (props) => (
                <ProductDetails
                  { ...props }
                  productCart={ productCart }
                  productNumber={ productNumber }
                  productToCart={ this.productToCart }
                />
              ) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
