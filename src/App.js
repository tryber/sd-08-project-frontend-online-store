import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import NavBar from './components/NavBar';
import * as api from './services/api';
import Checkout from './pages/checkout';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfProducts: undefined,
      query: undefined,
      category: undefined,
      cartProducts: [],
      avaliations: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickCategory = this.handleClickCategory.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.updateAvaliations = this.updateAvaliations.bind(this);
    this.addCarQuantityProduct = this.addCarQuantityProduct.bind(this);
    this.subCarQuantityProduct = this.subCarQuantityProduct.bind(this);
    this.deleteCarProduct = this.deleteCarProduct.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.fetchProducts();
  }

  async handleClickCategory(e) {
    const { query } = this.state;
    if (query === undefined) {
      await this.setState({
        category: e.target.id,
        query: '',
      });
      this.fetchProducts();
    } else {
      await this.setState({
        category: e.target.id,
      });
      this.fetchProducts();
    }
  }

  async fetchProducts() {
    try {
      const { category, query } = this.state;
      const produtos = await api.getProductsFromCategoryAndQuery(category, query)
        .then((data) => data.results);
      const produtoComThumbBoa = produtos.map((product) => {
        product.thumbnail = product.thumbnail.replace('-I.jpg', '-O.jpg');
        return product;
      });
      this.setState({
        listOfProducts: produtoComThumbBoa,
      });
    } catch (error) {
      return undefined;
    }
  }

  addToCart(product) {
    const { cartProducts } = this.state;

    const isOnCart = cartProducts.find((e) => e.id === product.id);
    if (!isOnCart) {
      const newProduct = { ...product, quantitity: 0 };
      return this.setState({
        cartProducts: [...cartProducts, newProduct],
      });
    }

    const allProducts = [...cartProducts];
    allProducts.forEach((prod) => {
      if (prod.id === product.id) {
        prod.quantitity += 1;
      }
    });
    return this.setState({
      cartProducts: [...cartProducts, allProducts],
    });
  }

  updateAvaliations(newAvaliation) {
    const { avaliations } = this.state;
    this.setState({ avaliations: [...avaliations, newAvaliation] });
  }

  addCarQuantityProduct(e) {
    const { cartProducts } = this.state;
    const title = e.target.name;
    const product = cartProducts.find((prod) => prod.name === title);
    const index = cartProducts.indexOf(product);
    product.quantity += 1;
    this.setState({
      [cartProducts[index]]: product,
    });
  }

  subCarQuantityProduct(e) {
    const { cartProducts } = this.state;
    const title = e.target.name;
    const product = cartProducts.find((prod) => prod.name === title);
    const index = cartProducts.indexOf(product);
    if (product.quantity > 1) {
      product.quantity -= 1;
      this.setState({
        [cartProducts[index]]: product,
      });
    }
  }

  deleteCarProduct(e) {
    const { cartProducts } = this.state;
    const title = e.target.name;
    const product = cartProducts.find((prod) => prod.name === title);
    const index = cartProducts.indexOf(product);
    if (product.quantity > 1) {
      this.setState({
        [cartProducts[index]]: product,
      });
    }
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <BrowserRouter>
        <NavBar
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
          cartProducts={ cartProducts }
        />
        <main className="main">
          <Content
            { ...this.state }
            fetchProducts={ this.fetchProducts }
            addToCart={ this.addToCart }
            addCarQuantityProduct={ this.addCarQuantityProduct }
            subCarQuantityProduct={ this.subCarQuantityProduct }
            handleClickCategory={ this.handleClickCategory }
            updateAvaliations={ this.updateAvaliations }
          />
        </main>
        <Switch>
          <Route exact path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
