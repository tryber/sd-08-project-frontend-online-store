import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import CategoriesList from '../components/CategoriesList';

import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      'query-input': '',
      'selected-category': '',
      categories: [],
      results: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchSelect = this.handleSearchSelect.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => this.setState({ categories }));
  }

  handleChange({ target }, callback) {
    const { name, value } = target;
    this.setState({ [name]: value }, callback);
  }

  handleSearch() {
    const { 'query-input': queryInput } = this.state;
    api.getProductsFromCategoryAndQuery(null, queryInput)
      .then(this.updateResults);
  }

  handleSearchSelect(event) {
    this.handleChange(event, () => {
      const { 'selected-category': selectedCategory } = this.state;
      api.getProductsFromCategoryAndQuery(selectedCategory)
        .then(this.updateResults);
    });
  }

  updateResults({ results }) {
    this.setState({ results });
  }

  render() {
    const { categories, results } = this.state;
    return (
      <div className="home">
        <SearchBar
          onChange={ this.handleChange }
          onClick={ this.handleSearch }
        />
        <CategoriesList
          handleChange={ this.handleSearchSelect }
          categories={ categories }
        />
        <Link
          style={ { display: 'block' } }
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        { !!results.length && <SearchResults results={ results } /> }
      </div>
    );
  }
}

export default Home;
