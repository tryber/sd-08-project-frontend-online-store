import React, { Component } from 'react';
import * as RequestAPI from '../services/api';
import ProductCard from '../components/ProductCard';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      query: '',
    };

    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { query } = this.state;
    this.fetchProducts(query);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({ query: value });
  }

  handleClick() {
    const { query } = this.state;
    this.fetchProducts(query);
  }

  async fetchProducts(query) {
    const { results } = await RequestAPI.getProductsFromCategoryAndQuery('', query);
    this.setState({ products: results });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="header">
        <input
          data-testid="query-input"
          type="text"
          className="input"
          onChange={ this.handleChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        {products.map((product) => (<ProductCard
          key={ product.id }
          product={ product }
          handleChange={ this.fetchProducts }
        />))}
      </div>
    );
  }
}

export default ProductList;
