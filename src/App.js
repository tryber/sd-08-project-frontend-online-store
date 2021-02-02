import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import * as api from './services/api';

import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import CheckoutCart from './components/CheckoutCart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.state = {
      productList: [],
      cartList: [],
    };
  }

  handleQuantityChange(opType, id) {
    const { cartList } = this.state;
    const items = [...cartList];
    const i = items.findIndex((item) => item.id === id);

    items[i].quantity = (opType === '+' && (items[i].quantity + 1))
    || (opType === '-' && (items[i].quantity - 1));

    this.setState({
      cartList: items,
    });
  }

  handleAddToCart(event) {
    const { id } = event.target;
    const { cartList, productList } = this.state;
    const { price, title } = productList.find((item) => item.id === id);

    this.setState({
      cartList: [...cartList, { id, price, title, quantity: 1 }],
    });
  }

  handleRequest(selectedCategory, inputText) {
    api.getProductsFromCategoryAndQuery(selectedCategory, inputText)
      .then((data) => {
        this.setState({
          productList: data.results,
        });
      });
  }

  renderShipping(free) {
    if (free === true) {
      return (
        <span style={ { color: 'red' } } data-testid="free-shipping">Frete Gratis</span>
      );
    }
  }

  render() {
    const { cartList, productList } = this.state;
    return (
      <main className="App main-container">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <ProductList
                productList={ productList }
                handleRequest={ this.handleRequest }
                handleAddToCart={ this.handleAddToCart }
                cartList={ cartList }
                renderShipping={ this.renderShipping }
              />
            </Route>
            <Route path="/shopping-cart">
              <ShoppingCart
                cartList={ cartList }
                productList={ productList }
                handleQuantityChange={ this.handleQuantityChange }
              />
            </Route>
            <Route path="/details/:id">
              <ProductDetails
                productList={ productList }
                handleRequest={ this.handleRequest }
                handleAddToCart={ this.handleAddToCart }
                cartList={ cartList }
                renderShipping={ this.renderShipping }
              />
            </Route>
            <Route path="/checkout">
              <CheckoutCart cartList={ cartList } />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
