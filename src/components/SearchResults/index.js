import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';
import ProductCard from '../ProductCard';
import AddItemButton from '../AddItemButton';

class SearchResults extends Component {
  render() {
    const { results, handleAddToCart } = this.props;

    const notFound = (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );

    const found = results.map((product) => (
      <ProductCard
        key={ product.id }
        product={ product }
        handleAddToCart={ handleAddToCart }
      >
        <AddItemButton
          data-testid="product-add-to-cart"
          handleAddToCart={ handleAddToCart }
          product={ product }
        />
      </ProductCard>));

    return (
      <div className={ styles.searchResults }>
        { results.length
          ? found
          : notFound }
      </div>
    );
  }
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default SearchResults;
