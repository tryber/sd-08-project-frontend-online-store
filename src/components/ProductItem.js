import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProductItem.css';

class ProductItem extends Component {
  isFreeShipping() {
    const { item: { shipping: { free_shipping: free } } } = this.props;
    return free ? (
      <p className="free-shipping">
        FRETE GRÁTIS
      </p>) : null;
  }

  render() {
    const { item: { title, thumbnail, price } } = this.props;
    return (
      <section className="product" data-testid="product">
        <img src={ thumbnail } alt="Imagem do produto" />
        <p className="product-price">{ `R$ ${price.toFixed(2)}` }</p>
        { this.isFreeShipping() }
        <p className="product-title">{title}</p>
      </section>
    );
  }
}

ProductItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductItem;
