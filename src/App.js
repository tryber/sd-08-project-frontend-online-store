import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import NavBar from './components/NavBar';
import * as api from './services/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfProducts: undefined,
      query: undefined,
      category: undefined,
      cartProducts: JSON.parse(localStorage.getItem('cartProducts')) || [],
      avaliations: JSON.parse(localStorage.getItem('avaliations')) || [],
      totalItemsInCart: undefined,
      width: window.innerWidth,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickCategory = this.handleClickCategory.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.updateAvaliations = this.updateAvaliations.bind(this);
    this.changeCarQuantityProduct = this.changeCarQuantityProduct.bind(this);
    this.deleteCartProduct = this.deleteCartProduct.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.fetchProducts();
    this.updateCartItemsQuantity();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
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

  updateDimensions() {
    this.setState({ width: window.innerWidth });
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

  updateCartItemsQuantity() {
    const { cartProducts } = this.state;
    if (cartProducts.length === 1) {
      return this.setState({ totalItemsInCart: cartProducts[0].quantity },
        () => localStorage.setItem('cartProducts',
          JSON.stringify(cartProducts)));
    }

    const total = cartProducts.reduce((acc, curr) => {
      acc += curr.quantity;
      return acc;
    }, 0);
    return this.setState({ totalItemsInCart: total },
      () => localStorage.setItem('cartProducts',
        JSON.stringify(cartProducts)));
  }

  addToCart(product) {
    const { cartProducts } = this.state;
    if (product.available_quantity < 1) {
      return;
    }
    const isOnCart = cartProducts.find((e) => e.id === product.id);
    if (!isOnCart) {
      const newProduct = { ...product, quantity: 1 };
      return this.setState({
        cartProducts: [...cartProducts, newProduct],
      }, () => this.updateCartItemsQuantity());
    }
    const allProducts = [...cartProducts];
    allProducts.forEach((prod) => {
      if (prod.id === product.id && product.available_quantity > prod.quantity) {
        prod.quantity += 1;
      }
    });
    return this.setState({
      cartProducts: [...allProducts],
    }, () => this.updateCartItemsQuantity());
  }

  updateAvaliations(newAvaliation) {
    const { avaliations } = this.state;
    return this.setState({ avaliations: [...avaliations, newAvaliation] },
      () => localStorage.setItem('avaliations',
        JSON.stringify(avaliations)));
  }

  changeCarQuantityProduct(e) {
    const { cartProducts } = this.state;
    const product = cartProducts.find((prod) => prod.id === e.target.id);
    const index = cartProducts.indexOf(product);
    if (e.target.name === 'subtract') {
      product.quantity -= 1;
      if (product.quantity < 1) {
        this.deleteCartProduct(product);
      }
    }
    if (e.target.name === 'add' && product.available_quantity > product.quantity) {
      product.quantity += 1;
    }
    this.setState({
      [cartProducts[index]]: product,
    }, () => this.updateCartItemsQuantity());
  }

  deleteCartProduct(product) {
    const { cartProducts } = this.state;
    const array = [...cartProducts];
    const index = cartProducts.indexOf(product);
    if (index >= 0) {
      array.splice(index, 1);
      return this.setState({
        cartProducts: array,
      }, () => this.updateCartItemsQuantity());
    }
  }

  render() {
    const { totalItemsInCart, width } = this.state;
    return (
      <BrowserRouter>
        <NavBar
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
          totalItemsInCart={ totalItemsInCart }
          width={ width }
        />
        <main className="main">
          <Content
            { ...this.state }
            fetchProducts={ this.fetchProducts }
            addToCart={ this.addToCart }
            changeCarQuantityProduct={ this.changeCarQuantityProduct }
            handleClickCategory={ this.handleClickCategory }
            updateAvaliations={ this.updateAvaliations }
            deleteCartProduct={ this.deleteCartProduct }
          />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
