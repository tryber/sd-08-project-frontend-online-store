import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import Categories from '../components/Categories';

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
  }

  componentDidMount() {
    api.getCategories().then((categories) => this.setState({ categories }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSearch() {
    const {
      'selected-category': selectedCategory,
      'query-input': queryInput,
    } = this.state;

    api.getProductsFromCategoryAndQuery(selectedCategory, queryInput)
      .then(({ results }) => this.setState({
        results,
      }));
  }

  render() {
    const { categories, results } = this.state;
    return (
      <div className="home">
        <SearchBar
          onChange={ this.handleChange }
          onClick={ this.handleSearch }
        />
        <Categories onChange={ this.handleChange } categories={ categories } />
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
