import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SearchBar, SearchResults, Categories } from '../../components';

import styles from './styles.module.css';

import * as api from '../../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queryInput: '',
      results: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchCategory = this.handleSearchCategory.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSearch() {
    const { queryInput } = this.state;
    api.getProductsFromCategoryAndQuery('', queryInput)
      .then(({ results }) => this.setState({ results }));
  }

  handleSearchCategory({ target: { id } }) {
    api.getProductsFromCategoryAndQuery(id, '')
      .then(({ results }) => this.setState({ results }));
  }

  render() {
    const { results } = this.state;
    const { handleAddToCart } = this.props;
    return (
      <div>
        <main className={ styles.mainContent }>
          <div className={ styles.leftSide }>
            <Categories handleSearchCategory={ this.handleSearchCategory } />
          </div>
          <div className={ styles.rightSide }>
            <SearchBar
              handleChange={ this.handleChange }
              handleSearch={ this.handleSearch }
            />
            <SearchResults
              results={ results }
              handleAddToCart={ handleAddToCart }
            />
          </div>
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default Home;
