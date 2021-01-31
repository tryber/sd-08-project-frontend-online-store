import React, { Component } from 'react';
import CategoriesList from './CategoriesList';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import * as api from '../services/api';

class MainList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      categories: [],
      category: '',
      query: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    const { category, query } = this.state;
    this.fetchProducts(category, query);
    this.fetchCategories();
  }

  async handleClick() {
    const { category, query } = this.state;
    this.fetchProducts(category, query);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async fetchCategories() {
    const categories = await api.getCategories();
    this.setState(({ categories }));
  }

  async fetchProducts(category, query) {
    const products = await api.getProductsFromCategoryAndQuery(category, query);
    this.setState(({
      products: products.results,
    }));
  }

  render() {
    const { categories, products, query } = this.state;
    return (
      <div>
        <SearchBar
          onClick={ this.handleClick }
          onChange={ this.handleChange }
          text={ query }
        />
        <CategoriesList
          list={ categories }
          onClick={ this.handleClick }
        />
        {products.map((produto) => (<ProductCard
          key={ produto.id }
          product={ produto }
        />))}
      </div>
    );
  }
}

export default MainList;
