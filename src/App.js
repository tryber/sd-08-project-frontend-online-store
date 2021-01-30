import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CategoriesList from './components/CategoriesList';
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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickCategory = this.handleClickCategory.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
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

  render() {
    return (
      <BrowserRouter>
        <NavBar handleChange={ this.handleChange } handleClick={ this.handleClick } />
        <main className="main">
          <CategoriesList handleClickCategory={ this.handleClickCategory } />
          <Content { ...this.state } fetchProducts={ this.fetchProducts } />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
