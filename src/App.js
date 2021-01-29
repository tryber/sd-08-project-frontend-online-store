import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import * as api from './services/api';

import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
    this.state = {
      productList: [],
      cartList: [],
    };
  }

  handleAddToCart(event) {
    const { id } = event.target;
    const { cartList } = this.state;
    this.setState({
      cartList: [...cartList, { id, quantity: 1 }],
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
              />
            </Route>
            <Route path="/shopping-cart">
              <ShoppingCart cartList={ cartList } productList={ productList } />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
