import React, { Component } from 'react';
import * as api from '../services/api';
import ProductCard from './ProductCard';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      query: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSearch() {
    const { query } = this.state;
    const fetch = await api.getProductsFromCategoryAndQuery('', query);
    this.setState({ product: fetch.results });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { query, product } = this.state;
    return (
      <section>
        <label htmlFor="input">
          Search:
          <input
            onChange={ this.handleChange }
            data-testid="query-input"
            type="text"
            name="query"
            value={ query }
          />
        </label>
        <button
          onClick={ this.handleSearch }
          type="button"
          data-testid="query-button"
        >
          Button
        </button>
        { product.map((item) => <ProductCard key={ item.id } product={ item } />) }
      </section>
    );
  }
}

export default SearchBar;
