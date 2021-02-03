import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductItem from './ProductItem';
import './ProductList.css';

class ProductList extends Component {
  render() {
    const { items } = this.props;
    // console.log(items);
    return (
      <section className="product-list">
        {items.length < 1 ? <p>Nenhum produto foi encontrado.</p>
          : items.map((item) => <ProductItem key={ item.id } item={ item } />) }
      </section>
    );
  }
}

ProductList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
