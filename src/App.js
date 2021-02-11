import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import * as api from './services/api';
import Carrinho from './Pages/Carrinho';
import Checkout from './Pages/Checkout';
import DetalhesProduto from './Pages/DetalhesProduto';
import PaginaInicial from './Pages/PaginaInicial';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      queryStatus: '',
      categoryId: '',
      cartProducts: [],
    };

    this.fetchProducts = this.fetchProducts.bind(this);
    this.changeQueryStatus = this.changeQueryStatus.bind(this);
    this.changeCategoryId = this.changeCategoryId.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  fetchProducts() {
    const { queryStatus, categoryId } = this.state;
    const { getProductsFromCategoryAndQuery } = api;

    getProductsFromCategoryAndQuery(categoryId, queryStatus)
      .then((data) => {
        this.setState({
          products: data.results,
        });
      });
  }

  changeCategoryId({ target }) {
    const { value } = target;
    this.setState({
      categoryId: value,
    });
  }

  changeQueryStatus({ target }) {
    const { value } = target;
    this.setState({
      queryStatus: value,
    });
  }

  addProductToCart(product) {
    this.setState((prevState) => {
      if (prevState.cartProducts.length !== 0) {
        return { cartProducts: [...prevState.cartProducts, product] };
      }
      return { cartProducts: [product] };
    });
  }

  render() {
    const { products, queryStatus, categoryId, cartProducts } = this.state;
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route
              path="/details/:id"
              render={ (props) => (<DetalhesProduto
                { ...props }
                addProductToCart={ this.addProductToCart }
                cartSize={ cartProducts.length }
              />) }
            />
            <Route path="/cart" component={ Carrinho } />
            <Route path="/checkout" component={ Checkout } />
            <Route
              exact
              path="/"
              products={ products }
              render={ (props) => (<PaginaInicial
                { ...props }
                products={ products }
                queryStatus={ queryStatus }
                changeQueryStatus={ this.changeQueryStatus }
                fetchProducts={ this.fetchProducts }
                categoryId={ categoryId }
                changeCategoryId={ this.changeCategoryId }
                addProductToCart={ this.addProductToCart }
                cartSize={ cartProducts.length }
              />) }
            />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
