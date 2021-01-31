import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends Component {
  renderMessageSearch() {
    return (
      <span
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </span>
    );
  }

  render() {
    const { products } = this.props;

    if (products.length === 0) return this.renderMessageSearch();

    return (
      <div>
        {products.map(
          (product) => <ProductCard key={ product.id } product={ product } />,
        )}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default ProductList;
