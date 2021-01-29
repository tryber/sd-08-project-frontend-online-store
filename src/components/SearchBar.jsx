import React, { Component } from 'react';
import * as api from '../services/api';

import ProductCard from './ProductCard';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      query: [],
      text: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSearch() {
    const { text } = this.state;
    const fetch = await api.getProductsFromCategoryAndQuery('', text);
    this.setState({ query: fetch.results });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { text, query } = this.state;
    return (
      <section>
        <label htmlFor="input">
          Search:
          <input
            onChange={ this.handleChange }
            data-testid="query-input"
            type="text"
            name="text"
            value={ text }
          />
        </label>
        <button
          onClick={ this.handleSearch }
          type="button"
          data-testid="query-button"
        >
          Button
        </button>
        { query.map((item) => <ProductCard key={ item.id } product={ item } />) }
      </section>
    );
  }
}

export default SearchBar;
