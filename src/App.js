import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartPage from './components/CartPage';
import './App.css';
import './services/api';
import TopNavBar from './components/TopNavBar';
import * as api from './services/api';
import MainPage from './components/MainPage';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  constructor() {
    super();
    this.buscaDeProdutos = this.buscaDeProdutos.bind(this);
    this.buscaProdutosInput = this.buscaProdutosInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addCart = this.addCart.bind(this);
    this.state = {
      categories: [],
      products: [],
      productsOnCart: [],
      totalItems: 0,
    };
  }

  componentDidMount() {
    api.getCategories().then((result) => {
      this.setState(() => ({ categories: result }));
    });
  }

  handleChange(envet) {
    envet.preventDefault();
    const { name, value } = envet.target;
    this.setState({ [name]: value });
  }

  getCartItems() {
    let cartItems = window.localStorage.getItem('cartItems');
    if (cartItems === null) {
      cartItems = '[]';
    }
    return JSON.parse(cartItems);
  }

  saveCartItems(array = []) {
    window.localStorage.setItem('cartItems', JSON.stringify(array));
  }

  buscaDeProdutos(id) {
    const { input } = this.state;
    api.getProductsFromCategoryAndQuery(id, input).then((result) => {
      this.setState(() => ({ products: result.results }));
    });
  }

  buscaProdutosInput() {
    const { input } = this.state;
    api.getProductsFromCategoryAndQuery('', input)
      .then(({ results }) => this.setState({
        products: results,
      }));
  }

  addCart(obj, amount = 1) {
    obj.amountToBuy = amount;
    this.setState((old) => {
      if (!old.productsOnCart.includes(obj)) {
        return {
          productsOnCart: [...old.productsOnCart, obj],
          totalItems: (old.totalItems + amount),
        };
      }
    });
  }

  render() {
    const { categories, products, productsOnCart, totalItems } = this.state;

    return (
      <BrowserRouter>
        <TopNavBar cartSize={ totalItems } />
        <Switch>
          <Route
            path="/shoppingCart"
            render={ (props) => (<CartPage
              { ...props }
              productsOnCart={ productsOnCart }
            />) }
          />
          <Route
            path="/:id"
            render={ (props) => <ProductDetails { ...props } addCart={ this.addCart } /> }
          />
          <Route
            path="/"
            render={ (props) => (<MainPage
              { ...props }
              categories={ categories }
              products={ products }
              onclick={ this.buscaDeProdutos }
              addCart={ this.addCart }
              onChange={ this.handleChange }
              onClickInput={ this.buscaProdutosInput }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
