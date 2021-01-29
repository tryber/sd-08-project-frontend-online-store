import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

import './productList.css';

class ProductsList extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <section className="product-list">
        {list.map((product) => <ProductCard key={ product.id } card={ product } />)}
      </section>
    );
  }
}

ProductsList.propTypes = {
  list: PropTypes.arrayOf(String).isRequired,
};

export default ProductsList;
