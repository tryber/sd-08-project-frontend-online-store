import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchResults.module.css';

import ProductCard from '../ProductCard';

class SearchResults extends Component {
  render() {
    const { results } = this.props;
    return (
      <div className={ styles.searchResults }>
        { results.map((product, index) => (
          <ProductCard key={ index } product={ product } />)) }
      </div>
    );
  }
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResults;
